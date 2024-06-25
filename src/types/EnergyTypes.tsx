export type EnergyType = {
  uf: {
    id: string|number
    title: string
  } | null
  energyValue: number | null
  energyDistributor: {
    id: string|number
    title: string
  } | null
}