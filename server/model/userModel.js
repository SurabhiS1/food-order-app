const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      id: {
        type: String,
        unique: true,
      }
    },
    {
      timestamps: true,
    }
  );


module.exports = mongoose.model("User", userSchema);