var app = new Vue({
  el: "#app",
  data: {
    counters: [0, 0, 0, 0],
    imageUrls: [
      "https://github.com/scboesch/jest-problems/raw/master/percy/images/Annabeth.png",
      "https://github.com/scboesch/jest-problems/raw/master/percy/images/Pan.png",
      "https://github.com/scboesch/jest-problems/raw/master/percy/images/Percy.jpg",
      "https://github.com/scboesch/jest-problems/raw/master/percy/images/Thalia.png"
    ],
    defaults: {
      A: {
        counter: 0,
        imageUrl:
          "https://github.com/scboesch/jest-problems/raw/master/percy/images/Annabeth.png"
      },
      B: {
        counter: 0,
        imageUrl:
          "https://github.com/scboesch/jest-problems/raw/master/percy/images/Pan.png"
      }
    },
    heroes: {}
  },
  methods: {
    loadDefaults: function() {
      this.heroes = this.defaults;
    },
    increment: function(counterIndex) {
      let newVal = this.counters[counterIndex] + 1;
      this.counters.splice(counterIndex, 1, newVal);
    },
    resetCounters: function() {
      this.counters = [0, 0, 0, 0];
    }
  },
  computed: {
    total: function() {
      return this.counters.reduce((a, b) => a + b, 0);
    }
  }
});
export default app;
