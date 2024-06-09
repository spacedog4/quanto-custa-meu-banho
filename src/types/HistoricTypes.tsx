import {ShowerType} from "./ShowerTypes";
import {EnergyType} from "./EnergyTypes";

export type HistoricItemType = {
  value: number
  date: Date,
  shower: ShowerType,
  energy: EnergyType
}

export type HistoricItemGroupedByMonthType = {
  [key: string]: HistoricItemType[];
}
