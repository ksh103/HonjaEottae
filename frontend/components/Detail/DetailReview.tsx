import React from 'react';
import { Card, Divider, Tag } from 'antd';
import { Review, ReviewCard, ReviewImage, TagBlock } from './Datail.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const colors = [, '#a4e588', '#ff7e5a', '#fde360', '#5fccfe'];

export default function DetailReview() {
  const { courseReview, courseTag } = useSelector(
    (state: RootState) => state.detail,
  );

  return (
    <>
      {courseReview.length > 0 && (
        <>
          <Review>
            <h1 className="title">✏ 후기</h1>
            <div className="content">
              <Slider {...settings}>
                {courseReview.map(data => {
                  return (
                    <ReviewCard key={data.recordId}>
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
                      </Card>
                    </ReviewCard>
                  );
                })}
              </Slider>
            </div>
          </Review>
          <Divider />
          <TagBlock>
            {courseTag.map((tag, i) => (
              <Tag key={i} color={colors[tag.code]} className="tag">
                # {tag.tagName}
              </Tag>
            ))}
          </TagBlock>
        </>
      )}
    </>
  );
}
