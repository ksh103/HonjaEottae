import React from 'react';
import { Card, Carousel, Divider, Tag } from 'antd';
import { Review, ReviewCard, ReviewImage, TagBlock } from './Datail.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const settings = {
  dots: false,
  arrows: true,
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

const colors = [, 'green', 'red', 'yellow', 'blue'];

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
                  console.log(data);
                  return (
                    <ReviewCard key={data.recordId}>
                      {/*{data.userEmail}
                       <Card
                        key={data.recordId}
                        className="review-card"
                        cover={
                          <ReviewImage>
                            <div className="email">{data.userEmail}</div>
                            <img src={data.image} height="240" />
                          </ReviewImage>
                        }
                      >
                        <div>{data.recordRegDt.slice(0, 10)}</div>
                        <div className="review-content">
                          {data.recordContent}
                        </div>
                      </Card> */}
                    </ReviewCard>
                  );
                })}
              </Carousel>
            </div>
          </Review>
          {/* <Divider orientation="left">tag</Divider> */}

          <TagBlock>
            {courseTag.map((tag, i) => (
              <Tag color={colors[(i % 4) + 1]} className="tag">
                {tag}
              </Tag>
            ))}
          </TagBlock>
        </>
      )}
    </>
  );
}
