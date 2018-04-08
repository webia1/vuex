<template>
<div>
  <label for="f1">Field1: </label>
  <input id="f1" type="text" v-model="f1"/> 
  <button @click="incrementF1">+</button>
  <button v-if="f1" @click="decrementF1">-</button>
  <br/>
  <label for="f2">Field2: </label>
  <input id="f2" type="text" v-model="f2" /> 
  <button @click="incrementF2">+</button>
  <button v-if="f2" @click="decrementF2">-</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      f1: null,
      f2: null
    }
  },
  watch: {
    f1: function(val) {
      if (!this.f2 || this.f2 < val) this.f2 = val;
    },
    f2: function(val) {
      if (!this.f1 || this.f1 > val) this.f1 = val;
    },
  },

  methods: {
    incrementF1: function () {
      this.f1 = this.f1 ? ++this.f1 : 1;
    },
    incrementF2: function () {
      this.f2 = this.f2 ? ++this.f2 : 
        this.f1 ? this.f1 : 1;
    },
    decrementF1: function () {
      this.f1--;
    },
    decrementF2: function () {
      this.f2--;
    }
  }
}
</script>
