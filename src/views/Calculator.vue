<template>
  <div class="Calculator">

    <h1>Calculator</h1>
    <p>Beep Boop Beep Boop</p>
    <input v-model.number=" number1 " type="number" placeholder="0">
    <select v-model="selected">
  <option :value="null">Please select one</option>
  <option value="*">*</option>
  <option value="/">/</option>
  <option value="+">+</option>
  <option value="-">-</option>
</select>
    <input v-model.number="number2" type="number" placeholder="0">

    <div> Your Total is: {{ Total }} </div>



  </div>
</template>

<style>

input, select{
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
}

</style>

<script>

export default {
  data() {
    return {
    selected: 0,
    number1: 0,
    number2: 0,
    }
  },  
  computed: {
    Total() {
      if(this.selected === '*') {
        return this.number1 * this.number2;
      } else if (this.selected === '/') {
        return this.number1 / this.number2;
      } else if (this.selected === '+') {
        return this.number1 + this.number2;
      } else if(this.selected === '-') {
        return this.number1 - this.number2;
      } else {

      }
    }

  }

}

</script>