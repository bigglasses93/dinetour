<template>
  <v-content>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-layout column fixed justify-center>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Enter your question"
              placeholder=""
              outline
              height="200"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              placeholder="Input your email address"
              counter="25"
              required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                @click="submit"
              >submit
              </v-btn>

          </v-flex>                   
    
          <v-spacer></v-spacer>
          <v-img
            align-center
            max-height="125"
            max-width="125"
            :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png'"
            :lazy-src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png'"
            
            justify-center

          ></v-img>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>


<script>
  import axios from 'axios'

  export default {
    data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox  
          })
        }
      },
      submit () {
        this.$refs.form.reset()
      }
    }
  }
</script>


<style scoped lang="scss">
</style>
