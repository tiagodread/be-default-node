import { describe, expect, it } from "@jest/globals";
import { getMessage } from "./index";

describe("getMessage()", () => {
  it("should return the correct message when called", () => {
    expect(getMessage()).toBe("Hello world by Tiago!");
  });

  it("should be super smart", () => {
    expect(true).toBe(true);
  });
});
