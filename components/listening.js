import useListening from 'hooks/useListening'

export default function Listening({ track }) {
	const { title, artist, url, playing } = useListening(track)

	return (
		<h3 className='music taste'>
			 { playing ? "I'm currently listening to " : "I was listening to " }
			 <span className='track'>
				{ url ? <a href={url} target='_blank' className='title'>{ title }</a> : title }
				{ ' by ' }
				{ artist.url ? <a href={artist.url} target='_blank' className='artist'>{ artist.name }</a> : artist.name }
			 </span>.
		</h3>
	)
}
