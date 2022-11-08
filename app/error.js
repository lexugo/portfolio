'use client'

import { useEffect, useMemo } from 'react'
import { useElapsed } from '../hooks/useTime'

export default function Error({ error, reset }) {
	const code = useMemo(() => error.code ?? 400, [error])
	const elapsed = useElapsed(useMemo(() => new Date(), [error]))
	useEffect(() => { if (elapsed > code) reset() }, [elapsed, code, reset])

	const remaining = clamp(0, code - elapsed, code)
	return (
		<div className='error'>
			<header className='code'>
				{ padded(remaining).split('').map(digit => <span>{ digit }</span>) }
			</header>
			<main>
				<header>
					<h1 className='message'>{ error.message }</h1>
					<p className='json'>{ json(error) }</p>
				</header>

				<p>{ Error.toString() }</p>
				<p>{ clamp.toString() }</p>
				<p>{ padded.toString() }</p>
				<p>{ json.toString() }</p>

				<footer>
					<a onClick={reset}>Try again?</a>
					<a href='/'>Go home.</a>
				</footer>
			</main>
		</div>
	)
}

function clamp(min, value, max) {
	return Math.min(Math.max(min, value), max)
}

function padded(number, padding = '000') {
	number = number.toString()
	while (number.length < padding.length)
		number = padding[padding.length -  number.length - 1] + number

	return number
}

function json(object) {
	return JSON.stringify(object, null, 1)
}
