import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel
      initialSlideHeight={500}
      renderTopCenterControls={()  => (
            <div
              style={{
                fontFamily: "Helvetica",
                color: "#fff",
                  fontSize: "5rem",
                  paddingTop: "30vh",
              }}
            >
              Elevate your home cooking to the next level
            </div>
          )}
      >
        <img src="../../static/img/baking-bread-bun-1098545.jpg" />
        <img src="../../static/img/black-pepper-bowl-clove-45844.jpg" />
        <img src="../../static/img/desembol-3662216_1920.jpg" />
        <img src="../../static/img/meat-3139641_1920.jpg" />
      </Carousel>
    );
  }
}