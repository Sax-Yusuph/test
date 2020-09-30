export default function CantFindStore() {
  return (
    <section className="newsletter section text-light">
      <div className="container-sm">
        <div className="newsletter-inner section-inner">
          <div className="newsletter-header text-center">
            <h2 className="section-title mt-0">Can't find store?</h2>
            <p className="section-paragraph">
              Is your store favorite not listed? drop us a mail and lets figure
              how to get it working for you.
            </p>
          </div>

          <div className="footer-form newsletter-form field field-grouped">
            <div className="text-area-field">
              <textarea className="message textarea" name="message" placeholder="Your message" />
            </div>
            <div className="field-grouped">
              <div className="control control-expanded">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your email&hellip;"
                />
              </div>
              <div className="control">
                <a
                  className="button button-primary button-block button-shadow"
                  href="#"
                >
                  mail us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-form {
          display: flex;
          flex-direction: column;
        }
        .message{
          width: 100%;
          margin-bottom: 10px;
        }
        .text-area-field{
          margin-bottom: 0.7rem;
        }
      `}</style>
    </section>
  );
}
