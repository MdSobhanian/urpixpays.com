<template>
  <div class="challenge-detail">
    <vs-card class="cardx">
      <div slot="media">
        <div class="media" style="background-image: url('https://urpixpays.com/public/uploads/challengesimages/439dragonfly-1122445_1920.jpg')">
          <div class="challenge-title-container">
              <div class="challenge-title">
                <div class="challenge-name">Your Best Shots!</div>
              </div>
          </div>
        </div>
      </div>
    </vs-card>
    <vs-tabs alignment="center">
      <vs-tab label="Detail">
        <detail></detail>
      </vs-tab>
      <vs-tab label="Prize">
        <price></price>
      </vs-tab>
      <vs-tab label="Top Photos">
        <top-photos></top-photos>
      </vs-tab>
      <vs-tab label="Rank">
        <rank></rank>
      </vs-tab>
      <vs-tab label="Invite">
        <invite></invite>
      </vs-tab>
    </vs-tabs>
    Challenge Page{{$route.params.id}}
  </div>
</template>
<script>
  import Invite from "../components/ChallengeDetail/Invite";
  import Price from "../components/ChallengeDetail/Price";
  import TopPhotos from "../components/ChallengeDetail/Topphotos";
  import Detail from "../components/ChallengeDetail/Detail";
  import Rank from "../components/ChallengeDetail/Rank";
  export default {
    components:{
      Detail,
      Invite,
      Price,
      Rank,
      TopPhotos
    }
  }
</script>
<style lang="scss">
  .challenge-detail{
    .media{
      width: 100%;
      height: 300px;
      background-size: cover;
      background-position: center;
    }
    .vs-tabs--li{
      width: 130px;
    }
    .con-vs-card{
      margin-bottom: 10px;
    }
    .activeChild button.vs-tabs--btn{
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .vs-tabs--li button.vs-tabs--btn{
      padding: 5px;
      height: 100%;
    }
  }
  .challenge-title-container{
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    border: 8px solid rgba(255,255,255,0.7);
    margin: auto;
    display: table;
  }
  .challenge-title{
    display: table-cell;
    vertical-align: middle;
  }
  .challenge-name{
    width: 300px;
    height: 70px;
    font-size: 35px;
    color: white;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    margin: auto;
  }
</style>
