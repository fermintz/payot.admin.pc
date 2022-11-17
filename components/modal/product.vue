<template>
  <el-dialog v-model="show" custom-class="remoteDialog" :show-close="false" :width="450">
    <div class="head">
      <h2>
        상품추가
      </h2>
    </div>

    <div class="cont">
      <dl>
        <dt>상품명</dt>
        <dd>
          <input type="text">
        </dd>
      </dl>
      <div class="row">
        <dl>
          <dt>상품가격</dt>
          <dd>
            <input type="text">
            <span>원</span>
          </dd>
        </dl>
        <dl>
          <dt>동작시간</dt>
          <dd>
            <input type="text">
            <span>분</span>
          </dd>
        </dl>
      </div>
      
      <dl>
        <dt>상품설명</dt>
        <dd>
          <textarea placeholder="상품에 대한 간략한 설명을 입력해주세요(생략가능)"> 

          </textarea>
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
    message:'상품등록이 완료되었습니다.'
  })
  show.value = false
  
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

      dd{
        display:Flex;
        align-items: center;

        input{
          width:100%;
          height:40px;
          border-radius:5px;
          border:1px solid #c2c2c2;
          outline: none;
          margin-right:10px;
          padding:0 10px;
        }
      }
    }

    .row{
      input{
        text-align:right;
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