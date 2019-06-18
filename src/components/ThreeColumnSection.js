import React from 'react';

const ThreeColumnSection = ({ data }) => (
  <section id={data.id}>
    <h2 className="my-5 h3 text-center section-header">{data.header}</h2>
    <div className="row features-small mb-5 mt-3 wow fadeIn">
      <div className="col-md-4">
        {data.tilesLeft.map((tile, i) => (
          <div className="row" key={`tile${i}`}>
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text" />
            </div>
            <div className="col-10">
              <h6 className="feature-title">{tile.title}</h6>
              <p className="grey-text">{tile.description}</p>
              <div style={{ height: '15px' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-4 flex-center">
        <img
          src={data.img.src}
          alt={data.img.alt}
          className="z-depth-0 img-fluid"
        />
      </div>

      <div className="col-md-4 mt-2">
        {data.tilesRight.map((tile, i) => (
          <div className="row" key={`tile${i}`}>
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text" />
            </div>
            <div className="col-10">
              <h6 className="feature-title">{tile.title}</h6>
              <p className="grey-text">{tile.description}</p>
              <div style={{ height: '15px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeColumnSection;
