<template>
  <div class="home">
    <h1>About</h1>
    <h2>Counter from state: {{ count }}</h2>
    <h3><router-link to="/">Home</router-link></h3>

  </div>
</template>

<script>
export default {
  name: 'home',
  mounted: function() {
    console.log('Mounted!');
  },
  computed: {
    count() {
      return this.$store.state.vsprobase.count;
    },
  },
  components: {},
};
</script>
