<template>
  <div class="sales_wrap">
    <div class="subHeader">
      <div class="title">
        <h2>2022년 매출내역</h2>
        <div class="btns">
          <el-button>
            <span class="material-icons">arrow_left</span>
          </el-button>
          <el-button>
            <span class="material-icons">arrow_right</span>
          </el-button>
        </div>
      </div>
      
    </div><!-- subHeader -->

    <div class="contents">
        <el-row gutter="20" class="chart-wrap">
          <el-col :lg="18">
            <div class="box barChart">
              <div class="chart">
                <monthChart />  
              </div>
            </div>
          </el-col>
          <el-col :lg="6">
            <div class="box pieChart">
              <div class="chart">
                <pieChart />
              </div>
              <div class="legend">
                <dl class="row">
                  <dt class="smart"></dt>
                  <dd>
                    <label>스마트페이</label>
                    <strong>45%</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="card"></dt>
                  <dd>
                    <label>키오스크-카드</label>
                    <strong>35%</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="cash"></dt>
                  <dd>
                    <label>키오스크-지폐</label>
                    <strong>10%</strong>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="coin"></dt>
                  <dd>
                    <label>동전매출</label>
                    <strong>10%</strong>
                  </dd>
                </dl>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row gutter="20">
          <el-col :lg="4" :sm="8" v-for="item in 10" :key="item">
            <div class="box month_info" @click="$router.push('/sales/1')">
              <dl>
                <dt class="between">
                  <strong>{{item}}월</strong>
                  <span class="material-icons">chevron_right</span>
                </dt>
                <dd>
                  3,450,300원
                </dd>
              </dl>
            </div>
          </el-col>
          <el-col :lg="4" :sm="8">
            <div class="box month_info">
              <dl>
                <dt>
                  <strong>11월</strong>
                </dt>
                <dd>
                  집계중
                </dd>
              </dl>
            </div>
          </el-col>
          <el-col :lg="4" :sm="8">
            <div class="box month_info">
              <dl>
                <dt>
                  <strong>12월</strong>
                  
                </dt>
                <dd>
                  -
                </dd>
              </dl>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.subHeader{
  .title{
    .btns{
      margin-left:20px;
      .el-button{
        width:30px;
        height:30px;
      }
    }
  }
}

.chart-wrap{

  .el-col{
    margin-bottom:20px;
  }

  .barChart{
    display:flex;
    align-items: center;
    height:100%;

    .chart{
      width:100%;
    }
  }
  .pieChart{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:20px;
    height:100%;

    .chart{
      align-self: center;
      width:100%;
      max-width:300px;
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
}





.month_info{
  cursor: pointer;
  box-sizing: border-box;
  &:hover{
    border:1px solid #0049f2;

    dt{
      strong,span{
        color:#0049f2;
      }
    }
  }

  dt{
    strong{
      font-size:15px;
      color:#797979;
      font-weight:500;
    }
    span{
      background:#f2f2f2;
      border-radius:12px;
      font-size:20px;
      color:#aaa;
    }
  }
  dd{
    margin-top:10px;
    font-size:18px;
    font-weight:600;
  }
}

</style>