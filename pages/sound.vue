<template>
  <div class="sound">
    <div class="subHeader">
      <div class="title">
        <h2>키오스크 경고음성 제어</h2>
       </div>
    </div><!-- subHeader -->
    <div class="contents">
      <div class="box">
        <el-row gutter="40">
          <el-col :lg="9">
            <div class="images">
              <img src="~/assets/img/sound.png" />
            </div>
          </el-col>
          <el-col :lg="15">
            
            <div class="box_head">
              <div class="title">
                <span class="material-icons">volume_down</span>
                <h4>음성선택</h4>
              </div>
            </div>

            <div class="items">
              <div class="item between">
                <dl class="text">
                  <dt>
                    <strong>일반 경고음성</strong>
                  </dt>
                  <dd>
                    <span>음성내용</span>
                    <strong>"빨래방을 이용하지 않는 분들은 퇴장해주시길 바랍니다."</strong>
                  </dd>
                </dl>
                <div class="btns">
                  <el-button text>
                    미리듣기
                  </el-button>
                  <el-button text class="export" @click="visible = true">
                    내보내기
                  </el-button>
                </div>
              </div>

              <div class="item between">
                <dl class="text">
                  <dt>
                    <strong>퇴장 경고음성</strong>
                  </dt>
                  <dd>
                    <span>음성내용</span>
                    <strong>"빨래방을 이용하지 않는 분들은 퇴장해주시길 바랍니다."</strong>
                  </dd>
                </dl>
                <div class="btns">
                  <el-button text>
                    미리듣기
                  </el-button>
                  <el-button text class="export" @click="visible = true">
                    내보내기
                  </el-button>
                </div>
              </div>

              <div class="item between">
                <dl class="text">
                  <dt>
                    <strong>CCTV 경고음성</strong>
                  </dt>
                  <dd>
                    <span>음성내용</span>
                    <strong>"CCTV 촬영중입니다. 퇴거하지 않으시면 업무방해로 경찰출동조치 하도록 하겠습니다."</strong>
                  </dd>
                </dl>
                <div class="btns">
                  <el-button text>
                    미리듣기
                  </el-button>
                  <el-button text class="export" @click="visible = true">
                    내보내기
                  </el-button>
                </div>
              </div>
            </div>

          </el-col>
        </el-row>
      </div>
    </div>

    <modalMessage v-model="visible" title="음성송출" description="선택하신 음성을 내보낼까요?"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>
.box_head{
  .title{
    display:flex;
    align-items: center;
    span{margin-right:5px;}
  }
}
.sound{
  .images{
    img{
      width:100%;
    }
  }
  .items{
    display:flex;
    flex-direction: column;
    gap:15px;

    .item{
      border:1px solid #e2e2e2;
      padding:20px;
      border-radius:10px;
      gap:20px;

      .btns{
        .el-button.export{
          color:#1E5DEF;
        }
      }

      .text{
        flex:1;
        dt{
          display:flex;
          align-items: center;
          span{
            margin-right:5px;
            color:#c2c2c2;
            font-size:20px;
          }
          strong{
            font-size:18px;
            font-weight:500;
          }
        }
        dd{
          display:flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top:15px;
          span{
            display:flex;
            align-items: center;
            padding:0 5px;
            background:#f2f2f2;
            border-radius:3px;
            color:#797979;
            height:20px;
            font-size:13px;
            margin-right:10px;
          }
          strong{
            margin-top:8px;
            font-size:15px;
          }
        }
      }
   
    }
  }
}
</style>