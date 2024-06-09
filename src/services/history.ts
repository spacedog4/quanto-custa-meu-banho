import AsyncStorage from "@react-native-async-storage/async-storage";
import {HistoricItemGroupedByMonthType, HistoricItemType} from "@type/HistoricTypes";

export const getMonthName = (date: Date) => {
    return date.toLocaleString('pt-BR', { month: 'long' });
}

export const mountHistoricKey = (date: Date) => {
    date = new Date(date)

    const month = getMonthName(date)
    const year = date.getFullYear()
    return `${month}-${year}`
}

const groupByMonth = (historicItens: HistoricItemType[]) => {
    return historicItens.reduce((result, item) => {
        const key = mountHistoricKey(item.date)

        if (!result[key]) result[key] = []

        result[key].push(item);

        return result

    }, {} as Record<string, HistoricItemType[]>)
}

const emptyHistoric = (): HistoricItemGroupedByMonthType => {
    const date = new Date()
    const key = mountHistoricKey(date)
    return {
        [key]: []
    }
}

export const getHistoric = async (): Promise<HistoricItemGroupedByMonthType> => {
    try {
        const v = await AsyncStorage.getItem('historic')

        if (v) {
            return groupByMonth(JSON.parse(v))
        }

        return emptyHistoric()
    } catch (err) {
        console.error(err)

        return emptyHistoric()
    }
}

export const updateHistoric = async (historic: HistoricItemGroupedByMonthType): Promise<void> => {
    try {
        const asyncHistoric = Object.values(historic).flat();
        await AsyncStorage.setItem('historic', JSON.stringify(asyncHistoric));
    } catch (err) {
        console.error(err)
    }
}


