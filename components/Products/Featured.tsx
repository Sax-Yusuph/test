import Filter from './Filter'
import Carousel from 'react-multi-carousel'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

export default function FeaturedProducts() {
  return (
    <div className='featured-section'>
      <section className='featured-carousel-section'>
        <h3>Featured Items</h3>
        <hr />
        <Carousel
          ssr={true}
          infinite={true}
          showDots={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={false}
          customTransition='all .8'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
          //   deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/mock-product1.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/product-mock3.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/product-mock2.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/product-mock3.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/mock-product1.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/product-mock2.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/mock-product1.jpg' />
          </div>
          <div className='carousel-box'>
            <img width='150px' src='/img/featured/product-mock2.jpg' />
          </div>
        </Carousel>
      </section>
      <style jsx>{`
        .featured-section {
          border-radius: 6px;
          padding: 0 0 20px;
          width: calc(100vw - 10%);
          margin: 2rem auto 3rem;
        }
        h3,
        hr {
          text-align: center;
        }
        hr {
          width: 50px;
          border-top: 3px solid #4caf50;
          margin: 10px auto;
        }
        .featured-carousel-section {
          width: calc(100% - 20%);
          margin: auto;
          height: 200px;
          border-radius: 15px;
        }
        .carousel-box {
          border: 1px solid #eee;
          margin-right: 15px;
        }
        .carousel-box img {
          width: 100%;
          box-shadow: 0 10px 20px -7px rgba(160, 44, 219, 0.07);
        }
      `}</style>
    </div>
  )
}
