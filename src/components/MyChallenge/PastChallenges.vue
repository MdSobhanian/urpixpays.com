<template>
  <div class="current">
    <challenge-header></challenge-header>
    <div style="margin: 20px 0 0 0; display: flex;flex-wrap: wrap">
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
      <challenge-item status="past"></challenge-item>
    </div>
  </div>
</template>
<script>
  import ChallengeHeader from './ChallengeHeader'
  import ChallengeItem from './ChallengeItem'
  export default {
    components:{
      ChallengeHeader,ChallengeItem
    }
  }
</script>
