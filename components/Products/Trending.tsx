import { TrendingProduct } from '../../interfaces'
import ProductCard from './templates/ProductCard'

interface Props {
  trendingProducts: TrendingProduct[]
}

export default function Trending({ trendingProducts }: Props) {
  return (
    <section className='features section'>
      <div className='container'>
        <div className='features-inner section-inner'>
          <div className='features-header text-center'>
            <div className='container-sm'>
              <h3 className='section-title mt-0'>Find Trending Products</h3>
              <hr />
              <p className='section-paragraph'>
                See what's trending in over 50 stores around the world.
              </p>
            </div>
          </div>
          <div className='trending-products'>
            {trendingProducts
              ? trendingProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              : Array(5).map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundColor: '#eee',
                    }}
                  />
                ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .features-section {
          margin-top: 20px;
        }
        hr {
          width: 50px;
          border-top: 3px solid #4950f6;
          margin: 10px auto;
        }
        .trending-products {
          clear: both;
          padding-top: 25px;
          max-width: 100%;
          height: auto;
          // margin-bottom: 0 auto 50px;
          // margin-bottom: 0 auto 50px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          grid-auto-flow: row dense;
          grid-gap: 15px;
        }
        @media (min-width: 900px) {
          .trending-products {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}
