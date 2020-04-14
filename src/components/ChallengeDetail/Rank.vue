<template>
  <div class="rank-container">
    <b-row>
      <b-col v-for="(item, index) in dataset" :key="index" class="rank-row" lg="12">
        <div class="rank">{{item.rank}}</div>
        <div class="votes">{{item.votes}}<span style="position: relative; top: -13px; font-size: 15px;"><i class="fas fa-vote-yea"></i></span></div>
        <div class="profile-container"><div style="float: right;padding: 7px; color: white;">votes:</div>
          <div class="profile-picture"
               :style="{'background-image': 'url('+item.url+')',
                      'background-size': 'cover',
                      'background-position': 'center'}"></div>

        </div>
        <div class="img-container">
          <b-row style="justify-content: center">
            <b-col sm="3" v-for="(item1, index) in item.images"
                   class="img-div" :style="{'background-image': 'url('+item1.url+')','background-position':'center','background-size': 'cover'}">
              <div class="title-item right">
                <b-icon class="item-hover" icon="exclamation-octagon" scale="1.1" style="color: white; text-shadow: 0 0 3px #000000, 0 0 5px #000000;"></b-icon>
              </div>
              <div class="title-item-top left">
                <b-icon class="item-hover" icon="heart" scale="1.1" style="color: white;text-shadow: 0 0 3px #000000, 0 0 5px #000000;"></b-icon>
              </div>
              <div class="each-votes"><i class="fas fa-vote-yea item-hover"></i><label style="margin-left: 5px; font-size:20px;">{{item1.votes}}</label></div>
            </b-col>
          </b-row>
        </div>
        <div class="bottom-container">
          <b-row>
            <b-col class="name" sm="6">
              {{item.name}}
            </b-col>
            <b-col class="country" sm="6">
              {{item.country}}
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import rankimage from './rankimages'
  export default {
    name: 'Rank',
    created() {
      console.log(rankimage)
      this.showMore()
      window.addEventListener('scroll', this.handleScroll);
      this.setInterval=setInterval(this.orderImgs,500);
    },
    beforeDestroy() {
      clearInterval(this.setInterval)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
      this.dataset=[]
    },
    data(){
      return{
        gWidth:300,
        rankimage,
        dataset:[],
        isGettingImg:false,
        sel_index:null,
        setInterval:null
      }
    },
    methods:{
      showMore(){
        let dataLength=this.dataset.length
        console.log(this.dataset.length,rankimage.length)
        if (dataLength===rankimage.length || this.isGettingImg)return;
        this.isGettingImg=true
        console.log(dataLength)
        for (let index=0;index<rankimage.length;index++){
          if (index>=dataLength && index<=dataLength+5){
            this.dataset.push(rankimage[index])
          }
        }
        this.orderImgs()
      },
      orderImgs(){
        this.gWidth--
        this.gWidth++
        this.isGettingImg=false
      },
      rest(){

      },
      handleScroll (event) {
        // Any code to be executed when the window is scrolled
        var scrollPos = window.scrollY
        var winHeight = window.innerHeight
        var docHeight = document.documentElement.scrollHeight
        var perc = 100 * scrollPos / (docHeight - winHeight)
        if (perc>90 && this.isGettingImg==false){
          this.showMore()
        }
      }
    }
  }
</script>
<style scoped>
  .row{
    margin:0;
  }
  .rank-container{
    padding: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.38);
    margin-top: 20px;
  }
  .rank-container .rank-row{
    padding: 20px;
    padding-top: 10px;
    max-width: 900px;
    margin: auto;
  }
  .img-div{
    height: 140px;
    width: 140px;
    max-width: 140px;
    border:1px solid white;
    background: lightcoral;
    margin: 2px;
  }
  .img-container{
    justify-content: center;
    width: 100%;
    max-width: 900px;
    background: lightgoldenrodyellow;
    margin: auto;
  }
  .profile-picture{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #04376e;
    background: greenyellow;
    margin: auto;
    position: relative;
    top: 8px;
    box-shadow: 0 0 15px 0 rgba(4, 53, 109, 0.98);
  }
  .rank{
    background: white;
    width: 60px;
    height: 60px;
    float:left;
    border: 1px solid #043369;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    position: relative;
    top: 20px;
    padding-top: 10px;
    border-radius: 50%;
    box-shadow: 0 0 15px 0 rgba(4, 53, 109, 0.98);
  }
  .votes{
    background: white;
    width: 60px;
    height: 60px;
    float:right;
    border: 1px solid #03366d;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 20px;
    padding-top: 15px;
    border-radius: 50%;
    box-shadow: 0 0 15px 0 rgba(4, 53, 109, 0.98);
  }
  .profile-container{
    width: 90%;
    margin: auto;
    max-width:900px;
    height: 60px;
    border-bottom: 20px solid #04356d;
    margin-bottom: 30px;
    border-radius: 10px;
    /*background: #04356d;*/
  }
  .name{
    background: #03346c;
    padding: 1px;
    color: white;
    font-size: 13px;
    margin-top: 2px;
    border-right: 1px solid #fff;
  }
  .country{
    background: #04356d;
    color:white;
    padding: 1px;
    margin-top: 2px;
    font-size: 13px;
  }
  .each-votes{
    /*padding-top: calc(100% - 0px);*/
    text-align: left;
    color: white;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
    padding-top: calc(100% - 10px);
  }
  .title-item-top.left{
    width: 50%;
    float: left;
    text-align: left;
    padding-top: 10px;
  }
  .title-item.right{
    width: 50%;
    float: right;
    text-align: right;
    padding-top: 10px;
  }
  @media screen and (max-width: 600px) {
    .name{
      border-right: 0px solid black;
    }
  }
  @media screen and (min-width: 902px) {
    .img-div{
      width: 200px;
      min-width: 200px;
      height: 200px;
    }
    .name{
      border-right: 0px solid black;
    }
  }
</style>
