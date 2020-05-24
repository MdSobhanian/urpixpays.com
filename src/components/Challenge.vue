<template>
  <div class="g_challenge">
    <div class="challenge_div_header">
      <vs-card class="cardx">
        <div slot="header" class="challenge-header">
          <div style="position: relative">
            <span style="float: left;font-size: 14px;margin-top: 3px">
              Prize:${{cList2.prize}}
            </span>
            <span style="float: right;font-size: 14px;margin-top: 3px">
                Votes: {{cList2.votes || 0}}
              </span>
            <div style="font-size: 16px;font-weight: bold">{{cList2.title}}</div>
          </div>
        </div>
        <div class="main_img"
             :style="{'background-image' : 'url(' + cList2.img_url+')'}">
          <div class="main_img_title"> {{cList2.sponsor_name}} </div>
          <div class="left_time">
            {{status=='open'? this.time: 'Ended'}}
          </div>
          <div v-if="status=='open'" class="join_btn" style="width:60px; padding: 0; position: absolute; bottom: 120px; left: 140px;" >
            <b-button class="join_btn1" @click="joinChallenge = true" style="background: rgba(0,0,0,0.5); color: white; letter-spacing: 1px;">Join</b-button></div>
        </div>
        <vs-prompt
          color="rgb(60, 139, 221)"
          cancel-text="Cancel"
          @accept="join_Challenge()"
          accept-text="Continue"
          :title="this.cList2.title"
          :active.sync="joinChallenge">

          <div class="con-exemple-prompt">
            <div class="centerx" style="min-width: 350px; min-height: 300px;">
                {{this.cList2.description}}
            </div>
          </div>
        </vs-prompt>
      </vs-card>
    </div>
  </div>
</template>
<script>
  import store from "../store";
  export default {
    props: {
      cList1:{
        type:Object,
        default: function () { return {} }
      },
      status: {
        type: String,
        default: 'open'//past
      }
    },
    created() {
    
      let self=this
      var currentDate = new Date()
      var startDate = new Date(this.start_at)
      var diff = parseInt((startDate - currentDate)/1000) + this.cList2.period*3600
        console.log(diff)
      self.time = self.getTime(diff)
      // console.log('this.cdata check', this.cList1)
      this.timer=setInterval(function () {
        if (diff==0) return;
        diff--
        // console.log(diff)
        self.time = self.getTime(diff)
      },1000)
    },
    data(){
      return{
        cList2: this.cList1,
        time: 0,
        start_at: "2020-05-18T21:22:24.507Z",
        joinChallenge: false
      }
    },
    beforeDestroy() {
      this.timer=null
    },
    methods:{
      getTime(val){
        let s=val % 60
        let m=val / 60 % 60
        let h=val /60/60%60
        return `${h.toFixed(0)}:${m.toFixed(0)}:${s.toFixed(0)}`
      },
      join_Challenge(){
        console.log(this.cList2._id)
        let join_item={
          c_id: this.cList2._id,
          created_at: new Date().toISOString(),
          variable: {
            vote_count: 0,
            voted_count: 0,
            status:'Active'
          }
        }
        window.axios.post(`${process.env.VUE_APP_API_URL}join_challenge`, {data:join_item,uid:store.state.userData.auth.uid}).then(({data})=>{
          this.$vs.notify(data.notify);
        })
      }
    }
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
        left: 95px;
        width: 150px;
        bottom: 0;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 5px;
        font-size: 16px;
        letter-spacing: 2px;
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
<style>

</style>
