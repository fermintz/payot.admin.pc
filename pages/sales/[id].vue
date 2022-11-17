<template>
  <div class="sales_detail">
    <div class="subHeader">
      <div class="title">
        <el-button text circle @click="$router.back(-1)">
          <span class="material-icons">arrow_back</span>
        </el-button>
        <h2>2022년 10월 매출상세</h2>
      </div>
    </div><!-- subHeader -->

    <div class="contents">
      <el-row gutter="20" class="chart-wrap">
        <el-col :lg="6">
          <div class="box pieChart">
            <div class="total">
              <span>
                총 매출
              </span>
              <strong>3,435,000원</strong>
            </div>
            <div class="chart">
              <pieChart />
            </div>

            <div class="legend">
                <dl class="row">
                  <dt class="smart"></dt>
                  <dd>
                    <label>스마트페이</label>
                    <strong>1,40,000원</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="card"></dt>
                  <dd>
                    <label>키오스크-카드</label>
                    <strong>1,348,000원</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="cash"></dt>
                  <dd>
                    <label>키오스크-지폐</label>
                    <strong>240,000원</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="coin"></dt>
                  <dd>
                    <label>동전매출</label>
                    <strong>170,000원</strong>
                  </dd>
                </dl>
              </div>
          </div>
        </el-col>
        <el-col :lg="18">
          <div class="box barChart">
            <barChart :data="chartData" :options="chartOptions" />
          </div>
        </el-col>
      </el-row>

      <el-row gutter="20">
        <el-col :lg="6" :md="12">
          <dl class="box info_box max_day">
            <dt>매출이 가장 높은 일</dt>
            <dd class="between">
              <span>14일(일)</span>
              <strong>55,000원</strong>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="6" :md="12">
          <dl class="box info_box min_day">
            <dt>매출이 가장 낮은 일</dt>
            <dd class="between">
              <span>2일(수)</span>
              <strong>55,000원</strong>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="6" :md="12">
          <dl class="box info_box">
            <dt>일 평균 결제금액</dt>
            <dd class="between">
              <strong>123,500원</strong>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="6" :md="12">
          <dl class="box info_box">
            <dt>가장많이 사용한 장비</dt>
            <dd class="between">
              <strong>세탁기1번</strong>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="6" :md="12">
          <dl class="box info_box">
            <dt>이용이 가장 많은 요일</dt>
            <dd class="between">
              <strong>일요일</strong>
            </dd>
          </dl>
        </el-col>
        <el-col :lg="6" :md="12">
          <dl class="box info_box">
            <dt>신규 가입한 회원</dt>
            <dd class="between">
              <strong>24명</strong>
            </dd>
          </dl>
        </el-col>
      </el-row>
      <div class="box sales-table">
        <div class="box_head">
          <div class="title">
            <h4>일자별 매출상세</h4>
          </div>
        </div>
        <div class="item item-head">
          <span>날짜</span>
          <span>총매출</span>
          <span>스마트페이</span>
          <span>키오스크-카드</span>
          <span>키오스크-지폐</span>
          <span>동전매출</span>
          <span>회원가입자 수</span>
        </div>
        <div class="list">
          
          <div class="item" v-for="item in 15" :key="item">
            <span>{{item}}일 (월요일)</span>
            <span>100,000원</span>
            <span>64,000원</span>
            <span>24,000원</span>
            <span>7,000원</span>
            <span>5,000원</span>
            <span>2명</span>
          </div>
        </div>

        <div class="bottom">
          <el-button>더보기</el-button>
        </div>
        
      </div>
    </div>
  </div>
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
    "16일",
    "17일",
    "18일",
    "19일",
    "20일",
    "21일",
    "22일",
    "23일",
    "24일",
    "25일",
    "26일",
    "27일",
    "28일",
    "29일",
    "30일",
    "31일",
  ],
  datasets: [
    {
      label: "매출",
      data: [145000, 98000, 123000, 56000, 78000, 124000, 133000, 110000, 98000, 72000, 93000,145000, 98000, 123000, 56000, 78000, 124000, 133000, 110000, 98000, 72000, 93000,145000, 98000, 110000, 98000, 72000, 93000,145000, 98000, 88000],
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
      enabled:true,
    },
    decimation:{
      enabled:true,
    },
    legend:{
      display:false,
    },
    datalabels:{
      display:false,
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
.subHeader{
  .title{
    align-items: center;
    .el-button{
      width:40px;
      height:40px;
      background:#e2e2e2;
      margin-right:20px;
    }
  }
}

.info_box{
  dt{}
  dd{
    margin-top:10px;
    span{
      color:#797979;
    }
    strong{
      font-weight:500;
    }
  }

  &.max_day{
    strong{
      color:#0049f2
    }
  }
  &.min_day{
    strong{
      color:#df0034;
    }
  }
}

.chart-wrap{
  .el-col{
    margin-bottom:20px;
    .box{
      margin-bottom:0;
    }
  }
}
.barChart{
  display:flex;
  flex-direction:column;
  justify-content: center;
  height:100%;
}
.pieChart{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;

  .total{
    span,strong{
      display:block;
    }
    strong{
      font-size:24px;
      font-weight:600;
    }
  }
  
  .chart{
    align-self: center;
    max-width:240px;
    width:100%;
  }

  .legend{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:15px 40px;
      
      dl{
        gap:5px;
        dt{
          width:12px;
          height:12px;

          &.smart{
            background:#0049f2;
          }
          &.card{
            background:#df0034;
          }
          &.cash{      
          background:#00c21a;
          }
          &.coin{      
          background:#e2e2e2;
          }
        }
        dd{
          flex:1;
          label,strong{
            display:block;
          }
          
          label{
            line-height:1;
            font-size:12px;
          }
          strong{
            font-size:14px;
            margin-top:5px;
            font-weight:500;
          }
        }
      }      
    }
}

.sales-table{
  display:flex;
  flex-direction: column;
 

  .item{
    display:flex;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    height:50px;

    &:last-child{
      border-bottom:0;
    }

    &:nth-child(7n){
      border-bottom:1px solid #d2d2d2;
    }

    span{
      display:flex;
      align-items: center;
      justify-content: center;
      flex:1;
      text-align:center;
      padding:0 10px;
      height:50px;
      font-size:14px;
    }
    span:nth-child(1){
      font-weight:500
    }
    span:nth-child(2){
      font-weight:500;
      color:#0049f2;
      padding:5px 0;
      border-right:1px solid #d2d2d2;
    }
  }

  .item-head{
    background:#f7f7fa;
    height:50px;
    border-radius:5px;
    border-bottom:0;
    
    span:nth-child(2){
      color:unset;
      border-right:0px;
      background:unset;
    }
  }

  .bottom{
    display:flex;
    justify-content:center;
    margin-top:30px;
    .el-button{
      height:40px;
      width:50%;
      border-radius:20px;
      border:0;
      background:#f2f2f7;
    }
  }
}

</style>