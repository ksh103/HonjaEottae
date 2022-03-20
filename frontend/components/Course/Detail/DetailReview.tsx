import React from 'react';
import { Card, Col, Row } from 'antd';
import { Review } from './Datail.style';
import Meta from 'antd/lib/card/Meta';

const datas = [
  {
    title: '최고의 힐링여행',
    date: '2022-03-20',
    content: '아름다운 경치!',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmbKX2XFULtqmyTr0udtuPpsXiIIk9eabfg&usqp=CAU',
  },
  {
    title: '최고의 힐링여행',
    date: '2022-03-20',
    content: '아름다운 경치와 새로운',
    image:
      'https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2020/11/19142010/evpost_%EB%82%B4-%ED%85%8C%EC%8A%AC%EB%9D%BC-%EC%A0%9C%EC%A3%BC%EB%8F%84-%EA%B0%80%EC%A0%B8%EA%B0%80%EA%B8%B0-evpost-22.jpg',
  },
  {
    title: '최고의 힐링여행',
    date: '2022-03-20',
    content:
      '아름다운 이 되면 한번 더 여행하고 싶은 여행지... 너무 즐거웠다.! 아름다운 이 되면 한번 더 여행하고 싶은 여행지... 너무 즐거웠다.!',
    image:
      'https://post-phinf.pstatic.net/MjAxOTEyMjRfODgg/MDAxNTc3MTY0NzE3ODI0.td40390rDg76HqexxOaLbmw4FMvAE5-taBjKL0QqGw4g.O1S4JTJnFfVcGPgHiCn09gNG2VtFZDO6umEH6e6fqygg.JPEG/%EC%A0%9C%EC%A3%BC%EB%8F%84_%EB%9A%9C%EB%B2%85%EC%9D%B4_%EC%97%AC%ED%96%89.jpg?type=w1200',
  },
];

export default function DetailReview() {
  return (
    <Review>
      <h1 className="title">✏ 후기</h1>
      <Row gutter={[30, 30]}>
        {datas.map(data => {
          return (
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable cover={<img src={data.image} height="240" />}>
                {data.date}
                <Meta title={data.title} description={data.content} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </Review>
  );
}
