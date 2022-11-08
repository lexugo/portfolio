import { useState } from 'react'
import useInterval from './useInterval'

export default function useTime(precision = 1000) {
	const [time, setTime] = useState(() => new Date())
	useInterval(() => setTime(new Date()), precision)

	return time
}

export function useElapsed(since, precision = 1000) {
	return Math.floor((useTime(precision) - since) / precision)
}
