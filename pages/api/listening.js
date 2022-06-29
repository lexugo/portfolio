import getListening from 'services/music'

export default async function test(req, res) {
	const track = await getListening()

	res.status(200).json(track) // TODO: Error handling
}
