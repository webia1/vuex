<template>
  <div class="home">
    <h1>About Now: {{ now }}</h1>
    <h2>Counter from state: {{ count }}</h2>
    <h3><router-link to="/">Home</router-link></h3>

  </div>
</template>

<script>
export default {
  name: 'home',
  beforeCreate:  function () {console.log('beforeCreate!');},
  created:       function () {console.log('created!');},
  beforeMount:   function () {console.log('beforeMount!');},
  mounted:       function () {console.log('mounted!');},
  beforeUpdate:  function () {console.log('beforeUpdate!');},
  updated:       function () {console.log('updated!');},
  beforeDestroy: function () {console.log('beforeDestroy!');},
  destroyed:     function () {console.log('destroyed!');},
  computed: {
    count() {
      return this.$store.state.vsprobase.count;
    },
    now () {
      return Date.now();
    }
  },
  components: {},
};
</script>
