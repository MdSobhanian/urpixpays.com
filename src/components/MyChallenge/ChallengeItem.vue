<template>
  <div class="challenge_div" style="max-width: 900px;margin: auto;">
    <vs-card class="cardx">
      <div slot="header">
        <div style="position: relative">
              <span style="float: left">
                Prize:$300
              </span>
          <span style="float: right">
                Votes:50K
              </span>
          <div style="font-size: 18px;font-weight: bold">Bird Photography</div>

        </div>
      </div>
      <div class="main_img" style="background-image: url('https://urpixpays.com/public/uploads/challengesimages/457PGN.jpg')">
        <div class="left_time">{{status=='open'?'18D 12h:15m:00s':'Ended'}}</div>
      </div>
      <div class="c_imgs">
        <div class="c_imgs_body">
          <div class="img" style="background-image: url('https://urpixpays.com/public/uploads/images/f99687dd719c4e8bc6a39e946c3d9ef74667.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img" style="background-image: url('https://urpixpays.com/public/uploads/images/cf77069b93279213eddc1ed904c3710c4669.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img" style="background-image: url('https://urpixpays.com/public/uploads/images/4efdd2f969559e8b1c92e99f32ded48e4681.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img" style="background-image: url('https://urpixpays.com/public/uploads/images/361f69d3b324078d0d1c44f509697c0e1688.jpeg')">
            <span class="vote_count">6</span>
          </div>
        </div>
        <div class="c_imgs_footer" v-if="status=='open'">
          <b-button variant="outline-dark" size="sm" style="width: 130px;padding: 0" >Flip</b-button>
        </div>
      </div>
      <div class="c_handle">
        <div class="c_handle_item" v-if="status=='open'">
          <meter-pan :total="10" :val="5"></meter-pan>
          <div class="pin_div">
            <vs-avatar size="45px" src="https://urpixpays.com/public/img/wand_my.gif"/>
            <div class="pin_title1" style="display: table-cell;vertical-align: middle">
              <span class="key">Wand</span>
            </div>
          </div>
        </div>
        <div class="c_handle_item" v-if="status=='open'">
          <meter-pan :total="10" :val="8"></meter-pan>
          <div class="pin_div">
            <vs-avatar size="45px" src="https://urpixpays.com/public/img/charge_btn.gif"/>
            <div class="pin_title1" style="display: table-cell;vertical-align: middle">
              <span class="key">Charge</span>
            </div>
          </div>
        </div>
        <div class="c_handle_item">
          <div style="display: flex ;justify-content: center;">
            <div class="vote_title">500K</div>
            <img src="https://urpixpays.com/public/img/vote_btn.gif" width="30"/>
          </div>
          <div v-if="status=='open'">
            <b-button class="vite_btn" variant="outline-dark" size="sm" style="width: 70px;margin-top: 32px">Vote</b-button>
          </div>
        </div>
      </div>

    </vs-card>
  </div>
</template>
<script>
  import MeterPan from './MeterPan'
  export default {
    props:{
      status:{
        type:String,
        default:'open'//past
      }
    },
    components:{
      MeterPan
    }
  }
</script>
