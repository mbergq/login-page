const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  birth: {
    type: Number,
    required: true,
  },
  records: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("artist", artistSchema);
