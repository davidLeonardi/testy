<template>
  <div id="app">
    <div id="nav-container">
      <div id="nav">
        <img id="logo" alt="Adyen" src="./assets/adyen-header-logo-green.svg" />
        <div class="right"><router-link to="/">Home</router-link></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  color: rgb(0, 17, 44);
}

#app {
  font-family: Fakt, sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav-container {
  height: 72px;
  padding: 30px;

  #logo {
    width: 100px;
    height: 39px;
    margin-left: 24px;
    float: left;
  }

  .right {
    float: right;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: 2c3e50;
      text-decoration: underline;
    }
  }
}

p {
  font-family: Fakt, sans-serif, Helvetica, Arial;
  font-size: 20px;
  font-weight: 400;
  height: 114px;
  line-height: 30px;
}

@font-face {
  font-family: "Fakt";
  font-stretch: normal;
  font-style: normal;
  font-weight: 100;
  src: url("./assets/fonts/FaktPro-Blond.woff") format("woff"),
    url("./assets/fonts/FaktPro-Blond_web.ttf") format("truetype");
}

@font-face {
  font-family: "Fakt";
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  src: url("./assets/fonts/FaktPro-SemiBold.woff") format("woff"),
    url("./assets/fonts/FaktPro-SemiBold_web.ttf") format("truetype");
}
</style>
