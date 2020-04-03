<template>
  <div class="c_handle_pan" style="background-image: url('static/imgs/challenge/pan.png')">
    <img :style="{'transform':'rotate('+val/total*180+'deg)'}" class="needle" src="static/imgs/challenge/niddle.png">
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
    }
  }
</script>
