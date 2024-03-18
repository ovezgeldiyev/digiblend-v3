"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { chevronBottom } from "./SVG";

const LanguageSelect = ({ selected = null, list, onChange, key = null }) => {
  const router = useRouter();
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  // const [currentSelected, setCurrentSelected] = useState(selected);

  let pathName = usePathname();

  const onClick = (item) => {
    // setCurrentSelected(item);
    if (onChange) onChange(item);
    setActive(false);
    let path = pathName.split('/')
    let result = path.length > 2 ? `/${path.slice(2).join('/')}` : ""
    // Cookies.set('i18next', item.value.toLowerCase(), { path: '/', expires: 365 }); // Set the cookie with a one-year expiration

    // path = path.replace(/\/[a-zA-Z-]+/, "");
    router.push(`/${item.value}${result}`, { scroll: false });
  };

  const toggleActive = () => {
    setActive(!active);
  };

  const initialSelected = list.find((item) => {
    const compareKey = key ?? "value";
    return pathName.startsWith(`/${item[compareKey]}`);
  });
  useEffect(() => {
    setCurrentList(
      list.filter((item) => {
        return item.value !== initialSelected?.value;
      })
    );
  }, [list]);

  return (
    <div className={`customSelect ${active ? "active " : ""}`} ref={wrapper}>
      <div className="customSelect__selected" onClick={toggleActive}>
      <img src={initialSelected?.image} alt="" />
        {initialSelected ? initialSelected.value.toUpperCase() : "-----"}
        {chevronBottom}
      </div>
      <div className="customSelect__options active">
        {currentList.map((item, index) => (
          <div
            className="customSelect__options-item"
            key={index}
            onClick={() => onClick(item)}
          >
            <img src={item.image} alt="" />
            {item.value.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
