import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";

export interface IAppProps {
  count: number;
  dispatch: Dispatch<any>;
}
class App extends Component<IAppProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render() {
    return (
      <div>
        Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state): Partial<IAppProps> => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
