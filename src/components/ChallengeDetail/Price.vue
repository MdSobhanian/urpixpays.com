<template>
  <div  class="rank-container">
    <b-row>
      <b-col lg="9" class="rank-item-container">
        <b-table hover :items="items" :fields="fields"></b-table>
      </b-col>
      <b-col lg="3" class="rank-profile-container">
        <div class="profile">
        </div>
        <label style="font-weight: 500; font-size: 20px; color: black">URPIXPAYS.COM</label>
        <div class="award-img">
        </div>
        <label style="color: #1982c4; font-size: 15px;">AWARD PRICE: $<strong style="font-size: 25px; color: darkgreen">300</strong></label>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  export default {
    name: 'Price',
    data(){
      return{
        fields: ['Rank', 'Award','Flip','Wand','Charge'],
        items: [
          { Rank:'1',Award: '100',Flip:'-',Wand:'-',Charge:'-',_cellVariants: { Rank: 'warning', Award: 'success',Flip:'danger',Wand:'danger',Charge:'danger' }},
          { Rank:'2',Award: '5',Flip:'-',Wand:'-',Charge:'-',_cellVariants: { Rank: 'warning', Award: 'success',Flip:'danger',Wand:'danger',Charge:'danger' }},
          { Rank:'3',Award: '3',Flip:'-',Wand:'-',Charge:'-',_cellVariants: { Rank: 'warning', Award: 'success',Flip:'danger',Wand:'danger',Charge:'danger' } },
          { Rank:'4',Award: '2',Flip:'-',Wand:'-',Charge:'-',_cellVariants: { Rank: 'warning', Award: 'success',Flip:'danger',Wand:'danger',Charge:'danger' } },
          { Rank:'5',Award: '1',Flip:'-',Wand:'-',Charge:'-',_cellVariants: { Rank: 'warning', Award: 'success',Flip:'danger',Wand:'danger',Charge:'danger'  } },
          { Rank:'6-10',Award: '-',Flip:'3',Wand:'3',Charge:'3',_cellVariants: { Rank: 'primary', Award: 'danger',Flip:'info',Wand:'info',Charge:'info' } },
          { Rank:'11-50',Award: '-',Flip:'2',Wand:'2',Charge:'2',_cellVariants: { Rank: 'primary', Award: 'danger',Flip:'info',Wand:'info',Charge:'info' } },
          { Rank:'51-100',Award: '-',Flip:'1',Wand:'1',Charge:'1',_cellVariants: { Rank: 'primary', Award: 'danger',Flip:'info',Wand:'info',Charge:'info' } },

        ]
      }
    },
    props: {

    },

  }
</script>
<style scoped>
  .rank-container{
    padding: 20px;
    padding-bottom: 0;
    margin: 20px;
    border: 1px solid lightgray;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.38);
  }
  .rank-item label{
    margin: 0;
  }
  .rank-item-container{
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }
  .rank-profile-container{
    padding-top: 20px;
  }
  .profile{
    width: 100px;
    height: 100px;
    background-image: url("http://resource.crazy-about-photography.com/static/imgs/landing/f_logo.png");
    background-position: center;
    background-size: contain;
    border-radius: 50%;
    margin: auto;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.38);
  }
  .award-img{
    width: 150px;
    height: 150px;
    background-image: url("http://resource.crazy-about-photography.com/static/imgs/InfoPage/ip18.jpg");
    background-position: center;
    background-size: contain;
    border-radius: 10px;
    margin: auto;
    /*box-shadow: 0 0 15px 0 rgba(0,0,0,0.38);*/

  }
  @media screen and (max-width: 600px) {
    .rank-item-container{
      padding:0;
    }
    .rank-container{
      margin: 10px;
    }
  }
</style>
<style>
  .table{
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.38);
  }
  .table th{
    text-align: center;
    border: none;
    background: #161e2c;
    color: white;
    font-weight: normal;
    border: 1px solid white;
    border-bottom: 1px solid white;
    padding: 10px;
  }
  .table td{
    /*background: #afc7ed;*/
    border: 1px solid white;
    padding:5px;
  }
</style>
