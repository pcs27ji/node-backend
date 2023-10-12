// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Negative calories aren't real.");
//     },
//   },
//   password: String,
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", UserSchema);