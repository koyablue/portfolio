export type MenuItemKey =
  | 'skills'
  | 'projects'
  | 'experiences'
  | 'aboutMe'

export type MenuIdAndLabel = {
  [key in MenuItemKey]: {
    id: string
    label: string
  }
}

export const menuIdAndLabel: MenuIdAndLabel= {
  skills: { id: 'skills', label: 'Skills', },
  projects: { id: 'projects', label: 'Projects', },
  experiences: { id: 'experiences', label: 'Experiences', },
  aboutMe: { id: 'aboutMe', label: 'About Me', },
}
