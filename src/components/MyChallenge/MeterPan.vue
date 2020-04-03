<template>
  <div class="c_handle_pan" style="background-image: url('static/imgs/challenge/pan.png')">
    <img :style="{'transform':'rotate('+current_sec/total*180+'deg)'}" class="needle" src="static/imgs/challenge/niddle.png">
  </div>
</template>
<script>
  export default {
    props:{
      total:{
        type:Number,
        default:1,
      },
      val: {
        type:Number,
        default:0,
      },
    },
    data(){
      return {
        current_sec:this.val,
        timer:null
      }
    },
    beforeDestroy() {
      this.timer=null
    },
    created() {
      this.current_sec=this.val
      let self=this
      this.timer=setInterval(function () {
        if (self.current_sec==0) return;
        self.current_sec--
      },1000)
    }
  }
</script>
