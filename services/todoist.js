import { TodoistApi } from '@doist/todoist-api-typescript'

const todoist = new TodoistApi(process.env.TODOIST_TEST_TOKEN)

export async function projects() {
  return await todoist.getProjects()
}
export async function project(name) {
	// Todo: caching
	return (await projects()).find(project => project.name === name)
}

export async function tasks(project) {
	const tasks = await todoist.getTasks()

	if (!project || project === '*')
		return tasks

	const id = project.id ?? project
	return tasks.filter(task => task.projectId === id)
}

export default todoist
