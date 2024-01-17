import { SoftSkill } from "generated/graphql";
import filter from ".";

const meta = {
  id: "1",
};

describe("filter", () => {
  it("handles empty search", () => {
    // GIVEN
    const mockSkills: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    const mockSearch: string = "";

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    expect(result).toEqual(expect.arrayContaining(mockSkills));
  });

  it("handles lack of search", () => {
    // GIVEN
    const mockSkills: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    const mockSearch = undefined;

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    expect(result).toEqual(expect.arrayContaining(mockSkills));
  });

  it("handles full match", () => {
    // GIVEN
    const mockSkills: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    const mockSearch: string = "hello there";

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    const expected: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
    ];
    const notExpected: SoftSkill[] = [
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toEqual(expect.arrayContaining(notExpected));
  });

  it("handles partial match", () => {
    // GIVEN
    const mockSkills: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    const mockSearch: string = "lLo T";

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    const expected: SoftSkill[] = [
      {
        ...meta,
        name: "hello there",
      },
    ];
    const notExpected: SoftSkill[] = [
      {
        ...meta,
        name: "general kenobi",
      },
    ];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toEqual(expect.arrayContaining(notExpected));
  });

  it("handles empty skills", () => {
    // GIVEN
    const mockSkills: SoftSkill[] = [];
    const mockSearch: string = "hello";

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    const expected: SoftSkill[] = [];
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("handles lack of skills", () => {
    // GIVEN
    const mockSkills = undefined;
    const mockSearch: string = "hello";

    // WHEN
    const result = filter(mockSkills, mockSearch);

    // THEN
    const expected: SoftSkill[] = [];
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
