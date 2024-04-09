import React, { useState } from "react";
import Link from "next/link";

export default function Terms() {
  const [type, setType] = useState("terms");

  return (
    <section className="terms">
      <div className="auto__container">
        <div className="terms__inner">
          <div className="termsSide">
            <button
              type="button"
              className={type === "terms" ? "active" : ""}
              onClick={() => setType("terms")}
            >
              <h6>Terms & Conditions</h6>
            </button>
            <button
              type="button"
              className={type === "disclaimer" ? "active" : ""}
              onClick={() => setType("disclaimer")}
            >
              <h6>Disclaimer</h6>
            </button>
            <button
              type="button"
              className={type === "privacy" ? "active" : ""}
              onClick={() => setType("privacy")}
            >
              <h6>Privacy Policy</h6>
            </button>
          </div>
          {type === "terms" && (
            <>
              <div className="termsMain">
                <div className="terms__inner-nav">
                  <h6>
                    <Link href="/">HOME</Link>
                  </h6>
                  <span>/</span>
                  <h6>
                    <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
                  </h6>
                </div>
                <div className="terms__inner-title">
                  <h1>Terms & Conditions</h1>
                </div>
                <div className="terms__inner-content">
                  <h6>Artikel 1</h6>
                  <p>
                    Welcome to Digiblend! These terms and conditions ("Terms")
                    govern your use of our website, products, and services. By
                    accessing or using our platform, you agree to comply with
                    these Terms. Please take a moment to carefully read and
                    understand these Terms before proceeding. If you do not
                    agree with any part of these Terms, kindly refrain from
                    using our services. Your continued use of our platform
                    signifies your acceptance of these Terms and your commitment
                    to adhere to them.
                  </p>
                  <h6>Artikel 2</h6>
                  <p>
                    Digiblend reserves the right to update or modify these Terms
                    from time to time without prior notice. It is your
                    responsibility to stay informed about any changes. The
                    latest version of these Terms will be posted on our website,
                    and it is advisable to review them periodically. Your use of
                    our services following any changes to these Terms
                    constitutes your acknowledgment of the modifications and
                    your agreement to abide by them.
                  </p>
                  <h6>Artikel 3</h6>
                  <p>
                    In addition to these Terms, certain services or features
                    provided by Digiblend may be subject to additional terms and
                    conditions, which will be made available to you in
                    connection with those services or features. Your use of such
                    services or features is also subject to your acceptance of
                    those additional terms and conditions.
                  </p>
                </div>
              </div>
            </>
          )}
          {type === "disclaimer" && (
            <>
              <div className="termsMain">
                <div className="terms__inner-nav">
                  <h6>
                    <Link href="/">HOME</Link>
                  </h6>
                  <span>/</span>
                  <h6>
                    <Link href="/terms-conditions">Disclaimer</Link>
                  </h6>
                </div>
                <div className="terms__inner-title">
                  <h1>Disclaimer</h1>
                </div>
                <div className="terms__inner-content">
                  <h6>Artikel 1</h6>
                  <p>
                    Welcome to Digiblend! These terms and conditions ("Terms")
                    govern your use of our website, products, and services. By
                    accessing or using our platform, you agree to comply with
                    these Terms. Please take a moment to carefully read and
                    understand these Terms before proceeding. If you do not
                    agree with any part of these Terms, kindly refrain from
                    using our services. Your continued use of our platform
                    signifies your acceptance of these Terms and your commitment
                    to adhere to them.
                  </p>
                  <h6>Artikel 2</h6>
                  <p>
                    Digiblend reserves the right to update or modify these Terms
                    from time to time without prior notice. It is your
                    responsibility to stay informed about any changes. The
                    latest version of these Terms will be posted on our website,
                    and it is advisable to review them periodically. Your use of
                    our services following any changes to these Terms
                    constitutes your acknowledgment of the modifications and
                    your agreement to abide by them.
                  </p>
                  <h6>Artikel 3</h6>
                  <p>
                    In addition to these Terms, certain services or features
                    provided by Digiblend may be subject to additional terms and
                    conditions, which will be made available to you in
                    connection with those services or features. Your use of such
                    services or features is also subject to your acceptance of
                    those additional terms and conditions.
                  </p>
                </div>
              </div>
            </>
          )}
          {type === "privacy" && (
            <>
              <div className="termsMain">
                <div className="terms__inner-nav">
                  <h6>
                    <Link href="/">HOME</Link>
                  </h6>
                  <span>/</span>
                  <h6>
                    <Link href="/terms-conditions">Privacy Policy</Link>
                  </h6>
                </div>
                <div className="terms__inner-title">
                  <h1>Privacy Policy</h1>
                </div>
                <div className="terms__inner-content">
                  <h6>Artikel 1</h6>
                  <p>
                    Welcome to Digiblend! These terms and conditions ("Terms")
                    govern your use of our website, products, and services. By
                    accessing or using our platform, you agree to comply with
                    these Terms. Please take a moment to carefully read and
                    understand these Terms before proceeding. If you do not
                    agree with any part of these Terms, kindly refrain from
                    using our services. Your continued use of our platform
                    signifies your acceptance of these Terms and your commitment
                    to adhere to them.
                  </p>
                  <h6>Artikel 2</h6>
                  <p>
                    Digiblend reserves the right to update or modify these Terms
                    from time to time without prior notice. It is your
                    responsibility to stay informed about any changes. The
                    latest version of these Terms will be posted on our website,
                    and it is advisable to review them periodically. Your use of
                    our services following any changes to these Terms
                    constitutes your acknowledgment of the modifications and
                    your agreement to abide by them.
                  </p>
                  <h6>Artikel 3</h6>
                  <p>
                    In addition to these Terms, certain services or features
                    provided by Digiblend may be subject to additional terms and
                    conditions, which will be made available to you in
                    connection with those services or features. Your use of such
                    services or features is also subject to your acceptance of
                    those additional terms and conditions.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
