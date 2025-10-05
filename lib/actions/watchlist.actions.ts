"use server";

import { WatchList } from "@/DATABASE/models/watchlist.model";
import { connectToDatabase } from "@/DATABASE/mongoose";

export async function getWatchlistSymbolsByEmail(
  email: string
): Promise<string[]> {
  if (!email) return [];

  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    // Better Auth stores users in the "user" collection
    const user = await db?.collection("user").findOne<{
      _id?: unknown;
      id?: string;
      email?: string;
    }>({ email: email.toLocaleLowerCase() }, { projection: { _id: 1, id: 1, email: 1 } });

    if (!user) return [];

    const userId = (user.id as string) || String(user._id || "");
    if (!userId) return [];

    const items = await WatchList.find({ userId }, { symbol: 1 }).lean();
    return items.map((i) => String(i.symbol));
  } catch (err) {
    console.error("getWatclistSymbolsByEmail error", err);
    return [];
  }
}
