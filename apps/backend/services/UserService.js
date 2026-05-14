import bcrypt from "bcrypt";
import User from "../models/User.js";

const userService = {
    getUserDetails: async (userId) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found.");
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user: ${error.message}`);
        }
    },

    createUser: async (userData) => {
        try {
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                throw new Error("User with this email already exists.");
            }
            const newUser = new User(userData);
            await newUser.save;
            const { password, ...userWithoutPassword } = newUser.toObject();
            return userWithoutPassword;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    },

    updateUser: async (userId, updateData) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found.");
            }
            Object.assign(user, updateData);
            await user.save();
            const { password, ...userWithoutPassword } = user.toObject();
            return userWithoutPassword;
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    },

    deleteUser: async () => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found.");
            }
            user.is_active = false;
            await user.save();
            return true;
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    },

    changePassword: async (userId, currentPassword, newPassword) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found.");
            }
            const isMatch = await user.comparePassword(currentPassword);
            if (!isMatch) {
                throw new Error("Current password is incorrect.");
            }
            await user.save();
            return true;
        } catch (error) {
            throw new Error(`Error changing password: ${error.message}`);
        }
    },
};

export default userService;
