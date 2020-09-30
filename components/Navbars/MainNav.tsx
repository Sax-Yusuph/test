import Link from "next/link";
const MainNav = () => {
  return (
    <header className="site-header">
      <div className="header-shape header-shape-2">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient
              x1="93.05%"
              y1="19.767%"
              x2="15.034%"
              y2="85.765%"
              id="header-shape-2"
            >
              <stop stopColor="#ba81ff" offset="0%" />
              <stop stopColor="#ff6a95" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            className="anime-element fadeup-animation"
            cx="64"
            cy="64"
            r="64"
            fill="url(#header-shape-2)"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <img style={{height:"30px"}} src="/img/pricetrack2a.svg" />
          </div>
        </div>
      </div>
  <style jsx>{`
  .site-header{
    z-index: 10000;
  }`}</style>
    </header>
  );
};

export default MainNav;
