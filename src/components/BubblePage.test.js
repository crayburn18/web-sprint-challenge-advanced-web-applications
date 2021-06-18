import React from "react";
import { queryAllByTestId, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";
import {colors} from "../mocks/handlers";

// const fetchColors = async ()=>{
//   const colors = await axios.get("http://localhost:5000/api/colors");
//   return colors;
// }
// jest.mock(fetchColors());

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  

});