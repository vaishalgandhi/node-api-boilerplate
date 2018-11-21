import BaseRepository from '@api/BaseRepository';
import { Country } from '@db/db-connect';

class CountryRepository extends BaseRepository {
    constructor() {
        super(Country);
    }

    getCountryDetailsById(id) {
    	return this.find({
            where: { id },
            include: ["State"],
        });
    }
}

module.exports = new CountryRepository();
