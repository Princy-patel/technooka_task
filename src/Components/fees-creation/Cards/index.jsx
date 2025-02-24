import React from "react";
import { Card, Badge, Tag } from "antd";
import { MoneyCollectFilled } from "@ant-design/icons";

const colleges = [
  {
    id: 1,
    name: "College Name",
    status: "Pending",
    primary: false,
    color: "#1662A6",
  },
  { id: 2, name: "College Name", status: "", primary: true, color: "#1662A6" },
  {
    id: 3,
    name: "College Name",
    status: "Pending",
    primary: false,
    color: "#1662A6",
  },
];

const CollegeCard = ({ college }) => {
  return (
    <Card className="relative w-[300px] h-[140px] flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden bg-white">
      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          background: college.primary
            ? "radial-gradient(circle at top right, #1662A6 10%, transparent 60%)"
            : "radial-gradient(circle at top right, #1662A6 10%, transparent 60%)",
          opacity: 0.6,
        }}
      ></div>

      {college.status && (
        <Tag color="gold" className="absolute top-2 right-2 z-10">
          {college.status}
        </Tag>
      )}

      <div className="flex items-center gap-2 z-10">
        <div
          className={`py-4 px-5 rounded-full ${
            college.primary ? "bg-blue-600 text-white" : "bg-yellow-100"
          }`}
        >
          <MoneyCollectFilled className="text-2xl" />
        </div>
        <p className="text-lg font-semibold text-gray-800">{college.name}</p>
      </div>
    </Card>
  );
};

const CollegeList = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-[#0065A7] mb-4">
        Program Run in Colleges
      </h2>
      <div className="flex gap-4">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeList;
