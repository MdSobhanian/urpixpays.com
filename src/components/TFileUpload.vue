<template>
  <div>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-around">
      <input type="file" accept="image/png, image/jpeg" ref="singleInput" @change="UpdateFile" @click="" v-show="false" :key="'c_file_index'+c_file_index"></input>
      <div v-for="(file,index) in files" :key="'background-image'+index">
        <div class="t-upload-div" v-if="file._id=='0' || file.isflip" :key="file.file.size"
             :style="{'background-image': `url(${$getLocalfileUrl(file.file)})`}"
        >
          <div class="t-upload-img-close" @click="files.splice(index,1)">
            X
          </div>
          <div class="t-upload-img-replace"  @click="InputSingle(index)">
            Change
          </div>
        </div>
        <div class="t-upload-div" v-else :key="file._id"
             :style="{'background-image': `url(${file.info.url})`}"
        >
          <!--<div class="t-upload-img-close" @click="files.splice(index,1)">
            X
          </div>-->
          <div class="t-upload-img-replace"  @click="InputSingle(index)">
            Flip
          </div>
        </div>
      </div>
      <div v-if="limit===0 || (files.length<limit && limit!==0)">
        <input type="file" accept="image/png, image/jpeg" ref="multi_input" multiple="" @change="UpdateFiles" v-show="false"></input>
        <div class="t-upload-div"
             :style="{'background-image': `url(${$getResourceUrl('static/imgs/uploadimg.jpg')})`}"
             @click="$refs.multi_input.click()"
        />
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    props:{
      limit:{
        default:0,
        type:Number
      },
      gFileList:{
        type:Array,
        default:()=>{[]}
      },
    },
    data(){
      return{
        files:[],
        c_file_index:0
      }
    },
    created() {
      this.gFileList.forEach(item=>{
        this.files.push(item)
      })
      console.log(this.gFileList,this.files)
    },
    methods:{
      UpdateFiles(e){
        let files=Array.from(e.target.files)
        files.forEach((file,index)=>{
          if (index>=this.limit)return
          let temp={
            _id:"0",
            file:file
          }
          this.files.push(temp)
        })
        let tempFiles=[]
        this.files.forEach(file=>{
          if (file.file){
            tempFiles.push(file)
          }
        })
        this.$emit('change',tempFiles)
        //console.log('get files',this.files)
      },
      UpdateFile(e){
        let temp
        if (this.files[this.c_file_index]._id!=="0"){
          temp=this.files[this.c_file_index]
          temp.file=e.target.files[0]
          temp.isflip=true
        }

        this.files[this.c_file_index]=temp
        let files=this.files;
        this.files=[];
        this.files=files
        let tempFiles=[]
        this.files.forEach(file=>{
          if (file.file){
            tempFiles.push(file)
          }
        })
        this.$emit('change',tempFiles)
        //console.log(this.files)
      },
      InputSingle(index){
        this.c_file_index=index;
        this.$refs.singleInput.click();
      }
    }
  }
</script>
<style scoped>
  .t-upload-div{
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-color: gray;
    box-shadow: 0 0 2px 2px #0003;
    border-radius: 10px;
    margin: 10px;
    position: relative;
    overflow: hidden;
  }
  .t-upload-img-close,.t-upload-img-replace{
    display: none;
  }
  .t-upload-div:hover .t-upload-img-replace{
    display: block!important;
    cursor: pointer;
    position: absolute;
    left: 0;
    bottom: -20px;
    background: radial-gradient(ellipse at center,rgba(0,255,0,0.8) 0,#83333300 70%);
    color: white;
    font-weight: bold;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 50px;
    border-radius: 50% 50% 10px 10px;
    /*box-shadow: 0 0 20px 20px rgba(0,255,0,0.5);*/
    /*transition: 1s;*/
  }
  .t-upload-div:hover .t-upload-img-close{
    display: block!important;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    background: rgba(255,0,0,.5);
    color: white;
    font-weight: bold;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 20px 20px rgba(0,255,0,0.5);
    /*transition: 1s;*/
  }
</style>
