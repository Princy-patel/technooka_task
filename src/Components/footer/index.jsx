import { Button } from "antd";
import React from "react";

function FooterCom() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md border-t border-blue-300 flex justify-end items-center gap-4">
      <Button
        type="primary"
        className="bg-[#0073CE] text-white px-6 py-2 rounded-md"
        onClick={() => console.log("Next / Apply")}
      >
        Next / Apply
      </Button>
      <Button className="bg-[#F3F6F9] text-[#0073CE] px-6 py-2 rounded-md">
        Cancel
      </Button>
    </div>
  );
}

export default FooterCom;
