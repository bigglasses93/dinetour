<template>
  <v-content>
    <v-form>
      <v-container>
        <v-layout column>

          <v-toolbar dark>
            <v-toolbar-title>Apply for An Event</v-toolbar-title>
          </v-toolbar>

          <v-flex xs12>
            <v-text-field
              label="Event Name"
              value="Gyoza Party"
              readonly="true"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              label="Arriving Time"
              value="2018/12/16 18:00"
              readonly="true"
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

          <v-flex xs12>
            <v-textarea
              name="message"
              label="Message to Host"
            ></v-textarea>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              label="Cancel before"
              value="2018/12/16 10:00"
              readonly="true"
            ></v-text-field>
          </v-flex>

          <v-checkbox
            label="I understand that I have to cancel prior to the fore-mentioned time."
          ></v-checkbox>

          <v-flex xs12>
            <v-btn color="primary">Apply for the Event</v-btn>
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>
  </v-content>
</template>
