import styles from "../../../styles/product-detail.module.css";

export default function ProductDetailHeader() {
  return (
    <section className={styles.product_detail_banner}>
      <div className={styles.chart_container}>
        <img src="/mock_chart.jpg" width="100%" />
      </div>
      <div className={styles.product_content_container}>
        <div className={styles.product_img_container}>
          <img src="/img/featured/238349167.jpg" />
        </div>
        <div className={styles.product_content}>
          <h4 className={styles.product_title}>Apple Iphone 8 plus</h4 >
          <p className={styles.product_description}>An improved version of iPhone 7 is the iPhone 8 Plus, the smartphone has an all-glass design which is the first of its kind. The front and black of an iPhone 8 is made of durable glass, this makes it very hard to break. The device stands-out because of its word class features. The iPhone 8 is water and dust resistant, its camera quality is top notch, as it has a 12MP rear camera and a 7MP front camera which dishes out great picture qualities, rich colors, and its dual lenses are excellent. If you are a camera photographer or you like to take selfies a lot, then you should buy the iPhone 8. The clarity and brightness of the 5.5-inch display screen cannot be overemphasized, it also has the Touch ID feature which makes it easy to unlock your phone without any form of stress. One of the factors that distinguish the iPhone 8 Plus from other smartphones is the wireless charging feature and the fact that it charges really fast. The iPhone 8 comes in multiple colors.</p >
          {/* <div className="field-grouped">
            <div className="control control-expanded">
              <input
                className="search input "
                type="text"
                name="text"
                placeholder="enter an item&hellip;"
              />
            </div>
            <div className="control">
              <a
                className="button button-primary button-block button-shadow"
                href="#"
              >
                Track it
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>{`
       
        .search {
          padding: 1.5rem;
          border-radius: 10px;
        }
        .button-block {
          border-radius: 10px;
          padding: 1.5rem;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 12px -11px #1a08b9b8;
        }
        .button-block:hover {
          box-shadow: 0 12px 20px -11px #0db4afb8;
          bottom: 30px;
        }
        .field-grouped {
          margin-top: 1.2rem;
        }
        .bold {
          margin-bottom: 10px;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
