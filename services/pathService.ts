import pathManager from 'path-kanri'

const { getPath } = pathManager({
  projects: '/projects',
  project: '/projects/{projectId}'
})

export { getPath }
