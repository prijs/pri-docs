import { Button, Divider, Icon, Layout, Menu, Switch, Tooltip } from 'antd';
import { env } from 'pri/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import * as S from './markdown.style';

import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;

class Props {}

class State {}

@(withRouter as any)
export default class Page extends React.PureComponent<Props & Partial<RouteComponentProps<any>>, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const menuKeyPrefix = '/pri-docs';
    const selectedKeys = (menuKeyPrefix + this.props.location.pathname).replace(/\/$/g, '');

    return (
      <Layout>
        <Header>
          <Menu mode="horizontal">
            <S.Logo>Pri</S.Logo>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px 0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu mode="inline" selectedKeys={[selectedKeys]}>
                <Menu.Item key={`${menuKeyPrefix}`}>
                  <Link to="/">Setup</Link>
                </Menu.Item>
                <Menu.Item key={`${menuKeyPrefix}/pages-are-routes`}>
                  <Link to="/pages-are-routes">Pages are routes</Link>
                </Menu.Item>
                <Menu.Item key={`${menuKeyPrefix}/layout-support`}>
                  <Link to="/layout-support">Layout support</Link>
                </Menu.Item>
                <Menu.Item key={`${menuKeyPrefix}/config`}>
                  <Link to="/config">Config</Link>
                </Menu.Item>

                <MenuItemGroup key={`${menuKeyPrefix}/features`} title="Features">
                  <Menu.Item key={`${menuKeyPrefix}/features/markdown-support`}>
                    <Link to="/features/markdown-support">Markdown support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/scss-less-css`}>
                    <Link to="/features/scss-less-css">Scss/Less/Css support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/page-not-found`}>
                    <Link to="/features/page-not-found">Page not found</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/built-in-data-stream`}>
                    <Link to="/features/built-in-data-stream">Built-in data stream</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/mock`}>
                    <Link to="/features/mock">Mock</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/environment-variable`}>
                    <Link to="/features/environment-variable">Environment variable</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/deploy-to-github-pages`}>
                    <Link to="/features/deploy-to-github-pages">Deploy to github pages</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/project-dashboard`}>
                    <Link to="/features/project-dashboard">Project Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/dynamic-import`}>
                    <Link to="/features/dynamic-import">Dynamic import</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/test-and-code-coverage`}>
                    <Link to="/features/test-and-code-coverage">Test and code coverage</Link>
                  </Menu.Item>
                </MenuItemGroup>

                <MenuItemGroup
                  key={`${menuKeyPrefix}/automatic-optimization`}
                  title={
                    <span>
                      Automatic optimization&nbsp;<Tooltip title="You do not need extra code configuration,   these optimizations are done automatically.">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  }
                >
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/typescript-support`}>
                    <Link to="/automatic-optimization/typescript-support">Typescript support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/tslint-support`}>
                    <Link to="/automatic-optimization/tslint-support">Tslint support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/import-on-demand`}>
                    <Link to="/automatic-optimization/import-on-demand">Import on demand</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/auto-create-project-files`}>
                    <Link to="/automatic-optimization/auto-create-project-files">Auto create project files</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/auto-pick-shared-modules`}>
                    <Link to="/automatic-optimization/auto-pick-shared-modules">Auto pick shared modules</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/automatic-hmr`}>
                    <Link to="/automatic-optimization/automatic-hmr">Automatic HMR</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/automatic-code-splitting`}>
                    <Link to="/automatic-optimization/automatic-code-splitting">Automatic code splitting</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/tree-shaking`}>
                    <Link to="/automatic-optimization/tree-shaking">Tree shaking</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/scope-hoist`}>
                    <Link to="/automatic-optimization/scope-hoist">Scope hoist</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/auto-dlls`}>
                    <Link to="/automatic-optimization/auto-dlls">Auto dlls</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/automatic-optimization/auto-prefetch`}>
                    <Link to="/automatic-optimization/auto-prefetch">Auto prefetch</Link>
                  </Menu.Item>
                </MenuItemGroup>

                <MenuItemGroup key={`${menuKeyPrefix}/plugins`} title="Plugins">
                  <Menu.Item key={`${menuKeyPrefix}/plugins/pri-plugin-dob`}>
                    <Link to="/plugins/pri-plugin-dob">pri-plugin-dob</Link>
                  </Menu.Item>
                </MenuItemGroup>

                <MenuItemGroup key={`${menuKeyPrefix}/development`} title="Development">
                  <Menu.Item key={`${menuKeyPrefix}/development/write-a-plugin`}>
                    <Link to="/development/write-a-plugin">Write a plugin</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/context`}>
                    <Link to="/development/context">Context</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/build`}>
                    <Link to="/development/build">Build</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/commands`}>
                    <Link to="/development/commands">Commands</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/project`}>
                    <Link to="/development/project">Project</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/service-worker`}>
                    <Link to="/development/service-worker">Service worker</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/dev-service`}>
                    <Link to="/development/dev-service">Dev Service</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/web-ui`}>
                    <Link to="/development/web-ui">WebUI</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/development/test`}>
                    <Link to="/development/test">Test</Link>
                  </Menu.Item>
                </MenuItemGroup>
              </Menu>
            </Sider>

            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <S.Content>
                {this.props.children}

                <Divider style={{ marginTop: 50 }}>
                  <a
                    href={`https://github.com/ascoders/pri-docs/blob/master/src/pages${
                      this.props.location.pathname === '/' ? '' : this.props.location.pathname
                    }/index.md`}
                    target="_blank"
                  >
                    <Button type="dashed" icon="edit">
                      Edit this page on github.
                    </Button>
                  </a>
                </Divider>
              </S.Content>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Pri ©2018 Created by Pri</Footer>;
      </Layout>
    );
  }
}
