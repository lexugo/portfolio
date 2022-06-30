import useSWR from 'swr'

async function fetcher(endpoint) {
	const path = `/api/${endpoint}`

	const response = await fetch(path)
	if (!response.ok) {
		const error = new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`)
		error.status = response.status
		error.response = response

		throw error
	}

	return await response.json()
}

export default function useEndpoint(endpoint, { interval, fallback, ...config }) {
	const { data } = useSWR(endpoint, fetcher, {
		refreshInterval: interval, // syntax candy
		fallbackData: fallback,
		...config,
		suspense: true // may not change during lifecycle
	})

	return data
}
