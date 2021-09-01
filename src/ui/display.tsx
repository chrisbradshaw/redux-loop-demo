import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

interface Props {
  loading: boolean;
  items: object[];
  subscribe: () => void;
  unsubscribe: () => void;
}

export class DisplayView extends React.Component<Props> {
  componentDidMount() {
    this.props.subscribe();
  }

  componentWillUnmount() {
    this.props.unsubscribe();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h4>Data</h4>
        <code>
          <pre>{JSON.stringify(this.props.items, null, 2)}</pre>
        </code>
      </div>
    );
  }
}

export const Display = connect(
  (state: any) => ({ items: state.items, loading: state.loading }),
  { subscribe: actions.subscribeAction, unsubscribe: actions.unsubscribeAction }
)(DisplayView);
