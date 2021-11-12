const progressive = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = progressive({
	pwa: {
		dest: 'public',
		register: true,
		disable: process.env.NODE_ENV === 'development',
		runtimeCaching
	}
})
