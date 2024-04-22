import { getTimestamp } from "./date";
import * as date from "./date";
import { getUser } from "./app";

describe("date", () => {
  it("returns timestamp", () => {
    jest
      .spyOn(date, "getTimestamp")
      .mockReturnValue("2024-04-18T01:03:24.929Z");
    const user = getUser();
    const timestamp = getTimestamp();
    expect(timestamp).toEqual("2024-04-18T01:03:24.929Z");
    expect(user).toEqual({
      name: "Anna",
      accountStart: "2024-04-18T01:03:24.929Z",
    });
    expect(getTimestamp).toHaveBeenCalledTimes(2);
  });
});
