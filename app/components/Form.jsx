"use client";
import React, { useState } from "react";
import { attentIcon } from "@/app/Base/SVG";
import FadeIn from "./FadeIn";

export default function Form() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    agree: false,
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onChangeInput = (input) => (e) => {
    setForm((form) => ({ ...form, [input]: e.target.value }));
  };
  const btnClick = () => {
    if (
      form.email === "" ||
      form.company_name === "" ||
      form.name === "" ||
      form.agree === false
    )
      setError(true);
    else {
      setError(false);
    }
  };
  return (
    <section className="contact">
      <div className="auto__container">
        <div className="contact__inner">
          <div className="contact__inner-row">
            <FadeIn delay={0.4} className="contactInfo">
              <div className="contactInfo__image">
                <img src={"/images/contact/myron.png"} alt="" />
              </div>
              <div className="contactInfo__main">
                <h6 className="big">Myron Zimmerman</h6>
                <p>Mede-Eigenaar</p>
                <a href="tell:+31 (0)20-12031231">
                  <span>
                    <img src={"/images/contact/phone.svg"} alt="" />
                  </span>
                  +31 (0)20-12031231
                </a>
                <a href="mailto:hello@digiblend.nl">
                  <span>
                    <img src={"/images/contact/mail.png"} alt="" />
                  </span>
                  hello@digiblend.nl
                </a>
                <a href="#">
                  <span>
                    <img src={"/images/contact/linkedin.svg"} alt="" />
                  </span>
                  Plan gesprek
                </a>
              </div>
              <div className="contactInfo__list">
                <h6 className="big">Wat je van ons kunt verwachten:</h6>
                <ul>
                  <li>
                    <span>
                      <img src={"/images/contact/check.svg"} alt="" />
                    </span>
                    <b>10+ jaar ervaring</b>
                  </li>
                  <li>
                    <span>
                      <img src={"/images/contact/check.svg"} alt="" />
                    </span>
                    <b>Resultaatgerichte aanpak</b>
                  </li>
                  <li>
                    <span>
                      <img src={"/images/contact/check.svg"} alt="" />
                    </span>
                    <b>Eerlijk en helder advies</b>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} className="contact__inner-content">
              <div className="contact__inner-title">
                <h6>Contact</h6>
                <h2>Kennismaken?</h2>
              </div>
              <form className="contactForm">
                <h5>We horen graag van je!</h5>

                <p className="sm">
                  Heb je vragen of wil je meer weten over onze diensten? Laat je
                  gegevens achter, en we nemen zo snel mogelijk contact met je
                  op. <b>Online afspraak </b>
                  <a href="">inplannen</a>.
                </p>
                <div className="contactForm__row">
                  <label className="contactForm__item">
                    <h6>Naam *</h6>
                    <div
                      className={
                        "contactForm__item-input " +
                        (form.name === "" && error ? "error" : "")
                      }
                    >
                      <input
                        type="text"
                        value={form.name}
                        onChange={onChangeInput("name")}
                        placeholder="Jan de Vries"
                      />
                      {form.name === "" && error && (
                        <span className="error">{attentIcon}</span>
                      )}
                    </div>
                  </label>
                  <label className="contactForm__item">
                    <h6>Email *</h6>
                    <div
                      className={
                        "contactForm__item-input " +
                        (form.email === "" && error ? "error" : "")
                      }
                    >
                      <input
                        value={form.email}
                        onChange={onChangeInput("email")}
                        type="email"
                        placeholder="you@example.com"
                      />
                      {form.email === "" && error && (
                        <span className="error">{attentIcon}</span>
                      )}
                    </div>
                  </label>
                  <label className="contactForm__item">
                    <h6>Telefoon</h6>
                    <div className="contactForm__item-input">
                      <input
                        value={form.phone}
                        onChange={onChangeInput("phone")}
                        type="tel"
                        placeholder="+31 6231512123"
                      />
                    </div>
                  </label>
                  <label className="contactForm__item">
                    <h6>Bedrijfsnaam *</h6>
                    <div
                      className={
                        "contactForm__item-input " +
                        (form.company_name === "" && error ? "error" : "")
                      }
                    >
                      <input
                        value={form.company_name}
                        onChange={onChangeInput("company_name")}
                        type="text"
                        placeholder="Digiblend"
                      />
                      {form.company_name === "" && error && (
                        <span className="error">{attentIcon}</span>
                      )}
                    </div>
                  </label>
                  <label className="contactForm__item">
                    <h6>Bericht</h6>
                    <div className="contactForm__item-input">
                      <textarea
                        rows="3"
                        placeholder="Waar kunnen we je mee helpen?"
                      ></textarea>
                    </div>
                  </label>
                </div>
                <div className="contactForm__foot">
                  <label className="check">
                    <div className="check__box">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          updateForm({ agree: e.target.checked });
                        }}
                      />
                      <span>
                        <img src="/images/contact/check.svg" alt="" />
                      </span>
                    </div>
                    <p className="sm">
                      Accepteer <a href="#">algemene voorwaarden</a>
                    </p>
                    {form.agree === false && error && (
                      <span className="error">{attentIcon}</span>
                    )}
                  </label>
                  <button type="button" className="button" onClick={btnClick}>
                    Verzend Bericht
                    <span>
                      <img src="/images/contact/send.svg" alt="" />
                    </span>
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
