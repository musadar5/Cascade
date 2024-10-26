import React from "react";

const CrossButton = ({ Hide, SetHide }) => {
  return (
    <div className="flex justify-end pr-5 pt-4 ">
      <button
        onClick={() => {
          SetHide(false);
        }}
      >
        <img className="w-7 h-7" src="/cross.svg" alt="hide" />
      </button>
    </div>
  );
};

export default CrossButton;

// how to call
// <CrossButton Hide={ShowForm} SetHide={SetShowForm}/>
