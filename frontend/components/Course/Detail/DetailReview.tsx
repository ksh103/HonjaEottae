import React from 'react';
import { Card, Carousel } from 'antd';
import { Review, ReviewCard, ReviewImage } from './Datail.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const settings = {
  dots: false,
  arrows: true,
  infinite: false,

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function DetailReview() {
  const { courseReview, courseTag } = useSelector(
    (state: RootState) => state.course2,
  );

  return (
    <>
      {courseReview.length > 0 && (
        <>
          <Review>
            <h1 className="title">✏ 후기</h1>
            <div className="content">
              <Carousel {...settings}>
                {courseReview.map(data => {
                  return (
                    <ReviewCard key={data.recordId}>
                      <Card
                        cover={
                          <ReviewImage>
                            <div className="email">{data.userEmail}</div>
                            <img
                              src="https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2020/11/19142010/evpost_%EB%82%B4-%ED%85%8C%EC%8A%AC%EB%9D%BC-%EC%A0%9C%EC%A3%BC%EB%8F%84-%EA%B0%80%EC%A0%B8%EA%B0%80%EA%B8%B0-evpost-22.jpg"
                              height="240"
                            />
                          </ReviewImage>
                        }
                      >
                        <div>{data.recordRegDt.slice(0, 10)}</div>
                        <div>{data.recordContent}</div>
                      </Card>
                    </ReviewCard>
                  );
                })}
              </Carousel>
            </div>
          </Review>
          <div>{courseTag.map(tag => '#' + tag).join(' ')}</div>
        </>
      )}
    </>
  );
}
