var app = new Vue({
  el: "#app",
  data: {
    counters: [0, 0, 0, 0]
  },
  methods: {
    increment: function(counterIndex) {
      this.counters[counterIndex]++;
    }
  },
  computed: {
    total: function() {
      return 0;
    }
  }
});
export default app;
