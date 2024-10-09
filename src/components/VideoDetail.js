import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6}>
        <iframe
          frameBorder="0"
          height="400"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Box mt={2}>
        <Paper elevation={6} style={{ padding: '15px' }}>
          <Typography variant="h5">{video.snippet.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2">{video.snippet.description}</Typography>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default VideoDetail;
