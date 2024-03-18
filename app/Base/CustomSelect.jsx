"use client";
import React, { useEffect, useRef, useState } from "react";
import { chevronBottom } from "./SVG";
import FadeIn from "@/app/components/FadeIn";

const CustomSelect = ({
  selected = null,
  list,
  key = null,
  error = null,
  value = null,
  onChange,
}) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item) => {
    setCurrentSelected(item);
    if (onChange) onChange(item);

    setActive(false);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setCurrentList(
      !currentSelected
        ? list
        : list.filter((item) => {
            let compareKey = key ?? "value";
            return item[compareKey] !== currentSelected[compareKey];
          })
    );
  }, [list, currentSelected]);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div
      className={`inputSelect ${active ? "active " : ""} ${
        error && value === "" ? "error " : ""
      }`}
      ref={wrapper}
    >
      <div className="inputSelect__selected" onClick={toggleActive}>
        {currentSelected ? currentSelected.value : "-----"}
        {chevronBottom}
      </div>
      {active ? (
        <FadeIn className="inputSelect__options">
          {currentList.map((item, index) => (
            <div
              className="inputSelect__options-item"
              key={index}
              onClick={() => onClick(item)}
            >
              {item.value}
            </div>
          ))}
        </FadeIn>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomSelect;
