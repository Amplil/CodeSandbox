<template>
  <div id="App">
    <PopOver />
    <!--
    <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 in CodeSandbox!" />
  --></div>
</template>

<script>
//import PopOver from "./components/popover.vue";
//import PopOver from "./components/popover2.vue";
import PopOver from "./components/popover3.vue";
export default {
  name: "App",
  components: {
    PopOver,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
