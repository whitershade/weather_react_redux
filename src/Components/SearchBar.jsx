import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form``;

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.searchOnChange = this.searchOnChange.bind(this);
    this.formOnSubmit = this.formOnSubmit.bind(this);

    this.state = {
      searchText: 'Odessa',
    };
  }

  searchOnChange({ target: { value: searchText } }) {
    this.setState({
      searchText,
    });
  }

  formOnSubmit(event) {
    event.preventDefault();

    this.props.loadWeather(this.state.searchText);
  }

  render() {
    const { formOnSubmit, searchOnChange, state: { searchText } } = this;

    return (
      <StyledForm onSubmit={formOnSubmit}>
        <input value={searchText} onChange={searchOnChange} />
        <button>Send</button>
      </StyledForm>
    );
  }
}

SearchBar.propTypes = {
  loadWeather: PropTypes.func.isRequired,
};