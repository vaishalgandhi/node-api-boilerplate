import BaseRepository from "@api/BaseRepository";
import { User } from "@db/db-connect";

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

module.exports = new UserRepository();
