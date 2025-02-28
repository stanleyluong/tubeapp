import React, { useState, useEffect } from "react";
import { Grid, Box, Container, Typography, Alert, AlertTitle } from "@mui/material";
import { useQuery } from "react-query";
import { searchVideos } from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import { VideoItem } from "./types/video";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("React tutorial");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const { 
    data, 
    isLoading, 
    error, 
    refetch 
  } = useQuery(
    ["videos", searchTerm],
    () => searchVideos(searchTerm),
    {
      enabled: !!searchTerm,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        if (data.items.length > 0 && !selectedVideo) {
          setSelectedVideo(data.items[0]);
        }
      }
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleSubmit = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setSelectedVideo(null);
  };

  const onVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const renderError = () => {
    if (error) {
      return (
        <Box my={3}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An error occurred while fetching videos. Please try again later.
          </Alert>
        </Box>
      );
    }
    return null;
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Box mb={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            TubeApp
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Search and watch YouTube videos
          </Typography>
        </Box>
        <SearchBar onFormSubmit={handleSubmit} />
        {renderError()}
        <Box my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={12} md={4}>
              {isLoading ? (
                <Typography>Loading videos...</Typography>
              ) : (
                data && <VideoList videos={data.items} onVideoSelect={onVideoSelect} />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default App;