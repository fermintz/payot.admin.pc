<template>
  <div class="side">
    <div class="logo">
      <a href="/">
        <img src="~/assets/img/logo.png" />
      </a>
    </div>
    <nav>
      <dl>
        <dt>매출/통계</dt>
        <dd>
          <a href="/history">이용 히스토리</a>
          <a href="/sales">매출내역</a>
          <a href="/comparison">매장 매출비교</a>
        </dd>
      </dl>
      <el-divider />
      <dl>
        <dt>회원관리</dt>
        <dd>
          <a href="/member">회원리스트</a>
          <a href="/sms">문자메세지 보내기</a>
        </dd>
      </dl>
      <el-divider />
      <dl>
        <dt>관리/설정</dt>
        <dd>
          <a href="/kioskOptions">키오스크 설정/제어</a>
          <a href="/sound">키오스크 경고음성 제어</a>
          <a href="/pointOptions">포인트 적립률 설정</a>
          <a href="/eqRemote">장비관리/원격</a>
          <a href="/product">장비 상품설정</a>
        </dd>
      </dl>
    </nav>
  </div> <!-- side -->
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style lang="scss" scoped>
.side{
  position: fixed;
  left:0;
  top:0;
  width:260px;
  padding:0 30px;
  height:100%;
  min-height:100vh;
  .logo{
    display:flex;
    align-items: center;
    height:80px;

    img{
      height:48px;
    }
  }

  nav{
    margin-top:30px;
    dl{
      dt{
        font-size:18px;
        font-weight:500;
        margin-bottom:15px;
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;
        font-size:14px;
        transform: rotate(0.02deg);

        a{
          color:#595959;
          cursor: pointer;
        }
        a:hover{
          color:#1E5DEF;
        }
      }
    }
  }
}
</style>