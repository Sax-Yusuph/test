import { TrendingProduct } from '../../../interfaces'

interface ProductCardProp {
  product: TrendingProduct
}
export default function ProductCard({ product }: ProductCardProp) {
  return (
    <div>
      <div className='trending-card-wrapper'>
        <div
          className='trending-card-img'
          style={{ backgroundColor: 'rgb(234, 235, 251)' }}
        >
          <img src={product.imgSrc} alt={product.title} />
        </div>

        <div className='trending-card-details'>
          <div className='software-item sketch'></div>

          <p className='card-title'>{product.title}</p>
          <p className='details upload-date'>{product.description}</p>
          <h4 className='price'>{product.price}</h4>

          <div className='download-btn'>Check out</div>
        </div>
        <div className='inside'>
          <div className='icon'>
            <img width='auto' src='/img/shopping-cart' />
          </div>
        </div>
      </div>
      <style jsx>{`
        .inside {
          background: #4d5c71;
          width: 140px;
          height: 140px;
          position: absolute;
          top: -70px;
          right: -70px;
          border-radius: 0px 0px 200px 200px;
          transition: all 0.5s, border-radius 2s, top 1s;
          overflow: hidden;
          background-color: #fff;
        }
        .software-item {
          z-index: 10;
        }
        .icon {
          position: absolute;
          right: 85px;
          top: 85px;
          color: white;
          opacity: 1;
        }
        .inside:hover {
          width: 100%;
          right: 0;
          top: 0;
          border-radius: 0;
          height: 250px;
        }
        .icon {
          opacity: 0;
          right: 15px;
          top: 15px;
        }
        .contents {
          opacity: 1;
          transform: scale(1);
          transform: translateY(0);
        }
        .contents {
          padding: 5%;
          opacity: 0;
          transform: scale(0.5);
          transform: translateY(-200%);
          transition: opacity 0.2s, transform 0.8s;
        }
        .price {
          text-align: left;
          margin: 0;
          padding: 0;
          font-size: 0.95rem;
        }
        p.details {
          margin-bottom: 0;
          padding-bottom: 5px;
          text-align: left;
        }
      `}</style>
    </div>
  )
}

{
  /* <style jsx>{`
.wrapper {
  width: 300px;
  max-height: 500px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
}
.wrapper:hover {
  transform: scale(1);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
}

.product-container {
  width: 100%;
  height: 100%;
}

.product-container .top {
  height: 80%;
  width: 100%;
}
h4 {
  margin: 0;
}
.top img {
  // border-radius: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.design-details .download-btn {
  opacity: 0;
  width: 100px;
  display: inline-block;
  position: absolute;
  right: 15px;
  top: 25px;
}
.designs-section .design-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #242e4c;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 110px);
}
.designs-section .design-title.sup {
  width: 100%;
}
.designs-section .upload-date {
  font-size: 14px;
  color: #242e4c;
  opacity: 0.7;
  text-align: left;
}


.contents h1,
.contents p,
.contents table {
  color: white;
}
p {
  font-size: 13px;
}
`}</style> */
}
