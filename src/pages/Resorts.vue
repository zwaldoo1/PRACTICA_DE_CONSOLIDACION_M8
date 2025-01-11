<template>
  <div class="container">
    <h2>Our Resorts</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Stars</th>
          <th>Price/Night</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resort in resorts" :key="resort.id">
          <td>{{ resort.name }}</td>
          <td>{{ resort.city }}</td>
          <td>{{ resort.stars }}</td>
          <td>{{ resort.price_per_night }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['resorts']),
  },
  mounted() {
    this.$store.dispatch('fetchResorts');
  },
};
</script>