<template>
  <div class="ladingPage">
    <b-row >
      <b-col sm="12" style="margin-bottom: -7px;">
        <div class="video_div" style="background: url('static/imgs/landing.PNG');background-repeat: no-repeat;background-size: cover;background-position: center;">
<!--          <video ref="videoRef" class="video-player" loop autoplay muted src="/static/imgs/Urpixpays-4notext.mp4">-->
<!--          </video>-->
          <div class="title"  data-aos="fade-up">
            <div style="font-family: Impact, Charcoal, sans-serif;color: #f2f2f2;">
              <h1 style="color: #f2f2f2">SUBMIT YOUR PHOTOS AND WIN CASH!</h1>
              <h4>You will love taking photos like never before</h4>
              <b-button variant="outline-light" style="font-family: 'Roboto', sans-serif">Join Now</b-button>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="12" class="hover-title">
        <div class="hover-content">As we say “Turn your photos into cash!”</div>
      </b-col>
      <b-col sm="12" style="height: auto; margin-top: 50px;">
        <h2 class="block-title">About Us</h2>
      </b-col>
      <b-col lg="3" sm="6">
        <div class="about-us-cell">
          <div data-aos="fade-right">
            <b-icon icon="camera" font-scale="2.5"></b-icon>
            <p> Who We are?</p>
          </div>
          <div>
            URPIXPAYS was created by a group of passionate photographers. The goal behind its creation has always been to provide photography enthusiasts with a platform on which they can earn exciting rewards by sharing their best snaps and participating in competitive challenges.
          </div>
        </div>
      </b-col>
      <b-col lg="3" sm="6">
        <div class="about-us-cell">
          <div data-aos="fade-right">
            <b-icon icon="bullseye" font-scale="2.5"></b-icon>
            <p>Our Mission</p>
          </div>
          <div>
            to help people show the world their photo taking talent.To provide skillful photographers with a platform on which they can fully express their creativity and share their photography work with people throughout the world and get rewarded for it.
          </div>
        </div>
      </b-col>
      <b-col lg="3" sm="6">
        <div class="about-us-cell">
          <div data-aos="fade-right">
            <b-icon icon="battery-charging" font-scale="2.5"></b-icon>
            <p>Exciting Challenges</p>
          </div>
          <div>
            URPIXPAYS hosts different types of free and paid photography challenges throughout the year, packed with engaging functions i.e. Flip, Charge etc. All that the members have to do is join a challenge, share their work and let the worldwide audience of URPIXPAYS vote for the best.
          </div>
        </div>
      </b-col>
      <b-col lg="3" sm="6">
        <div class="about-us-cell">
          <div data-aos="fade-right">
            <b-icon icon="images" font-scale="2.5"></b-icon>
            <p>Buying and Selling Photos</p>
          </div>
          <div>
            In addition to challenges, URPIXPAYS allows its members to sell their original photography work to rack up some extra cash. Members can even buy a photo if it grabs their attention and for that, URPIXPAYS has a bidding system in place.
          </div>
        </div>
      </b-col>
      <div class="first-image-div-title text" data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1500">
           Urpixpays is where you will be inspired, and in turn receive recognition.
      </div>
      <div class="best-image-div">
        <img data-aos="zoom-in-up" src="/static/imgs/landing/kk.png" width="100%">
      </div>
      <b-col sm="6">
        <div class="video_div">
          <img src="/static/imgs/left.jpg" width="100%">
          <div class="title overlay"></div>
          <div class="title"  data-aos="fade-right" style="width: 100%;">
            <div class="font1">
              Participate in challenges. Learn from the best photographers around the world and earn money.
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6">
        <div class="video_div" style="width: 100%;">
          <img src="/static/imgs/rightt.jpg" width="100%;">
          <div class="title overlay"></div>
          <div class="title"  data-aos="fade-left" style="width: 100%;overflow:hidden">
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
  .row{
    margin:0;
  }
  .col-sm-6{
    padding: 0!important;
  }
  .Intro_div{
    height:auto;
    background: white;
    padding: 50px;
    padding-top: 100px;
    width: 100%;

  }
  .block-title {
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    overflow: hidden;
    margin-top: 50px;
    margin-bottom: 70px;
    color: #2c3e50;
  }
  .block-title:before, .block-title:after {
    content: "";
    background: #ccc;
    display: inline-block;
    height: 1px;
    position: relative;
    width: calc(50% - 180px);
    margin-right: 30px;
    margin-left: 30px;
    vertical-align: middle;
  }
  .about-us-cell{
    width: 90%;
    border:1px solid lightgray;
    border-radius: 10px;
    margin:auto;
    padding:24px;
    min-width: 250px;
    max-width: 280px;
    min-height: 280px;
    margin-bottom: 50px;
    font-size: 13px;
    background: #f0f0f0;
  }
  .about-us-cell p{
    font-size: 18px;
    text-align: center;
  }
  .about-us-cell p::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #2c3e50;
    opacity: 0.8;
    transition: width .3s;
  }

  .about-us-cell p:hover::after {
    width: 80%;
  //transition: width .3s;
    margin:auto;
  }
  .hover-title{
    height: 70px;
    background: rgba(0,0,0,0.3);
    margin-top: -70px!important;
  }
  .hover-content{
    padding: 16px;
    font-size: 4vmin;
    color: #d5d5d5;
  }
  .best-image-div{
    width: 100%;
    max-width: 1300px;
    margin: auto;
    height: auto;
    padding: 20px;
    margin-top: 0!important;

  }
  .best-image-div img{
    float: left;
    position: relative;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.38);
  }
  .first-image-div-title{
    width:100%;
    max-width: 1000px;
    margin: auto;
    height: auto;
    padding:10px;
    text-align: center;
    font-size: 25px;
  }
  .first-image-div-title.text{
    position: relative;
    font-family: verdana;
    font-size: 2.5vw;
    font-weight: 400;
    color: #163d4f;
  }

  @media screen and (max-width: 800px) {
    .first-image-div-title.text{
      font-size: 3.5vw;
    }
    .hover-content{
      padding: 25px;
      font-size: 4vmin;
    }
    .ladingPage .video_div .title div h1 {
      font-size: 9vw;
    }
    .ladingPage .video_div .title div h4 {
      font-size: 5vw ;
    }
  }
</style>
