import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ArrayContainer from "../ArrayContainer";
import * as Constants from "../constants";

const randomFromIntervals = (min, max) => {
  // Generates random numbers within a given interval
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateTestArray = () => {
  const test_array = [];
  for (let i = 0; i < Constants.NUMBER_OF_BARS; i++) {
    test_array.push(
      randomFromIntervals(5, Math.floor(0.75 * window.innerHeight))
    );
  }
  return test_array;
};

afterEach(cleanup);

describe("ArrayContainer Unit Tests", () => {
  it("ArrayContainer should render", async () => {
    render(<ArrayContainer array={[]} />);
    const divElement = screen.getByTestId("array-container-testid");
    expect(divElement).toBeInTheDocument();
  });

  it("ArrayContainer should render with correct number of bars", async () => {
    const test_array = generateTestArray();
    render(<ArrayContainer array={test_array} />);
    const divElements = screen.getAllByTestId("array-bar-testid");
    expect(divElements).toHaveLength(Constants.NUMBER_OF_BARS);
  });

  it("ArrayContainer should render bars with correct colors", async () => {
    const test_array = generateTestArray();
    render(<ArrayContainer array={test_array} />);
    const divElements = screen.getAllByTestId("array-bar-testid");
    const expectedStyle = "color:" + Constants.PRIMARY_COLOR;
    divElements.forEach((el) => {
      expect(el).toHaveStyle = { expectedStyle };
    });
  });
});
