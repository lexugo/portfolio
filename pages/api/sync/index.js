import { test } from 'services/notion'

export default async function status(request, response) {
	const tasks = await test()
	response.status(200).json(tasks)
}
