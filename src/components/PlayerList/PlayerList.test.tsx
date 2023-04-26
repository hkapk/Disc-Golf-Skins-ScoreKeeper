import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { screen, render } from "@testing-library/react";
import { PlayerList } from "./PlayerList";

describe("PlayerList", () => {
  const expectedPlayers = ["Alice", "Bob", "Charlie"];
  it.each(expectedPlayers)("should render a list of player names", (player) => {
    render(<PlayerList players={expectedPlayers} />);
    expect(screen.getByText(player)).toBeInTheDocument();
  });
});
