<template>
  <div id="app">
  <header>
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/Dice">Dice</router-link>
      <router-link to="/FAQ">FAQ</router-link>
      <router-link to="/Calculator">Calculator</router-link>
      <router-link to="/Clock">Clock</router-link>
      <router-link to="/Counters">Counters</router-link>
    </div>
    </header>

   <main>
    <router-view/>
    </main>

    <footer>© 2020 Keely Retzloff </footer>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
  text-decoration: none;
  display: inline-block;
}

#nav a::after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: black;
  transition: 300ms;
}

#nav a:hover::after {
  width: 100%;
}

#nav a.router-link-exact-active:hover::after {
  width: 0px;
  transition: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration:underline;
}

footer {
  padding-top: 50px;
}
</style>
