<template>
  <div class="Clock">
  <h1>Clock</h1>
    <p> Tik Tok strikes the Clock </p>
    <div class="time"> <span>{{ this.hours }} : {{ this.minutes }} : {{ this.seconds }}</span></div>
  </div>
</template>

<style>

.time {
   margin: 55px;
}
.time span {
  border: solid black 3px;
  border-radius: 5px;
  font-size: 5em;
  padding: 10px 20px;
}
</style>

<script>

export default {
  data() {
  return {
  hours: 0,
  minutes: 0,
  seconds: 0,
  }
  },
  created() {
    setInterval(() => {
      let now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
      
    }, 1000);
  },
  destroyed() {
    clearInterval(now);
  }

}
</script>
