<template>
  <div class="sales_history">
    <div class="subHeader">
      <div class="title">
        <h2>이용 히스토리</h2>
      </div>
    </div>

    <div class="contents">
      <el-row gutter="20">
        <el-col :lg="16">
          <div class="box calendar">
            <div class="head">
              <div class="month">
                <strong>{{ $dayjs(month).format('YYYY.MM') }}</strong>
                <el-button text @click="dec(1)">
                  <span class="material-icons">chevron_left</span>
                </el-button>
                <el-button text @click="inc(1)">
                  <span class="material-icons">chevron_right</span>
                </el-button>
              </div>
    
              <p>날짜를 클릭하시면 해당일의 상세한 이용 히스토리를 확인하실 수 있습니다.</p>

            </div>

            <div class="body">
              <div class="week_text">
                <span>일요일</span>
                <span>월요일</span>
                <span>화요일</span>
                <span>수요일</span>
                <span>목요일</span>
                <span>금요일</span>
                <span>토요일</span>
              </div>
              <div class="week" v-for="(week, weekIndex) in calendar" :key="weekIndex">
                <dl 
                  class="day" 
                  v-for="(day, dayIndex) in week" 
                  :key="dayIndex" 
                  :class="{
                    not:$dayjs(day).isBefore($dayjs(month).startOf('month')) || $dayjs(day).isAfter($dayjs(month).endOf('month')),
                    today:$dayjs(day).format('MMDD') === $dayjs().format('MMDD')
                  }"
                > 
                  <dt>{{ $dayjs(day).format('D') }}</dt>
                  <dd>158,000원</dd>
                </dl>
              </div>
            </div>
          </div>  
        </el-col>
        <el-col :lg="8">         
          <div class="box history_list">
            <div class="day_text">
              <strong>07일</strong>
              <span>토요일</span>
            </div>

            <el-divider></el-divider>

            <div class="list">
              <dl>
                <dt>15시</dt>
                <dd>
                  <div class="item">
                    <div class="top between">
                      <div class="icons">
                        <div class="cate">
                          <label class="chage">충전</label>
                        </div>
                        <div class="service">
                          <label>키오스크-카드</label>
                        </div>
                      </div>
                      <div class="date">
                        23분 32초
                      </div>
                    </div>
                    <div class="middle between">
                      <div class="info">
                        <div class="title">
                          포인트 충전
                        </div>
                        <div class="user">
                          010-8525-4561
                        </div>
                      </div>
                      <div class="price">
                        5,000원
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="between">
                        <span>잔여포인트</span>
                        <strong>10,000P</strong>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>

              <dl>
                <dt>13시</dt>
                <dd>
                  <div class="item">
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
                        5,000원
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="between">
                        <span>잔여포인트</span>
                        <strong>5,000P</strong>
                      </div>
                      <div class="between">
                        <span>스마트페이 결제</span>
                        <strong>3,000원</strong>
                      </div>
                      <div class="between">
                        <span>포인트 결제</span>
                        <strong>-2,000P</strong>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@vueuse/shared';

const { $dayjs } = useNuxtApp();
const { inc, dec, count } = useCounter(0, { max: 0, min: -12 })
const { month, calendar } = useCalendar();

watch(count, value => {
  month.value = $dayjs().add(value, 'month').toDate()
})

</script>

<style lang="scss" scoped>
.calendar{
  padding:40px;
  .head{
    margin-bottom:70px;

    .month{
      display:flex;
      align-items: center;
      strong{
        font-size:42px;
        font-weight:600;
        margin-right:30px;
      }
      .el-button{
        width:30px;
        height:30px;
        border-radius:5px;
        background:#f2f2f2;
      }
    }
    p{
      margin-top:15px;
      color:#797979;
    }
  }
  .body{
    .week_text{
      display:flex;
      align-items: center;
      gap:30px;
      margin-bottom:20px;
      span{
        font-size:12px;
        font-weight:500;
        flex:1;
        &:first-child{
          color:#E61245
        }
        &:last-child{
          color:#1E5DEF;
        }
      }
    }
    .week{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  
      gap:20px;

      .day{
        position: relative;
        flex:1;
        border-top:2px solid #f2f2f2;

        padding:12px 0;
        padding-bottom:40px;

        &:hover{
          border-top:2px solid #19BE2F;
          cursor: pointer;
        }

        dt{
          font-size:20px;
          font-weight:500;
          margin-bottom:15px;
          
        }
        dd{
          font-size:13px;
          color:#595959;
        }
      }
      .day.not{
        dt{
          color:#c2c2c2 !important;
        }
        dd{
          display:none;
        }
      }
      .day.today{
        dt:before{
          content:'';
          width:40px;
          height:40px;
          position: absolute;
          left:-7px;
          top:6px;
          background:rgb(25, 190, 47,0.2);
          z-index:1;
          border-radius:20px;
        }
      }

      .day:first-child{
        dt{
          color:#E61245
        }
      }
      .day:last-child{
        dt{
          color:#1E5DEF;
        }
      }
    }
  }
  
}


.history_list{
  max-height:calc(100vh - 200px);
  min-height:calc(100vh - 200px);
  overflow-y:auto;

  .list{
    display:flex;
    flex-direction: column;
    gap:40px;
  }

  .day_text{
    strong{
      font-size:32px;
      font-weight:600;
    }
    span{
      margin-left:10px;
      color:#797979;
    }
  }


  dl{
    dt{
      margin-bottom:15px;
      font-weight:600;
      font-size:18px;
    }
    dd{
      display:flex;
      flex-direction: column;
      gap:10px;
    }
  }
  .item{
    border:1px solid #e2e2e2;
    border-radius:8px;
    min-height:90px;
    padding:15px;
    background:#fff;

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
        font-size:18px;
        font-weight:600;
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
      margin-top:10px;

      span{
        color:#797979;
      }
    }
  }
}
</style>