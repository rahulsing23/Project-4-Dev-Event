'use server';

import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
import { unstable_cache } from "next/cache";

export const getSimilarEventsBySlug = unstable_cache(
  async (slug: string) => {
    try {
      await connectDB();

      const event = await Event.findOne({ slug });

      if (!event) return [];

      const similarEvents = await Event.find({
        _id: { $ne: event._id },
        tags: { $in: event.tags }
      }).lean();

      return similarEvents;
    } catch {
      return [];
    }
  },
  ["similar-events"], // cache key
  { revalidate: 60 }  // cache for 60 sec
);