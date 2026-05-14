import userService from "../services/UserService";

const userController = {
    getUserDetails: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.getUserDetails(userId);
            res.status(200).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const userData = req.body;
            const user = await userService.createUser(userData);
            res.status(201).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const newUserData = req.body;
            const user = await userService.updateUser(userId, userData);
            res.status(201).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.updateUser(userId);
            res.status(201).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    changePassword: async (req, res) => {
        try {
            const userId = req.params.id;
            const passwords = req.body;
            const currentPassword = passwords.currentPassword;
            const newPassword = passwords.newPassword;
            const user = await userService.changePassword(
                userId,
                currentPassword,
                newPassword,
            );
            res.status(201).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
