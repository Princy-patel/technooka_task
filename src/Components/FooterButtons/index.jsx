import { Button } from "antd";
import React from "react";

function FooterButton() {
  return (
    <div className="p-4 shadow-md flex justify-end items-center gap-4">
      <Button
        type="primary"
        className="bg-[#0073CE] text-white px-6 py-2 rounded-md text-sm font-bold"
        onClick={() => console.log("Next / Apply")}
      >
        Next / Apply
      </Button>
      <Button className="bg-[#F3F6F9] text-[#0073CE] px-6 py-2 rounded-md border-none text-sm font-bold">
        Cancel
      </Button>
    </div>
  );
}

export default FooterButton;
