import React, { Component } from "react";
import { connect } from "react-redux";
import { addNoteItem } from "../redux/note/noteActions";

export class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={(id) => (this.inputRef = id)}></input>
        <button
          onClick={() => {
            this.props.addNoteItem(this.inputRef.value);
            this.inputRef.value = "";
            this.inputRef.focus();
          }}
        >
          Add
        </button>
        <ul>
          {this.props.notes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

// Step 1 - map Redux state to React component properties
// NOTE: In real application are used Redux selectors for this purpose
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

// Step 2 - map Redux dispatch (actions) to React component properties
const mapDispatchToProps = (dispatch) => {
  return {
    addNoteItem: (text) => dispatch(addNoteItem(text)),
  };
};

// Step 3 - connect Redux store (mapXxx) to React component
export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
