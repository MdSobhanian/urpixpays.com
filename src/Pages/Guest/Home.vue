<template>
  <div class="ladingPage">
    <div class="video_div"
         style="background: url('static/imgs/landing.PNG');background-repeat: no-repeat;background-size: cover;background-position: center;height: 100vh">
      <video ref="videoRef" class="video-player" loop autoplay muted src="/static/imgs/Urpixpays-4notext.mp4">
      </video>
      <div class="title" data-aos="fade-up">
        <div style="font-family: Impact, Charcoal, sans-serif;color: #f2f2f2;">
          <h1 style="color: #f2f2f2">SUBMIT YOUR PHOTOS AND WIN CASH!</h1>
          <h4>You will love taking photos like never before</h4>
          <b-button variant="outline-light" style="font-family: 'Roboto', sans-serif">Join Now</b-button>
        </div>
      </div>
      <div class="hover-title">
        <div class="hover-content">As we say “Turn your photos into cash!”</div>
      </div>
    </div>
    <div class="about-us" >
      <h2 class="block-title" data-aos="flip-left"
          data-aos-easing="ease-out-cubic">About Us</h2>
      <b-row>
        <b-col lg="3" md="6" sm="6">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3 style="font-size: 18px">
                Who We are?
              </h3>
            </div>
            <div slot="media">
              <img src="/static/imgs/landing/21.PNG" height="180px;">
            </div>
            <div>
              <span>URPIXPAYS was created by a group of passionate photographers. The goal behind its creation has always been
              to provide photography enthusiasts with a platform on which they can earn exciting rewards by sharing their
              best snaps and participating in competitive challenges.</span>
            </div>
          </vs-card>
        </b-col>
        <b-col lg="3" md="6" sm="6">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3 style="font-size: 18px">
                Our Mission
              </h3>
            </div>
            <div slot="media">
              <img src="/static/imgs/landing/mission.PNG" height="180px;">
            </div>
            <div>
              <span>To help people show the world their photo taking talent.To provide skillful photographers with a platform on
              which they can fully express their creativity and share their photography work with people throughout the
              world and get rewarded for it.</span>
            </div>
          </vs-card>
        </b-col>
        <b-col lg="3" md="6" sm="6">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3 style="font-size: 18px">
                Exciting Challenges
              </h3>
            </div>
            <div slot="media">
              <img src="https://urpixpays.com/public/uploads/info_images/1568270945Invite_Friends_Urpixpays_optimized.jpg" height="180px;">
            </div>
            <div>
              <span>URPIXPAYS hosts different types of free and paid photography challenges throughout the year, packed with
              engaging functions i.e. Flip, Charge etc. All that the members have to do is join a challenge, share their
              work and let the worldwide audience of URPIXPAYS vote for the best.</span>
            </div>
          </vs-card>
        </b-col>
        <b-col lg="3" md="6" sm="6">
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3 style="font-size: 18px">
                Buying and Selling Photos
              </h3>
            </div>
            <div slot="media">
              <img src="/static/imgs/landing/selling.PNG" height="180px">
            </div>
            <div>
              <span>URPIXPAYS allows its members to sell their original photos to rack up some extra cash. Members can also buy photos through URPIXPAYS bidding system. We are also open to new ideas and chances to improve ourselves, so contact us at URPIXPAYS.</span>
            </div>
          </vs-card>
        </b-col>
      </b-row>
    </div>
    <div style="height: 100vh">
      <div class="first-image-div-title text" data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1500">
        Urpixpays is where you will be inspired, and in turn receive recognition.
      </div>
      <div class="best-image-div">
        <img  src="/static/imgs/landing/kk.png" width="100%">
      </div>
    </div>
    <b-row>
      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>Photo Flip</h3>
          <img src="/static/imgs/InfoPage/ip14.gif" width="100%">
          <h6>The photography challenges hosted by URPIXPAYS are second to none.
            Strive to achieve a successful flip by ensuring that the photo you post
            gets more votes than the one it replaced in a challenge.</h6>
        </div>
      </b-col>
      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>PHOTO EXPERIMENT</h3>
          <img src="/static/imgs/landing/pex.PNG" width="100%">
          <h6>Stand out among the rest by sharing photos that are totally unique.
            For this purpose, URPIXPAYS encourages its members to experiment with
            different photography styles. You never know which shot can make you an overnight sensation.</h6>
        </div>
      </b-col>
      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>Rank</h3>
          <img src="/static/imgs/InfoPage/ip18.jpg" width="100%">
          <h6>The photography challenges hosted by URPIXPAYS are second to none.
            Strive to achieve a successful flip by ensuring that the photo you post
            gets more votes than the one it replaced in a challenge.</h6>
        </div>
      </b-col>
      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>Photo Charge And Wand</h3>
          <img src="/static/imgs/InfoPage/ip13.gif" width="100%">
          <h6>Stand out among the rest by sharing photos that are totally unique.
            For this purpose, URPIXPAYS encourages its members to experiment with
            different photography styles. You never know which shot can make you an overnight sensation.</h6>
        </div>
      </b-col>
      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>CREATIVITY</h3>
          <img src="/static/imgs/landing/art.PNG" width="100%">
          <h6>With URPIXPAYS by your side, you no longer have to suppress your creative self.
            Show us what you are capable of and get rewarded accordingly.</h6>
        </div>
      </b-col>

      <b-col md="6" style="margin-bottom: 20px; padding:20px;padding-top: 0;">
        <div class="title text-content" >
          <h3>Quality</h3>
          <img src="/static/imgs/landing/quality.PNG" width="100%">
          <h6>Experience quality in its finest form.
            Everything that you come across on URPIXPAYS, be it photos,
            challenge moderation or anything else, you will notice that
            we strive to keep everything top-notch and never compromise on quality.
            So, don’t hesitate before getting on board with us!</h6>
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
    methods: {}
  }
</script>
<style lang="scss" scoped>
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
  .hover-title {
    height: 70px;
    background: rgba(0, 0, 0, 0.3);
    margin-top: -70px !important;
  }
  .hover-content {
    padding: 16px;
    font-size: 4vmin;
    color: #d5d5d5;
  }
  .best-image-div {
    width: 100%;
    max-width: 1300px;
    overflow-x: hidden;
    margin: auto;
    height: 90%;
    padding: 20px;
    margin-top: 0 !important;

  }
  .ladingPage .about-us .cardx {
    border-bottom: 2px solid red;
  }
  .best-image-div img {
    float: left;
    position: relative;
    height: 90%!important;
    width: auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.38);
    -webkit-animation-name: move;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    /*-webkit-animation-direction: reverse;*/
    -webkit-animation-timing-function: linear;
  }
  @-webkit-keyframes move {
    0% {
      margin-left: 5px;
    }
    100% {
      margin-left: -600px;
    }
  }
  .first-image-div-title {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: auto;
    padding: 10px;
    text-align: center;
    font-size: 25px;
  }
  .first-image-div-title.text {
    position: relative;
    font-family: verdana;
    font-size: 2.5vw;
    font-weight: 400;
    color: #163d4f;
  }
  @media screen and (max-width: 800px) {
    .first-image-div-title.text {
      font-size: 3.5vw;
    }

    .hover-content {
      padding: 25px;
      font-size: 4vmin;
    }

    .ladingPage .video_div .title div h1 {
      font-size: 9vw;
    }

    .ladingPage .video_div .title div h4 {
      font-size: 5vw;
    }
  }
  //-----infopage-------
  .infoPage{
    padding-bottom: 20px;
  }
  .text-content{
    width: 100%;
    height: 100%;
    border:1px solid lightgray;
    margin-top: 20px;
    padding: 20px;
    float: left;
    border-radius: 5px;
    border-bottom: 3px solid #3c95ac;
    box-shadow: 0 4px 15px 0 rgba(0,0,0,0.5) !important;
  }
  .text-content h3{
    font-size: 17px;
    text-align: left;
    font-weight: 600;
    color: #3c95ac;
  }
  .text-content h6{
    text-align: left;
  }
  .text-content img{
    width: 30%;
    float: left;
    margin-right: 10px;
  }
  @media screen and (max-width: 576px) {
    .text-content h3{
      font-size: 4vw;
    }
  }
</style>
