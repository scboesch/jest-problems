import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  beforeEach(() => {});
  afterEach(() => {});

  it("App should be an instance of Vue.", () => {
    expect(App._isVue).toEqual(true);
  });
});
