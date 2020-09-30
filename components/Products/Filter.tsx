export default function Filter() {
  return (
    <section className="filter-section">
      <div id="post-tags-filter-btn" className="primary-btn dark float-r">
        Filter by tags
      </div>

      <div className="software-list">
        <div id="post-software-filter-all" className="software-item active">
          All
        </div>

        <div
          id="post-software-filter-sketch"
          className="software-item sketch"
        ></div>

        <div
          id="post-software-filter-photoshop"
          className="software-item photoshop"
        ></div>

        <div
          id="post-software-filter-principle"
          className="software-item principle"
        ></div>

        <div
          id="post-software-filter-figma"
          className="software-item figma"
        ></div>

        <div id="post-software-filter-xd" className="software-item xd"></div>

        <div
          id="post-software-filter-studio"
          className="software-item studio"
        ></div>
      </div>
  <style jsx>{`
    .filter-section{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  `}</style>
    </section>
  );
}
