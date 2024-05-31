<template>

  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col cols="12">
          <h2>1. Vuetify InputText</h2>
          <v-text-field label="Message" v-model="msg"></v-text-field>
          <p>{{ msg }}</p>
        </v-col>

        <v-col cols="12">
          <h2>2. Vuetify Button</h2>
          <v-btn>Button</v-btn>
        </v-col>


        <v-col cols="12">
          <h2>2. Semantic HTML</h2>
          <h2>2.1 Unordered list</h2>
          <ul>
            <li>item 1
            </li>
            <li>item 2</li>
          </ul>
        </v-col>

        <v-col cols="12">
          <h2>2.2 Ordered list</h2>
          <ol>
            <li>item 1</li>
            <li>item 2</li>
          </ol>
        </v-col>

        <v-col cols="12">
          <h2>2.3 Vuetify list</h2>
          <v-list lines="one">
            <v-list-item title="Item 1" subtitle="sub title"></v-list-item>
            <v-list-item title="Item 2" subtitle="sub title"></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12">
          <h2>2.4 details/summary</h2>

          <details>
            <summary>Header I</summary>
            <div>Header 1 Content</div>
          </details>
          <details>
            <summary>Header II</summary>
            <div>Header 2 Content</div>
          </details>
          <details>
            <summary>Header III</summary>
            <div>Header 3 Content</div>
          </details>
        </v-col>

        <v-col cols="12">
          <h2>2.4.1 Vuetify Accordion (Expansions Panel)</h2>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel v-for="i in 2" :key="i" :text="'Header ' + i + ' Content'"
              :title="'Heder ' + i"></v-expansion-panel>
          </v-expansion-panels>
        </v-col>


        <v-col cols="12">

          <h1>3. Date</h1>

          <section>
            <h2>3.1. Standard HTML</h2>
            <label for="date">Date: </label>
            <input type="date" id="date">
          </section>

          <v-card>
            <h2>3.2. Primevue Calendar</h2>
            <v-date-picker show-adjacent-months></v-date-picker>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('');
const date = ref('');
</script>
