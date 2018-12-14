<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column fixed justify-center>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Enter your question"
              placeholder=""
              outline
              height="200"
            ></v-text-field>
            <v-text-field
              ref="address"
              :rules="[
              () => !!address || 'This field is required',,
              addressCheck
              ]"
              v-model="address"
              label="Email Address"
              placeholder="Snowy Rock Pl"
              counter="25"
              required
              ></v-text-field>
             <v-btn> submit </v-btn>
          </v-flex>                   

          
          <v-spacer></v-spacer>
          <v-img
            height="125"
            width="125"
            :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png'"
            :lazy-src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png'"
                    align-center
                    justify-center

          ></v-img>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
</script>


<style scoped lang="scss">
</style>
