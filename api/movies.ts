import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { s, i, plot } = req.query;

  try {
    const { data } = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        ...(s && { s }),
        ...(i && { i }),
        ...(plot && { plot }),
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from OMDb" });
  }
}
