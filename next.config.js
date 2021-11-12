const progressive = require('next-pwa')

module.exports = progressive({
	pwa: {
		dest: 'public'
	}
})
