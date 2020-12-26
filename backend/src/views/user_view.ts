import User from "../models/User";

export default {
    render(user: User) {
        return {
            name: user.name,
            email: user.email,
            coin: user.coin,
            created_at: user.created_at,
        };
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    },
};
