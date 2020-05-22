<template>
  <div class="current" style="overflow-y: auto;height: calc(100vh - 300px);" v-on:scroll="handleScroll">
    <challenge-header></challenge-header>
<!--    <b-button @click="test">test</b-button>-->
    <div style="padding: 10px 0 0 0;margin: 10px 0 0 0; display: flex;flex-wrap: wrap;" >
      <challenge-item v-for="(item,index) in cList" :key="index" :c-data="item"></challenge-item>
    </div>

    <!--<div style="height: 500px;display: flex;position: fixed;bottom: 0px; right: 0; z-index: 10;">
      <vt-chart v-for="(chatItem,index) in chatList" :key="index" :g-chat-list="chatItem" user_id="0" />
    </div>-->
  </div>
</template>
<script>
  import ChallengeHeader from './ChallengeHeader'
  import ChallengeItem from './ChallengeItem'
  import mychallengedata from "./mychallengedata";
  import images from "../../Pages/Guest/images";
  import AOS from "aos";
  export default {
    components:{
      ChallengeHeader,ChallengeItem
    },
    data(){
      return{
        mychallengedata,
        cList:[],
        isGettingData:false,
        chatList: [
          { _id: '0',
            users: [
              { uid: '0',
                name: 'tolren',
                photoUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
                title: '',
                read_at:'2020-05-13T11:46:37.254Z' },
              { uid: '1',
                name: 'support',
                photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                title: '',
                read_at:'2020-05-13T11:46:38.254Z' },
              { uid: '2',
                name: 'wenge',
                photoUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
                title: '', read_at:'2020-05-13T11:46:38.254Z' }
                ],
            messages: [
              { text: 'Hello',
                type: 'text',
                isEdit: false,
                created_at: "2020-05-13T11:46:36.254Z",
                edit_at: '',
                uid: '0',
                isSent: true, },
              { text: 'Hello',
                type: 'text',
                created_at: "2020-05-13T11:46:37.254Z",
                edit_at: '',
                uid: '1',
                isSent: true, },
              { text: 'https://randomuser.me/api/portraits/women/45.jpg',
                type: 'file',
                created_at: "2020-05-13T11:46:37.254Z",
                edit_at: '',
                uid: '1',
                isSent: true, },
              { text: 'https://randomuser.me/api/portraits/women',
                type: 'file',
                created_at: "2020-05-13T11:46:37.254Z",
                edit_at: '', uid: '1',
                isSent: true, },
              { text: 'Nice to meet you',
                type: 'text',
                created_at: "2020-05-13T11:46:38.254Z",
                edit_at: '',
                uid: '1',
                isSent: true, },
              { text: 'Nice to meet you too',
                type: 'text',
                created_at: "2020-05-13T11:46:39.254Z",
                edit_at: '',
                uid: '0',
                isSent: true, },
              { text: 'How are you?',
                type: 'text',
                created_at: "2020-05-13T11:48:36.254Z",
                edit_at: '',
                uid: '0',
                isSent: true, }
                ]
          } ]
      }
    },
    created() {
      this.showMore()
      // this.readData()
    },
    mounted() {
      //this.$refs.videoRef.src = "";
      /*AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });*/

    },
    methods:{
      test(){
        this.cList[0].c_name='changed'
        console.log(this.cList[0])
      },
      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        //console.log(event)
        //return
        var scrollPos = event.target.scrollTop
        var winHeight = event.target.clientHeight
        var docHeight = event.target.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        // console.log(perc)
        if (perc>90 && this.isGettingData==false){
          this.showMore()
        }
      },
      showMore(){
        let dataLength=this.cList.length
        //console.log(this.dataset.length,images.length)
        if (dataLength===mychallengedata.length || this.isGettingData)return;
        this.isGettingData=true
        //console.log(dataLength)
        for (let index=0;index<mychallengedata.length;index++){
          if (index>=dataLength && index<=dataLength+1){
            this.cList.push(mychallengedata[index])
          }
        }
        AOS.init({
          easing: 'ease-out-back',
          duration: 1000
        });
        this.isGettingData=false
      },
      readData() {
        window.axios.post(
          `${process.env.VUE_APP_API_URL}getChallenges`,
          {

          }
        ).then(({data})=>{
          // console.log('getChallenges',data)
          this.cList=data.result
          console.log('getchallengeslist',this.cList)
        })
      },
    }
  }
</script>

