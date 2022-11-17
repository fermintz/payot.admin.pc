<template>
  <el-dialog v-model="show" custom-class="remoteDialog" :show-close="false" :width="450">
    <div class="head">
      <h2>
        010-8525-4561님 
      </h2>
      <p>포인트 충전/적립</p>
    </div>

    <div class="cont">
      <dl class="user">
        <dt>남은 포인트</dt>
        <dd>
          32,000P
        </dd>
      </dl>

      <el-divider></el-divider>

      <dl class="option">
        <dt>서비스선택</dt>
        <dd>
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="1" >포인트 충전하기</el-radio-button>
            <el-radio-button label="2" >포인트 차감하기</el-radio-button>
          </el-radio-group>
        </dd>
      </dl>

      
      <dl class="push">
        <dt>금액입력</dt>
        <dd>
          <input type="text" value="0"/>
          <span>포인트</span>
        </dd>
      </dl>

      <dl class="why">
        <dt>충전/차감 사유</dt>
        <dd>
          <textarea placeholder="충전/차감 사유를 남겨놓으세요"></textarea>
        </dd>
      </dl>
    </div>

    <div class="footer">
      <el-button @click="show = false">취소</el-button>
      <el-button @click="openBox" class="complete">확인</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'

const radio1 = ref(1)

const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

const openBox = ()=>{
  ElMessage({
    type:'info',
    message:'투입이 완료되었습니다.'
  })
}

</script>

<style lang="scss" scoped>

.remoteDialog{
  .head{
    display:flex;
    flex-direction: column;
    padding:20px;
    line-height:1;
    
    h2{
      display:flex;
      align-items: center;
      font-size:18px;
      font-weight:600;
      color:#292929;
    }
    p{
      margin-top:5px;
    }
  }
  .cont{
    padding:0 20px;
    
    dl{
      margin-bottom:30px;
      &:last-child{
        margin-bottom:0;
      }
      dt{
        font-size:14px;
        margin-bottom:10px;
      }
    }
    dl.user{
      display:flex;
      justify-content: space-between;
      align-items: center;
      background:#f5f5f7;
      padding:10px 15px;
      border-radius:10px;
      dt{
        margin-bottom:0px;
        color:#797979;
      }
      dd{
        font-size:18px;
        font-weight:600;
        color:#1E5DEF;
      }
    }

    dl.option{
      dd{
        .el-radio-group{
          display:flex;
          width:100%;
        }
        .el-radio-button{
          flex:1;
        }
      }
    }

    dl.push{
      dd{
        border:1px solid #c2c2c2;
        border-radius:5px;
        padding:0 10px;
        display:flex;
        align-items: center;
        input{
          width:100%;
          border:0;
          height:45px;
          outline: none;
          text-align:right;
          margin-right:10px;
          font-size:16px;
          font-weight:600;
        }
      }
    }

    dl.why{
      dd{
        textarea{
          
        }
      }
    }
  }
  .footer{
    display:flex;
    justify-content: flex-end;
    padding:20px;
    gap:10px;

    .el-button{
      margin:0;
      border:1px solid #c2c2c2;
      height:36px;
    }

    .complete{
      background:#292929;
      color:#fff;
      border:0;
    }
  }
}
</style>