import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const database = process.env.NOTION_TASKS_ID

export async function test() {
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
				}]
			}
		});

		console.log('Successfully queried the database')
		return tasks(response.results)
	}
	catch (error) {
		console.log('Failed to query the database')
		return error
	}
}

const title = ({ properties: { Name: name } }) => name.title[0].text.content
const select = property => ({ properties: { [property]: { select }}}) => select ? select.name : undefined
function tasks(results) {
	const status = select('Status'),
		  priority = select('Priorité')

	return results.map(task => ({
		id: task.id,
		url: task.url,
		title: title(task),
		status: status(task),
		priority: priority(task),
	}))
}
