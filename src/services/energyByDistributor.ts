import {collection, doc, getDocs, query, setDoc, where, and} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import {app} from './firebase';

export const saveEnergyByDistributor = async (distributorId: string | number, value: number) => {
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const date = new Date();
  const timestamp = date.getTime().toString();

  // Add a new document in collection "cities"
  await setDoc(doc(db, "energy_by_distributors", timestamp), {
    distributorId: distributorId,
    value: value,
    date: date
  });
}

export const getEnergyValueByDistributor = async (distributorId: string | number): Promise<number|null> => {
  const db = getFirestore(app);
  const energyDistributorsRef = collection(db, "energy_by_distributors");

  const date = new Date();
  const beginDate = (new Date(date.getFullYear(), date.getMonth(), 1));
  const endDate = (new Date(date.getFullYear(), date.getMonth() + 1, 1));

  const q = query(energyDistributorsRef, and(
    where('distributorId', '==', distributorId),
    where('date', '>=', beginDate),
    where('date', '<', endDate)
  ))

  const querySnapshot = await getDocs(q);

  const energyByDistributor: {[value: string]: number} = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if(!energyByDistributor.hasOwnProperty(data.value)) energyByDistributor[data.value] = 0;
    energyByDistributor[data.value]++;
  });

  let mostCommomValue: number|null = null;

  Object.keys(energyByDistributor).forEach((value: string) => {
    if(!mostCommomValue || energyByDistributor[value] > mostCommomValue) mostCommomValue = parseFloat(value);
  })

  return mostCommomValue;
}
