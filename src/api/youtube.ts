import axios from "axios";
import { YouTubeResponse } from "../types/video";

const youtubeClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: process.env.REACT_APP_API_KEY,
  },
});

export const searchVideos = async (searchTerm: string): Promise<YouTubeResponse> => {
  try {
    const { data } = await youtubeClient.get<YouTubeResponse>("search", {
      params: { q: searchTerm },
    });
    return data;
  } catch (error) {
    console.error("Error searching videos:", error);
    throw error;
  }
};

export default youtubeClient;