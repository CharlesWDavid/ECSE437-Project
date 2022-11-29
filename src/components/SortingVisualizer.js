import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import ArrayContainer from "./ArrayContainer";
import * as Constants from "./constants";

import { getMergeSortAnimations } from "./SortingAlgorithms";
import { getQuickSortAnimations } from "./SortingAlgorithms";

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
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          i % 3 === 0 ? Constants.SECONDARY_COLOR : Constants.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * Constants.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * Constants.ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          i % 3 === 0 ? Constants.SECONDARY_COLOR : Constants.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * Constants.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, isSwap] =
            animations[i];
          if (isSwap) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barTwoHeight}px`;
            barTwoStyle.height = `${barOneHeight}px`;
          }
        }, i * Constants.ANIMATION_SPEED_MS);
      }
    }
  };

  const heapSort = () => {
    return; // TODO
  };

  return (
    <div data-testid="sorting-visualizer-testid">
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
