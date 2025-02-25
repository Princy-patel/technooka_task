import React, { useState } from "react";
import { Tabs, Select, Input, Table, Card } from "antd";
import FooterButton from "@/Components/FooterButtons";

const FeesDetails = () => {
  const [activeTab, setActiveTab] = useState("1");

  const data = [
    { key: "1", no: 1, name: "Tuition Fee", amount: "30,000" },
    { key: "2", no: 2, name: "Lab Fee", amount: "10,000" },
    { key: "3", no: 3, name: "Sports Fee", amount: "10,000" },
  ];

  return (
    <div className="w-full pt-10">
      <h2 className="text-2xl font-medium text-[#1662A6] mb-4">Fees Details</h2>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className="mb-6"
        tabBarStyle={{ borderBottom: "none" }}
        items={[...Array(8)].map((_, i) => ({
          key: String(i + 1),
          label: (
            <span
              className={`px-4 py-2 font-bold text-2xl opacity-90 rounded-md ${
                i == activeTab - 1
                  ? "bg-[#1662A6] text-white"
                  : "text-[#1662A6] opacity-60"
              }`}
            >{`Sem ${i + 1}`}</span>
          ),
          children: (
            <div className="text-base font-normal text-[#1662A6]">
              Form for semester {i + 1}
            </div>
          ),
        }))}
      />

      <div className="grid grid-cols-12 gap-14 w-full">
        <div className="col-span-8 bg-white">
          <label className="text-[#1662A6] my-2 block text-base font-normal">
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
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Name
              </label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Amount
              </label>
              <Input placeholder="NUM" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Name
              </label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Amount
              </label>
              <Input placeholder="NUM" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Name
              </label>
              <Input placeholder="Default" />
            </div>
            <div>
              <label className="text-[#1662A6] my-4 block text-base font-normal">
                Fees Amount
              </label>
              <Input placeholder="NUM" />
            </div>
          </div>
        </div>

        <div className="col-span-4 pb-10 flex flex-end justify-end">
          <div className="relative w-full">
            <div className="absolute top-0 right-0 w-full h-full"></div>

            <h3 className="text-[#1662A6] mb-4 text-base font-normal">
              Total Fees Amount
            </h3>

            <div className="relative bg-[#e6f0f6] p-5 rounded-2xl shadow-lg overflow-hidden h-[364px] flex flex-col justify-between">
              <div>
                <div className="absolute top-0 right-0 w-24 h-16 bg-gradient-to-br from-white to-[#b2cde2] rounded-bl-full opacity-50"></div>

                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="bg-[#FFFFFF]">
                      <th className="py-3 px-4 text-sm font-semibold text-[#868A9A]">
                        No
                      </th>
                      <th className="py-3 px-4 text-sm font-semibold text-[#868A9A]">
                        Fees Name
                      </th>
                      <th className="py-3 px-4 text-sm font-semibold text-[#868A9A]">
                        Fees Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1662A6]">
                    {data?.map((data) => (
                      <tr key={data.key} className="bg-transparent">
                        <td className="py-3 px-4 text-sm font-medium text-[#868A9A]">
                          {data.no}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-[#868A9A]">
                          {data.name}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-[#868A9A]">
                          {data.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="absolute bottom-0 left-0 w-24 h-16 bg-gradient-to-tl from-white to-[#b2cde2] rounded-tr-full z-0 opacity-50"></div>
              </div>

              <div className="flex justify-between items-center mt-4 text-[#1662A6] font-medium">
                <span className="text-base font-normal z-20">
                  Total Fees Amount
                </span>
                <input
                  className="w-40 text-center text-xs font-extralight bg-white border border-gray-300 rounded-lg px-2 py-2 shadow-sm focus:outline-none"
                  placeholder="NUM Total"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-full border-dashed border-[#ffe4a7]" />
      <FooterButton />
    </div>
  );
};

export default FeesDetails;
