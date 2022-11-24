import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import ArrayContainer from "./ArrayContainer";
import * as Constants from "./constants";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const randomFromIntervals = (min, max) => {
    // Generates random numbers within a given interval
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    const new_array = [];
    for (let i = 0; i < Constants.NUMBER_OF_BARS; i++) {
      new_array.push(
        randomFromIntervals(5, Math.floor(0.75 * window.innerHeight))
      );
    }
    setArray(new_array);
  };

  const mergeSort = () => {
    return; // TODO
  };

  const quickSort = () => {
    return; // TODO
  };

  const heapSort = () => {
    return; // TODO
  };

  return (
    <div>
      <Controls
        resetArray={resetArray}
        mergeSort={mergeSort}
        quickSort={quickSort}
        heapSort={heapSort}
      />
      <ArrayContainer array={array} />
    </div>
  );
};

export default SortingVisualizer;
