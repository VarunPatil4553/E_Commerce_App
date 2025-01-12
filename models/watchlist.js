const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  Name: { type: String, required: [true, "Name cannot be empty"] },
  category: { type: String, required: [true, "Category cannot be empty"] },
  SavedBy: { type: Schema.Types.ObjectId, ref: "User" },
  Status: { type: String },
});

const saveItem = mongoose.model("watchlist", saveSchema);

module.exports = saveItem;
