<template>
  <div class="sms">
    <div class="subHeader">
      <div class="title">
        <h2>문자메세지 보내기</h2>
       </div>
    </div><!-- subHeader -->
    <div class="contents">
      <el-row gutter="20">
        <el-col :lg="16">
          <div class="box options">
            <div class="box_head">
              <div class="title">
                <h4>회원조건검색</h4>
                <p>조회하기 버튼을 통해 대상회원을 조회해주세요</p>
              </div>
            </div>

            <el-divider></el-divider>

            <dl class="member">
              <dt>대상회원 설정</dt>
              <dd>
                <el-radio-group v-model="radio1" size="large">
                  <el-radio-button label="1">전체가입자</el-radio-button>
                  <el-radio-button label="2">회원 가입일 기준</el-radio-button>
                  <el-radio-button label="3">회원 이용일 기준</el-radio-button>
                </el-radio-group>
              </dd>
            </dl>

            <dl class="date" v-show="radio1 !== 1"> 
              <dt>기준날짜</dt>
              <dd>
                <input type="text">
                <el-button text>이전</el-button>
                <el-button text>이후</el-button>
              </dd>
            </dl>
            <dl class="price">
              <dt>누적결제금액</dt>
              <dd>
                <input type="text" value="0">
                <span>원 이상 사용자</span>
              </dd>
            </dl>
            <div class="bottom">
              <el-button text>조회하기</el-button>
            </div>
          </div>

          <div class="box option">
            <div class="box_head">
              <div class="title">
                <h4>이벤트 내용입력</h4>
                <p>문자로 보내실 내용을 입력해주세요</p>
              </div>
            </div>

            <el-divider></el-divider>

            <dl class="selec_member">
              <dt>이벤트 적용 회원</dt>
              <dd>0명</dd>
            </dl>
            
            <dl class="event">
              <dt>이벤트 종류</dt>
              <dd>
                <el-radio-group v-model="radio2" size="large">
                  <el-radio-button label="1">문자만 발송</el-radio-button>
                  <el-radio-button label="2">문자발송 + 포인트적립</el-radio-button>
                </el-radio-group>
              </dd>
            </dl>
            
            <dl class="price point" v-show="radio2 !== 1">
              <dt>적립금액 입력</dt>
              <dd>
                <input type="text" value="0">
                <span>포인트</span>
              </dd>
            </dl>
            <dl class="text">
              <dt>문자내용 입력</dt>
              <dd>
                <textarea v-model="text1">

                </textarea>
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="box order">


            <dl>
              <dt>설정된 조건</dt>
              <dd>
                <div class="between">
                  <span>대상회원</span>
                  <strong>0명</strong>
                </div>
                <div class="between">
                  <span>이벤트종류</span>
                  <strong>문자+포인트적립</strong>
                </div>
                <div class="between">
                  <span>대상분류</span>
                  <strong>가입일자 구분</strong>
                </div>
                <div class="between">
                  <span>기준날짜</span>
                  <strong>2022-11-01 이후</strong>
                </div>
              </dd>
            </dl>

            <el-divider></el-divider>

            <dl>
              <dt>
                주문내용
              </dt>
              <dd>
                <div class="between">
                  <span>대상회원x문자발송비용(건당 55원)</span>
                  <strong>0명</strong>
                </div>
                <div class="between">
                  <span>부가가치세</span>
                  <strong>0원</strong>
                </div>
              </dd>
            </dl>

            <el-divider></el-divider>

            <dl class="total">
              <dt>최종금액</dt>
              <dd>0원</dd>
            </dl>

            <el-button>
              문자발송/결제하기
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
const radio1 = ref(1)
const radio2 = ref(1)

</script>

<style lang="scss" scoped>
.sms{
  .box{
    .el-divider{
      margin:30px 0;
    }
    dl{
      margin-bottom:40px;

      dt{
        font-size:16px;
        font-weight:500;
        transform: rotate(0.04deg);
        margin-bottom:15px;
      }
      dd{
        
      }
    }
  }

  .options{
    .member{
      dd{
        display:flex;
        flex-direction: column;
        gap:10px;

        .el-button{
          margin:0;
          height:45px;
          background:#f2f2f2;
        }

        .el-button.active{
          background:#1E5DEF;
          color:#fff;
        }
      }
    }
    .bottom{
      display:flex;
      justify-content: center;
      .el-button{
        width:100%;
        height:45px;
        background:#292929;
        color:#fff;
      }
    }
  }

  .date{
    dd{
      display:flex;
      gap:10px;
      input{
        max-width:240px;
        height:45px;
        padding:0 10px;
        flex:1;
        border-radius:5px;
        border:1px solid #c2c2c2;
        width:100%;
      }
      .el-button{
        margin:0;
        height:45px;
        border:1px solid #c2c2c2;
      }
    }
    
  }

  .price{
    dd{
      display:flex;
      align-items: center;

      input{
        max-width:240px;
        height:45px;
        border:1px solid #c2c2c2;
        border-radius:5px;
        padding:0 10px;
        outline: none;
        text-align:right;
        font-size:18px;
        flex:1;
      }
      span{
        display:flex;
        align-items: center;
        font-size:14px;
        color:#797979;
        height:45px;
        border-radius:5px;
        margin-left:10px;
        background:#f2f2f2;
        padding:0 10px;
      }
    }
  }

  .selec_member{
    dd{
      font-size:24px;
      font-weight:600;
    }
  }

  .event{
    dd{
      display:flex;

      .el-button{
        flex:1;
        height:45px;
        background:#f2f2f2;
      }
      .el-button.active{
        background:#1E5DEF;
        color:#fff;
      }
    }
    
  }

  .text{
    textarea{
      width:100%;
      height:120px;
      padding:10px;
      border-radius:5px;
      resize: none;
      border-color:#c2c2c2;
    }
  }

  .order{
    position: sticky;
    top:20px;

    .view{
      dt{
        margin-bottom:20px;
      }
      dd{
        background:#f2f2f2;
        min-height:100px;
        border-radius:10px;
        padding:10px;
        margin-top:0px;
      }
    }

    dd{
      display:flex;
      flex-direction: column;
      gap:12px;

      .between{
        span{
          font-size:14px;
          color:#797979;
        }
        strong{
          font-weight:500;
        }
      }
    }

    .total{
      dd{
        text-align:right;
        font-size:24px;
        font-weight:600;
        color:#E61245;
      }
    }

    .el-button{
      width: 100%;
      height:50px;
      background:#E61245;
      color:#fff;
      border:0;
    }
  }
}
</style>