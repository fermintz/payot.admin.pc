<template>
  <el-dialog v-model="show" custom-class="dialog" :show-close="false" :width="900" >
    <div class="head">
      <h2>키오스크 에러 관련 추가공지</h2>
      <p>2022년 10월 10일</p>
    </div>
    <div class="cont">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur iusto omnis laborum, quasi necessitatibus rerum, veritatis consequatur aperiam voluptatibus dolorem sapiente reprehenderit sit molestias ex quas fugit amet ut.
    </div>

    <div class="footer">
      <el-button @click="show = false" class="complete">확인</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
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


</script>

<style lang="scss" scoped>

.dialog{
  .head{
    display:flex;
    flex-direction: column;
    padding:20px;
    line-height:1;
    border-bottom:1px solid #e2e2e2;
    
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
    padding:20px;   
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