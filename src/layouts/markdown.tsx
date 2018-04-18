import { env } from 'pri/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import * as S from './markdown.style';

const Scroll = require('react-custom-scrollbars').default;

import './markdown.css';

class Props {}

class State {
  public absoluteLeftContainer = false;
}

interface IMenuGroup {
  title: string;
  href?: string;
  childs?: IMenuItem[];
}

interface IMenuItem {
  href: string;
  title: string;
}

const data: IMenuGroup[] = [
  {
    title: 'Getting started',
    childs: [
      {
        href: '/',
        title: 'Guide'
      },
      {
        href: '/pages',
        title: 'Pages'
      },
      {
        href: '/page-layout',
        title: 'Page Layout'
      },
      {
        href: '/config',
        title: 'Config'
      },
      {
        href: '/markdown-page',
        title: 'Markdown page'
      },
      {
        href: '/styles',
        title: 'Styles'
      },
      {
        href: '/test',
        title: 'Test'
      }
    ]
  },
  {
    title: 'Deploy',
    childs: [
      {
        href: '/deploy-to-github-pages',
        title: 'Deploy to github pages'
      }
    ]
  },
  {
    title: 'Advance topics',
    childs: [
      {
        href: '/env',
        title: 'Env'
      },
      {
        href: '/mock-request',
        title: 'Mock request'
      },
      {
        href: '/404-page',
        title: '404 Page'
      },
      {
        href: '/webui',
        title: 'WebUI'
      }
    ]
  },
  {
    title: 'Features',
    childs: [
      {
        href: '/dynamic-import',
        title: 'Dynamic import'
      },
      {
        href: '/typescript',
        title: 'Typescript'
      },
      {
        href: '/tslint',
        title: 'Tslint'
      },
      {
        href: '/import-on-demand',
        title: 'Import on demand'
      },
      {
        href: '/project-files',
        title: 'Project files'
      },
      {
        href: '/auto-pick-shared-modules',
        title: 'Auto pick shared modules'
      },
      {
        href: '/automatic-hmr',
        title: 'Automatic HMR'
      },
      {
        href: '/automatic-code-splitting',
        title: 'Automatic code splitting'
      },
      {
        href: '/tree-shaking',
        title: 'Tree shaking'
      },
      {
        href: '/scope-hoist',
        title: 'Scope hoist'
      },
      {
        href: '/auto-dlls',
        title: 'Auto dlls'
      },
      {
        href: '/auto-prefetch',
        title: 'Auto prefetch'
      }
    ]
  },
  {
    title: 'Plugins',
    childs: [
      {
        href: '/pri-plugin-dob',
        title: 'pri-plugin-dob'
      }
    ]
  },
  {
    title: 'Write Plugins',
    childs: [
      {
        href: '/plugin-setup',
        title: 'Setup'
      },
      {
        href: '/plugin-context',
        title: 'Context'
      },
      {
        href: '/plugin-build',
        title: 'Build'
      },
      {
        href: '/plugin-commands',
        title: 'Commands'
      },
      {
        href: '/plugin-project',
        title: 'Project'
      },
      {
        href: '/plugin-service-worker',
        title: 'Service worker'
      },
      {
        href: '/plugin-web-ui',
        title: 'WebUI'
      },
      {
        href: '/plugin-test',
        title: 'Test'
      }
    ]
  }
];

function withoutEndSlash(str: string) {
  if (str === '/') {
    return str;
  }
  return str.replace(/\/$/g, '');
}

@(withRouter as any)
export default class Page extends React.PureComponent<Props & Partial<RouteComponentProps<any>>, State> {
  public static defaultProps = new Props();
  public state = new State();

  private leftDom: HTMLElement = null;
  private rightDom: HTMLElement = null;

  public componentDidMount() {
    const selfDom = ReactDOM.findDOMNode(this) as HTMLElement;
    this.leftDom = selfDom.querySelector('.left');
    this.rightDom = selfDom.querySelector('.right');

    document.onscroll = event => {
      if (window.scrollY > 50 && this.rightDom.offsetHeight > this.leftDom.offsetHeight) {
        this.setState({ absoluteLeftContainer: true });
      } else {
        this.setState({ absoluteLeftContainer: false });
      }
    };
  }

  public render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header-item-logo">Pri</div>
          <a href="https://github.com/ascoders/pri" target="_blank" className="header-item">
            View on Github
          </a>
        </div>
        <div className="body">
          <div className="left-static-box">
            <div className={`left ${this.state.absoluteLeftContainer ? 'fixed' : 'relative'}`}>
              {this.state.absoluteLeftContainer ? <Scroll>{this.renderMenus()}</Scroll> : this.renderMenus()}
            </div>
          </div>
          <div className="right">
            {this.props.children}

            <a
              href={`https://github.com/ascoders/pri-docs/blob/master/src/pages${
                withoutEndSlash(this.props.location.pathname) === '/'
                  ? ''
                  : withoutEndSlash(this.props.location.pathname)
              }/index.md`}
              className="edit-on-github"
              target="_blank"
            >
              <button type="dashed">Edit this page on github.</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  private renderMenus = () => {
    return data.map((group, index) => {
      return (
        <div key={index} className="menu-group-container">
          {group.href ? (
            <Link
              to={group.href}
              className={`menu-group-title ${
                group.href === withoutEndSlash(this.props.location.pathname) ? 'active' : null
              }`}
            >
              {group.title}
            </Link>
          ) : (
            <div className="menu-group-title">{group.title}</div>
          )}
          {group.childs &&
            group.childs.length > 0 && (
              <div className="menu-group-child-container">{this.renderMenuChilds(group.childs)}</div>
            )}
        </div>
      );
    });
  };

  private renderMenuChilds = (menuItems: IMenuItem[]) => {
    return menuItems.map((menuItem, index) => {
      return (
        <Link
          key={index}
          className={`menu-item ${menuItem.href === withoutEndSlash(this.props.location.pathname) ? 'active' : null}`}
          to={menuItem.href}
        >
          {menuItem.title}
        </Link>
      );
    });
  };
}
