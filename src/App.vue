<template>
  <div id="app">
<HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-particles
            color="#787878"
            :particleOpacity="0.9"
            :particlesNumber="80"
            shapeType="polygon"
            :particleSize="20"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.6"
            :linesDistance="200"
            :moveSpeed="5"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
