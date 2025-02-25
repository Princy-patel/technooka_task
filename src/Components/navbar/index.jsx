import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleFilled,
  BellFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";

function Navbar({ setCollapsed, collapsed }) {
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-3 w-3/4">
        <div onClick={toggleCollapse} className="cursor-pointer text-lg">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <Input
          className="w-full border-2 border-transparent focus:border-[#1662A6] focus:ring-2 focus:ring-[#1662A6] rounded-md p-2 bg-gray-100"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-4">
        <QuestionCircleFilled className="text-xl text-gray-600 cursor-pointer" />
        <BellFilled className="text-xl text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
          <div className="text-sm">
            <p className="font-semibold">Aarohi Shah</p>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
