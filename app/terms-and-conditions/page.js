"use client";
import React, { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Terms from "./components/Terms";
export default function page() {
  useEffect(() => {
    setUniqFooter(true);
  }, []);
  const [uniqFooter, setUniqFooter] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <main>
        <Terms />
      </main>
      <Footer uniqFooter={uniqFooter} />
    </>
  );
}
