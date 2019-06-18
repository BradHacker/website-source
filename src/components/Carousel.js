import React from 'react';

const Carousel = props => (
  <div id="carousel-example-1z" className="carousel slide carousel-fade">
    <ol className="carousel-indicators">
      {props.videos.map((video, i) => (
        <li
          data-target="#carousel-example-1z"
          data-slide-to={i.toString()}
          className={i === 0 ? 'active' : ''}
          key={`indicator${i}`}
        />
      ))}
    </ol>

    <div className="carousel-inner" role="listbox">
      {props.videos.map((video, i) => (
        <div
          className={`carousel-item ${i === 0 ? 'active' : ''}`}
          key={`video${i}`}
        >
          <div className={`view${props.isHero ? ' hero' : ''}`}>
            <video className="video-intro" autoPlay loop muted>
              <source src={video.src} type={video.type} />
            </video>

            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>{props.title}</strong>
                </h1>

                <p>
                  <strong>{props.tagline}</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>{props.block}</strong>
                </p>

                {props.btnText && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.btnLink}
                    onClick={props.btnClick}
                    className="btn btn-outline-white btn-lg"
                  >
                    {props.btnText}
                    {props.btnIcon && (
                      <i className={`fas ${props.btnIcon} ml-2`} />
                    )}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <a
      className="carousel-control-prev"
      href="#carousel-example-1z"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carousel-example-1z"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
