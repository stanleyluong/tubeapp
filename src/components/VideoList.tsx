import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";
import { VideoItem as VideoItemType } from "../types/video";

interface VideoListProps {
  videos: VideoItemType[];
  onVideoSelect: (video: VideoItemType) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId || video.etag}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <Grid container spacing={1}>
      {renderedVideos}
    </Grid>
  );
};

export default VideoList;