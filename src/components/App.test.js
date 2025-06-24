import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Optional but helps with assertions
import App from "./App";



test("renders time and button", () => {
  render(<App />);
  expect(screen.getByText(/Get Time/i)).toBeInTheDocument();
});
