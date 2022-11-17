<template>
  <div class="wrap">
    <div class="login">
      <div class="left">
        <img src="~/assets/img/login_img.jpg"/>
      </div>
      <div class="right">
        <div class="title">
          <strong>Login</strong>
          <span>페이오티 시스템 관리자</span>
        </div>
        <el-form>
          <el-form-item>
            <el-input
              v-model="input1"
              :prefix-icon="User"
              placeholder="이메일"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="input2"
              :prefix-icon="Lock"
              type="password"
              placeholder="비밀번호"
              size="large"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="$router.push({path:'/'})">
              로그인
            </el-button>
          </el-form-item>
        </el-form>

        <p>비밀번호가 생각나지 않을때는 카톡으로 문의주세요</p>
      
        <div class="customer">
          <el-button text class="kakao">
            카카오톡 문의
          </el-button>
        </div>
      </div>
    </div>

    <div class="bottom">
      <img src="~/assets/img/logo.png">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'

definePageMeta({
  layout:'empty'
})

const input1 = ref('')
const input2= ref('')

</script>

<style lang="scss" scoped>
.wrap{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100%;
  height:100vh;
  background:#f5f5f7;

  .login{
    display:flex;
    background:#fff;
    border-radius:15px;
    overflow:hidden;
    height:540px;
    box-shadow: 6px 6px 50px rgba(0,0,0,0.07), 1px 1px 1px rgba(0,0,0,0.02);
    
    .left{
      width:500px;
      height:100%;
      background:#f8f8f8;

      img{
        object-fit: cover;
        width:100%;
        height:100%;

        border-radius:0px;
      }
    }
    .right{
      display:flex;
      flex-direction: column;
      justify-content: center;
      width:500px;
      height:100%;
      padding:0 50px;

      .title{
        display:flex;
        flex-direction: column;
        margin-bottom:30px;
        strong{
          font-size:45px;
          font-weight:600;
          color:#393939;
        }
        span{
          font-size:16px;
          margin-top:10px;
          color:#aaa;
          font-weight:400;
        }
      }
      .el-form{
        .el-input{
          height:50px;
        }

        .el-button{
          height:50px;
          width:100%;
          font-size:16px;
          font-weight:500;
          border:1px solid #292929;
        }
      }
      p{
        font-size:12px;
        color:#797979;
        text-align:center;
        background:#f5f5f7;
        padding:10px;
        border-radius:3px;
      }
      .customer{
        display:flex;
        justify-content: center;
        align-items: center;
        .el-button.kakao{
          margin-top:20px;
          height:40px;
          border-radius:20px;
          padding:0 24px;
          background:#f7e111;
          color:#3a1d1d
        }
      }
      
      
    }
  }

  
}

.bottom{
  margin-top:60px;
  img{
    height:50px;
    transform: rotate(0.04deg);
  }
}
</style>