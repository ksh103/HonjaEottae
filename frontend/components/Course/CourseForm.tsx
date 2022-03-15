import type { NextPage } from 'next';
import { Space, Card } from 'antd';

const CourseForm: NextPage = () => {
  return (
    <Space id="space" direction="vertical">
      <Card id="card" title="제목" style={{ width: 200, height: 200 }}>
        <p>이미지 들어갈 예정</p>
      </Card>
    </Space>
  );
};

export default CourseForm;
