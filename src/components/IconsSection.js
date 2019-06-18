import React from 'react';

const IconsSection = ({ data }) => (
  <section id={data.id}>
    <h2 className="my-5 h3 text-center section-header">{data.header}</h2>

    <div className="row features-small mt-5 wow fadeIn">
      {data.tiles.map((tile, i) => (
        <div
          className={`col-lg-${
            data.cols ? Math.floor(12 / data.cols).toString() : '3'
          } col-md-12`}
          key={`icons-section-icon-${i}`}
        >
          <div className="row">
            <div className="col-2">
              <i
                className={`${tile.faStyle || 'fa'} fa-${
                  tile.icon
                } fa-2x mb-1 indigo-text`}
                aria-hidden="true"
              />
            </div>
            <div className="col-10 mb-2 pl-3">
              <h5 className="feature-title font-bold mb-1">{tile.title}</h5>
              <p className="grey-text mt-2">{tile.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default IconsSection;
