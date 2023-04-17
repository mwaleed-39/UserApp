const mongooose = require("mongoose");
const Schema = mongooose.Schema;
const otpschema = new mongooose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    Code: {
      type: String,
      required: true,
    },
    ExpiresIn: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongooose.model("otp", otpschema);