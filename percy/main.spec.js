import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  beforeEach(() => {
    App.counters = [0, 0, 0, 0];
  });
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

  it("The total should increase when individual counters increase.", () => {
    expect(App.counters[0]).toEqual(0);
    expect(App.total).toEqual(0);
    App.increment(0); // increment counter 0
    App.increment(1); // increment counter 1
    expect(App.total).toEqual(2);
  });

  it("App should have an array of imageUrls.", () => {
    expect(App.imageUrls).toBeInstanceOf(Array);
  });
});
