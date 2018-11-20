import BaseRepository from '@api/BaseRepository';
import { Country } from '@db/db-connect';

class CountryRepository extends BaseRepository {
    constructor() {
        super(Country);
    }
}

module.exports = new CountryRepository();
