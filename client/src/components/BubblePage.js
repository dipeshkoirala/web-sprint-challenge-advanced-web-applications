import React, { useState } from "react";
import {Axios} from "./AxiosCall";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  Axios()
  .get("/colors")
  .then((res) => {
    console.log("this is bubble page",res.data);
    setColorList({
      color: [res.data],
    });
  })

  .catch((err) => console.log({ err }));

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
