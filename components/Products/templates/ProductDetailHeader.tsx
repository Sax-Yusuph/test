import styles from "../../../styles/product-detail.module.css";

export default function ProductDetailHeader() {
  return (
    <>
    <div className={styles.header_bg}></div>
      <section className={styles.product_detail_banner}>
        <div className={styles.chart_container}>
          <img src="/family.jpg" width="100%" />
        </div>

        <div className={styles.product_content_container}>
          {/* image here */}
          <div className={styles.product_img_container}>
            <img src="/img/featured/238349167.jpg" />
          </div>
          <div className={styles.product_content}>
            {/* title and price info here */}
            <div className={styles.product_info}>
              <h4 className={styles.product_title}>Apple Iphone 8 plus</h4>
              <p className="">Jumia Nigeria</p>
              <div className={styles.prices_container}>
                <div className={styles.current_price}>
                  <h2>$3000</h2>
                  <p className="text-center">current price</p>
                </div>
                <div className={styles.other_prices}>
                  <div className={styles.lowest_price}>
                    <h5>$3000</h5>
                    <p className="text-center">Lowest price</p>
                  </div>
                  <div className={styles.average_price}>
                    <h5>$3000</h5>
                    <p className="text-center">Average price</p>
                  </div>
                  <div className={styles.highest_price}>
                    <h5>$3000</h5>
                    <p>Highest price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.product_details}>
            <div className={styles.product_description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae obcaecati eum blanditiis reprehenderit suscipit
              distinctio nam cupiditate vitae illo? Beatae dicta dolores
              adipisci exercitationem neque ullam repellat deserunt corrupti
              cumque.
            </div>
            <a
              className="button button-primary button-block button-shadow"
              href="#"
            >
              Buy now it
            </a>
          </div>
        </div>
        <style jsx>{`
          .button-block {
            margin-top: 10px;
            border-radius: 10px;
            padding: 1.5rem;
            align-items: center;
            justify-content: center;
            box-shadow: 0 12px 12px -11px #1a08b9b8;
          }

          text-center {
            text-align: center;
          }
          .button-block:hover {
            box-shadow: 0 12px 20px -11px #0db4afb8;
            bottom: 30px;
          }
        `}</style>
      </section>
    </>
  );
}
