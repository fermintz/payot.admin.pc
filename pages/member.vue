<template>
  <div class="member">
    <div class="subHeader">
      <div class="title">
        <h2>회원리스트</h2>
      </div>
    </div>

    <div class="contents">
      <el-row gutter="20">
        <el-col :lg="8">
          <div class="box member_list">
            <div class="top">
              <dl>
                <dt>총 회원수</dt>
                <dd>1,348명</dd>
              </dl>
              <div class="search_box">
                <input type="text" placeholder="전화번호 뒷 4자리 검색"/>
                <el-button text> 
                  <span class="material-icons">search</span>
                </el-button>
              </div>
            </div>
            
            <div class="list" v-loading="loading">
              <div class="member_item between" v-for="item in 50" :key="item">
                <div class="info">
                  <strong>010-8525-4561</strong>
                  <span>가입일: 2022년 11월 1일</span>
                </div>
            
                <span class="material-icons">chevron_right</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="16">
          <div class="box no_data">
            <span class="material-icons">
              people_outline
            </span>
            <p>왼쪽 회원리스트에서 회원을 클릭하시면 <br />상세정보를 확인하실 수 있습니다.</p>
          </div>
          <div class="box member_detail">
            <el-row>
              <el-col :lg="12">
                <div class="left">
                  <dl class="title">
                    <dt>010-8525-4561</dt>
                    <dd>상세정보</dd>
                  </dl>
                  <div class="info">
                    <dl class="info_box point">
                      <dt>
                        남은 포인트
                      </dt>
                      <dd>
                        32,000P
                      </dd>
                    </dl>
                    
                    <dl class="info_box">
                      <dt>
                      누적 결제금액
                      </dt>
                      <dd>
                        328,000원
                      </dd>
                    </dl>
                    <dl class="info_box">
                      <dt>
                        최근 이용일
                      </dt>
                      <dd>
                        2022.10.11
                      </dd>
                    </dl>
                    <dl class="info_box">
                      <dt>
                        가입일
                      </dt>
                      <dd>
                        2022.09.24
                      </dd>
                    </dl>
                  </div>
                  
                  <el-button class="point" @click="visible = true">
                    <label>포인트 적립/차감</label>
                  </el-button>
                  <el-divider />
                  <dl class="memo">
                    <dt>메모</dt>
                    <dd>
                      <textarea></textarea>
                      <el-button class="save">
                        <label>저장</label>
                      </el-button>
                    </dd>
                  </dl>
                </div>
              </el-col>
              <el-col :lg="12">
                <div class="right">
                  <div class="top">
                    <dl>
                      <dt>이용내역</dt>
                      <dd>최대 6개월기간만 검색이 가능합니다.</dd>
                    </dl>
                    <div class="date_search row">
                      <el-date-picker
                        size="large"
                        v-model="value1"
                        type="date"
                        placeholder="Pick a date"
                        :default-value="$dayjs()"
                        ko="korean"

                      />

                      <el-date-picker
                        size="large"
                        v-model="value2"
                        type="date"
                        placeholder="Pick a date"
                        :default-value="$dayjs()"
                      />

                      <el-button @click="openFullScreen2">
                        <span class="material-icons">search</span>
                      </el-button>
                    </div> 
                  </div>
                  <div class="list" v-loading="loading">
                    <OrderCard v-for="item in 20" :key="item"/>
                  </div>
                </div>    
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <modalPoint v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
import { ElLoading } from 'element-plus'

const visible = ref(false)
const value1 = ref('')
const value2 = ref('')
const loading = ref(true)


const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}

</script>

<style lang="scss" scoped>
.box.no_data{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height:300px;
  text-align:center;
  span{
    font-size:70px;
    color:#c2c2c2;
    background:#f5f5f7;
    padding:15px;
    border-radius:100px;
  }
  p{
    margin-top:30px;
    font-size:18px;
    font-weight:500;
    color:#797979;
  }
}
.box.member_list{
  padding:0; 
  .top{
    background:#fff;
    padding:24px;
    border-bottom:1px solid #e2e2e2;

    dl{
      margin-bottom:20px;
      dd{
        font-size:32px;
        font-weight:600;
      }
    }

    .search_box{
      display:flex;
      border:1px solid #e2e2e2;
      border-radius:5px;
      overflow:hidden;
      input{
        flex:1;
        border:0;
        height:50px;
        outline:none;
        padding:0 10px;
        font-size:16px;
      }
      .el-button{
        width:50px;
        height:50px;
        margin:0;
      }
      
    }
  }

  .list{
    max-height:calc(700px);
    min-height:calc(700px);
    overflow-y:auto;
    
    .member_item{
      padding:0 24px;
      min-height:90px;
      overflow:hidden;
      border-bottom:1px solid #e2e2e2;
      &:hover{
        background:#E8EBF1;
        cursor: pointer;
      }
      .info{
        strong,span{
          display:block;
        }
        strong{
          font-weight:500;
        }
        span{
          font-size:14px;
          color:#797979;
          margin-top:3px;
        }
      }
    }
  }
}

.box.member_detail{
  padding:0px;
  .left{
    padding:24px;
    .title{
      margin-bottom:30px;
      dt{
        font-size:24px;
        font-weight:600;
      }
      dd{
        color:#797979;
        font-size:14px;
        margin-top:3px;
      }
    }

    .info{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;

      .info_box{
        background:#f2f2f2;
        padding:15px;
        border-radius:5px;
    
        dt{
          font-size:14px;
          margin-bottom:5px;
        }
        dd{
          font-size:18px;
          font-weight:600;
        }

        &.point{
          background:#EFF2F8;
          dd{
            color:#1E5DEF;
          }
        }
      }
    }
    

    .el-button.point{
      height:46px;
      width:100%;
      border-radius:5px;
      margin-top:10px;
      border:2px solid #1E5DEF;

      label{
        color:#1E5DEF;
      }
    }

    .el-divider{
      margin:30px 0;
    }

    .memo{
      dt{
        font-size:18px;
        font-weight:500;
        margin-bottom:10px;
      }
      dd{
        textarea{
          width:100%;
          height:120px;
          padding:5px;
          outline: none;
          border-radius:5px;
          resize: none;;
          border:1px solid #c2c2c2;
        }
        .el-button.save{
          color:#fff;
          background:#292929;
          border:0;
          height:46px;
          width:100%;
          border-radius:5px;
          margin-top:10px;

          label{
            color:#fff;
          }
        }
      }
      
    }
  }
  .right{
    border-left:1px solid #e2e2e2;
    .top{
      padding:24px;
      border-bottom:1px solid #e2e2e2;
      dl{
        dt{
          font-size:20px;
          font-weight:600;
        }
        dd{
          font-size:14px;
          margin-top:5px;
          color:#797979;
        }
      }

      .date_search{
        margin-top:20px;
        gap:10px;
        .dateBox{
          display:flex;
          align-items: center;
          border:1px solid #e2e2e2;
          border-radius:5px;
          padding:0 10px;
          input{
            width:100%;
            border:0;
            outline: none;
            height:40px;
            padding-right:10px;
          }
          span{
            font-size:13px;
            color:#797979;
          }
        }
        .el-button{
          height:40px;
        }
      }
    }

    .list{
      display:grid;
      overflow-y:auto;
      gap:10px;
      padding:24px;
      max-height:700px;
      min-height:700px;
    }
  }
}
</style>