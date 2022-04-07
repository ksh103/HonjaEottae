import React, { useState } from 'react';
import Slider from 'react-slick';
import { ManualBlock, ManualIcon } from './Main.style';
import { CloseOutlined } from '@ant-design/icons';
export default function MainManual() {
  const [modal, setModal] = useState(false);
  const settings = {
    dots: true,
  };
  const changeManual = () => {
    setModal(!modal);
  };
  return (
    <>
      <ManualIcon onClick={changeManual}>
        <div className="manual-main">
          <img src="/images/혼구리2.png" onClick={changeManual} />
        </div>
      </ManualIcon>
      {modal && (
        <ManualBlock>
          <CloseOutlined className="manual-exit" onClick={changeManual} />
          <Slider {...settings}>
            <div className="manual-card">
              <img src="/images/manual1.png" />
            </div>
            <div className="manual-card">
              <img src="/images/manual2.png" />
            </div>
            <div className="manual-card">
              <img src="/images/manual3.png" />
            </div>
            <div className="manual-card">
              <img src="/images/manual4.png" />
            </div>
            <div className="manual-card">
              <img src="/images/manual5.png" />
            </div>
          </Slider>
        </ManualBlock>
      )}
    </>
  );
}
