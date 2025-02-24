import React from "react";
import FeesCreationForm from "./fees-creation-from";
import CollegeList from "./Cards";
import FeesDetails from "./fees-details";

function FeesCreation() {
  return (
    <>
      <h1 className="pb-10 text-2xl text-[#0065A7] font-bold">Fees Creation</h1>
      <FeesCreationForm />
      <CollegeList/>
      <FeesDetails/>
    </>
  );
}

export default FeesCreation;
