import propTypes from "prop-types";
import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return (
      <p>
        We've searched the entirity of an ever expanding space and found 0
        results!
      </p>
    );
  } else {
    return (
      <div className="search-results">
        {results.map((result, index) => {
          return (
            <img
              src={result}
              alt="spaceImage"
              className="search-results__image"
              key={index}
            />
          );
        })}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: propTypes.arrayOf(propTypes.string),
};

export default SearchResults;
