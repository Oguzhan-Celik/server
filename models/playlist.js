const mongoose = require("mongoose");
const Joi = require("joi");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: ObjectId, ref: "user", required: true },
  desc: { type: String },
  songs: { type: Array, default: [] },
  img: { type: String },
});

const validate = (playlist) => {
  const schema = Joi.obJect({
    name: Joi.string().required(),
    user: Joi.string().required(),
    desc: Joi.string().allow(""),
    songs: Joi.array().items(Joi.string()),
    img: Joi.string().allow(""),
  });
  return schema.validate(playlist);
};

const Playlist = mongoose.model("playlist", playlistsSchema);

module.exports = { Playlist, validate };
