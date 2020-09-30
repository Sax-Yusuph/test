
export default function Stores() {
  return (
    <div className="store-card">
      <div className="feature-icon" style={{background:"#FFD2DA"}}>
        <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="nonzero">
            <path
              d="M43 47v7a13 13 0 0 0 13-13v-7c-7.18 0-13 5.82-13 13z"
              fill="#FF6381"
            ></path>
            <path
              d="M32 41v4a9 9 0 0 0 9 9v-4a9 9 0 0 0-9-9z"
              fill="#FF97AA"
            ></path>
          </g>
        </svg>
      </div>
      <h4 className="feature-title h3-mobile mb-8">Jumia</h4>
      <p className="text-sm">
        A pseudo-Latin text used in web design, layout, and printing in place of
        English to emphasise design elements.
      </p>
  <style jsx>{`
    .store-card{
        height:auto;
        width: 150px;
        display: flex;
        flex-direction: column;
        background-color: #eee;
    }
  `}</style>
    </div>

  );
}
