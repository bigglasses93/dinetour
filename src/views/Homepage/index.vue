<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column justify-center>

      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <div class="text-xs-center">
        <!--<v-menu transition="Sign-in">
          <v-btn slot="activator" dark color="primary" to="/signin">Log in</v-btn>
        </v-menu>
        <v-menu transition="Sign-out">
          <v-btn slot="activator" dark color="secondary" to="/signup">Sign up</v-btn>
          <v-btn slot="activator" dark color="primary" flat to="/signin">Sign in</v-btn>
        </v-menu>
        <v-menu transition="Sign-out">
          <v-btn slot="activator" dark color="secondary" flat to="/signup">Sign up</v-btn>
        </v-menu>-->

        <v-btn flat color="secondary" to="/events">See More...</v-btn>
      </div>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src: "assets/party1.jpg"
        },
        {
          src:
            "https://www.sushicounter.com/files/58ed18a0127b9.image%20(5).jpg"
        },
        {
          src:
            "https://cdn.closeronline.co.uk/one/lifestyle-images/family_money/58a339de6f082ca4501f0525/childrens-birthday-party-1.jpg?quality=50&format=jpg"
        },
        {
          src:
            "https://files.tofugu.com/articles/japan/2015-02-19-nabe-hot-pot/nabe-making-party-at-table.jpg"
        }
      ]
    };
  }
};
</script>


<style scoped lang="scss">
</style>
