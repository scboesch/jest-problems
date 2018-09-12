var app = new Vue({
  el: "#app",
  data: {
    counters: [0, 0, 0, 0]
  },
  methods: {
    increment: function(counterIndex) {
      let newVal = this.counters[counterIndex] + 1;
      this.counters.splice(counterIndex, 1, newVal);
    }
  },
  computed: {
    total: function() {
      return 0;
    }
  }
});
export default app;
