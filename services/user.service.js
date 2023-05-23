const config = require("../config/config");

module.exports = class userService {
  static async addAdmin(req) {
    try {
      const uid = req.body.uid;
      const updatedUser = await User.findOneAndUpdate(
        { uid },
        { role: "admin" },
        { new: true }
      ).lean();

      if (!updatedUser) {
        return { success: false, message: "User not found" };
      }

      return {
        success: true,
        message: "User role updated successfully",
        user: updatedUser,
      };
    } catch (error) {
      console.error("Error updating user role:", error);
      return { success: false, message: "Internal server error" };
    }
  }

  static async addUser(req) {
    try {
      const { uid, name, phone_no, email } = req.body;
      const newUser = await User.create({
        uid,
        name,
        phone_no,
        email,
        role: "user", // Set the default role to "user"
      });

      return {
        success: true,
        message: "User added successfully",
        user: newUser,
      };
    } catch (error) {
      console.error("Error adding user:", error);
      return { success: false, message: "Internal server error" };
    }
  }
};
