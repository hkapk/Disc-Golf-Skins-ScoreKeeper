import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { screen, render, act } from "@testing-library/react";
import { ScoreCardView } from "./ScoreCardView";
import userEvent from "@testing-library/user-event";

//TODO: Add integration tests around updating hole number and player skin count when clicking player + button
describe("ScoreCarrdView", () => {
  it("should render expected players", () => {
    render(
      <ScoreCardView
        players={['Big Gary', 'HanKapka']}
      />
    );
    expect(screen.getByText("Big Gary :")).toBeInTheDocument();
  });

  it("should default to Hole 1", () => {
    render(
      <ScoreCardView
        players={['Big Gary', 'HanKapka']}
      />
    );
    expect(screen.getByText("Hole #1")).toBeInTheDocument();
  });

  it("should default to one skin available", () => {
    render(
      <ScoreCardView
        players={['Big Gary', 'HanKapka']}
      />
    );
    expect(screen.getByTestId("skin-count")).toHaveTextContent('1');
  });

  it("clicking 'Push' button should increse skin count", async () => {
    render(
      <ScoreCardView
        players={['Big Gary', 'HanKapka']}
      />
    );

    await act(async () => {
        await userEvent.click(screen.getByText('Push Hole'));
      });
    expect(screen.getByTestId('skin-count')).toHaveTextContent('2')
  });

  it("clicking 'Push' button should increse hole number", async () => {
    render(
      <ScoreCardView
        players={['Big Gary', 'HanKapka']}
      />
    );

    await act(async () => {
        await userEvent.click(screen.getByText('Push Hole'));
      });
    expect(screen.getByText('Hole #2')).toBeInTheDocument();
  });

});
