<template>
  <div style="display: flex;flex-wrap: wrap;justify-content: center; padding-top: 50px;">
    <challenge v-for="(item,index) in cList" :key="index" :cList1="item" @joined="JoinChallenge"></challenge>
  </div>
</template>
<script>
import Challenge from "../Challenge";
import store from "../../store";
export default {
  props: {
    gCList: {
      type: Array,
      default: () => ([]),
    }
  },
  components: {
    Challenge
  },
  data() {
    return {
      cList: this.gCList
    };
  },
  created() {
    //console.log('cList',this.cList)
  },
  mounted() {},
  methods: {
    JoinChallenge(c_id){
      this.$emit('joined',c_id)
    }
  }
};
</script>
