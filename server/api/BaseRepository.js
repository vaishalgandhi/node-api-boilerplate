class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    find(query) {
        if (typeof query === "object") {
            // Search by attributes
            return this.model.findOne(query);
        }

        if (typeof query === "number") {
            // Search by id
            return this.model.findById(query);
        }
    }

    all(query = null) {
        if (query != null || query != {}) {
            return this.model.findAll(query);
        }

        return this.model.findAll();
    }

    paginate(query = null) {
        return this.model.findAndCountAll(query);
    }
}

module.exports = BaseRepository;
