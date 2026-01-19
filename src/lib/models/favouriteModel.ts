import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

favouriteSchema.index({ userId: 1, movieId: 1 }, { unique: true });

const Favourite = mongoose.models.Favourite || mongoose.model('Favourite', favouriteSchema);

export default Favourite;
