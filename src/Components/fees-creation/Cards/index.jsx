import React from "react";
import { Card, Tag } from "antd";
import { RiGraduationCapFill } from "react-icons/ri";

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
    <Card
      className={`relative w-[300px] h-[140px] flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden bg-white ${
        college.primary ? "bg-[#e5f3fa]" : "bg-white"
      }`}
    >
      <div
        className="absolute top-0 right-0 w-full h-full opacity-60"
        style={{
          background: college.primary
            ? "radial-gradient(farthest-corner at 80% 90%, #BFD9EA 30%, transparent 100%)"
            : "radial-gradient(farthest-corner at 80% 10%, #BFD9EA -10%, transparent 50%)",
          clipPath: "ellipse(30% 50% at 80% 0%)",
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
            college.primary ? "bg-[#3384b9] text-white" : "bg-[#fff5d9]"
          }`}
        >
          <RiGraduationCapFill
            className={`text-2xl ${
              college.primary ? "text-white" : "text-[#ffb100]"
            }`}
          />
        </div>
        <p className="text-base font-semibold text-[#4F6892]  w-[109px]">
          {college.name}
        </p>
      </div>
    </Card>
  );
};

const CollegeList = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-medium text-[#0065A7] mb-4">
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
