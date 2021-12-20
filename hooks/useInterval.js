import { useEffect } from 'react'

export default function useInterval(func, delay, inputs) {
	useEffect(() => {
		const interval = setInterval(func, delay)
		return () => clearInterval(interval)
	}, [func, delay, inputs])
}
