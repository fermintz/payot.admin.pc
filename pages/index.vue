<template>
  <div class="contents main">
    <el-row gutter="20">
      <el-col :lg="16" :md="24">
        <el-row gutter="20">
          <el-col :lg="12" :md="24">
            <div class="box today_sales">
              <dl>
                <dt>오늘 매출</dt>
                <dd>
                  <div class="total">
                    <strong>156,000원</strong>
                    <span class="material-icons">navigate_next</span>
                  </div>
                  <el-divider />
                  <div class="detail">
                    <div class="item">
                      <span>스마트페이</span>
                      <strong>75,000원</strong>
                    </div>
                    <div class="item">
                      <span>키오스크-지폐</span>
                      <strong>5,000원</strong>
                    </div>
                    <div class="item">
                      <span>키오스크-카드</span>
                      <strong>45,000원</strong>
                    </div>
                    <div class="item">
                      <span>동전</span>
                      <strong>7,500원</strong>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>

            <div class="row">
              <div class="box today_member">
                <dl>
                  <dt>
                    <label>오늘 가입회원</label>
                  </dt>
                  <dd>
                    <strong>10명</strong>
                  </dd>
                </dl>
              </div>
              <div class="box total_member" @click="$router.push('/member')">
                <dl>
                  <dt>
                    <label>총 회원수</label>  
                    <span class="material-icons">navigate_next</span>
                  </dt>
                  <dd>
                    355명
                  </dd>
                </dl>
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :md="24">
            <div class="column">
              <div class="box month_sales">
                <dl>
                  <dt>
                    <label>
                      이번달(11월) 매출
                    </label>
                  </dt>
                  <dd>
                    786,000원
                  </dd>
                </dl>
              </div>
              <div class="box last_month_sales">
                <dl>
                  <dt>
                    <label>
                      지난달(10월) 매출
                    </label>
                  </dt>
                  <dd>
                    2,156,000원
                  </dd>
                </dl>
              </div>
              <div class="box total_point">
                <dl>
                  <dt>
                    <label>
                      회원 전체포인트
                    </label>
                  </dt>
                  <dd>
                    5,412,000P
                  </dd>
                </dl>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="box month_chart">
          <dl>
            <dt>최근(15일) 매출그래프</dt>
            <dd>
              <barChart :data="chartData" :options="chartOptions"/>
            </dd>
          </dl>
        </div>
      </el-col>
      <el-col :lg="8" :md="24">
        <div class="box customer">
          <dl class="notice">
            <dt>공지사항</dt>
            <dd>
              <div class="item new">                 
                <strong>키오스크 에러 관련 추가공지 </strong>
                <span>2022.10.10</span>
                
              </div>
              <div class="item">      
                <strong>키오스크 알림톡 발송시 매장 공지사항 업데이트 안내 공지사항 업데이트 안내</strong>
                <span>2022.08.10</span>
              </div>
              <div class="item">
                <strong>페이오티 간편결제 서비스 업데이트</strong>
                <span>2022.08.09</span>
              </div>
            </dd>
          </dl>
          <el-divider />
          <dl class="info">
            <dt>
              고객지원
            </dt>
            <dd>
              <div class="number">
                <strong>070-7807-6857</strong>
                <span>평일 10:00 ~ 17:00 | 점심 12:30 ~ 14:00 <br/> 토요일/공휴일 휴무</span>
              </div>
              <div class="btns">
                <div class="btn kakao">
                  <label><img src="~/assets/img/kakao.png"/> 카카오톡 문의하기</label>
                  <span class="material-icons">arrow_forward</span>
                </div>
                <div class="btn">
                  <label>부가세 신고용 카드매출 확인</label>
                  <span class="material-icons">arrow_forward</span>
                </div>
                <div class="btn">
                  <label>키오스크 문제발생 메뉴얼</label>
                  <span class="material-icons">arrow_forward</span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div> <!-- contents -->
</template>

<script lang="ts" setup>
import { TChartData } from "vue-chartjs/dist/types"


const chartData: TChartData<'bar', number[], unknown> = {
  labels: [
    "1일",
    "2일",
    "3일",
    "4일",
    "5일",
    "6일",
    "7일",
    "8일",
    "9일",
    "10일",
    "11일",
    "12일",
    "13일",
    "14일",
    "15일",
  ],
  datasets: [
    {
      label: "매출",
      data: [145000, 98000, 123000, 56000, 78000, 124000, 133000, 110000, 98000, 72000, 93000, 145000, 98000, 123000, 56000],
      backgroundColor: "rgba(30, 93, 239, 1)",
      borderColor: "rgba(100, 255, 0, 1)",
      borderWidth:0, // 막대선 두께
      base:0,
      barPercentage:0.2, // 막대두께(퍼센트)
      maxBarThickness:15, // 최대 막대 두께제한
      minBarLength:5,
      borderRadius:5,
      indexAxis:'x',
    },
  ],
}

const chartOptions = {
  responsive:true,
  layout:{
    padding:30,
  },
  scales:{
    x:{
      grid:{
        display:false,
        borderWidth:1,
        borderColor:'rgba(0,0,0,1)'
      },
    },
    y:{
      grid:{
        borderWidth:0,     
      },
      ticks:{
        display:false,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:false,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      color:'#393939',
      backgroundColor:'#e2e2e2',
      borderRadius:3,
      anchor:'end',
      align:'end',
      font:{
        size:11,
      },
    },
  },
}

</script>

<style lang="scss" scoped>
.main{
  padding:40px 0;
  
  .box{
    dl{
      dt{
        font-size:18px;
        font-weight:500;
        transform: rotate(0.02deg);
        margin-bottom:20px;
      }
    }

    .el-divider{
      margin:40px 0;
    }
  }

  .today_sales{
    dl{
      dt{
        margin-bottom:10px;
      }
      dd{
        .el-divider{
          margin:25px 0;
        }
        .total{
          display:flex;
          align-items: center;
          justify-content: space-between;
          strong{
            font-size:30px;
            font-weight:600;
            color:#E61245;
          }
          span{
            display:flex;
            justify-content: center;
            align-items: center;
            background:#f2f2f2;
            border-radius:18px;
            width:36px;
            height:36px;
          }
        }
        .detail{
          display:flex;
          flex-direction: column;
          gap:10px;
          .item{
            display:flex;
            align-items: center;
            justify-content: space-between;
            span{
              color:#797979;

            }
            strong{
              font-weight:600;
            }
          }
        }
      }
    }
  }

  .today_member, .total_member, .month_sales, .last_month_sales, .total_point{
    height:100%;
    flex:1;
    dl{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      height:100%;
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:15px;
      }
      dd{
        justify-self: flex-end;
        text-align:right;
        font-size:24px;
        font-weight:600;
      }
    }
  }

  .total_member{

    background:#292929;
    dl{
      dt{
        label{
          color:#fff;
        }
        span{
          background:#494949;
          border-radius:12px;
          color:#fff;
        }
      }      
      dd{
        color:#fff;
      }
    }
  }

  .total_point{
    dl{
      dd{
        color:#1E5DEF;
      }
    }
  }

  .notice{
    dd{
      display:flex;
      flex-direction: column;
      gap:15px;
      .item{
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:15px;
        cursor: pointer;

        &:hover{
          background:#f5f5f7;
        }

        strong{
          position: relative;
          flex:1;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          margin-right:30px;
        }
        span{
          color:#797979;
        }

        &.new{
          &:before{
            content:'NEW';
            font-size:10px;
            height:13px;
            padding:2px 4px;
            border-radius:3px;
            background:#E61245;
            margin-right:5px;
            color:#fff;
          }
        }      
      }
    }
  }

  .info{
    .number{
      display: flex;
      flex-direction: column;
      gap:15px;
      margin-bottom:30px;
      
      strong{
        font-size:32px;
        font-weight:600;
        line-height:1;
      }
      span{
        font-size:15px;
        line-height:1.6;
        color:#797979;
      }
      
    }
    
    .btns{
      display:flex;
      flex-direction: column;
      gap:10px;

      .btn{
        display:flex;
        align-items: center;
        justify-content: space-between;
        height:50px;
        border:1px solid #e2e2e2;
        padding:0 15px;
        border-radius:5px;
        cursor: pointer;
        *{cursor: pointer;}

        &:hover{
          background:#f8f8f8;
        }

        label{
          display:flex;
          align-items: center;
          font-size:14px;
          img{
            height:20px;
            margin-right:8px;
          }
        }
        span{
          font-size:18px;
        }
      }
      .kakao{
        background:#fae100;
        border:0;

        &:hover{
          background:#ffe70c;
        }
      }
    }
  }
}


</style>