import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  beforeEach(() => {});
  afterEach(() => {});

  it("There should be an array of counters.", () => {
    expect(App._isVue).toEqual(true);
  });
});
