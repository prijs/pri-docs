import { Button, Divider, Icon, Layout, Menu, Switch } from "antd"
import * as React from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import * as S from "./markdown.style"

import "antd/dist/antd.css"

const SubMenu = Menu.SubMenu
const { Header, Content, Footer, Sider } = Layout

class Props { }

class State { }

@(withRouter as any)
export default class Page extends React.PureComponent<Props & RouteComponentProps<any>, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu theme="dark" selectedKeys={[this.props.location.pathname]} mode="inline">
            <Menu.Item key="/">
              <Link to="/">
                <span>Overview</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/setup">
              <Link to="/setup">
                <span>Setup</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/config">
              <Link to="/config">
                <span>Config</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <S.Content>
              {this.props.children}

              <Divider style={{ marginTop: 50 }}>
                <Link
                  to={`https://github.com/ascoders/pri-docs/blob/master/src/pages${this.props.location.pathname === "/" ? "" : this.props.location.pathname}/index.md`}
                  target="_blank"
                >
                  <Button type="dashed" icon="edit">
                    Edit this page on github.
                  </Button>
                </Link>
              </Divider>
            </S.Content>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Pri ©2018 Created by Pri
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
