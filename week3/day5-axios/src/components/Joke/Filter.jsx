import { useEffect, useState } from "react";

const filter = () => {
  const categories = [
    "Any",
    "Misc",
    "Programming",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  const categoryBtn = categories.map((category) => <button>{category}</button>);

  return (
    <>
      {categoryBtn}
      <h1>test</h1>
    </>
  );
};

export default Filter;
