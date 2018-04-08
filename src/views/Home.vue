<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Counter from state: {{ count }}</h2>
    <h3><router-link to="/about">About</router-link></h3>
    <h3><router-link to="/watchers">Watchers</router-link></h3>
    <p>
      <button @click="increment">Increment</button>
    </p>

  </div>
</template>

<script>
export default {
  name: 'home',
  mounted: function() {
    console.log('Mounted!', this.$store);
  },
  methods: {
    increment () {
      this.$store.commit('vsprobase/increment');
    },
  },
  computed: {
    count() {
      return this.$store.state.vsprobase.count;
    },
  },
  components: {},
};
</script>
