<template>
  <div class="invite_challenge_container">
    <div class="invite-btn">
      <b-button variant="outline-info" style="color: white">Invite Now!</b-button><br>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Invite',
    props: {

    },
  }
</script>
<style scoped>
  .invite_challenge_container{
    width: 100%;
    height: 70vh;
    background-image: url("/static/imgs/challenge/invite_friends.PNG");
    background-size: cover;
    background-position: center;
    display: table;
    padding: 20px;
  }
  .invite-btn{
    display: table-cell;
    vertical-align: middle;
  }
  @media screen and (min-width: 600px) {
    .invite_challenge_container{
      height: 90vh;
    }
  }
</style>
