<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-color: lavender;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:30px;
  padding-bottom:50px;
  box-sizing: border-box;
}
</style>