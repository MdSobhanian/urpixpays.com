<template>
  <div class="ladingPage">
    <b-row >
      <b-col sm="12" style="margin-bottom: -7px;">
        <div class="video_div" style="background: url('static/imgs/landing.PNG');background-repeat: no-repeat;background-size: cover">
          <video ref="videoRef" class="video-player" loop autoplay muted src="/static/imgs/Urpixpays-4notext.mp4">
          </video>
          <div class="title"  data-aos="fade-up">
            <div style="font-family: Impact, Charcoal, sans-serif;color: #f2f2f2;">
              <h1 style="color: #f2f2f2">SUBMIT YOUR PHOTOS AND WIN CASH!</h1>
              <h4>You will love taking photos like never before</h4>
              <b-button variant="outline-light" style="font-family: 'Roboto', sans-serif">Join Now</b-button>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="12" class="Intro_div">
         <p style="font-size: ">
           Who We are?
         </p>
      </b-col>
      <b-col sm="6">
        <div class="video_div">
          <img src="/static/imgs/left.jpg" width="100%">
          <div class="title overlay"></div>
          <div class="title"  data-aos="fade-right">
            <div class="font1">
              Participate in challenges. Learn from the best photographers around the world and earn money.
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6">
        <div class="video_div">
          <img src="/static/imgs/rightt.jpg" width="100%">
          <div class="title overlay"></div>
          <div class="title"  data-aos="fade-left">
            <div class="font1">
              It doesn’t matter whether you are a professional or amateur photographer, or just starting out. If you take good photos, then money can be on its way to your pocket.
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="12">
        <div class="video_div">
          <img src="/static/imgs/bottom.jpg" width="100%">
          <div class="title overlay"></div>
          <div class="title"  data-aos="fade-down">
            <div class="font1">

            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>

</template>
<script>
  import AOS from 'aos';
  export default {
    mounted() {
      //this.$refs.videoRef.src = "";
      AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });

    },
    created() {

    },
    methods:{

    }
  }
</script>
<style scoped>
  .col-sm-6{
    padding: 0!important;
  }
  .Intro_div{
    height: 300px;
    background: black;
  }
</style>
