import React, { useState } from "react";
import { Tabs, Select, Input, Table, Card } from "antd";

const { Option } = Select;

const FeesDetails = () => {
  const [activeTab, setActiveTab] = useState("1");

  const columns = [
    { title: "No", dataIndex: "no", key: "no", width: 50 },
    { title: "Fees Name", dataIndex: "name", key: "name" },
    {
      title: "Fees Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
    },
  ];

  const data = [
    { key: "1", no: 1, name: "Tuition Fee", amount: "30,000" },
    { key: "2", no: 2, name: "Lab Fee", amount: "10,000" },
    { key: "3", no: 3, name: "Sports Fee", amount: "10,000" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1662A6] mb-4">Fees Details</h2>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className="mb-6"
        tabBarStyle={{ borderBottom: "none" }}
        items={[...Array(8)].map((_, i) => ({
          key: String(i + 1),
          label: (
            <span
              className={`px-4 py-2 rounded-md ${
                i == activeTab - 1
                  ? "bg-[#1662A6] text-white"
                  : "text-[#1662A6]"
              }`}
            >{`Sem ${i + 1}`}</span>
          ),
          children: <div>Form for semester {i + 1}</div>,
        }))}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 bg-white">
          <label className="text-[#1662A6] my-2 block">
            Select Fees Payment Templates
          </label>
          <Select
            placeholder="Select"
            className="w-full mb-4"
            options={[
              { value: "template1", label: "Template 1" },
              { value: "template2", label: "Template 2" },
            ]}
          ></Select>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Name</label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Amount</label>
              <Input placeholder="NUM" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Name</label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Amount</label>
              <Input placeholder="NUM" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Name</label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-2 block">Fees Amount</label>
              <Input placeholder="NUM" />
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <Card className="relative">
            <div className="absolute top-0 right-0 w-full h-full"></div>

            <h3 className="text-[#1662A6] mb-4">Total Fees Amount</h3>
            <div className="relative bg-[#E6F0F6] p-5 rounded-2xl shadow-md border overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-16 bg-gradient-to-br from-white to-[#BFD9EA] rounded-bl-full opacity-50"></div>

              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
                className="bg-transparent"
              />

              <div className="absolute bottom-0 left-0 w-24 h-16 bg-gradient-to-tl from-white to-[#BFD9EA] rounded-tr-full z-0 opacity-50"></div>
            </div>

            <div className="flex justify-between mt-4 text-[#1662A6]">
              <span>Total Fees Amount</span>
              <Input className="w-24 text-right" placeholder="NUM Total" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeesDetails;
