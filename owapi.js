const fetch = require('node-fetch');

async function getSummary(battletag) {

	try {
		const response = await fetch(`https://overfast-api.tekrop.fr/players/${battletag}/summary`);
		const data = await response.json();
		return { data, response };
	}
	catch (error) {
		console.log(`Error: ${error}`);
	}

}


module.exports = {
	getSummary,
};