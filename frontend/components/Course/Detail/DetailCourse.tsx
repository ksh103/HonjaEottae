import { Col, Row } from 'antd';
import React from 'react';
import { Content } from './Datail.style';

export default function DetailCourse() {
  return (
    <div>
      <div>
        <Row>
          <Col span={12}>
            <img
              src="https://i.pinimg.com/564x/b3/b1/35/b3b1355b9806f1d126f5444d1804f32f.jpg"
              alt="map"
              width="100%"
            />
          </Col>
          <Col span={12}>
            <img src="/images/course.JPG" alt="course" width="100%" />
          </Col>
        </Row>
      </div>
      <Content>
        <h1 className="title">🚩코스 설명</h1>
        <p>
          제주여행의 매력은 뭐니 뭐니 해도 해안 따라 드라이브를 즐기는 것이다.
          사면이 바다로 둘러싸여 있기 때문이다. 제주의 해안도로는 비경과 특징이
          각기 다르다. 그중 산과 섬, 바다가 한데 어우러지며 빼어난 경관을 간직한
          곳이 바로 사계해안도로이다. 사계해안도로는 제주 안덕면
          사계리(산방산)~대정읍 상모리(송악산)를 연결하는 도로로 빼어난
          해안절경과 섬과 산의 절묘한 어우러짐이 펼쳐진다. 해안을 둘러싸듯 우뚝
          솟은 산방산과 송악산이 해안의 양쪽 끝에 버티고 있어 포근함과 안정감을
          주는 서귀포시의 대표적인 해안도로이다. 낮은 지대로 달리다보니 해안
          조망이 눈높이에 있어 디테일하게 비경을 담을 수 있다. 해안과 산, 도로가
          합의일체로 그려내는 빼어난 광경 외에도 바다를 붉게 물드는 환상적인
          낙조까지 자연이 만들어낸 모든 것이 아름답고 황홀하다.
        </p>
      </Content>
    </div>
  );
}
