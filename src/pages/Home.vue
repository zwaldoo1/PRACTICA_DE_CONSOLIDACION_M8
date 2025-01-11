<template>
  <div class="container text-center">
    <h1>Life Adventures</h1>
    <p>Experience the adventure of a lifetime!</p>
    <div>
      <button @click="$router.push('/guides')" class="btn btn-primary">Explore Guides</button>
      <button @click="$router.push('/resorts')" class="btn btn-secondary">View Resorts</button>
    </div>
  </div>
</template>