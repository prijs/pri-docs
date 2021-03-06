import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

@(withRouter as any)
export default class Nav extends React.PureComponent<any, any> {
  public render() {
    const category = this.props.location.pathname === '/' ? null : this.props.location.pathname.split('/')[1];

    return (
      <div className="container">
        <div className="header">
          <div className="header-left">
            <div className="left-menu-trigger">expand</div>
            <Link to="/" className={`header-item-logo ${category === null ? 'active' : ''}`}>
              Pri
            </Link>
            <Link to="/usage/" className={`header-item ${category === 'usage' ? 'active' : ''}`}>
              Usage
            </Link>
            <Link to="/plugin/" className={`header-item ${category === 'plugin' ? 'active' : ''}`}>
              Plugin
            </Link>
            <a href="https://github.com/ascoders/pri" target="_blank" rel="noopener noreferrer" className="header-item">
              View on Github
            </a>
          </div>

          <div className="header-right">
            <input id="doc-search" placeholder="Search documents..." />
          </div>
        </div>
        <div className="body">{this.props.children}</div>
      </div>
    );
  }
}
