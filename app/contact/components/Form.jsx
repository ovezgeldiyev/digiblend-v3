"use client";
import { attentIcon, checkIcon, sendIcon } from "@/app/Base/SVG";
import Breadcrumb from "@/app/components/Breadcrumb";
import FadeIn from "@/app/components/FadeIn";
import FormattedTitle from "@/app/components/FormattedTitle";
import React, { useState } from "react";

export default function Form({ item }) {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    company: "",
    phone: "",
    agree: false,
  });
  const { fName, lName, email, company, phone, agree } = form;
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onChangeInput = (input) => (e) => {
    setForm((form) => ({ ...form, [input]: e.target.value }));
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const btnClick = async () => {
    if (
      fName === "" ||
      lName === "" ||
      !validateEmail(email) ||
      company === "" ||
      phone === "" ||
      agree === false
    )
      setError(true);
    else {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setForm({ fName: "", lName: "", email: "", company: "", phone: "" });
        setError(false);
        setSubmited(true);
      }
    }
  };
  const contact = item.contact;
  const img = contact.image?.data?.attributes;

  return (
    <section className="contact">
      <div className="contact__bg">
        <div className="contact__bg-image">
          <img src={img.url} alt={img.name} />
        </div>
      </div>
      <div className="auto__container">
        <div className="contact__inner">
          <div className="contact__inner-nav">
            <Breadcrumb array={contact.breadcrumb} />
          </div>
          <div className="contact__inner-title">
            <h1 className="big">
              <FormattedTitle rawTitle={contact.title} />
            </h1>
            <p>{item.contact.content}</p>
            <div className="contact__inner-info">
              <div className="contact__inner-info-item">
                <p>{item.phone.label}</p>
                <a href={`tel:${item.phone.url}`} className="button secondary">
                  {item.phone.url}
                </a>
              </div>
              <div className="contact__inner-info-item">
                <b>or</b>
                <a
                  href="https://calendar.app.google/dMzxzJC5r2TZ3u786"
                  className="button secondary"
                >
                  Schedule Intake
                </a>
              </div>
            </div>
          </div>
          <FadeIn delay={0.4} className="contact__inner-form">
            <div className="contact__inner-row">
              <label className="input__outer">
                <h6>{contact.first_name}</h6>
                <div
                  className={
                    "input " + (form.fName === "" && error ? "error" : "")
                  }
                >
                  <input
                    type="text"
                    value={fName}
                    onChange={onChangeInput("fName")}
                    placeholder="Robert"
                  />
                  {fName === "" && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>This field is required</p>
                    </>
                  )}
                </div>
              </label>
              <label className="input__outer">
                <h6>{contact.last_name}</h6>
                <div
                  className={"input " + (lName === "" && error ? "error" : "")}
                >
                  <input
                    type="text"
                    value={lName}
                    onChange={onChangeInput("lName")}
                    placeholder="Smit"
                  />
                  {lName === "" && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>This field is required</p>
                    </>
                  )}
                </div>
              </label>
              <label className="input__outer">
                <h6>{contact.email}</h6>
                <div
                  className={
                    "input " + (!validateEmail(email) && error ? "error" : "")
                  }
                >
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={onChangeInput("email")}
                    placeholder="robert@digiblend.nl"
                  />
                  {!validateEmail(email) && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>
                        {form?.email === ""
                          ? "This field is required"
                          : "Missing '@' in email"}
                      </p>
                    </>
                  )}
                </div>
              </label>
              <label className="input__outer">
                <h6>{item.organization}</h6>
                <div
                  className={
                    "input " + (company === "" && error ? "error" : "")
                  }
                >
                  <input
                    type="text"
                    value={company}
                    onChange={onChangeInput("company")}
                    placeholder="digiblend"
                  />
                  {company === "" && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>This field is required</p>
                    </>
                  )}
                </div>
              </label>
              <label className="input__outer big">
                <h6>Telephone*</h6>
                <div
                  className={"input " + (phone === "" && error ? "error" : "")}
                >
                  <input
                    type="tel"
                    onChange={onChangeInput("phone")}
                    placeholder="06 32 544 213"
                  />
                  {phone === "" && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>This field is required</p>
                    </>
                  )}
                </div>
              </label>
              <label className="input__outer big">
                <h6>{contact.message}</h6>
                <div className="input">
                  <textarea
                    rows="7"
                    placeholder="We are curious about your challenges."
                  ></textarea>
                </div>
              </label>
            </div>
            <div className="contact__inner-foot">
              <label className="check">
                <div className="check__box">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      updateForm({ agree: e.target.checked });
                    }}
                  />
                  <span>{checkIcon}</span>
                </div>
                <p>{contact.consent}</p>
                {agree === false && error && (
                  <div className="error">
                    {attentIcon}
                    <p>This field is required</p>
                  </div>
                )}
              </label>
              <button
                type="button"
                className="button primary"
                onClick={btnClick}
              >
                <span>{contact.button_text}</span>
                {sendIcon}
              </button>
              {submited && (
                <p>
                  Thank you for contacting us! We will get back to you as soon
                  as possible.
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
