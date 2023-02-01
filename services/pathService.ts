import pathManager from 'path-kanri'

const { getPath } = pathManager({
  top: '/',
  projects: '/projects',
  project: '/projects/{projectId}'
})

export { getPath }
