const artist = require("../models/testModel");

exports.getData = async (req, res) => {
  try {
    const data = await artist.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
