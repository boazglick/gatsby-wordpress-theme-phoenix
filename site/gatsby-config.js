require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-wordpress-theme-phoenix",
		options: {
			wordPressUrl: 'https://hanemala.ussl.info',
            frontendUrl: 'https://hanemala.co.il'
		}
	} ]
};
