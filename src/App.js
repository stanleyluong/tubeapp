import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit('React tutorial');
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Container>
        <Box py={5}>
          <SearchBar onFormSubmit={this.handleSubmit} />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
