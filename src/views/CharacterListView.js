import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacterList } from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getCharacterList();
  }

  // render() {
  //   console.log('views/CharacterListView.js: render')
  //   if (this.props.isLoading === undefined || this.props.isLoading) {
  //     return (
  //       <div className="CharactersList_loading">
  //         <h2>Loading...</h2>
  //       </div>
  //     )
  //   }
  //   return (
  //     <div className="CharactersList_wrapper">
  //       <CharacterList characters={this.props.characters} />
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.isLoading && (
          <h2>Loading...</h2>
        )}
        {this.props.characters && (
          <CharacterList characters={this.props.characters} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  isLoading: state.isLoading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getCharacterList }
)(CharacterListView);
