<template>
  <v-container class="app-top-bar">    
    <v-card class="mx-auto overflow-hidden" height="400">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Barra</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >

          <router-link to="/">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tela1</v-list-item-title>
            </v-list-item>
            
            </router-link>

            <router-link to="/classificacao">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tela2</v-list-item-title>
            </v-list-item>

            </router-link>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
    text-decoration: none;
}
</style>