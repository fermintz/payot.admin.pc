<template>
  <div class="orderCard">
    <div class="top between">
      <div class="icons">
        <div class="cate">
          <label class="order">결제</label>
        </div>
        <div class="service">
          <label class="smartpay">스마트페이</label>
        </div>
      </div>
      <div class="date">
        39분 43초
      </div>
    </div>
    <div class="middle between">
      <div class="info">
        <div class="title">
          대형봉투/섬유유연제 판매기
        </div>
        <div class="user">
          010-8525-4561
        </div>
      </div>
      <div class="price">
        <strong>5,000원</strong>
      </div>
    </div>
    <div class="bottom">
      <div class="between">
        <span>잔여포인트</span>
        <strong>13,500P</strong>
      </div>
      <div class="between">
        <span>스마트페이 결제</span>
        <strong>3,000원</strong>
      </div>
      <div class="between">
        <span>포인트 결제</span>
        <strong>2,000원</strong>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderCard{
  border:1px solid #e2e2e2;
  border-radius:8px;
  min-height:90px;
  padding:15px;
  background:#fff;
  width:100%;

  .top{
    margin-bottom:15px;

    .icons{
      display:flex;
      align-items: center;
      gap:5px;
      label{
        display:flex;
        align-items: center;
        font-size:12px;
        padding:0 5px;
        height:20px;
        background:#292929;
        color:#fff;
        border-radius:3px;
      }
      .cate{
        .order{
          background:#E61245;
        }
        .chage{
          background:#1E5DEF;
        }
      }
    }
    .date{
      font-size:14px;
      color:#797979;
    }
  }
  .middle{
    .info{
      .title{
        font-weight:500;
      }
      .user{
        font-size:14px;
        color:#797979;
        margin-top:3px;
      }
    }
    .price{
      strong,span{
        display:block;
        text-align:right;
      }
      strong{
        font-size:18px;
        font-weight:600;
      }
      span{
        font-size:12px;
        margin-top:3px;
      }
    }
  }
  .bottom{
    display:flex;
    flex-direction: column;
    gap:5px;
    background:#f2f2f2;
    padding:10px;
    border-radius:5px;
    font-size:14px;
    margin-top:15px;

    span{
      color:#797979;
    }
  }
}
</style>