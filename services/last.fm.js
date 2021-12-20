const root = 'https://ws.audioscrobbler.com/2.0/'

/** My Last.fm username. */
export const user = process.env.LASTFM_USER

/**
 * Get a list of the recent tracks listened to by this user.
 * See the [Official documentation]{@link https://www.last.fm/api/show/user.getRecentTracks}.
 */
export async function getRecentTracks(user, limit = 3) {
	const tracks = await get('user.getrecenttracks', { user, limit })

	return tracks?.recenttracks?.track.map(track => ({
		name: track.name,
		artist: track.artist['#text'],
		playing: !!track['@attr']?.nowplaying,
		url: track.url,
	}))
}

async function get(method, params, format = 'json') {
	const key = process.env.LASTFM_API_KEY
	const query = Object.entries(params).reduce((q, [param, value]) => `${q}&${param}=${value ?? ''}`, '')

	const response = await fetch(`${root}?method=${method}&api_key=${key}${query}&format=${format}`)
	// Todo: handle errors

	return await response.json()
}
