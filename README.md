# TubeApp

TubeApp is a YouTube video search application built with React and TypeScript. It allows users to search for videos using the YouTube Data API and displays a list of results. Users can click on a video to watch it directly within the app.

![TubeApp Screenshot](https://via.placeholder.com/800x450.png?text=TubeApp+Screenshot)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [CI/CD](#cicd)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for YouTube videos by entering keywords
- Display a list of video results with thumbnails
- Click on a video to watch it within the app
- Responsive layout built using Material-UI v6
- Modern React with TypeScript for type safety
- Data fetching with React Query for caching and state management

## Demo

Check out the live demo [here](http://stanleyluong.github.io/tubeapp).

## Technologies

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **React Query**: Data fetching and state management
- **Axios**: Promise-based HTTP client for making API requests
- **YouTube Data API v3**: Provides access to YouTube data
- **Material UI v6**: React UI components
- **GitHub Pages**: For hosting the application
- **GitHub Actions**: For CI/CD automation

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/stanleyluong/tubeapp.git
   cd tubeapp
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

To use the YouTube Data API, you need to set up your environment variables:

1. Create a `.env` file in the root directory of your project:

   ```bash
   REACT_APP_API_KEY=your_youtube_api_key
   REACT_APP_API_URL=https://www.googleapis.com/youtube/v3
   ```

   Replace `your_youtube_api_key` with your actual YouTube API key.

2. Save the file and restart your app if it's already running.

## Usage

To run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run TypeScript type-checking:

```bash
npm run typecheck
```

To build the project for production:

```bash
npm run build
```

To deploy manually to GitHub Pages:

```bash
npm run deploy
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- Pushes and pull requests to the `master` branch trigger automated builds
- Type checking and tests run on each push and pull request
- Successfully merged changes to `master` automatically deploy to GitHub Pages

View the workflow configuration in `.github/workflows/deploy.yml`.

### Setting up Secrets for CI/CD

For the GitHub Actions workflow to access your YouTube API key, you need to add it to your repository secrets:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `REACT_APP_API_KEY`: Your YouTube API key
   - `REACT_APP_API_URL`: YouTube API URL (https://www.googleapis.com/youtube/v3)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.