export type MenuItemKey =
  | 'skills'
  | 'projects'
  | 'articles'
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
  articles: { id: 'articles', label: 'Articles' },
  experiences: { id: 'experiences', label: 'Experiences', },
  aboutMe: { id: 'aboutMe', label: 'About Me', },
}
