import {collection, getDocs} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import {app} from './firebase';

export type EnergyDistributorType = {
  id: string;
  name: string;
  name_clean: string;
  uf: string;
};

export const getEnergyDistributors = async () => {
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "energy_distributors"));

  const energyDistributors: EnergyDistributorType[] = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();

    energyDistributors.push({
      id: doc.id,
      name: data.name,
      name_clean: data.name_clean,
      uf: data.uf
    });
  });

  return energyDistributors;
}