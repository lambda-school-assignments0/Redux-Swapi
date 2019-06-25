import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  isLoading: state.isLoading,
  error: state.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
