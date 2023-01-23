import Symbol from 'components/Symbol'

export default function Schedule() {
	return (
		<main className='schedule layout'>
			<header>
				<h1 className='brand'><a href='/'>Hugo</a></h1>
			</header>
			<nav className='service'>
				<a className='checked' href='/request/massage'><Symbol src='spa'/> Massage therapy</a>
				<a href='/request/photoshoot'><Symbol src='camera'/> Photography</a>
				<a href='/request/playlist'><Symbol src='headphones'/> Music curation</a>
				<a href='/request/software'><Symbol src='code'/> Software engineering</a>
			</nav>
		</main>
	)
}
