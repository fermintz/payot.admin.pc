<template>
  <div class="pointOptions">
    <div class="subHeader">
      <div class="title">
        <h2>포인트 적립률 설정</h2>
       </div>
    </div><!-- subHeader -->
    <div class="service_selector">
      <div class="service">
        <el-button text class="active">
          <span class="material-icons">monitor</span>
          <strong>키오스크 1번</strong>
        </el-button>
        <el-button text>
          <span class="material-icons">monitor</span>
          <strong>키오스크 2번</strong>
        </el-button>
        <el-button text>
          <span class="material-icons">qr_code</span>
          <strong>스마트페이</strong>
        </el-button>
      </div>
    </div>

    <div class="contents">
      <el-row gutter="20">
        <el-col :lg="8">
          <div class="box default_point">
            <div class="box_head">
              <div class="title">
                <h4>결제 구간별 적립률</h4>
                <p>결제될때 적립되는 적립률을 설정합니다.<br/> 지폐, 카드 결제형태에 따라 다르게 적립률을 설정 할 수 있습니다.</p>
              </div>
            </div>
            <el-divider></el-divider>
            <div class="point_list">
              <dl v-for="item in 6" :key="item">
                <dt>1만원 미만 결제시</dt>
                <dd>
                  <div class="textBox">
                    <span>지폐</span>
                    <input type="text" value="0">
                    <span>%</span>
                  </div>
                  <div class="textBox">
                    <span>카드</span>
                    <input type="text" value="0">
                    <span>%</span>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="bottom">
              <el-button text>
                저장하기
              </el-button>
            </div>
          </div>
        </el-col>
        <el-col :lg="16">
          <div class="box event">
            <div class="box_head">
              <div class="title">
                <h4>이벤트 적립률 설정</h4>
                <p>시간대에 따라 다르게 적립률을 설정 할 수 있습니다.<br/> 기본적립률 보다 최우선적으로 적용됩니다.</p>
              </div>
              <div class="btns">
                <el-button @click="visible = true">
                  이벤트 추가하기
                </el-button>
              </div>
            </div>


            <div class="event_list">
              <div class="no-data">
                등록된 이벤트가 없습니다.
              </div>
              <el-row gutter="20">
                <el-col :lg="12" v-for="item in 3" :key="item">
                  <div class="item">
                    <div class="top">
                      <dl class="week">
                        <dt>적용요일</dt>
                        <dd>
                          <span>토</span>
                          <span>일</span>
                          <span>월</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>적용시간</dt>
                        <dd>12시 ~ 18시</dd>
                      </dl>
                    </div>
                    <el-divider></el-divider>
                    <div class="middle">
                      <dl class="between">
                        <dt>1만원 미만</dt>
                        <dd>
                          <span class="cash">지폐 5%</span>
                          <span class="card">카드 5%</span>
                        </dd>
                      </dl>
                      <dl class="between">
                        <dt>1만원 ~ 2만원미만</dt>
                        <dd>
                          <span class="cash">지폐 5%</span>
                          <span class="card">카드 5%</span>
                        </dd>
                      </dl>
                      <dl class="between">
                        <dt>2만원 ~ 3만원미만</dt>
                        <dd>
                          <span class="cash">지폐 5%</span>
                          <span class="card">카드 5%</span>
                        </dd>
                      </dl>
                      <dl class="between">
                        <dt>3만원 ~ 4만원미만</dt>
                        <dd>
                          <span class="cash">지폐 6%</span>
                          <span class="card">카드 6%</span>
                        </dd>
                      </dl>
                      <dl class="between">
                        <dt>4만원 ~ 5만원미만</dt>
                        <dd>
                          <span class="cash">지폐 8%</span>
                          <span class="card">카드 8%</span>
                        </dd>
                      </dl>
                      <dl class="between">
                        <dt>5만원이상</dt>
                        <dd>
                          <span class="cash">지폐 10%</span>
                          <span class="card">카드 10%</span>
                        </dd>
                      </dl>
                    </div>
                    <el-divider></el-divider>
                    <div class="bottom">
                      <el-button>삭제하기</el-button>
                    </div>
                  </div> <!-- item -->
                </el-col>
              </el-row>
            </div> 
          </div> 
        </el-col>
      </el-row>
    </div>

    <modalEvent v-model="visible" />
  </div>
</template>

<script lang="ts" setup>

const visible = ref(false)
</script>

<style lang="scss" scoped>

.service_selector{
  margin-bottom:30px;
  .service{
    display:flex;
    
    .el-button{
      background:#e2e2e7;
      border-radius:10px;
      height:50px;
      padding:0 20px;
      span{
        margin-right:10px;
      }
      label{
        font-size:14px;
        font-weight:600;
      }
    }
    .el-button.active{
      background:#fff;
      border:2px solid #1E5DEF;
      span{
        color:#1E5DEF;
      }
    }
  }
}

.default_point{
  .box_head{
    margin-bottom:0;
  }
  .el-divider{
    margin:40px 0;
  }

  .point_list{
    display:flex;
    flex-direction: column;
    gap:30px;

    dl{
      dt{
        margin-bottom:10px;
      }
      dd{
        display:flex;
        align-items: center;
        gap:20px;
      }
    }
   
  }
  .textBox{
    flex:1;
    display:flex;
    align-items: center;
    border:1px solid #c2c2c2;
    border-radius:5px;

    input{
      width:100%;
      border:0;
      outline: none;
      height:45px;
      text-align:right;
      font-size:18px;
    }
    span{
      padding:0 10px;
      color:#797979;
      font-size:14px;
    }
  }

  .bottom{
    margin-top:40px;
    .el-button{
      width:100%;
      height:50px;
      background:#292929;
      color:#fff;
    }    
  }
}

.event{
  .box_head{
    margin-bottom:40px;

    .btns{
      .el-button{
        height:40px;
        border:2px solid #E61245;
        color: #E61245;
        border-radius:20px;
      }
    }
  }
  .event_list{

    .no-data{
      background:#f2f2f2;
      padding:20px;
      border-radius:10px;
      margin-bottom:20px;
      font-size:14px;
      color:#797979;
    }
    .el-col{
      margin-bottom:20px;
    }
    .item{
      border:1px solid #e2e2e2;
      border-radius:10px;
      padding:20px;
      .top{
        display:flex;
        flex-direction: column;
        gap:10px;
        dl{
          display:flex;
          align-items: center;

          dt{
            width:90px;
            font-size:14px;
            color:#797979;
          }
          dd{
            flex:1;
            font-size:14px;
            font-weight:500;
          }
        }

        .week{
          dd{
            display:flex;
            align-items: center;
            gap:5px;
            span{
              display:flex;
              align-items: center;
              border-radius:3px;
              padding:0 5px;
              height:22px;
              background:#f2f2f2;
              font-size:14px;
              font-weight:normal;
            }
          }
        }
      }
    }

    .middle{
      display:flex;
      flex-direction: column;
      gap:15px;
      dt{
        font-size:14px;
        color:#797979;
      }
      dd{
        display:flex;
        gap:10px;
        span{
          display:flex;
          align-items: center; 
          height:22px;
          padding:0 5px;
          border-radius:3px;
          font-size:12px;
          background:#f2f2f2;
        }
        span.cash{
          background:#F9F2F4;
        }
        span.card{
          background:#EFF2F8;
        }
      }
    }

    .bottom{
      display:flex;
      justify-content: flex-end;
      .el-button{
        height:40px;
      }
    }
  }
}

</style>