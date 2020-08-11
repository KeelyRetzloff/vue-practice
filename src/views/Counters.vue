<template>
<div class="Counters">
<h1> Counters</h1>
<p>How high can you count? My counters are endless</p>
<div class="counter-container">
<counter v-bind:start="0" v-bind:steps="1" />
<counter v-bind:start="45" v-bind:steps="5" />
<counter v-bind:start="33" v-bind:steps="10" />
</div>

</div>
</template>

<style>
.counter-container {
    display: flex !important;
    flex-direction: row;
    margin: auto;
    justify-content: center;
}
</style>

<script>
import Counter from './../components/Counter.vue'

export default {
 components: {
    Counter
  }
}

</script>