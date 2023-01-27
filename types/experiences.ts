export type Experience = ExperienceRawData & {
  id: number
}

export type ExperienceRawData = {
  year: number
  month: number
  title: string
  description: string
}
