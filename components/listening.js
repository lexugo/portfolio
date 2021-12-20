import Track from 'components/track'

export default function Listening({ title, artist, url, playing }) {
	const header = playing
		? "I'm currently listening to " // Todo: Handle noscript
		: "I was listening to "
	return (
		<div className='music'>
			<h3>{ header } <Track title={title} artist={artist} url={url} /></h3>
		</div>
	)
}
