import React from "react";

export const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          //alt="Propertyease"
          alt={`/${
            props.pro_area_size + " " + props.pro_area_size_unit + " "
          }
          ${props.pro_type ? props.pro_type.split(",")[0] : ""} For ${
            " " + props.pro_ad_type + " in " + props.pro_city
          }}`}
        />
      </button>
    </div>
  );
};
