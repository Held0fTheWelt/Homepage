import ProjectsData from '@/assets/data/projects/projects.json'

export default {
  getProjects() {
    return ProjectsData.projects
  },
  getProject(id) {
    return ProjectsData.projects[id]
  },
}
