<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column justify-center>

          <v-toolbar dark>
            <v-toolbar-title>Create Event</v-toolbar-title>
          </v-toolbar>

          <v-flex xs12 sm8 md4>
            <v-text-field
              label="Event Name"
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-text-field
              class="mt-0"
              hide-details
              single-line
              type="number"
              label="Number of People"
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-text-field
              label="Location"
              prepend-icon="place"
            ></v-text-field>
          </v-flex>

          <v-layout row>
            <v-flex xs4>
              <v-date-picker></v-date-picker>
            </v-flex>
            <v-flex xs4>
              <v-time-picker></v-time-picker>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>

          <v-flex xs2>
            <v-textarea
              name="description"
              label="Description"
            ></v-textarea>
          </v-flex>

          <v-flex xs2>
            <v-btn color="primary">Create</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>

<script>
</script>

<style lang="scss">
</style>
