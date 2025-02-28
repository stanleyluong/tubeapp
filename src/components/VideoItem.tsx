import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { VideoItem as VideoItemType } from "../types/video";

interface VideoItemProps {
  video: VideoItemType;
  onVideoSelect: (video: VideoItemType) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper 
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mb: 1,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)"
          }
        }}
        onClick={() => onVideoSelect(video)}
      >
        <Box 
          component="img"
          sx={{
            width: 120,
            height: 90,
            objectFit: "cover"
          }}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <Box sx={{ p: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {video.snippet.channelTitle}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default VideoItem;