import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <Grid container spacing={2} style={{ maxHeight: '550px', overflowY: 'auto' }}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
