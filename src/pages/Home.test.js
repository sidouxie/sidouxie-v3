/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

test("displays Home Component", async () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Home />
    </MemoryRouter>
  );

  // ACT
  await screen.findByText("Hello !");

  // ASSERT
  expect(screen.getByText("Hello !")).toHaveTextContent("Hello !");
});
