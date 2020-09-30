export default function Filter() {
  return (
    <section className="filter-section">
      <div className="search-input-wrapper float-l">
        <h3>Featured Products</h3>

        <div id="clear-search-btn" className="clear-search"></div>
      </div>

      <div id="post-tags-filter-btn" className="primary-btn dark float-r">
        Filter by tags
        <p id="post-tags-filter-count" className="tag-number">
          0
        </p>
      </div>

      <div className="software-list float-r">
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
    </section>
  );
}
