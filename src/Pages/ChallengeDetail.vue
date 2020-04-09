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
        <div>
          Detail
        </div>
      </vs-tab>
      <vs-tab label="Prize">
        <div>
          Prize
        </div>
      </vs-tab>
      <vs-tab label="Top Photos">
        <div>
          Top Photos
        </div>
      </vs-tab>
      <vs-tab label="Rank">
        <div>
          Rank
        </div>
      </vs-tab>
      <vs-tab label="Invite">
        <div>
          Invite
        </div>
      </vs-tab>
    </vs-tabs>

    Challege Page{{$route.params.id}}
  </div>
</template>
<script>
  export default {

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
