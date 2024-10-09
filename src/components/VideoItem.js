import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        onClick={() => onVideoSelect(video)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <img
          style={{ marginRight: "20px", width: "120px" }}
          alt={video.snippet.title}
          src={video.snippet.thumbnails.default.url}
        />
        <Typography variant="subtitle1">
          <strong>{video.snippet.title}</strong>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
