import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { randomUUID } from "crypto";
import List from ".";

const meta = () => ({
  id: randomUUID(),
});

describe("List", () => {
  it("handles empty skills", async () => {
    // GIVEN
    render(<List skills={[]} />);

    // WHEN
    // no loading nor events

    // THEN
    const lisDiv = screen.getAllByRole("generic")[1]; // the 1st is the jestDom wrapper
    expect(screen.getByText("Empty results")).toBeVisible();
    expect(lisDiv).toHaveClass("soft-skills-list");
  });

  it("handles multiple skills", async () => {
    // GIVEN
    render(
      <List
        skills={[
          {
            ...meta(),
            name: "Attracted to ducks",
          },
          {
            ...meta(),
            name: "Able to back-flip",
          },
        ]}
      />
    );

    // WHEN
    // no loading nor events

    // THEN
    expect(screen.queryByText("Empty results")).not.toBeInTheDocument();
    expect(screen.getByText("Attracted to ducks")).toBeVisible();
    expect(screen.getByText("Able to back-flip")).toBeVisible();
  });
});
