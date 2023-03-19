import React from 'react';

interface SearchBarState {
  searchValue: string;
}

class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  state: SearchBarState = {
    searchValue: '',
  };

  componentDidMount() {
    const storedSearchValue = localStorage.getItem('searchValue');
    if (storedSearchValue) {
      this.setState({ searchValue: storedSearchValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
    <div className='content center'>
        <input
          className="search-input input-search"
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleInputChange}
        />
    </div>
    );
  }
}

export default SearchBar;