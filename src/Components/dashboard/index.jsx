"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Navbar from "../navbar";
import FeesCreation from "../fees-creation";
import { MdDashboard } from "react-icons/md";
import { AiFillWeiboSquare } from "react-icons/ai";
import { FaChartColumn } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdDashboard />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <AiFillWeiboSquare />,
    label: "BoS",
  },
  {
    key: "3",
    icon: <FaChartColumn />,
    label: "Program",
  },
  {
    key: "4",
    icon: <FaCreditCard />,
    label: "Fees Creation",
  },
];

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState("4");
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuSelect = (e) => {
    setSelectedKey(e.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <div>Dashboard Content</div>;
      case "2":
        return <div>BoS Content</div>;
      case "3":
        return <div>Program Content</div>;
      case "4":
        return (
          <div>
            <FeesCreation />
          </div>
        );
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={256} theme="light" collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          selectedKeys={[selectedKey]}
          onSelect={handleMenuSelect}
          items={items}
          style={{
            color: "#0084CA",
          }}
        />
      </Sider>

      <Layout>
        <Header className="bg-white shadow-md px-6 py-2">
          <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
        </Header>

        <Content className="mt-6 mx-4 mb-0 min-h-[calc(100vh-64px)]">
          <div className="p-6 min-h-[360px] bg-white rounded-lg">
            {renderContent()}
          </div>
        </Content>

        <Footer className="text-center text-xs font-light text-[#979797]">
          Copyright © 2024 CVM University All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
