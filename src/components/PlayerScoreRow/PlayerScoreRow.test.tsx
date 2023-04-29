import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { screen, render, act } from "@testing-library/react";
import { PlayerScoreRow } from "./PlayerScoreRow";
import userEvent from "@testing-library/user-event";

describe("PlayerScoreRow", () => {
  it("should render player name", () => {
    render(
      <PlayerScoreRow
        name='Big Gary'
        skinCount={0}
        setSkinCount={jest.fn()}
        holeCount={1}
        setHoleCount={jest.fn()}
        index={1}
      />
    );
    expect(screen.getByText("Big Gary :")).toBeInTheDocument();
  });

  it("should fire setSkinCount on button click", async () => {
    const onPress = jest.fn();
    render(
      <PlayerScoreRow
        name='Big Gary'
        skinCount={0}
        setSkinCount={onPress}
        holeCount={1}
        setHoleCount={jest.fn()}
        index={1}
      />
    );
    expect(screen.getByText("Big Gary :")).toBeInTheDocument();
    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });
    expect(onPress).toHaveBeenCalledWith(1);
  });
  it("should fire setHoleClick on button click", async () => {
    const onPress = jest.fn();
    render(
      <PlayerScoreRow
        name='Big Gary'
        skinCount={0}
        setSkinCount={jest.fn()}
        holeCount={1}
        setHoleCount={onPress}
        index={1}
      />
    );
    expect(screen.getByText("Big Gary :")).toBeInTheDocument();
    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });
    expect(onPress).toHaveBeenCalledWith(2);
  });
});
