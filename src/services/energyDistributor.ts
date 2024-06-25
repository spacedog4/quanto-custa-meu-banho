import {collection, getDocs, query, where, and} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import {app} from './firebase';

export type EnergyDistributorType = {
  id: string;
  name: string;
  name_clean: string;
  uf: string;
};

export const getEnergyDistributorsByUF = async (uf: string|null) => {
  const db = getFirestore(app);
  const energyDistributorsRef = collection(db, "energy_distributors");

  let q;

  if (uf) {
    q = query(energyDistributorsRef, where('uf', '==', uf))
  } else {
    q = query(energyDistributorsRef)
  }

  const querySnapshot = await getDocs(q);
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