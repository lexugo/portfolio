import getStatus from 'services/status'

export default function status(request, response) {
	response.status(200).json(getStatus() ?? 'Truly unwell')
}
