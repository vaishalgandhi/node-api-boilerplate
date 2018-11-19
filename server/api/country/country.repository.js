const BaseRepository = require(`${__dirApi}/BaseRepository`);
const { Country } = require(`${__dirDatabase}/db-connect`);

class CountryRepository extends BaseRepository
{
	constructor() {
        super(Country);
    }
}

module.exports = new CountryRepository();
