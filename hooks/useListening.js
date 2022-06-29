import useEndpoint from './useEndpoint'

export default function useListening(defaultValue) {
	const { data, error } = useEndpoint('listening', {
		fallback: defaultValue,
		interval: 60 * 1000
	})

	return data // TODO: Error handling
}
