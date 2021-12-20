export default function Track({ artist, title, url }) {
	const display = `${artist} · ${title}`

	if (!url)
		return <span className='track'>{ display }</span>
	return <a href={url} target='_blank' className='track'>{ display }</a>
}
