import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Home extends React.PureComponent<any, any> {
  public render() {
    return (
      <div className="home-container">
        <div className="home-logo-container">
          <div className="home-logo">Pri</div>
          <div className="home-logo-desc">Framework for React applications and components.</div>
          <Link className="home-logo-button" to="/project">
            Getting Start
          </Link>
        </div>
      </div>
    );
  }
}
