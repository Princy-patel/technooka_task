import React from "react";
import { Form, Input, Select, Row, Col } from "antd";

const FeesCreationForm = () => {
  return (
    <Form layout="vertical" className="bg-white rounded-lg">
      <Form.Item
        label={
          <span className="text-[#1662A6] text-base font-normal">
            Name a Fees Creation
          </span>
        }
        name="feesName"
      >
        <Input placeholder="Type something" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={
              <span className="text-[#1662A6] text-base font-normal">
                Program Level
              </span>
            }
            name="programLevel"
          >
            <Select
              placeholder="Select"
              options={[
                { label: "Level 1", value: "level1" },
                { label: "Level 2", value: "level2" },
              ]}
            ></Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={
              <span className="text-[#1662A6] text-base font-normal">
                Program Type
              </span>
            }
            name="programType"
          >
            <Select
              placeholder="Select"
              options={[
                { label: "Type 1", value: "type1" },
                { label: "Type 2", value: "type2" },
              ]}
            ></Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label={
              <span className="text-[#1662A6] text-base font-normal">
                Program Name
              </span>
            }
            name="programName"
          >
            <Select
              placeholder="Select"
              options={[
                { label: "Program 1", value: "program1" },
                { label: "Program 2", value: "program2" },
              ]}
            ></Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FeesCreationForm;
