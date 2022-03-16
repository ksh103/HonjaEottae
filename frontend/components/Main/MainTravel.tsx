import React from 'react';
import { Steps, Divider } from 'antd';
const { Step } = Steps;

export default function MainTravel() {
  return (
    <Steps>
      <Step
        status="finish"
        title="광안리"
        description="This is a description."
      />
      <Step status="wait" title="해운대" description="This is a description." />
      <Step status="wait" title="다대포" description="This is a description." />
    </Steps>
  );
}
