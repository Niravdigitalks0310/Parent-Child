const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String },
    profile: { type: String },
    gender: { type: String, enum: ["male", "female"], required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    spouse: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    dateOfBirth: { type: Date },
    dateOfDeth: { type: Date },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
