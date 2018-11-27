import _ from "lodash";

class CountryMapper {
    // this will transform the object
    // to desire output
    map(country) {
        const object = {
            id: country.id,
            name: country.name,
            code: country.sortname,
            status: country.statusText(),
            created_at: country.createdAtDisplay(),
            updated_at: country.updated_at,
        };

        if (country.hasOwnProperty("State")) {
            object.State = country.State;
        }

        return object;
    }

    collection(countries) {
        const self = this;

        return _.map(countries, country => self.map(country));
    }
}

module.exports = new CountryMapper();
