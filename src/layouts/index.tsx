import * as React from 'react';
import Nav from '../components/nav';

export default (props: React.Props<any>) => {
  return <Nav>{props.children}</Nav>;
};
