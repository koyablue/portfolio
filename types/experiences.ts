export type Experience = ExperienceRawData & {
  id: number
}

export type ExperienceRawData = {
  fromYear: number
  fromMonth: number
  toYear?: number
  toMonth?: number
  title: string
  description: string
  techStack: string[]
}
