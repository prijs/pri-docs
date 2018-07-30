import { env } from 'pri/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Nav from '../components/nav';

// tslint:disable-next-line:no-var-requires
const Scroll = require('react-custom-scrollbars').default;

// tslint:disable-next-line:no-var-requires
const docSearch = require('docsearch.js');
import 'docsearch.js/dist/cdn/docsearch.min.css';

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

const data: {
  [x: string]: IMenuGroup[];
} = {
  project: [
    {
      title: 'Getting started',
      childs: [
        {
          href: '',
          title: 'Guide'
        },
        {
          href: 'pages/',
          title: 'Pages'
        },
        {
          href: 'page-layout/',
          title: 'Page Layout'
        },
        {
          href: 'config/',
          title: 'Config'
        },
        {
          href: 'markdown-page/',
          title: 'Markdown page'
        },
        {
          href: 'styles/',
          title: 'Styles'
        },
        {
          href: 'test/',
          title: 'Test'
        }
      ]
    },
    {
      title: 'Deploy',
      childs: [
        {
          href: 'deploy-to-github-pages/',
          title: 'Deploy to github pages'
        },
        {
          href: 'deploy-to-backend/',
          title: 'Deploy to backend'
        }
      ]
    },
    {
      title: 'Advance topics',
      childs: [
        {
          href: 'env/',
          title: 'Env'
        },
        {
          href: 'mock-request/',
          title: 'Mock request'
        },
        {
          href: '404-page/',
          title: '404 Page'
        },
        {
          href: 'webui/',
          title: 'WebUI'
        },
        {
          href: 'debug-online/',
          title: 'Debug online'
        },
        {
          href: 'bundle-analyse/',
          title: 'Bundle analyse'
        }
      ]
    },
    {
      title: 'Features',
      childs: [
        {
          href: 'dynamic-import/',
          title: 'Dynamic import'
        },
        {
          href: 'typescript/',
          title: 'Typescript'
        },
        {
          href: 'tslint/',
          title: 'Tslint'
        },
        {
          href: 'import-on-demand/',
          title: 'Import on demand'
        },
        {
          href: 'project-files/',
          title: 'Project files'
        },
        {
          href: 'auto-pick-shared-modules/',
          title: 'Auto pick shared modules'
        },
        {
          href: 'automatic-hmr/',
          title: 'Automatic HMR'
        },
        {
          href: 'automatic-code-splitting/',
          title: 'Automatic code splitting'
        },
        {
          href: 'tree-shaking/',
          title: 'Tree shaking'
        },
        {
          href: 'scope-hoist/',
          title: 'Scope hoist'
        },
        {
          href: 'auto-dlls/',
          title: 'Auto dlls'
        },
        {
          href: 'auto-prefetch/',
          title: 'Auto prefetch'
        }
      ]
    },
    {
      title: 'Plugins',
      childs: [
        {
          href: 'pri-plugin-dob/',
          title: 'pri-plugin-dob'
        },
        {
          href: 'pri-plugin-rematch/',
          title: 'pri-plugin-rematch'
        }
      ]
    }
  ],
  component: [
    {
      title: 'Getting Started',
      childs: [
        {
          href: '',
          title: 'Guide'
        },
        {
          href: 'write-docs/',
          title: 'Write docs'
        }
      ]
    },
    {
      title: 'Deploy',
      childs: [
        {
          href: 'deploy-to-npm/',
          title: 'Deploy to npm'
        }
      ]
    }
  ],
  plugin: [
    {
      title: 'Write Plugins',
      childs: [
        {
          href: '',
          title: 'Setup'
        },
        {
          href: 'plugin-context/',
          title: 'Context'
        },
        {
          href: 'plugin-build/',
          title: 'Build'
        },
        {
          href: 'plugin-commands/',
          title: 'Commands'
        },
        {
          href: 'plugin-project/',
          title: 'Project'
        },
        {
          href: 'plugin-service-worker/',
          title: 'Service worker'
        },
        {
          href: 'plugin-web-ui/',
          title: 'WebUI'
        },
        {
          href: 'plugin-test/',
          title: 'Test'
        }
      ]
    }
  ]
};

function withEndSlash(str: string) {
  if (str === '/') {
    return str;
  }
  if (!str.endsWith('/')) {
    return str + '/';
  }
  return str;
}

@(withRouter as any)
export default class Page extends React.PureComponent<Props & Partial<RouteComponentProps<any>>, State> {
  public static defaultProps = new Props();
  public state = new State();

  private leftDom: HTMLElement = null;
  private rightDom: HTMLElement = null;

  public componentDidMount() {
    if (this.props.location.pathname === '/') {
      return;
    }

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

    docSearch({
      apiKey: '31acf7207650a89ce529a915dab760f0',
      indexName: 'prijs',
      inputSelector: '#doc-search',
      handleSelected: (input: any, event: any, suggestion: any) => {
        const targetUrl = new URL(suggestion.url);
        this.props.history.push(targetUrl.pathname.replace(/^\/pri-docs/g, ''));
      }
    });
  }

  public render() {
    return (
      <Nav>
        <div className="left-static-box">
          <div className={`left ${this.state.absoluteLeftContainer ? 'fixed' : 'relative'}`}>
            {this.state.absoluteLeftContainer ? <Scroll>{this.renderMenus()}</Scroll> : this.renderMenus()}
          </div>
        </div>
        <div className="right">
          {this.props.children}

          <a
            href={`https://github.com/ascoders/pri-docs/blob/master/src/pages${
              withEndSlash(this.props.location.pathname) === '/' ? '' : withEndSlash(this.props.location.pathname)
            }/index.md`}
            className="edit-on-github"
            target="_blank"
          >
            Edit this page on github.
          </a>
        </div>
      </Nav>
    );
  }

  private renderMenus = () => {
    const category = this.props.location.pathname.split('/')[1];
    const currentData = data[category];

    return currentData.map((group, index) => {
      const realHref = '/' + category + '/' + group.href;
      return (
        <div key={index} className="menu-group-container">
          {group.href ? (
            <Link
              to={realHref}
              className={`menu-group-title ${
                realHref === withEndSlash(this.props.location.pathname) ? 'active' : null
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
    const category = this.props.location.pathname.split('/')[1];

    return menuItems.map((menuItem, index) => {
      const realHref = '/' + category + '/' + menuItem.href;
      return (
        <Link
          key={index}
          className={`menu-item ${realHref === withEndSlash(this.props.location.pathname) ? 'active' : null}`}
          to={realHref}
        >
          {menuItem.title}
        </Link>
      );
    });
  };
}
