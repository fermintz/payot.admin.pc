<template>
  <el-dialog v-model="show" custom-class="dialog" :show-close="false" :width="640" align-center="true">
    <div class="head">
      <h2>
        이벤트 추가하기 
      </h2>
    </div>

    <div class="cont">
      <dl class="week">
        <dt>요일 선택하기</dt>
        <dd>
          <el-checkbox-group v-model="checkGroup" size="large">
            <el-checkbox-button :label="1">월요일</el-checkbox-button>
            <el-checkbox-button :label="2">화요일</el-checkbox-button>
            <el-checkbox-button :label="3">수요일</el-checkbox-button>
            <el-checkbox-button :label="4">목요일</el-checkbox-button>
            <el-checkbox-button :label="5">금요일</el-checkbox-button>
            <el-checkbox-button :label="6">토요일</el-checkbox-button>
            <el-checkbox-button :label="7">일요일</el-checkbox-button>
          </el-checkbox-group>
        </dd>
      </dl>
      <dl class="time">
        <dt>시간 선택</dt>
        <dd>
          <input type="text">
          <span>시 부터</span>
          <input type="text">
          <span>까지</span>
        </dd>
      </dl>

      <el-divider></el-divider>

      <dl class="point">
        <dt>적립률 설정</dt>
        <dd>
          <div class="item top">
            <span>금액구간</span>
            <span>카드적립률(%)</span>
            <span>지폐적립률(%)</span>
          </div>
          <div class="item">
            <span>1만원미만</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
          <div class="item">
            <span>1만원~2만원 미만</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
          <div class="item">
            <span>2만원~3만원 미만</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
          <div class="item">
            <span>3만원~4만원 미만</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
          <div class="item">
            <span>4만원~5만원 미만</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
          <div class="item">
            <span>5만원 이상</span>
            <span>
              <input type="text" value="0">
            </span>
            <span>
              <input type="text" value="0">
            </span>
          </div>
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

const checkGroup = ref([1,])

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
    message:'등록이 완료되었습니다.'
  })
  show.value = false
}

</script>

<style lang="scss" scoped>

.dialog{
  .head{
    display:flex;
    flex-direction: column;
    padding:20px;
    margin-bottom:20px;
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

    .week{
      dd{
        display:flex;
        align-items: center;
        .el-button{
          margin:0;
        }
      }
    }

    .time{
      dd{
        display:flex;
        align-items: center;
        gap:10px;
        input{
          flex:1;
          height:40px;
          border-radius:5px;
          border:1px solid #c2c2c2;
          padding:0 10px;
        }
        span{
          height:40px;
          display:flex;
          align-items: center;
          padding:0 10px;
          border-radius:5px;
          background:#f2f2f2;
        }
      }
    }

    .point{
      border-bottom:1px solid #e2e2e2;
      padding-bottom:20px;
      
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;
        .item.top{
          margin-bottom:10px;
          background:#f2f2f2;
          height:40px;
          border-radius:5px;
          span{
            color:#797979;
          }
        }
        .item{
          display:flex;
          align-items: center;
          span{
            display:flex;
            justify-content: center;
            align-items: center;
            flex:1;
            color:#494949;

            input{
              width:80px;
              height:32px;
              border:1px solid #c2c2c2;
              border-radius:5px;
              text-align:center;
              padding:0 10px;
            }
          }
        }
      }
    }

  }
  .footer{
    display:flex;
    justify-content: flex-end;
    padding:20px;
    margin-top:20px;
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