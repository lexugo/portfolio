import { LASTFM_USER as user, LASTFM_API_KEY as key } from 'services/secrets'

const root = 'https://ws.audioscrobbler.com/2.0/'

/** My Last.fm username. */
export { user }

/**
 * Get a list of the recent tracks listened to by this user.
 * See the [Official documentation]{@link https://www.last.fm/api/show/user.getRecentTracks}.
 */
export async function getRecentTracks(user, limit = 3) {
	const tracks = await get('user.getrecenttracks', { user, limit, extended: 1 })

	return tracks?.recenttracks?.track.map(track => ({
		id: track.mbid,
		title: track.name.replace(/ *\([^)]*\) */g, ''),
		artist: {
			name: track.artist.name,
			url: track.artist.url,
		},
		playing: !!track['@attr']?.nowplaying,
		url: track.url
	}))
}

async function get(method, params, format = 'json') {
	const query = Object.entries(params).reduce((q, [param, value]) => `${q}&${param}=${value ?? ''}`, '')

	const response = await fetch(
		`${root}?method=${method}&api_key=${key}${query}&format=${format}`,
		{ next: { revalidate: 60 }})

	// Todo: handle errors
	const data = await response.json()

	return data
}
