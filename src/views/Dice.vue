<template>
  <div class="Dice">
    <h1>Dice</h1>
    <p>Let's roll some Dice!</p>
    <button v-on:click="throwDice()">Roll Dye</button>
    <p>Your number is {{diceValue}}</p>
    <div>
    <p v-if="diceValue === 1 || diceValue === 2">That was low.</p>
    <p v-else-if="diceValue === 3 || diceValue === 4">That was average.</p>
    <p v-else>That was high.</p>
    </div>
  </div>
</template>

<style>

</style>

<script>

export default {
  data(){
    const between1And6 = 1 + Math.floor(Math.random()*6)
    return {
      diceValue: between1And6
    }
  },
  methods: {
    throwDice() {
        this.diceValue = 1 + Math.floor(Math.random()*6)
    }
  },
}

</script>