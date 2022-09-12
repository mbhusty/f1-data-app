import React, { FC, useState } from "react";
import { Breadcrumb, Layout, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import "./App.css";

import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import StatisticCard from "./components/StatisticCard/StatisticCard";

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Content, Footer, Sider } = Layout;

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6")]),
    getItem("Option 2", "2", <DesktopOutlined />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Space
              direction="horizontal"
              size="middle"
              wrap={true}
              style={{ display: "flex" }}
            >
              <StatisticCard title="Seasons" />
              <StatisticCard title="Races" loading={true} />
              <StatisticCard title="Champion Drivers" />
              <StatisticCard title="Teams" />
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          mbhusty ©2022 Created with ❤️
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
