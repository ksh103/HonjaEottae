import { NextPage } from 'next';
import { ImageBlock, ImgaeListWrapper } from './Location.styled';

const Image: NextPage = () => {
  const images = ['1.jpg', '2.jpg', '3.jpg'];
  return (
    <>
      <ImgaeListWrapper height="250px">
        {images.map((image, idx) => {
          return <ImageBlock key={idx}>{image}</ImageBlock>;
        })}
      </ImgaeListWrapper>
    </>
  );
};

export default Image;
