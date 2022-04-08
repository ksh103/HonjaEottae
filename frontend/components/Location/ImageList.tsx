import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageBlock, ImageListBlock } from './Location.style';

interface ImageProps {
  images: any[];
}

const Image = ({ images }: ImageProps) => {
  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  return (
    <ImageListBlock>
      <Slider {...settings}>
        {images.length > 0 &&
          images.map((image, idx) => (
            <ImageBlock key={idx}>
              <div>
                <img src={image.image} />
              </div>
            </ImageBlock>
          ))}
      </Slider>
    </ImageListBlock>
  );
};

export default Image;
