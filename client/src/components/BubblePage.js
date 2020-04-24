import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utility/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err);
        alert("Error retrieving colors", props)
      })
  }, [props])

  return (
    <div className="BubblePageStyle">
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;