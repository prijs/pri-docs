import { Button, Divider, Icon, Layout, Menu, Switch } from "antd"
import { env } from "pri/client"
import * as React from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import * as S from "./markdown.style"

import "antd/dist/antd.css"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Header, Content, Footer, Sider } = Layout

class Props {}

class State {}

@(withRouter as any)
export default class Page extends React.PureComponent<Props & Partial<RouteComponentProps<any>>, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    const menuKeyPrefix = "/pri-docs"
    const selectedKeys = (menuKeyPrefix + this.props.location.pathname).replace(/\/$/g, "")

    return (
      <Layout>
        <Header>
          <Menu mode="horizontal">
            <S.Logo>Pri</S.Logo>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px 0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu mode="inline" selectedKeys={[selectedKeys]} style={{ height: "100%" }}>
                <Menu.Item key={`${menuKeyPrefix}`}>
                  <Link to="/">Setup</Link>
                </Menu.Item>
                <Menu.Item key={`${menuKeyPrefix}/config`}>
                  <Link to="/config">Config</Link>
                </Menu.Item>

                <MenuItemGroup key={`${menuKeyPrefix}/usage`} title="Usage">
                  <Menu.Item key={`${menuKeyPrefix}/usage/pages-are-routes`}>
                    <Link to="/usage/pages-are-routes">Pages are routes</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/markdown-support`}>
                    <Link to="/usage/markdown-support">Markdown support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/scss-less-css`}>
                    <Link to="/usage/scss-less-css">Scss/Less/Css support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/layout-support`}>
                    <Link to="/usage/layout-support">Layout support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/page-not-found`}>
                    <Link to="/usage/page-not-found">Page not found</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/built-in-data-stream`}>
                    <Link to="/usage/built-in-data-stream">Built-in data stream</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/environment-variable`}>
                    <Link to="/usage/environment-variable">Environment variable</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/usage/deploy-to-github-pages`}>
                    <Link to="/usage/deploy-to-github-pages">Deploy to github pages</Link>
                  </Menu.Item>
                </MenuItemGroup>

                <MenuItemGroup key={`${menuKeyPrefix}/features`} title="Features">
                  <Menu.Item key={`${menuKeyPrefix}/features/project-dashboard`}>
                    <Link to="/features/project-dashboard">Project Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/typescript-support`}>
                    <Link to="/features/typescript-support">Typescript support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/tslint-support`}>
                    <Link to="/features/tslint-support">Tslint support</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/dynamic-import`}>
                    <Link to="/features/dynamic-import">Dynamic import</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/automatic-hmr`}>
                    <Link to="/features/automatic-hmr">Automatic HMR</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/automatic-code-splitting`}>
                    <Link to="/features/automatic-code-splitting">Automatic code splitting</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/import-on-demand`}>
                    <Link to="/features/import-on-demand">Import on demand</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/auto-create-project-files`}>
                    <Link to="/features/auto-create-project-files">Auto create project files</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/auto-pick-shared-modules`}>
                    <Link to="/features/auto-pick-shared-modules">Auto pick shared modules</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/tree-shaking`}>
                    <Link to="/features/tree-shaking">Tree shaking</Link>
                  </Menu.Item>
                  <Menu.Item key={`${menuKeyPrefix}/features/scope-hoist`}>
                    <Link to="/features/scope-hoist">Scope hoist</Link>
                  </Menu.Item>
                </MenuItemGroup>

                <MenuItemGroup key={`${menuKeyPrefix}/development`} title="Development" />
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <S.Content>
                {this.props.children}

                <Divider style={{ marginTop: 50 }}>
                  <a
                    href={`https://github.com/ascoders/pri-docs/blob/master/src/pages${
                      this.props.location.pathname === "/" ? "" : this.props.location.pathname
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
        <Footer style={{ textAlign: "center" }}>Pri ©2018 Created by Pri</Footer>
      </Layout>
    )
  }
}
