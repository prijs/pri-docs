import { Button, Divider, Icon, Layout, Menu, Switch } from "antd"
import * as React from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import * as S from "./markdown.style"

import "antd/dist/antd.css"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Header, Content, Footer, Sider } = Layout

class Props { }

class State { }

@(withRouter as any)
export default class Page extends React.PureComponent<Props & RouteComponentProps<any>, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    return (
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <S.Logo>Pri</S.Logo>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px 0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                selectedKeys={[this.props.location.pathname]}
                style={{ height: "100%" }}
              >
                <Menu.Item key="/">
                  <Link to="/">Setup</Link>
                </Menu.Item>
                <Menu.Item key="/config">
                  <Link to="/config">Config</Link>
                </Menu.Item>

                <MenuItemGroup key="/development" title="Development">
                  <Menu.Item key="/development/getting-started">
                    <Link to="/development/getting-started">  Getting Started</Link>
                  </Menu.Item>
                </MenuItemGroup>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <S.Content>
                {this.props.children}

                <Divider style={{ marginTop: 50 }}>
                  <a
                    href={`https://github.com/ascoders/pri-docs/blob/master/src/pages${this.props.location.pathname === "/" ? "" : this.props.location.pathname}/index.md`}
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
        <Footer style={{ textAlign: "center" }}>
          Pri ©2018 Created by Pri
    </Footer>
      </Layout>
    )
  }
}
