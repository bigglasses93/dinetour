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
        <v-menu transition="Sign-in">
          <v-btn slot="activator" dark color="primary" to="/signin">Log in</v-btn>
        </v-menu>
        <v-menu transition="Sign-out">
          <v-btn slot="activator" dark color="secondary" to="/signup">Sign up</v-btn>
        </v-menu>
      </div>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwidr9_49p7fAhXZzmEKHS_dAEMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_76860299_friends-dinner-table-top-view-people-eat-healthy-food-together-home-party.html&psig=AOvVaw2r6aIBITzWDoz-yyIHNBxU&ust=1544863444833661'
          },
          {
            src: 'http://foodgawker.com/post/2014/11/16/407794/'
          },
          {
            src: 'https://cdn.closeronline.co.uk/one/lifestyle-images/family_money/58a339de6f082ca4501f0525/childrens-birthday-party-1.jpg?quality=50&format=jpg'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-aOPYTk02zci_Agzk56gxuR18mTmh1zfScYeC35wtso4BfFAdw'
          }
        ]
      }
    }
  }
</script>


<style scoped lang="scss">
</style>
