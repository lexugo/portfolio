import useEndpoint from './useEndpoint'

export default function useListening(defaultValue) {
	return useEndpoint('listening', {
		fallback: defaultValue,
		interval: 60 * 1000
	})
}
