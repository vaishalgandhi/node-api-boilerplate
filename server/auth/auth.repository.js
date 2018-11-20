const BaseRepository = require(`${__dirApi}/BaseRepository`);
const { User } = require(`${__dirDatabase}/db-connect`);
const { sequelizeErrorHandler } = require(`${__dirUtil}/helpers`);

class AuthRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    registerUser(data) {
        return this.model.create(data);
    }
}

module.exports = new AuthRepository();
