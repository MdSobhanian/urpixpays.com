<template>
  <div class="best-image-div">
    <LightGallery
      :images="dataset"
      :index="sel_index"
      :disable-scroll="true"
      @close="sel_index = null"
    />

    <StackGrid
      :columnWidth="gWidth"
      :gutterX="15"
      :gutterY="15"
      easing="easeOut"
    >
      <!-- you component like this -->
      <div class="stack-item"
           v-for="(item, index) in dataset" :key="index"
      >
        <div class="img_div">
          <img :src="item.url">
          <div class="img-hover">
            <div class="img-body">
              <div class="title">
                <div>
                  {{item.title}}
                </div>
              </div>
              <div class="zoom-img" @click="sel_index = index">
                <b-icon icon="search" scale="1.1"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StackGrid>
    <!--<stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
      <stack-item v-for="(item, i) in dataset" :key="i">
        <div class="img_div">
          <img :src="item.img">
        </div>
      </stack-item>
    </stack>-->

  </div>

</template>
<script>
  import StackGrid from 'vue-stack-grid-component'
  import images from './images'
  import { LightGallery } from 'vue-light-gallery';
  import AOS from 'aos';
  import infoPageData from "./infoPageData";
  export default {
    components: { StackGrid,LightGallery},
    mounted() {

    },
    created() {
      console.log(images)
      //this.dataset=images
      this.showMore()
      window.addEventListener('scroll', this.handleScroll);
      this.orderImgs()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
      this.dataset=[]
    },
    data(){
      return{
        gWidth:300,
        images,
        dataset:[],
        isGettingImg:false,
        sel_index:null
      }
    },
    methods:{
      showMore(){
        let dataLength=this.dataset.length
        console.log(this.dataset.length,images.length)
        if (dataLength===images.length || this.isGettingImg)return;
        this.isGettingImg=true
        console.log(dataLength)
        for (let index=0;index<images.length;index++){
          if (index>=dataLength && index<=dataLength+5){
            this.dataset.push(images[index])
          }
        }
        this.orderImgs()
      },
      orderImgs(){
        let self=this
        setTimeout(function() {
          self.gWidth--
          self.gWidth++
          self.isGettingImg=false
        }, 500);
      },
      rest(){

      },
      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        var scrollPos = window.scrollY
        var winHeight = window.innerHeight
        var docHeight = document.documentElement.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        if (perc>90 && this.isGettingImg==false){
          this.showMore()
        }
      }
    }
  }
</script>
<style scoped>
  .col-sm-6{
    padding: 0!important;
  }
</style>
