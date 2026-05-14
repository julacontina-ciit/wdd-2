class User {
    is_active = false;
    email = null;
    password = null;

    constructor(userData) {
        email = userData.email;
    }

    findById(userId) {}

    findOne(data) {
        const email = data.email;
    }

    save() {}

    comparePassword() {}
}
