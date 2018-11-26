import _ from 'lodash';
import BaseRepository from '@api/BaseRepository';
import CountryMapper from "./country.mapper";
import { Country } from '@db/db-connect';
import { transformPromise } from '@helpers';

class CountryRepository extends BaseRepository {
    constructor() {
        super(Country);
    }

    async getCountryDetailsById(id) {
		const [error, collection] = await transformPromise(this.find({
            where: { id },
            include: ["State"],
        }));

        return new Promise(function(resolve, reject) {
			if(error !== null) {
				reject(error);
			}

			resolve(CountryMapper.map(collection));
		});
    }

    async list(queryConfig) {
		const [error, collection] = await transformPromise(this.all(queryConfig));

		return new Promise(function(resolve, reject) {
			if(error !== null) {
				reject(error);
			}

            resolve(CountryMapper.collection(collection));
		});
	}
}

module.exports = new CountryRepository();
