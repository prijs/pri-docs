import * as React from 'react';
import Nav from '../components/nav';

export default class Layout extends React.PureComponent {
  public render() {
    return <Nav>{this.props.children}</Nav>;
  }
}
