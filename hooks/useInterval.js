import { useEffect } from 'react'

export default function useInterval(effect, delay = 1000) {
	useEffect(() => {
		const interval = setInterval(() => effect(), delay)
		return () => clearInterval(interval)
	}, [delay])
}
