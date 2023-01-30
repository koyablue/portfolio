export const addIdsToAllData = <TRawData>(rawDataList: TRawData[]): (TRawData & { id: number; })[] => {
  return rawDataList.map((rawData, idx) => (
    { ...rawData, id: idx, }
  ))
}
