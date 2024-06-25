export type EnergyUfType = {
  id: number
  name: string,
  uf: string
}

export type EnergyType = {
  uf: EnergyUfType | null
  energyValue: number | null
  energyDistributor: {
    id: string|number
    title: string
  } | null
}