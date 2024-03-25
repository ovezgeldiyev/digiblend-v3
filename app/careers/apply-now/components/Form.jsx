"use client";
import { attentIcon, checkIcon, sendIcon, uploadIcon } from "@/app/Base/SVG";
import Breadcrumb from "@/app/components/Breadcrumb";
import FadeIn from "@/app/components/FadeIn";
import FormattedTitle from "@/app/components/FormattedTitle";
import { apiUrl } from "@/app/lib/utils";
import React, { useState } from "react";

export default function Form({ item }) {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    cv: "",
    // linkedin: '',
    phone: "",
    agree: false,
  });
  const { fName, lName, email, cv, phone, agree } = form;
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const onChangeInput = (input) => (e) => {
    setForm((form) => ({ ...form, [input]: e.target.value }));
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const result = reader.result.split(",")[1];
        // setVal({ ...val, base64File: result });
        resolve(result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
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
      cv === "" ||
      phone === "" ||
      agree === false
    )
      setError(true);
    else {
      const base64File = await getBase64(cv);

      const formData = new FormData();
      formData.append("fName", fName);
      formData.append("lName", lName);
      formData.append("email", email);
      formData.append("cv", base64File);
      // formData.append('linkedin', linkedin)
      formData.append("fileName", cv.name);
      formData.append("message", message);
      const res = await fetch(`${apiUrl}/api/apply-page`, {
        method: "PUT",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setError(false);
        setSubmited(true);
      }
    }
  };
  const el = item.apply;
  const img = el.image?.data?.attributes;
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
            <Breadcrumb array={el.breadcrumb} />
          </div>
          <div className="contact__inner-title">
            <h1 className="big">
              <FormattedTitle rawTitle={el.title} />
            </h1>
            <p>{el.content}</p>
          </div>
          <FadeIn delay={0.4} className="contact__inner-form">
            <div className="contact__inner-row">
              <label className="input__outer">
                <h6>{el.first_name}</h6>
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
                <h6>{el.last_name}</h6>
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
                <h6>{el.email}</h6>
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
                <h6>{item.cv}</h6>
                <div
                  className={
                    "input file " + (cv === "" && error ? "error" : "")
                  }
                >
                  <div className={"input__file " + (cv?.name ? "active" : "")}>
                    {cv?.name ? cv?.name : "Upload here"}
                  </div>
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      e.target.value = null;
                      updateForm({ cv: file ? file : "" });
                    }}
                    placeholder="Upload here"
                  />
                  <div className="input__upload">{uploadIcon}</div>
                  {cv === "" && error && (
                    <>
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
              {/* <label className="input__outer">
                <h6>{item.linkedin}</h6>
                <div
                  className={
                    "input " + (linkedin === "" && error ? "error" : "")
                  }
                >
                  <input
                    type="text"
                    value={linkedin}
                    onChange={onChangeInput("linkedin")}
                    placeholder="https://linkedin.com"
                  />
                  {linkedin === "" && error && (
                    <>
                      <span className="error">{attentIcon}</span>
                      <p>This field is required</p>
                    </>
                  )}
                </div>
              </label> */}
              <label className="input__outer big">
                <h6>{el.message}</h6>
                <div className="input">
                  <textarea rows="7" placeholder="What moves you?"></textarea>
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
                <p>{el.consent}</p>
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
                <span>{el.button_text}</span>
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
