import useSWR from 'swr'

async function fetcher(endpoint) {
	const path = `/api/${endpoint}`

	const response = await fetch(path)
	if (!response.ok) {
		const error = new Error(`${response.status}: ${response.statusText}`)

		error.status = response.status
		error.info = await response.json()
		throw error
	}

	return await response.json()
}

export default function useEndpoint(endpoint, { interval, fallback, ...options }) {
	return useSWR(endpoint, fetcher, {
		suspense: true,
		refreshInterval: interval, // syntax candy
		fallbackData: fallback,
		...options
	})
}
