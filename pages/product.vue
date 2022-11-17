<template>
  <div class="product">
    <div class="subHeader">
      <div class="title">
        <h2>장비 상품설정</h2>
      </div>
    </div><!-- subHeader -->

    <div class="contents">

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


      <el-row gutter="20">
        <el-col :lg="6">
          <div class="box eq_list">
            <dl>
              <dt>등록된 장비</dt>
              <dd>6대</dd>
            </dl>

            <div class="list">
              <div class="item" v-for="item in 6" :key="item">
                <div class="info">
                  <strong>세탁기 {{item}}번</strong>
                  <span>세탁기 | 27KG</span>
                </div>
                <div class="icon">
                  <span class="material-icons">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="18">
          <div class="box product-list">
            <div class="box_head">
              <div class="title">
                <h4><b>세탁기 1번</b> 상품목록</h4>
                <p>상품을 끌어당겨 순서를 변경하실 수 있습니다.</p>
              </div>
              <div class="btns">
                <el-button text class="add" @click="visible = true">
                  상품추가
                </el-button>
                <el-button text class="save">
                  저장하기
                </el-button>
              </div>
            </div>

            <div class="list row">
              <div class="numbers">
                <div class="number" v-for="item in list.length" :key="item">
                  <span>{{item}}</span>
                </div>
              </div>
              <div class="items">
                <draggable  
                  :list="list"
                  :disabled="false"
                  ghost-class="ghost-item"
                  @start="dragging = true"
                  @end="dragging = false"
                >
                  <template #item="{ element }">
                    <div class="item between">
                      <div class="left">
                        <div class="icon">
                          <span class="material-icons">unfold_more</span>
                        </div>
                        <div class="title">
                          <span>{{element.name}}</span>
                          <strong>{{element.price}}</strong>
                        </div>
                      </div>
                      <div class="btns">
                        <el-button text>수정</el-button>
                        <el-button text>삭제</el-button>
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <modalProduct v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
const visible = ref(false)
const dragging = ref(false)
const list = ref([
  {id: 0, name:' [30분] 표준코스(세탁1+헹굼2)',price:'6,000원' },
  {id: 1, name:' [45분] 표준코스(세탁1+헹굼2)',price:'7,000원' },
  {id: 2, name:' [60분] 표준코스(세탁1+헹굼2)',price:'8,000원' },
  {id: 3, name:' [75분] 표준코스(세탁1+헹굼2)',price:'9,000원' },
])

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


.eq_list{
  padding:0px;
  
  dl{
    padding:24px;
    border-bottom:1px solid #c2c2c2;
    dt{
      color:#797979;
      margin-bottom:5px;
      font-size:14px;
    }
    dd{
      font-size:32px;
      font-weight:600;
    }
  }

  .list{
    max-height:700px;
    overflow-y:auto;
    .item{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding:0 24px;
      height: 80px;
      border-bottom:1px solid #e2e2e2;

      &.on{
        background:#EFF2F8;
        .icon{
          span{color:#1E5DEF}
        }
      }

      &:hover{
        cursor: pointer;
        background:#EFF2F8;
      }
      .info{
        display:flex;
        flex-direction: column;
        strong{}
        span{
          font-size:14px;
          color:#797979;
        }
      }
      .icon{
        span{
          background:#e2e2e2;
          border-radius:20px;
        }
      }
    }
  }
}

.product-list{
  padding:0px;
  .box_head{
    padding:24px;
    margin-bottom:20px;
    h4{
      b{
        color:#1E5DEF;
      }
    }
    .btns{
      .el-button.save{
        background:#1E5DEF;
        color:#fff;
      }
      .el-button.add{
        border:1px solid #c2c2c2;
      }
    }
  }
  .list{
    padding:0px 24px 24px 24px;
    overflow-y:unset;

    .numbers{
      position: relative;
      width:80px;

      &:after{
        content:'순서';
        position: absolute;
        top:0px;
        left:50%;
        transform: translateX(-50%);
        font-size:14px;
        color:#797979;
      }

      &::before{
        position: absolute;
        content:'';
        left:40px;
        top:0;
        width:1px;
        height:100%;
        background:#e2e2e2;
        border-top:30px solid #fff;
      }
      .number{
        position: relative;
        z-index:2;
        display:flex;
        align-items: center;
        justify-content: center;
        height:80px;
        margin-bottom:10px;

        span{
          display:flex;
          align-items: center;
          justify-content:center;
          width:30px;
          height:30px;
          border-radius:15px;
          font-size:14px;
          font-weight:500;
          background:#f5f5f7;
        }
      }
    }
    .items{
      .ghost-item{
        background:#E4E9F5;
      }
      flex:1;
      .item{
        margin-bottom:10px;
        height:80px;
        border:1px solid #e2e2e2;
        padding:0 20px;
        border-radius:5px;
        cursor: pointer;

        &:hover{
          border:1px solid #1E5DEF;
          .left{
            .icon{
              span{
                color:#1E5DEF
              }
            }
          }
        }

        .left{
          display:flex;
          .icon{
            display:flex;
            align-items: center;
            width:50px;

            span{
              color:#c2c2c2;
            }
          }
          .title{
            display:flex;
            flex-direction: column;
            flex:1;
            span{
              font-size:14px;
            }
            strong{
              font-size:16px;
              margin-top:5px;
              font-weight:600;
            }
          }
        }
      }
    }
  }
}
</style>