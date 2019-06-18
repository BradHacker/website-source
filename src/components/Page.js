import React from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import TwoColumn from './TwoColumnSection';
import ThreeColumn from './ThreeColumnSection';
import Icons from './IconsSection';
import Gallery from './GallerySection';
import Footer from './Footer';

const Page = ({ carousel, sections, name, setPage }) => (
  <div className="App">
    <Nav setPage={setPage} active={name} />
    {carousel && (
      <Carousel
        title={carousel.title}
        tagline={carousel.tagline}
        block={carousel.block}
        videos={carousel.videos}
        isHero={carousel.isHero}
      />
    )}
    <main>
      <div className="container">
        {sections.map((section, i) => {
          if (section.type) {
            switch (section.type.toLowerCase()) {
              case 'twocolumn':
                return (
                  <React.Fragment key={`two-column-${i}`}>
                    <TwoColumn data={section} index={i} setPage={setPage} />
                    {i + 1 !== sections.length ? (
                      <hr className="my-5" />
                    ) : (
                      <div />
                    )}
                  </React.Fragment>
                );
              case 'threecolumn':
                return (
                  <React.Fragment key={`three-column-${i}`}>
                    <ThreeColumn data={section} />
                    {i + 1 !== sections.length ? (
                      <hr className="my-5" />
                    ) : (
                      <div />
                    )}
                  </React.Fragment>
                );
              case 'icons':
                return (
                  <React.Fragment key={`icons-${i}`}>
                    <Icons data={section} />
                    {i + 1 !== sections.length ? (
                      <hr className="my-5" />
                    ) : (
                      <div />
                    )}
                  </React.Fragment>
                );
              case 'gallery':
                return (
                  <React.Fragment key={`gallery-${i}`}>
                    <Gallery data={section} />
                    {i + 1 !== sections.length ? (
                      <hr className="my-5" />
                    ) : (
                      <div />
                    )}
                  </React.Fragment>
                );
              default:
                return <div key={`wrong-type-${i}`} />;
            }
          }
          return <div key={`none-${i}`} />;
        })}
      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
