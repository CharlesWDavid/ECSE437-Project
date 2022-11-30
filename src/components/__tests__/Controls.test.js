import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Controls from "../Controls";

beforeEach(() => {
  render(
    <Controls
      resetArray={jest.fn()}
      mergeSort={jest.fn()}
      quickSort={jest.fn()}
      heapSort={jest.fn()}
    />
  );
});

afterEach(cleanup);

describe("Controls Unit Tests", () => {
  it("Controls should render", async () => {
    const divElement = screen.getByTestId("controls-testid");
    expect(divElement).toBeInTheDocument();
  });

  it("Controls should render with Quick Sort button", async () => {
    const buttonElement = screen.getByRole("button", {
      name: "Quick Sort",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Controls should render with Merge Sort button", async () => {
    const buttonElement = screen.getByRole("button", {
      name: "Merge Sort",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Controls should render with Heap Sort button", async () => {
    const buttonElement = screen.getByRole("button", {
      name: "Heap Sort",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Controls should render with Generate New Array button", async () => {
    const buttonElement = screen.getByRole("button", {
      name: "Generate New Array",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
