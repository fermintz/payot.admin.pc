<template>
  <el-dialog v-model="show" custom-class="remoteDialog" :show-close="false" :width="450">
    <div class="head">
      <h2>
        장비 원격제어
      </h2>
    </div>

    <div class="cont">
      <dl class="selec">
        <dt>선택된 장비</dt>
        <dd>
          1번세탁기(27kg)
        </dd>
      </dl>

      <el-divider></el-divider>

      <dl class="push">
        <dt>투입금액 입력</dt>
        <dd>
          <input type="text" value="0"/>
          <span>원</span>
        </dd>
      </dl>

      <dl class="why">
        <dt>투입사유</dt>
        <dd>
          <textarea placeholder="투입하게된 사유를 남겨놓으세요"></textarea>
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
    align-items: center;
    padding:20px;
    line-height:1;
    
    h2{
      display:flex;
      align-items: center;
      font-size:18px;
      font-weight:600;
      color:#292929;

      span{
        display:flex;
        align-items: center;
        justify-content: center;
        width:24px;
        height:24px;
        border-radius:12px;
        font-size:16px;
        background:#f2f2f2;
      }

      label{
        margin-left:5px;
      }
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

    dl.selec{
      dd{
        display:flex;
        align-items: center;
        background:#f2f2f2;
        border-radius:5px;
        height:45px;
        padding:0 10px;
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