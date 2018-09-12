import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  beforeEach(() => {});
  afterEach(() => {});

  it("App should be an instance of Vue.", () => {
    expect(App._isVue).toEqual(true);
  });

  it("App should have an array of 4 counters.", () => {
    expect(App.counters).toEqual([0, 0, 0, 0]);
  });

  it("Total should be the sum of all counters values.", () => {
    expect(App.total).toEqual(0);
  });

  it("The increment functions should increment a counter.", () => {
    expect(App.counters[0]).toEqual(0);
    App.increment(0);
    expect(App.counters[0]).toEqual(1);
  });
});
