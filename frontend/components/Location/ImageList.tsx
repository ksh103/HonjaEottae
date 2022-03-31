import { NextPage } from 'next';
import { ImageBlock, ImageListWrapper } from './Location.styled';

interface ImageProps {
  images: any[];
}

const Image = ({ images }: ImageProps) => {
  console.log(images);
  return (
    <>
      <ImageListWrapper height="250px">
        {images.map((image, idx) => {
          return (
            <ImageBlock key={idx}>
              <div id="image">
                <img src={image.image} />
              </div>
            </ImageBlock>
          );
        })}
      </ImageListWrapper>
    </>
  );
};

export default Image;
