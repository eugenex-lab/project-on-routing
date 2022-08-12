<template>
  <header>
    <nav>
      <ul>

        <li>
<!--          <button @click="setActivePage('users-list')">Players</button>-->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <RouterLink to="/players">Players</RouterLink>
        </li>
      </ul>
      <div class="user-info">
        <img class="logo" src="https://resources.premierleague.com/premierleague/badges/t1.png" alt="">
      </div>
    </nav>
  </header>
</template>

<!--<script>-->
<!--export default {-->
<!--  emits: ['set-page'],-->
<!--  methods: {-->
<!--    setActivePage(page) {-->
<!--      this.$emit('set-page', page);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped>
header {
  width: 100%;
  height: 9rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}
.logo {
  height: 12%;
  width: 7%;
  position: absolute;
  top: 1rem;
  left: 1600px;

}

a  {
  /*font: inherit;*/
  text-decoration: none;
  background: transparent;
  border: 1px solid #ec0202;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-size: 35px;

}

a:hover,
a:active ,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>