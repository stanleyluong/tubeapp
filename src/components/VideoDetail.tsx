import React from "react";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import { VideoItem } from "../types/video";

interface VideoDetailProps {
  video: VideoItem | null;
}

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  if (!video) {
    return (
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: 400 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={3} sx={{ mb: 2 }}>
        <Box 
          sx={{ 
            position: "relative", 
            paddingTop: "56.25%", /* 16:9 Aspect Ratio */
            width: "100%" 
          }}
        >
          <Box
            component="iframe"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
            src={videoSrc}
            title="Video player"
            allowFullScreen
          />
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          {video.snippet.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="body1">
          {video.snippet.description}
        </Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;