export default function status() {
	const status = { status: 'Uncertain', date: new Date() }
	try {
		status.integrations = {
			notion: {
				status: envStatus('NOTION_TOKEN'),
			},
			todist: {
				status: envStatus('TODOIST_CLIENT_ID'),
			}
		}
		status.status = Object.values(status.integrations).every(integration => integration.status == 'Okok')
			? 'Okok'
			: 'Not too well :('
	} catch (error) {
		status.status = 'Not well :('
		if (process.env.NODE_ENV == 'development')
			status.error = error
	}
	finally {
		return status
	}
}

function envStatus(variable) {
	return process.env[variable] ? 'Okok' : `Missing ${variable}`
}
