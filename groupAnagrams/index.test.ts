import { groupAnagrams } from ".";

describe("groupAnagrams", () => {
  it("Anagrams should be in the same group", () => {
    expect(groupAnagrams(["test", "tset"])).toEqual([["test", "tset"]]);
  });

  it("Non anagrams should be in the different group", () => {
    expect(groupAnagrams(["hey", "hoy"])).toEqual([["hey"], ["hoy"]]);
  });

  it("Basic Test", () => {
    expect(groupAnagrams(["cat", "dog", "tac", "god", "act", "good"])).toEqual([
      ["cat", "tac", "act"],
      ["dog", "god"],
      ["good"],
    ]);
  });

  it("More advanced Test", () => {
    expect(
      groupAnagrams([
        "ahoy",
        "cat",
        "aoyh",
        "dog",
        "aoyh",
        "Lorem ipsum",
        "ipsum Lorem",
        "Lorem ipsum dolor",
        "tac",
        "god",
        "act",
        "good",
      ])
    ).toEqual([
      ["ahoy", "aoyh", "aoyh"],
      ["cat", "tac", "act"],
      ["dog", "god"],
      ["Lorem ipsum", "ipsum Lorem"],
      ["Lorem ipsum dolor"],
      ["good"],
    ]);
  });
});
