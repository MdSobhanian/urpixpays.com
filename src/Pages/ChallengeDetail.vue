<template>
  <div class="challenge-detail">
    <vs-card actionable class="cardx">
      <div slot="media">
        <div class="media" style="background-image: url('https://urpixpays.com/public/uploads/challengesimages/439dragonfly-1122445_1920.jpg')">
          <span>test</span>
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
    Challege Page{{$route.params.id}}
  </div>
</template>
<script>
  import Rank from "../components/ChallengeDetail/Rank";
  import Invite from "../components/ChallengeDetail/Invite";
  import Price from "../components/ChallengeDetail/Price";
  import TopPhotos from "../components/ChallengeDetail/Topphotos";
  import Detail from "../components/ChallengeDetail/Detail";

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
</style>
