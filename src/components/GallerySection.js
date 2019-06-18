import React from 'react';

const Gallery = ({ data }) => (
  <section className="text-center">
    <h2 className="my-5 h3 text-center section-header">{data.header}</h2>
    {data.rows.map((row, i) => (
      <div className="row" key={`row-${i}`}>
        {row.cols.map((col, i) => (
          <div className="col-lg col-md-12 mb-3" key={`img-${i}`}>
            <div className="view overlay z-depth-1-half gallery-view">
              <img
                src={col.img.src}
                className="img-fluid gallery-img"
                alt={col.img.alt}
              />
              <a href={col.link}>
                <div className="mask flex-center rgba-white-strong waves-effect waves-light">
                  <p className="black-text">{col.text}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    ))}
  </section>
);

export default Gallery;
