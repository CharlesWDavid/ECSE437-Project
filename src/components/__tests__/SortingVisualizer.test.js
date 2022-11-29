import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SortingVisualizer from "../SortingVisualizer";

afterEach(cleanup);

describe("SortingVisualizer Unit Tests", () => {
  it("SortingVisualizer should render", async () => {
    render(<SortingVisualizer />);
    const divElement = screen.getByTestId("sorting-visualizer-testid");
    expect(divElement).toBeInTheDocument();
  });

  it("SortingVisualizer should render with Controls and ArrayContainer", async () => {
    render(<SortingVisualizer />);
    const divElement1 = screen.getByTestId("array-container-testid");
    const divElement2 = screen.getByTestId("controls-testid");
    expect(divElement1).toBeInTheDocument();
    expect(divElement2).toBeInTheDocument();
  });
});

describe("SortingVisualizer Integration Tests", () => {
  it("Clicking Generate New Array button should generate a new array", async () => {
    render(<SortingVisualizer />);
    const initial_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => window.getComputedStyle(el).height);
    const buttonElement = screen.getByRole("button", {
      name: "Generate New Array",
    });
    fireEvent.click(buttonElement);
    const new_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => window.getComputedStyle(el).height);
    expect(initial_bars).not.toEqual(new_bars);
  });

  it("Clicking Quick Sort button should sort the array", async () => {
    render(<SortingVisualizer />);
    const initial_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => parseInt(window.getComputedStyle(el).height.slice(0, -2))); // Convert bar px height to int value
    const buttonElement = screen.getByRole("button", {
      name: "Quick Sort",
    });
    fireEvent.click(buttonElement);
    await new Promise((r) => setTimeout(r, 1500)); // Wait for sorting animation to finish
    const new_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => parseInt(window.getComputedStyle(el).height.slice(0, -2)));
    initial_bars.sort((a, b) => a - b);
    expect(initial_bars).toEqual(new_bars);
  });

  it("Clicking Merge Sort button should sort the array", async () => {
    render(<SortingVisualizer />);
    const initial_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => parseInt(window.getComputedStyle(el).height.slice(0, -2))); // Convert bar px height to int value
    const buttonElement = screen.getByRole("button", {
      name: "Quick Sort",
    });
    fireEvent.click(buttonElement);
    await new Promise((r) => setTimeout(r, 1500)); // Wait for sorting animation to finish
    const new_bars = screen
      .getAllByTestId("array-bar-testid")
      .map((el) => parseInt(window.getComputedStyle(el).height.slice(0, -2)));
    initial_bars.sort((a, b) => a - b);
    expect(initial_bars).toEqual(new_bars);
  });
});
