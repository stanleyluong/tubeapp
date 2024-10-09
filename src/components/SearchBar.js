import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search for Videos..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
