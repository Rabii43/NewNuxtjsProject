<template>
  <v-app dark>
      <div>
        <v-main>
          <nuxt />
        </v-main>
      </div>
  </v-app>
</template>

<script>
export default {
  loading: false,
  data() {
    return {
      play: true,
    };
  },
  mounted: function () {
  }
};
</script>
<style>
.container {
  /* margin: 0 !important;
  padding: 0 !important;
  max-width: unset !important; */
}
</style>
