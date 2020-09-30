export default function PriceCard() {
  return (
    <div>
      <div className="trending-card-wrapper">
        <div
          className="trending-card-img"
          style={{ backgroundColor: "rgb(234, 235, 251)" }}
        >
          <img
            src="/img/featured/pumpkin.png"
            alt="Community Page UI Components UI, designed with Sketch."
          />
        </div>

        <div className="trending-card-details">
          <div className="software-item sketch"></div>

          <p className="card-title">Infinix note 8 pro</p>
          <p className="details upload-date">25 Sep 2020</p>
          <h4 className="price">$150.00</h4>

          <div className="download-btn">Check out</div>
        </div>
        <div className="inside">
          <div className="icon">
            <img width="auto" src="/img/shopping-cart" />
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
          padding: 4px;
          background-color: #eee;
          border-radius: 4px;
          max-width: 50%;
          font-size: 1.2rem;
        }
        p.details {
          margin-bottom: 0;
          padding-bottom: 5px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
