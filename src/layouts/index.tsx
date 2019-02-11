import * as highlight from 'highlight.js';
import { history } from 'pri/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Nav from '../components/nav';

// tslint:disable-next-line:no-var-requires
const javascript = require('highlight.js/lib/languages/javascript');

// tslint:disable-next-line:no-var-requires
const Scroll = require('react-custom-scrollbars').default;

// tslint:disable-next-line:no-var-requires
const docSearch = require('docsearch.js');
import 'docsearch.js/dist/cdn/docsearch.min.css';

import 'highlight.js/styles/github.css';
import './index.css';
import { menuData } from './menu';

highlight.registerLanguage('typescript', javascript);
highlight.registerLanguage('tsx', javascript);

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
} = menuData;

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
    docSearch({
      apiKey: '31acf7207650a89ce529a915dab760f0',
      indexName: 'prijs',
      inputSelector: '#doc-search',
      handleSelected: (input: any, event: any, suggestion: any) => {
        const targetUrl = new URL(suggestion.url);
        this.props.history.push(targetUrl.pathname.replace(/^\/pri-docs/g, ''));
      }
    });

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

    setTimeout(() => {
      this.freshHighlight();
      this.freshHeadLink();
    }, 100);

    history.listen(() => {
      this.freshHighlight();
      this.freshHeadLink();
    });
  }

  public freshHighlight() {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach(block => {
        highlight.highlightBlock(block);
      });
    });
  }

  public freshHeadLink() {
    const hashName = location.hash.substr(1);

    setTimeout(() => {
      document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(block => {
        if (!block.hasAttribute('tagged')) {
          block.setAttribute('tagged', 'true');

          const safeContent = encodeURIComponent(block.innerHTML);

          block.innerHTML =
            `
          <a name="${safeContent}" class="anchor" aria-hidden="true" href="#${safeContent}"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
        ` + block.innerHTML;

          if (safeContent === hashName) {
            setTimeout(() => {
              window.scroll({
                top: (block as any).offsetTop,
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      });
    });
  }

  public render() {
    if (this.props.location.pathname === '/') {
      return <Nav>{this.props.children}</Nav>;
    }

    return (
      <Nav>
        <div className="left-static-box">
          <div className={`left ${this.state.absoluteLeftContainer ? 'fixed' : 'relative'}`}>
            {this.state.absoluteLeftContainer ? <Scroll>{this.renderMenus()}</Scroll> : this.renderMenus()}
          </div>
        </div>
        <div className="right markdown-body">
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
          {group.childs && group.childs.length > 0 && (
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
