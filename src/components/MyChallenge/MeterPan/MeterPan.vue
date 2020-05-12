<template>
  <div class="c_handle_pan">
    <slot name="pan">
      <img src="./pan.png" style="width: 100%">
    </slot>
    <img :style="{'transform':'rotate('+charge.val/charge.total*180+'deg)'}" class="needle" src="./niddle.png">
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
        timer:null,
        charge:{
          total:this.total,
          val:this.val
        }
      }
    },
    beforeDestroy() {
      this.timer=null
    },
    created() {
      this.$emit('input',this.charge)
      this.$emit('change',this.charge)
      // this.current_sec=this.val
      let self=this
      this.timer=setInterval(function () {
        if (self.charge.val==0) return;
        self.charge.val--
      },1000)
    },
  }
</script>
