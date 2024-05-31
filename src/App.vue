<template>

  <nav>
    <ul>
      <li>
        <router-link tag="li" to="/componentsView"><strong>Components</strong>
        </router-link>
        <summary>
          Vue Komponenten, die einige PrimeVue and Native Komponenten behinhaltet
        </summary>
      </li>
      <li>
        <router-link tag="li" to="/webComponentsView"><strong>Web Component</strong>
        </router-link>
        <summary>
          Obige Komponente eingebetet in einer Web Komponente
        </summary>
      </li>
    </ul>
  </nav>

  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
main {
  margin: 2em;
  padding: 2em;
  border: 1rem solid rgb(6, 6, 77);
}

li {
  margin-top: 1rem;
}

nav {
  margin-left: 3rem;
}

summary {
  list-style-type: none;
}
</style>