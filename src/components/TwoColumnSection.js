import React from 'react';

const TwoColumnSection = ({ data, index, setPage }) => (
  <section className="mt-5 wow fadeIn" id={data.id}>
    <div className="row">
      {index % 2 === 0 ? (
        <div className="col-md-6 mb-4">
          <div
            className="img-fluid z-depth-1-half"
            style={{
              backgroundImage: `url(${data.img.src})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      ) : (
        <div className="col-md-6 mb-4 text-right">
          <h3 className="h3 mb-3 section-header">{data.header}</h3>
          {data.taglines.map((tagline, i) => (
            <p key={`tagline-${i}`}>{tagline}</p>
          ))}

          <hr />

          <p>{data.description}</p>

          {data.links.map((link, i) => (
            <a
              target={link.link && '_blank'}
              rel={link.link && 'noopener noreferrer'}
              href={link.link}
              onClick={link.pageLink ? () => setPage(link.pageLink) : null}
              className="btn btn-grey btn-md"
              key={`link-${i}`}
            >
              {link.text}
              <i className={`${link.faClasses} ml-1`} />
            </a>
          ))}
        </div>
      )}

      {index % 2 === 1 ? (
        <div className="col-md-6 mb-4">
          <div
            className="img-fluid z-depth-1-half"
            style={{
              backgroundImage: `url(${data.img.src})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      ) : (
        <div className="col-md-6 mb-4">
          <h3 className="h3 mb-3 section-header">{data.header}</h3>
          {data.taglines.map((tagline, i) => (
            <p key={`tagline-${i}`}>{tagline}</p>
          ))}

          <hr />

          <p>{data.description}</p>

          {data.links.map((link, i) => (
            <a
              target={link.link && '_blank'}
              rel={link.link && 'noopener noreferrer'}
              href={link.link}
              onClick={link.pageLink ? () => setPage(link.pageLink) : null}
              className="btn btn-grey btn-md"
              key={`link-${i}`}
            >
              {link.text}
              <i className={`${link.faClasses} ml-1`} />
            </a>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default TwoColumnSection;
