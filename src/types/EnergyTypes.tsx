export type EnergyType = {
  uf: {
    id: number
    title: string
  } | null
  energyValue: number | null
  energyDistributor: {
    id: number
    title: string
  } | null
}