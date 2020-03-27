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
  export default {
    components: { StackGrid,LightGallery},
    mounted() {

    },
    created() {
      console.log(images)
      this.dataset=images
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
        dataset:images,
        isGettingImg:false,
        sel_index:null
      }
    },
    methods:{
      showMore(){
        this.isGettingImg=true
        let temp={
            url:'https://66.media.tumblr.com/523ee4ad81e58df58defe988c4c02050/tumblr_p0fffxcVa11wc8a4vo1_1280.jpg',
            title:'test',
            link:'https://www.instagram.com/elaopatowiecka/'
          }
        this.dataset.push(temp)
        temp={
          url:'https://i.pinimg.com/564x/e7/3a/62/e73a627bc2d405ee7ff82333d44a3daa.jpg',
          title:'test',
          link:'https://www.instagram.com/elaopatowiecka/'
        }
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
        this.dataset.push(temp)
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
