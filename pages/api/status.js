export default function status(request, response) {
	response.status(200).json({
		status: 'Okok',
		date: new Date(),
		notion: {
			status: process.env.NOTION_TOKEN ? 'Okok' : 'Missing token :(',
		}
	})
}
