'use client';
import Link from "next/link";
import React, { useEffect } from "react";

export default function ContactLink() {
  function scrollFunc() {
    let contactLink = document.getElementById("contactLink");
    
    if (window.scrollY >= 40 && contactLink !== null) {
      contactLink.classList.add("sticky");
    } else contactLink?.classList.remove("sticky");
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <Link href="/contact" className="contactLink" id="contactLink">
      <span>
        <img src="/images/icons/contact.png" alt="" />
      </span>
      <b>Contact</b>
    </Link>
  );
}
