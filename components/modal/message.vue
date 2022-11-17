<template>
  <el-dialog v-model="show" custom-class="dialog" :show-close="false" :width="450">
    <div class="head">
      <h2>
        {{title}}
      </h2>
    </div>

    <div class="cont">
      {{description}}
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
  title:string
  description:string
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
    message:'판매재개가 완료되었습니다.'
  })
  show.value = false
}
</script>

<style lang="scss" scoped>

.dialog{
  .head{
    display:flex;
    align-items: center;
    padding:20px;
    padding-bottom:15px;
    line-height:1;
    
    h2{
      display:flex;
      align-items: center;
      font-size:18px;
      font-weight:600;
      color:#292929;
    }
  }
  .cont{
    padding:0 20px;
    font-size:16px;
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