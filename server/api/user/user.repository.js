const BaseRepository = require(`${__dirApi}/BaseRepository`);
const { User } = require(`${__dirDatabase}/db-connect`);

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

module.exports = new UserRepository();
