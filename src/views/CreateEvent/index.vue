<template>
  <v-form>
    <v-container>
      <v-layout column>

        <v-flex xs12>
          <v-text-field
            label="Name"
          ></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field
            class="mt-0"
            hide-details
            single-line
            type="number"
            label="Number of People"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Location"
            prepend-icon="place"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-date-picker>
          </v-date-picker>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-time-picker></v-time-picker>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-textarea
            name="description"
            label="Description"
          ></v-textarea>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-btn color="primary">Create</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
</script>
