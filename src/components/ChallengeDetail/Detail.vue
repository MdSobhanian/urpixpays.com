<template>
  <div class="detail-container">
    <b-row>
      <div style="width: 100%; background: black">
        <p class="title" data-aos="flip-left">Your Best Shots!</p>
      </div>

      <b-col md="9" class="content">
        <p class="text-content">We <strong>photographers</strong> love to take photographs.<br> It is hard to select a particular or favorite one form the big collections we have. But for this challenge, you have to choose 4 of your best photos to win the challenge. Wish you all the best! Rules:<br> 1. Both black and white are allowed. 2. Please do not include names and watermarks on photos. 3. Do not submit the same photos. 4. No adults or nudity. 5. You must be the owner and have to provide proof of your ownership to get rewards. 6. Must be 18 years old to participate. 7. Photo counts: 4</p>
      </b-col>
      <b-col md="3" class="profile">
        <div class="profile-img-container">
        </div>
        <h1>Soha Sobhanian</h1>
      </b-col>
    </b-row>
    <b-row class="bottom-content">
      <b-col class="bottom-item">
        <span><i class="fas fa-vote-yea"></i></span><label>29239</label>Votes
      </b-col>
      <b-col class="bottom-item">
        <span><i class="fas fa-clock"></i></span><label>12:00:00</label>
      </b-col>
      <b-col class="bottom-item" style="border-right: 0px;">
        <span><i class="fas fa-award"></i></span><label><span style="font-size: 15px; font-weight: lighter">$</span>300</label>Cash Prize
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import AOS from 'aos';
  export default {
    name: 'Detail',
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
<style scoped>
  .detail-container{
    width: 95%;
    max-width: 1300px;
    padding:20px;
    padding-top: 0;
    padding-bottom: 0;
    margin: auto;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.38);
    margin-top: 20px;
  }

  .detail-container .content{
    padding: 30px;
    text-align: left;
  }
  .detail-container .title{
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    width: 100%;
    margin-bottom: 0px;
    padding: 10px;
  }
  .detail-container .content .text-content{
    font-size: 17px;
    color: black;
    background: lightgoldenrodyellow;
    padding: 10px;
  }
  .detail-container .profile{
    padding: 30px;
    display: table-cell;
    align-content: center;
  }
  .detail-container .profile h1{
    font-size: 25px;
  }
  .profile-img-container{
    width: 150px;
    height: 150px;
    background-image: url("https://urpixpays.com/public/uploads/challengesimages/439dragonfly-1122445_1920.jpg");
    background-size: cover;
    background-position: center;
    margin: auto;
    border-radius: 50%;
  }
  .bottom-content{
    background: rgb(0,0,0);
    padding: 10px;
    font-size: 15px;
  }
  .bottom-content .bottom-item{
    background: rgba(0,0,0,0.6);
    color: white;
    border-right: 1px solid white;
    width: 33.3%;
  }
  .bottom-item label{
    margin:0;
    margin-left:15px;
    margin-right: 5px;
    font-size: 20px;
  }
  .bottom-item span{
    width: 20px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    .bottom-item label{
      margin:0;
      width: 100%;
    }
    .bottom-item span{
      width: 100%;
    }
  }
</style>
