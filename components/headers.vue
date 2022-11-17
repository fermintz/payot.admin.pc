<template>
  <header>
    <div class="left">
      <div class="search">
        <input type="text" placeholder="회원 전화번호 검색"/>
        <el-button text circle>
          <span class="material-icons">search</span>
        </el-button>
      </div>
    </div>
    <div class="right">
      <div class="profile">
        <div class="service-icon">
          <label class="kiosk">KIOSK</label>
          <label class="smartpay">SMART PAY</label>
        </div>
        <div class="name">
          <strong>워시앤클린</strong>
          <span>광안점</span>
        </div>
      </div>

      <el-button circle class="circle-btn" @click="dropdown = true" @blur="dropdown = false">
        <span class="material-icons">sync_alt</span>
      </el-button>
      
      <div class="shopmenu" v-show="dropdown">
        <el-button @click.stop="dropdown = false">워시앤클린 광안점</el-button>
        <el-button @click.stop="dropdown = false">워시앤클린 해운대점</el-button>
      </div>
      
      <el-button circle class="circle-btn" @click="$router.push('settings')">
        <span class="material-icons">settings</span>
      </el-button>
      <el-button round class="logout" @click="$router.push('login')">
        로그아웃
      </el-button>
    </div>
  </header>
</template>

<script lang="ts" setup>

const dropdown = ref(false)

</script>


<style lang="scss" scoped>
header{
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:80px;
  border-bottom:1px solid #e2e2e2;

  .left{
    display:flex;
    align-items: center;
    gap:10px;
    .el-button.homeBtn{
      width:40px;
      margin:0;
      height:40px;
      background:#E4E9F5;
      span{
        color:#1E5DEF;
        font-size:20px;
      }
    }

    .search{
      display:flex;
      align-items: center;
      background:#E4E9F5;
      border-radius:20px;
      overflow:hidden;
      padding-right:5px;
      input{
        border:0;
        height:40px;
        background: transparent;
        outline: none;
        padding:0 20px;
      }
      .el-button{
        margin:0;
        width:30px;
        height:30px;
        span{
          font-size:20px;
          transform: rotate(0.04deg);
        }
      }
    }
  }

  .right{
    position: relative;
    display:flex;
    gap:10px;

    .shopmenu{
      position: absolute;
      z-index:99;
      top:50px;
      background:#fff;
      padding:15px;
      border-radius:10px;
      border:1px solid #e2e2e2;
      right:0px;
      display:Flex;
      flex-direction: column;
      gap:10px;
      width:200px;

      .el-button{
        width:100%;
        height:40px;
      }
    }
    .profile{
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right:20px;
      .name{
        display:flex;
        align-items: center;
        font-size:18px;
        strong{
          margin-right:5px;
          font-weight:500;
          transform: rotate(0.04deg);
        }
        span{
          font-weight:500;
          transform: rotate(0.02deg);
          color:#008AA7;
        }
      }
      .service-icon{
        display:flex;
        gap:5px;
        margin-bottom:4px;
        label{
          display:flex;
          align-items: center;
          height:14px;
          font-size:10px;
          color:#fff;
          padding:0 5px;
          border-radius:3px;
        }
        label.kiosk{
          background:#E61245;
        }
        label.smartpay{
          background:#1E5DEF;
        }
      }
    }
    .el-button{
      margin:0;
      height:40px;
    }
    .circle-btn{
      width:40px;
      span{
        font-size:18px;
      }
    }
  }
}
</style>