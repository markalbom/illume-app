import React from 'react'

function SearchForm(props) {
  return (
    <div className="search-form">
      <form onSubmit={props.handleSearchSubmit}>
        <label className="form-prompt">
        I want to help the
        </label>
          <input type="text" className="form-entry" name='query' value={props.query} onChange={props.handleInputChange} />
        <label className="form-prompt">
        in
        </label>
        <input type="text" className="form-entry" name='selectedCity' value={props.selectedCity} onChange={props.handleInputChange} />
          <input type="submit" className = "form-submit-button" value="Let's see who we can help" />
      </form>
    </div>
  );
}
export default SearchForm;
