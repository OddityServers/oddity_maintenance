import React from "react";
import { Result } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";

function App() {
  return (
    <Result
      icon={<InfoCircleFilled />}
      title="Sorry we're down due to maintenance."
      extra="Please try again in a few hours"
      // {<Button type="primary">Next</Button>}
    />
  );
}

export default App;
