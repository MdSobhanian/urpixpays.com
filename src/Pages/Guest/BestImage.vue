<template>
  <div class="">
    <StackGrid
      :columnWidth="300"
      :gutterX="10"
      :gutterY="10">
      <!-- you component like this -->
      <div class="stack-item"
           v-for="(item, index) in dataset" :key="index"
      >
        <img width="100%" :src="item.img">
      </div>
    </StackGrid>
  </div>

</template>
<script>
  import StackGrid from 'vue-stack-grid-component'
  import images from './images'
  import AOS from 'aos';
  export default {
    components: { StackGrid },
    mounted() {
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });

    },
    created() {
      console.log(images)
    },
    data(){
      return{
        dataset:images
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .col-sm-6{
    padding: 0!important;
  }
</style>
