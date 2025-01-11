<template>
  <div class="container">
    <h2>Our Guides</h2>
    <div class="row">
      <div class="col-md-4" v-for="guide in guides" :key="guide.email">
        <div class="card">
          <img :src="guide.picture.large" class="card-img-top" :alt="guide.name.first">
          <div class="card-body">
            <h5 class="card-title">{{ guide.name.first }} {{ guide.name.last }}</h5>
            <p class="card-text">{{ guide.specialties.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import guides from '../../public/guides.json';
export default {
  data() {
    return {
      guides: guides.results,
    };
  },
};
</script>