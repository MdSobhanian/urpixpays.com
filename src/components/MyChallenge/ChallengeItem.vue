<template>
  <div class="challenge_div" style="max-width: 900px;margin: auto;"
       >
    <vs-card class="cardx">
      <div slot="header">
        <div style="position: relative;cursor: pointer" @click="gotoChallengeDetail">
              <span style="float: left">
                Prize:${{cData.prize||0}}
              </span>
          <span style="float: right">
                Votes:{{cData.votes||0}}
              </span>
          <div style="font-size: 18px;font-weight: bold">{{cData.title||"default title"}}</div>
        </div>
      </div>
      <div class="main_img"
           :style="{'background-image':`url('${cData.img_url}')`}"
           v-bind:to="'/challenge-detail/'">
        <div class="c_handle">
          <div class="c_handle_item" v-if="status=='open'">
            <vt-meter-pan
              :total="wand.total"
              :val="wand.val"
              :key="JSON.stringify(wand)"
              :images="['https://sss.crazy-about-photography.com/resource/static/imgs/challenge/pan.png','https://sss.crazy-about-photography.com/resource/static/imgs/challenge/niddle.png']"
            />
            <div class="pin_div" @click="wandDlg=true">
<!--              <vs-avatar size="45px" src="https://urpixpays.com/public/img/wand_my.gif"/>-->
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
          <div class="c_handle_item">
            <div v-if="status=='open'">
              <b-button @click="popupVote=true" class="vite_btn" variant="outline-dark" size="sm"
                        style="width: 70px;margin-top: 32px">Vote
              </b-button>
              <vs-popup v-if="popupVote" fullscreen :title="cData.title" :active.sync="popupVote">
                <votes></votes>
              </vs-popup>
            </div>
          </div>
          <div class="c_handle_item" v-if="status=='open'">
            <vt-meter-pan
              :total="charge.total"
              :val="charge.val"
              :key="JSON.stringify(charge)"
              :images="['https://sss.crazy-about-photography.com/resource/static/imgs/challenge/charge.png','https://sss.crazy-about-photography.com/resource/static/imgs/challenge/niddle.png']"
            />
            <div class="pin_div" @click="chargeDlg=true">
<!--              <vs-avatar size="45px" src="https://urpixpays.com/public/img/charge_btn.gif"/>-->
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
        </div>
        <div  @click="gotoChallengeDetail" class="challenge_detail" >Challenge Details</div>
        <div class="left_time">{{status=='open'?'18D 12h:15m:00s':'Ended'}}</div>
      </div>
      <div class="c_imgs">
        <div @click="openConfirm()" class="c_imgs_body">
          <div v-for="item in cData.photo_count">
            <div v-if="cData.imageList && cData.imageList[item-1]"
              class="img"
              :style="{'background-image':`url(${cData.imageList[item-1].info.url})`}"
            >
              <span class="vote_count">{{cData.imageList[item-1].variable.vote_count}}</span>
            </div>
            <div v-else
                 class="img"
                 :style="{'background-image':`url(${$getResourceUrl('static/imgs/uploadimg.jpg')})`}"
            >
<!--              <span class="vote_count">6</span>-->
            </div>
          </div>
        </div>
        <div class="c_imgs_footer" v-if="status=='open'">
          <b-button @click="openConfirm()" variant="outline-dark" size="sm" style="width: 130px;padding: 0">Flip
          </b-button>
        </div>
      </div>

      <vs-prompt
        color="success"
        @cancel=""
        @accept="uploadedImg"
        accept-text="Upload"
        title="Click here or upload or flip."
        :active.sync="activePrompt2">

        <div class="con-exemple-prompt">
          <div class="centerx" style="width: auto">
            <t-file-upload @change="getImg"
                       :limit="cData.photo_count" multiple :gFileList="cData.imageList"
            />
          </div>

        </div>
      </vs-prompt>
    </vs-card>
  </div>
</template>
<script>
  // import MeterPan from './MeterPan/MeterPan'
  // import MeterPan1 from './MeterPan1'
  import Votes from "../ChallengeDetail/Votes";
  import TFileUpload from "../TFileUpload";
  import store from "../../store";

  export default {
    props: {
      status: {
        type: String,
        default: 'open',//past,
      },
      cData: {
        type: Object,
        default: ()=>{{}}
      }

    },
    components: {
       Votes,TFileUpload
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
      uploadedImg() {
        this.imgs.forEach(item=>{
          let formData = new FormData();
          formData.append('file', item.file);
          formData.append('path', `img/challenges/${this.cData._id}/${store.state.userData.auth.uid}/`);
          window.axios.post(
            `${process.env.VUE_APP_API_URL}upload-file`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then((uploadResult) => {
            let img_url = uploadResult.data.data.url
            window.axios.post(
              `${process.env.VUE_APP_API_URL}saveImage`, {c_id:this.cData._id,img_url:img_url,uid:store.state.userData.auth.uid,i_id:item._id}
            ).then(({
                      data
                    }) => {
             /* data.result.ops.forEach(item=>{
                self.dataList.unshift(item)
              })*/
              //Object.assign(self.dataList, data.result.ops)
              console.log('saveImage', data)
              let index=this.cData.imageList.findIndex(item=>item._id===data._id)
              if(index<0){
                this.cData.imageList.push(data)
              }else{
                Object.assign(this.cData.imageList[index],data)
              }
              //this.warningModal = false
              //this.reset()
            })
          });
        })
        /*let formData = new FormData();
        formData.append('file', this.c_img_file);
        formData.append('path', `img/challenges/${this.cData._id}`);
        window.axios.post(
          `${process.env.VUE_APP_API_URL}upload-file`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then((uploadResult) => {
          this.newChallenge.img_url = uploadResult.data.data.url
          this.newChallenge.created_at = new Date().toISOString()
          window.axios.post(
            `${process.env.VUE_APP_APIURL}saveChallenge`, this.newChallenge
          ).then(({
                    data
                  }) => {
            data.result.ops.forEach(item=>{
              self.dataList.unshift(item)
            })
            //Object.assign(self.dataList, data.result.ops)
            console.log('updated', data)
            this.warningModal = false
            this.reset()
          })
        });*/
      },
      getImg(files) {
        this.imgs=files
        console.log('getFile', this.imgs)
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
