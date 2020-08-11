<template>

<div class="Counter">
<h3>+ {{this.steps}}</h3>
<button v-on:click="addNum()">{{ num }} </button>
</div>
</template>

<style scoped>

button {
    min-width: 200px;
    margin: 10px;
    padding: 10px;
    border: solid #42b983 3px;
    border-radius: 20px;
    cursor: pointer;
    background: white;
}

</style>

<script>
export default {
  data() {
      return {
          num: this.start
      }
  },
  name: 'counter',
  props: ["steps", "start"],
  methods: {
    addNum() {
        this.num = this.num + this.steps
    }
  }
}
</script>