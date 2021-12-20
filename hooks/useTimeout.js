import { useEffect } from 'react'

export default function useTimeout(func, delay, inputs) {
	useEffect(() => {
		const timeout = setTimeout(func, delay)
		return () => clearTimeout(timeout)
	}, [func, delay, inputs])
}
