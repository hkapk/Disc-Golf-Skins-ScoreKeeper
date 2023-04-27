import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { act, render, screen } from "@testing-library/react";
import { PlayerFormView } from "./PlayerFormView";
import userEvent from "@testing-library/user-event";

describe("PlayerFormView", () => {
  it("should not render Start button by default", () => {
    render(
      <PlayerFormView
        handleHasRoundStarted={jest.fn()}
        players={[]}
        setPlayers={jest.fn()}
      />
    );

    expect(screen.queryByText("Start")).toBeNull();
  });

  it("should not render Start button if only one player has been added", () => {
    render(
      <PlayerFormView
        handleHasRoundStarted={jest.fn()}
        players={["Big Gary"]}
        setPlayers={jest.fn()}
      />
    );

    expect(screen.queryByText("Start")).toBeNull();
  });

  it("should render Start button if there is more than one player", () => {
    render(
      <PlayerFormView
        handleHasRoundStarted={jest.fn()}
        players={["Big Gary", "HanKapka"]}
        setPlayers={jest.fn()}
      />
    );

    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  it("clicking plus button should call setPlayers function", async () => {
    const onPress = jest.fn();
    render(
      <PlayerFormView
        handleHasRoundStarted={jest.fn()}
        players={[]}
        setPlayers={onPress}
      />
    );

    expect(screen.getByTestId("player-input-field")).toBeInTheDocument();

    await userEvent.type(screen.getByTestId("player-input-field"), "Big Gary");

    await act(async () => {
      await userEvent.click(screen.getByTestId("add-player-button"));
    });

    expect(onPress).toHaveBeenCalledWith(["Big Gary"]);
  });
});
