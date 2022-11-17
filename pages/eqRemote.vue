<template>
  <div class="eqRemote">
    <div class="subHeader">
      <div class="title">
        <h2>장비 원격제어</h2>
        <p>장비를 클릭하시면 원격으로 금액을 투입할 수 있습니다.</p>
      </div>
    </div><!-- subHeader -->
    <div class="contents">
      <el-row gutter="20">
        <el-col :lg="6" v-for="item in 8" :key="item">
          <div class="box eq_item" @click="visible = true">
            <div class="info">
              <div class="labels">
                <span class="enable">연결됨</span>
              </div>
              <div class="text">
                <strong>{{item}}번세탁기(27kg)</strong>
                <span>
                  세탁기 | 27kg
                </span>
              </div>
            </div>
            <span class="material-icons icon">
              chevron_right
            </span>
          </div>
        </el-col>
        <el-col :lg="6">
          <div class="box eq_item">
            <div class="info">
              <div class="labels">
                <span class="disable">연결안됨</span>
              </div>
              <div class="text">
                <strong>9번세탁기(27kg)</strong>
                <span>
                  세탁기 | 27kg
                </span>
              </div>
            </div>
            <span class="material-icons icon">
              chevron_right
            </span>
          </div>
        </el-col>
      </el-row>
    </div>

    <ModalRemote v-model="visible" />
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>

.eq_item{
  display:flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover{
    border-color:#1E5DEF;

    .icon{
      color:#1E5DEF
    }
  }
  .info{
    .labels{
      display:flex;
      margin-bottom:10px;
      span{
        display:flex;
        align-items: center;
        height:20px;
        background:#fff;
        border:1px solid #e2e2e2;
        padding:0 5px;
        font-size:12px;
        border-radius:5px;
      }
      span.enable{
        border-color:#1E5DEF;
        color:#1E5DEF;
      }
      span.disable{
        border-color:#E61245;
        color:#E61245;
      }
    }
    .text{
      strong,span{
        display:block;
      }
      strong{
        font-size:16px;
        font-weight:500;
      }
      span{
        font-size:14px;
        color:#797979;
        margin-top:5px;
      }
    }
    
  }

  .icon{
    color:#c2c2c2;
  }
  
}

</style>