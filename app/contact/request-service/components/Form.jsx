"use client";
import CustomSelect from "@/app/Base/CustomSelect";
import { attentIcon, checkIcon, sendIcon } from "@/app/Base/SVG";
import Breadcrumb from "@/app/components/Breadcrumb";
import FadeIn from "@/app/components/FadeIn";
import FormattedTitle from "@/app/components/FormattedTitle";
import React, { useState } from "react";

const list = [
  {
    id: "1",
    value: "Data & Analytics",
  },
  {
    id: "2",
    value: "Design",
  },
  {
    id: "3",
    value: "Development",
  },
  {
    id: "4",
    value: "Marketing",
  },
  {
    id: "5",
    value: "Consulting",
  },
  {
    id: "6",
    value: "Select Category",
  },
];

export default function Form({ item }) {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    company: "",
    category: "",
    phone: "",
    agree: false,
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onChangeInput = (input) => (e) => {
    setForm((form) => ({ ...form, [input]: e.target.value }));
  };
  const { fName, lName, company, email, category, phone, agree } = form;

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
      category === "Select Category" ||
      phone === "" ||
      agree === false
    )
      setError(true);
    else {
      const res = await fetch("/api/requestService", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setForm({
          fName: "",
          lName: "",
          email: "",
          company: "",
          phone: "",
          category: "",
        });
        setError(false);
        setSubmited(true);
      }
    }
  };
  const request = item.request;
  const img = request.image?.data?.attributes;
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
            <Breadcrumb array={request.breadcrumb} />
          </div>
          <div className="contact__inner-title">
            <h1 className="big">
              <FormattedTitle rawTitle={request.title} />
            </h1>
            <p>{request.content}</p>
          </div>
          <FadeIn delay={0.4} className="contact__inner-form">
            <div className="contact__inner-row">
              <label className="input__outer">
                <h6>{request.first_name}</h6>
                <div
                  className={"input " + (fName === "" && error ? "error" : "")}
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
                <h6>{request.last_name}</h6>
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
                <h6>{request.email}</h6>
                <div
                  className={
                    "input " + (!validateEmail(email) && error ? "error" : "")
                  }
                >
                  <input
                    type="text"
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
              <label className="input__outer">
                <h6>{item.category}</h6>
                <CustomSelect
                  list={list}
                  selected={list[5]}
                  onChange={(data) =>
                    setForm({ ...form, category: data.value })
                  }
                />
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
                <h6>{request.message}</h6>
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
                <p>{request.consent}</p>
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
                <span>{request.button_text}</span>
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
