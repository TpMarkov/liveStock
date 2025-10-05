import { Schema, model, models, type Document, type Model } from "mongoose";
// Create new model in mongoDB

export interface WatchlistItem extends Document {
  userId: string;
  symbol: string;
  company: string;
  addedAt: Date;
}

const WatchlistSchema = new Schema<WatchlistItem>(
  {
    userId: { type: String, required: true, index: true },
    symbol: { type: String, required: true, uppercase: true, trim: true },
    company: { type: String, require: true, trim: true },
    addedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

export const WatchList: Model<WatchlistItem> =
  (models?.WatchList as Model<WatchlistItem>) ||
  model<WatchlistItem>("Watchlist", WatchlistSchema);
