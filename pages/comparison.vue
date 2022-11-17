<template>
  <div class="comparison">
    <div class="subHeader">
      <div class="title">
        <h2>타 매장 매출비교</h2>
        <p>최근 3개월동안의 평균매출을 집계한 자료입니다.</p>
       </div>
    </div><!-- subHeader -->

    <div class="contents">
      <div class="box info">
        <el-row gutter="60">
          <el-col :lg="6">
            <dl class="myshop"> 
              <dt>
                <span>나의매장 평균매출</span>
                <strong>5,144,600원</strong>
              </dt>
              <dd>
                <el-divider></el-divider>
              </dd>
              <dd>
                <div class="item between">
                  <span>스마트페이</span>
                  <strong>3,225,100원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-카드</span>
                  <strong>2,384,000원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-지폐</span>
                  <strong>310,500원</strong>
                </div>
                <div class="item between">
                  <span>동전매출</span>
                  <strong>225,100원</strong>
                </div>
              </dd>
            </dl>
          </el-col>
          <el-col :lg="6">
            <dl>
              <dt>
                <span>전국 평균매출</span>
                <strong>3,354,707원</strong>
              </dt>
              <dd>
                <el-divider></el-divider>
              </dd>
              <dd>
                <div class="item between">
                  <span>스마트페이</span>
                  <strong>3,225,100원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-카드</span>
                  <strong>2,384,000원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-지폐</span>
                  <strong>310,500원</strong>
                </div>
                <div class="item between">
                  <span>동전매출</span>
                  <strong>225,100원</strong>
                </div>
              </dd>
            </dl>
          </el-col>
          <el-col :lg="6">
            <dl>
              <dt>
                <span>상위(10%) 평균매출</span>
                <strong>7,323,135원</strong>
              </dt>
              <dd>
                <el-divider></el-divider>
              </dd>
              <dd>
                <div class="item between">
                  <span>스마트페이</span>
                  <strong>3,225,100원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-카드</span>
                  <strong>2,384,000원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-지폐</span>
                  <strong>310,500원</strong>
                </div>
                <div class="item between">
                  <span>동전매출</span>
                  <strong>225,100원</strong>
                </div>
              </dd>
            </dl>
          </el-col>
          <el-col :lg="6">
            <dl>
              <dt>
                <span>하위(10%) 평균매출</span>
                <strong>845,678원</strong>
              </dt>
              <dd>
                <el-divider></el-divider>
              </dd>
              <dd>
                <div class="item between">
                  <span>스마트페이</span>
                  <strong>3,225,100원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-카드</span>
                  <strong>2,384,000원</strong>
                </div>
                <div class="item between">
                  <span>키오스크-지폐</span>
                  <strong>310,500원</strong>
                </div>
                <div class="item between">
                  <span>동전매출</span>
                  <strong>225,100원</strong>
                </div>
              </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
      <div class="box chart">
        <barChart :data="chartData" :options="chartOptions"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const chartData: TChartData<'bar', number[], unknown> = {
  labels:['나의매장','전국평균','상위10%','하위10%'],
  datasets: [
    {
      label:'스마트페이',
      data:[18465,24867,19476,19751],
      backgroundColor:"rgba(30, 90, 239, 0.2)",
      borderColor:'rgb(30, 90, 239)',
      borderWidth:1, // 막대선 두께
      barPercentage:0.3, // 막대두께(퍼센트)
      borderRadius:5,
    },
    {
      label:'키오스크-카드',
      data:[15484,13458,12784,15487],
      backgroundColor:"rgba(153, 102, 255, 0.2)",
      borderColor:'rgb(153, 102, 255)',
      borderWidth:1, // 막대선 두께
      barPercentage:0.3, // 막대두께(퍼센트)
      borderRadius:5,
    },
    {
      label:'키오스크-지폐',
      data:[8487,9482,3167,4782],
      backgroundColor:"rgba(75, 192, 192, 0.2)",
      borderColor:'rgb(75, 192, 192)',
      borderWidth:1, // 막대선 두께
      barPercentage:0.3, // 막대두께(퍼센트)
      borderRadius:5,
    },
    {
      label:'동전매출',
      data:[5184,4235,6358,2354],
      backgroundColor:"rgba(201, 203, 207, 0.2)",
      borderColor:'rgb(201, 203, 207)',
      borderWidth:1, // 막대선 두께
      barPercentage:0.3, // 막대두께(퍼센트)
      borderRadius:5,
    },
  ],
}

const chartOptions = {
  indexAxis:'y',
  responsive:true,
  layout:{
    padding:30,
  },
  scales:{
    x:{
      stacked: true,
      grid:{
        display:true,
        borderWidth:0,
      },
    },
    y:{
      stacked: true,
      grid:{
        borderWidth:2,
        borderColor:'#595959'     
      },
      ticks:{
        display:true,
      },
    }
  },
  plugins:{
    tooltip:{
      enabled:true,
    },
    decimation:{
      enabled:false,
    },
    legend:{
      display:true,
    },
    datalabels:{
      display:true,
      color:'#292929',
      backgroundColor:false,
      borderRadius:3,
      anchor:'end',
      align:'start',
      font:{
        size:13,
        weight:'600',
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.info{
  width:100%;
  
  .el-col{
    border-right:1px solid #e2e2e2;
    &:last-child{
      border-right:0;
    }
  }
  

  dl{
    dt{
      display:flex;
      flex-direction: column;
      gap:5px;
      span{
        font-size:15px;
        color:#797979;
      }
      strong{
        font-size:20px;
        font-weight:600;
        color:rgba(30, 90, 239, 1);
      }
    }
    dd{
      display:flex;
      flex-direction: column;
      gap:8px;

      .el-divider{
        margin:20px 0;
      }

      .item{
        
        span,strong{
          font-size:14px;
        }
        span{
          display:flex;
          align-items: center;
          color:#797979;
        }
     
        strong{
          font-weight:500;
        }
      }
    }
  }

  .myshop{
    dt{
      strong{
        color:#d22828;
      }
    }
  }
}

@media (max-width:1200px) {
  .info{
    .el-col{
      border-right:0;
      margin-bottom:15px;
      dl{
        border:1px solid #e2e2e2;
        padding:20px;
        border-radius:10px;
      }
    }
  }  
}
</style>