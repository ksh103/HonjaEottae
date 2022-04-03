import { Carousel } from 'antd';
import { NextPage } from 'next';
import { ImageBlock, ImageListWrapper } from './Location.styled';

interface ImageProps {
  images: any[];
}

const settings = {
  infinite: false,
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

const Image = ({ images }: ImageProps) => {
  return (
    <>
      <Carousel {...settings}>
        {images.length > 0 &&
          images.map((image, idx) => {
            return (
              <ImageBlock key={idx}>
                <div id="image">
                  <img src={image.image} />
                </div>
              </ImageBlock>
            );
          })}
      </Carousel>
    </>
  );
};

export default Image;
