<template>
  <div class="g_challenge">
    <div class="challenge_div_header">
      <vs-card class="cardx">
        <div slot="header" class="challenge-header">
          <div style="position: relative">
            <span style="float: left;font-size: 14px;margin-top: 3px">
              Prize:$300
            </span>
            <span style="float: right;font-size: 14px;margin-top: 3px">
                Votes:50K
              </span>
            <div style="font-size: 16px;font-weight: bold">Bird Photography</div>
          </div>
        </div>
        <div class="main_img"
             style="background-image: url('https://urpixpays.com/public/uploads/challengesimages/457PGN.jpg')">
          <div class="main_img_title"> Jack </div>
          <div class="left_time">
            {{status=='open'?'18D 12h:15m:00s':'Ended'}}
            <div v-if="status=='open'" class="join_btn" style="float: right;width:60px;padding: 0" >Join</div>
          </div>
        </div>
      </vs-card>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      status: {
        type: String,
        default: 'open'//past
      }
    },
  }
</script>
<style lang="scss">
  .main_img{
    /*.challenge-header{*/
    /*  background: rgba(0,0,0,0.8);*/
    /*  color: white;*/
    /*  padding: 10px;*/
    /*}*/
    /*.main_img_title{*/
    /*  top: 200px;*/
    /*  bottom: 0;*/
    /*}*/
  }
  .g_challenge:hover{
    transform: scale(1.04);
    .main_img_title{
      width: 100%;
    }
  }
  .g_challenge {
    width: 360px;
    padding: 10px;
    transition: .3s;
    .vs-card--content {
      padding: 0;
    }
    .main_img_title{
      position: absolute;
      width: 0;
      overflow: hidden;
      top: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
      margin: auto;
      font-size: 20px;
      /*padding: 14px 5px 14px 5px;*/
      line-height: 38px;
      transition: .3s;
      font-weight: lighter;
    }
    .main_img {
      width: 340px;
      height: 250px;
      background-size: cover;
      background-position: center;
      position: relative;

      .left_time {
        position: absolute;
        width: 100%;
        bottom: 0;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.81);
        margin: 0px;
        padding: 14px 5px 14px 5px;
        .join_btn{
          cursor: pointer;
          border-radius: 5px;
          border: solid 1px white;
        }
        .join_btn:hover{
          background: white;
          color:black;
        }
      }
    }
  }
</style>
