import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacterList } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacterList();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.isLoading && (
          <h2>Loading...</h2>
        )}
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { getCharacterList }
)(CharacterListView);
