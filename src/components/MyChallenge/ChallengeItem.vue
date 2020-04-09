<template>
  <div class="challenge_div" style="max-width: 900px;margin: auto;"
       >
    <vs-card class="cardx">
      <div slot="header">
        <div style="position: relative;cursor: pointer" @click="gotoChallengeDetail">
              <span style="float: left">
                Prize:$300
              </span>
          <span style="float: right">
                Votes:50K
              </span>
          <div style="font-size: 18px;font-weight: bold">{{cData.c_name}}</div>

        </div>
      </div>
      <div @click="gotoChallengeDetail" class="main_img"
           :style="{'background-image':`url('${cData.c_img}')`}"
           v-bind:to="'/challenge-detail/'">
        <div class="left_time">{{status=='open'?'18D 12h:15m:00s':'Ended'}}</div>
      </div>
      <div class="c_imgs">
        <div @click="openConfirm()" class="c_imgs_body">
          <div class="img"
               style="background-image: url('https://urpixpays.com/public/uploads/images/f99687dd719c4e8bc6a39e946c3d9ef74667.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img"
               style="background-image: url('https://urpixpays.com/public/uploads/images/cf77069b93279213eddc1ed904c3710c4669.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img"
               style="background-image: url('https://urpixpays.com/public/uploads/images/4efdd2f969559e8b1c92e99f32ded48e4681.jpg')">
            <span class="vote_count">6</span>
          </div>
          <div class="img"
               style="background-image: url('https://urpixpays.com/public/uploads/images/361f69d3b324078d0d1c44f509697c0e1688.jpeg')">
            <span class="vote_count">6</span>
          </div>
        </div>
        <div class="c_imgs_footer" v-if="status=='open'">
          <b-button @click="openConfirm()" variant="outline-dark" size="sm" style="width: 130px;padding: 0">Flip
          </b-button>
        </div>
      </div>
      <div class="c_handle">
        <div class="c_handle_item" v-if="status=='open'">
          <meter-pan :total="wand.total" :val="wand.val" :key="JSON.stringify(wand)"></meter-pan>
          <div class="pin_div" @click="wandDlg=true">
            <vs-avatar size="45px" src="https://urpixpays.com/public/img/wand_my.gif"/>
            <div class="pin_title1" style="display: table-cell;vertical-align: middle">
              <span class="key">Wand</span>
            </div>
          </div>
          <vs-prompt
            color="success"
            @cancel=""
            @accept="setWand()"
            accept-text="Wand"
            title="Wand"
            :active.sync="wandDlg">

            <div class="con-exemple-prompt">
              <div class="centerx" style="width: auto">
                <img height="300" src="https://urpixpays.com/public/img/wand_my.gif"/>
              </div>
            </div>
          </vs-prompt>
        </div>
        <div class="c_handle_item" v-if="status=='open'">
          <meter-pan :total="charge.total" :val="charge.val" :key="JSON.stringify(charge)"></meter-pan>
          <div class="pin_div" @click="chargeDlg=true">
            <vs-avatar size="45px" src="https://urpixpays.com/public/img/charge_btn.gif"/>
            <div class="pin_title1" style="display: table-cell;vertical-align: middle">
              <span class="key">Charge</span>
            </div>
          </div>
          <vs-prompt
            color="success"
            @cancel=""
            @accept="setCharge()"
            accept-text="Charge"
            title="Charge"
            :active.sync="chargeDlg">

            <div class="con-exemple-prompt">
              <div class="centerx" style="width: auto">
                <img height="300" src="https://urpixpays.com/public/img/charge_btn.gif"/>
              </div>
            </div>
          </vs-prompt>
        </div>
        <div class="c_handle_item">
          <div style="display: flex ;justify-content: center;">
            <div class="vote_title">500K</div>
            <img src="https://urpixpays.com/public/img/vote_btn.gif" width="30"/>
          </div>
          <div v-if="status=='open'">
            <b-button @click="popupVote=true" class="vite_btn" variant="outline-dark" size="sm"
                      style="width: 70px;margin-top: 32px">Vote
            </b-button>
            <vs-popup v-if="popupVote" fullscreen title="fullscreen" :active.sync="popupVote">
              <votes></votes>
            </vs-popup>
          </div>
        </div>
      </div>
      <vs-prompt
        color="success"
        @cancel=""
        @accept="uploadedImg"
        accept-text="Upload"
        title="Click here or drag photo to upload or flip."
        buttonAccept="false"
        buttonCancel="false"
        :active.sync="activePrompt2">

        <div class="con-exemple-prompt">
          <div class="centerx" style="width: auto">
            <vs-upload action="" @on-success="successUpload" @update:vsFile="getImg"
                       :limit="4" multiple
            />
          </div>
        </div>
      </vs-prompt>
    </vs-card>
  </div>
</template>
<script>
  import MeterPan from './MeterPan'
  import Votes from "../ChallengeDetail/Votes";

  export default {
    props: {
      status: {
        type: String,
        default: 'open',//past,
      },
      cData: {
        type: Object,
        default: function () {
          return {
            c_id: '1',
            c_name: 'test',
            charge_at: {
              seconds: 12456,
              nanoseconds: '456'
            },
            wand_at: {
              seconds: 12456,
              nanoseconds: '456'
            },
            imgs: [
              {
                id: 'test1',
                url: 'https://urpixpays.com/public/uploads/images/f99687dd719c4e8bc6a39e946c3d9ef74667.jpg'
              },
              {
                id: 'test1',
                url: 'https://urpixpays.com/public/uploads/images/cf77069b93279213eddc1ed904c3710c4669.jpg'
              },
              {
                id: 'test1',
                url: 'https://urpixpays.com/public/uploads/images/4efdd2f969559e8b1c92e99f32ded48e4681.jpg'
              },
              {
                id: 'test1',
                url: 'https://urpixpays.com/public/uploads/images/361f69d3b324078d0d1c44f509697c0e1688.jpeg'
              }
            ],
            rank: 1,
            u_id: '123',
            amountOfImg: 4,
          }
        }
      }

    },
    components: {
      MeterPan, Votes
    },
    mounted() {
      //this.$refs.videoRef.src = "";


    },
    data: () => ({
      activeConfirm: false,
      activePrompt2: false,
      wandDlg: false,
      chargeDlg: false,
      imgs: [],
      charge: {
        val: 50,
        total: 100,
      },
      wand: {
        val: 50,
        total: 100,
      },
      popupVote: false
    }),
    methods: {
      setCharge() {
        this.charge = {
          val: 100,
          total: 100,
          test: Math.random()
        }
        // console.log(this.charge)
        this.$vs.notify({color: 'success', title: 'Charge Success', text: 'Charge is working'})
      },
      setWand() {
        this.wand = {
          val: 100,
          total: 100,
          test: Math.random()
        }
        // console.log(this.charge)
        this.$vs.notify({color: 'success', title: 'Wand Success', text: 'Wand is working'})
      },
      successUpload(res) {
        console.log('successUpload', res)
        this.$vs.notify({color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur'})
      },
      uploadedImg() {

      },
      getImg(e) {
        console.log('getFile', e)
      },
      openConfirm() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Landscape Photography`,
          text: 'Landscape photography shows spaces within the world, sometimes vast and unending, \nbut other times microscopic. \nLandscape photographs typically capture the presence of nature but can also focus on man-made features or disturbances of landscapes. \nLandscape photography is done for a variety of reasons.\n',
          'accept-text': 'Continue',
          accept: this.acceptAlert
        })
      },
      acceptAlert(color) {
        this.activePrompt2 = true
        /*this.$vs.notify({
          color:'danger',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
        })*/
      },
      gotoChallengeDetail() {
        this.$router.push('/challenge-detail/23')
      }
    }
  }
</script>
<style lang="scss">
  .con-vs-dialog .vs-dialog {
    max-width: 500px;
    width: fit-content;
    /*width: 400px;*/
    max-height: 80vh;
    overflow-y: auto;
  }

  .con-img-upload {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .con-vs-dialog .vs-dialog .vs-dialog-text {
    /*width: 100%!important;*/
  }
</style>
