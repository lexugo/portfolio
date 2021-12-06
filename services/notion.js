import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const database = process.env.NOTION_TASKS_ID

export async function tasks() {
	try {
		const response = await notion.databases.query({
			database_id: database,
			filter: {
				and: [{
					property: 'Status',
					select: {
						does_not_equal: 'Annulée'
					}
				}, {
					property: 'Status',
					select: {
						does_not_equal: 'Complétée'
					}
				}, {
					property: 'Status',
					select: {
						is_not_empty: true
					}
				}]
			}
		});

		return normalized(response.results)
	}
	catch (error) {
		return error
	}
}

const title = ({ properties: { Name: name } }) => name.title[0].text.content
const select = property => ({ properties: { [property]: { select }}}) => select ? select.name : undefined
const number = property => ({ properties: { [property]: { number }}}) => number ?? undefined
function normalized(tasks) {
	const status = select('Status'),
		  priority = select('Priorité'),
		  todoist = number('Todoist')

	console.log(tasks[0])
	return tasks.map(task => ({
		id: task.id,
		todoist: todoist(task),
		// url: task.url,
		title: title(task),
		status: status(task),
		priority: priority(task),
	}))
}

export default notion
