import BaseRepository from "@api/BaseRepository";
import { User } from "@db/db-connect";
import { sequelizeErrorHandler } from "@helpers";

class AuthRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    registerUser(data) {
        return this.model.create(data);
    }
}

module.exports = new AuthRepository();
