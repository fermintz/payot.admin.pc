<template>
  <div class="kioskOptions">
    <div class="subHeader">
      <div class="title">
        <h2>키오스크 설정/제어</h2>
       </div>
    </div><!-- subHeader -->

    <div class="contents">
      <div class="service_selector">
        <div class="service">
          <el-button text class="active">
            <span class="material-icons">monitor</span>
            <strong>키오스크 1번</strong>
          </el-button>
          <el-button text round>
            <span class="material-icons">monitor</span>
            <strong>키오스크 2번</strong>
          </el-button>
        </div>
      </div>

      <el-row :gutter="20">
        <el-col :lg="16">
          <div class="box kiosk_setup">
            <div class="box_head">
              <div class="title">
                <h4>키오스크 설정</h4>
                <p> 설정 후 반드시 저장하기 버튼을 클릭해주세요</p>
              </div>
              <div class="btns">
                <el-button round>저장하기</el-button>
              </div>
            </div>

            <el-row gutter="60">
              <el-col :lg="12">
                <dl class="option kiosk_name">
                  <dt>
                    <h5>키오스크 이름변경</h5>
                  </dt>
                  <dd>
                    <input type="text" placeholder="키오스크의 이름을 변경할 수 있습니다" value="키오스크 1번">
                  </dd>
                </dl>

                <el-divider />
                <dl class="option notice">
                  <dt>
                    <h5>메인 공지사항</h5>
                  </dt>
                  <dd>
                    <img src="~/assets/img/notice_screen.jpg">
                    <textarea placeholder="충전 이벤트 진행중! 현금충전시 추가적립 10%" />
                  </dd>
                </dl>
              </el-col>
              <el-col :lg="12">
                <dl class="option radio">
                  <dt>
                    <h5>회원 비밀번호 사용유무</h5>
                    <p>키오스크 사용시 회원들이 비밀번호 기능을 사용할 수 있도록 설정할 수 있습니다</p>
                  </dt>
                  <dd>
                    <el-radio-group v-model="radio1" fill="#1E5DEF">
                      <el-radio-button label="1">사용함</el-radio-button>
                      <el-radio-button label="2">사용안함</el-radio-button>
                    </el-radio-group>
                  </dd>
                </dl>
                <el-divider />
                <dl class="option radio">
                  <dt>
                    <h5>카드결제 활성화 여부</h5>
                    <p>키오스크의 카드결제 사용유무를 사용할 수 있습니다</p>
                  </dt>
                  <dd>
                    <el-radio-group v-model="radio2" fill="#1E5DEF" >
                      <el-radio-button label="1">사용함</el-radio-button>
                      <el-radio-button label="2">사용안함</el-radio-button>
                    </el-radio-group>
                  </dd>
                </dl>
                <el-divider />
                <dl class="option product">
                  <dt>
                    <h5>키오스크 상품선택 방법</h5>
                    <p>상품선택 방법을 다르게 선택할 수 있습니다</p>
                  </dt>
                  <dd>
                    <div class="images">
                      <img src="~/assets/img/product01.jpg">
                      <img src="https://picsum.photos/200/300">
                    </div>
                    <el-radio-group v-model="radio3">
                      <el-radio :label="1">
                        <span>금액 직접 입력</span>
                      </el-radio>
                      <el-radio :label="2">
                        <span>상품 직접 선택</span>
                      </el-radio>
                    </el-radio-group>
                  </dd>
                </dl>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="box remote">
            <div class="box_head">
              <div class="title">
                <h4>키오스크 원격제어</h4>
                <p>키오스크를 원격으로 제어합니다</p>
              </div>
            </div>

            <div class="list">
              <div class="item between" @click="visible = true">
                <div class="text">
                  <strong>판매재개</strong>
                  <span>키오스크의 판매를 재개합니다</span>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
              <div class="item between">
                <div class="text">
                  <strong>판매중지</strong>
                  <span>키오스크의 판매를 재개합니다</span>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
              <div class="item between">
                <div class="text">
                  <strong>프로그램 재실행</strong>
                  <span>키오스크의 프로그램을 종료 후 재실행합니다.</span>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
              <div class="item between">
                <div class="text">
                  <strong>재부팅</strong>
                  <span>키오스크의 전원을 완전히 종료 후 다시 시작합니다</span>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <modalMessage v-model="visible" title="판매재개" description="키오스크의 판매를 재개하시겠습니까?"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
const radio1 = ref(1)
const radio2 = ref(1)
const radio3 = ref(1)
</script>

<style lang="scss" scoped>

.box{
  .box_head{
    margin-bottom:50px;
    .btns{
      .el-button{
        background:#292929;
        color:#fff;
        border:0;
      }
    }
  }
}

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

.kiosk_setup{
  .box_head{
    .btns{
      .el-button{
        height:40px;
        padding:0 20px;
      }
    }
  }
}

.option{
  margin-bottom:40px;
  dt{
    flex:1;
    margin-bottom:15px;
    h5{
      font-weight:500;
    }
    p{
      font-size:14px;
      color:#797979;
      margin-top:5px;
    }
  }
}
.option.radio{
  dd{
    
  }
}
.option.between{
  gap:50px;
  dt{
    margin-bottom:0;
  }
}

.option.kiosk_name{
  dd{
    input{
      height:50px;
      width:100%;
      border-radius:5px;
      border:1px solid #e2e2e2;
      padding:0 10px;
    }
  }
}

.option.notice{

  dd{
    img{
      object-fit: cover;
      border-radius:5px;
      height:200px;
      width:100%;
      border:1px solid #e2e2e2;
    }
    textarea{
      width:100%;
      resize: none;
      padding:10px;
      border-radius:5px;
      margin-top:20px;
      border-color:#c2c2c2;
      height:120px;
    }
  }
}

.option.product{
  dd{
    .images{
      display:flex;
      gap:20px;
      img{
        width:100%;
        overflow:hidden;
        object-fit: cover;
        border-radius:5px;
      }
    }
    .el-radio-group{
      margin-top:20px;
      display:flex;
      gap:20px;
      .el-radio{
        justify-content: center;
        flex:1;
        margin:0px;
      }
    }   
  }
}

.remote{
  .list{
    display:flex;
    flex-direction: column;
    gap:15px;
  }
  .item{
    border:1px solid #e2e2e2;
    border-radius:5px;
    padding:15px;
    cursor: pointer;

    &:hover{
      border-color:#1E5DEF;
      .text{
        strong{
          color:#1E5DEF
        }
      }

      span{
        color:#1E5DEF
      }
    }

    .text{
      strong,span{
        display:block;
      }
      strong{
        font-weight:500;
      }
      span{
        font-size:14px;
        color:#797979;
        margin-top:5px;
      }
    }
    span{
      color:#c2c2c2;
    }
  }
}

</style>