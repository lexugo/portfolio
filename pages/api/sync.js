import { tasks as getNotionTasks } from 'services/notion'
import { tasks as getTodoistTasks, project as getTodoistProject } from 'services/todoist'

export default async function sync(request, response) {
	const notionTasks = await getNotionTasks()
	const todoistTasks = await getTodoistTasks()

	response.status(200).json({
		status: 'okok',
		count: notionTasks.length + todoistTasks.length,
		notion: notionTasks,
		todoist: todoistTasks
	})
}
