import { user, getRecentTracks } from 'services/last.fm'

/** Get the last track I listened to. */
export default async function listening() {
	const tracks = await getRecentTracks(user)
	if (!tracks) throw new Error('Failed to fetch recent tracks')

	const playing = tracks.find(track => track.playing)

	return playing ?? tracks[0]
}
