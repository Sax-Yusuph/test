export default function HomePageHeader() {
  return (
    <section className="home-banner">
      <div className="banner-content-container">
        <h1 className="bold">Pricetrack</h1>
        <p className="xs-font-size">
          Compare prices of items in real time across different stores in the
          world.
        </p>

        <div className="field-grouped">
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
        </div>
      </div>
      <style jsx>{`
        .search{
          padding: 1.5rem;
          border-radius: 10px;
        }
        .button-block{
          border-radius: 10px;
          padding: 1.5rem;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 12px -11px #1a08b9b8;
        }
        .button-block:hover{
          box-shadow: 0 12px 20px -11px #0db4afb8;
          bottom: 30px;
        }
        .field-grouped{
          margin-top: 1.2rem
        }
        .bold{
          margin-bottom: 10px;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
