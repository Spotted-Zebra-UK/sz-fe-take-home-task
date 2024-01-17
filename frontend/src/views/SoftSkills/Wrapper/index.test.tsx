import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Wrapper from ".";

describe("Wrapper", () => {
  it("displays header", async () => {
    // GIVEN
    render(
      <Wrapper handleSearch={() => null}>
        <p>hello</p>
      </Wrapper>
    );

    // WHEN
    await screen.findByRole("heading");

    // THEN
    expect(screen.getByRole("heading")).toHaveTextContent("Soft Skills");
  });

  it("displays search input", async () => {
    // GIVEN
    render(
      <Wrapper handleSearch={() => null}>
        <p>hello</p>
      </Wrapper>
    );

    // WHEN
    // no loading, nor any actions

    // THEN
    // Search field is visible
    expect(screen.getByRole("search")).toBeVisible();

    // Form starts empty
    expect(screen.getByRole("textbox")).toHaveValue("");

    // Form has placeholder
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "Attracted to ducks"
    );

    // Form has label
    expect(screen.getByLabelText("Search")).toBeVisible();
  });

  it("triggers handleSearch on type", async () => {
    // GIVEN
    const mockFn = jest.fn();
    render(
      <Wrapper handleSearch={mockFn}>
        <p>hello</p>
      </Wrapper>
    );

    // WHEN
    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "hello" } });

    // THEN
    expect(textbox).toHaveValue("hello");
    expect(mockFn).toHaveBeenCalledTimes(2); // "" and "hello"
    expect(mockFn).toHaveBeenLastCalledWith("hello");
  });
});
