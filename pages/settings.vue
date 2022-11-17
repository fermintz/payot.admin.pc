<template>
  <div class="settings">
    <div class="subHeader">
      <div class="title">
        <h2>홈페이지 설정</h2>
       </div>
    </div><!-- subHeader -->
    <div class="contents">
      <el-row>
        <el-col :lg="8">
          <div class="box password">
            <div class="box_head">
              <div class="title">
                <h4>비밀번호 변경</h4>
              </div>
            </div>
            <el-form 
              :model="form" 
              label-width="150px" 
              label-position="left" 
              ref="formRef"
            >
              <el-form-item 
                label="기준 비밀번호"
                prop="password"
                :rules="[{
                    required: true,
                    message: '기존 비밀번호를 입력해주세요',
                    trigger: 'blur',
                  }]"
                >
                <el-input v-model="form.password" type="password" show-password size="large"/>
              </el-form-item>
              <el-form-item 
                label="새로운 비밀번호"
                prop="newPassword"
                :rules="[
                  {
                    required: true,
                    message: '새로운 비밀번호를 입력해주세요',
                    trigger: 'blur',
                  },

                ]"
              >
                <el-input v-model="form.newPassword" type="password" size="large" show-password />
              </el-form-item>
              <el-form-item 
                label="비밀번호 확인"
                prop="passwordConfirm"
                :rules="[{
                  required: true,
                  message: '변경하신 비밀번호를 다시 한번 입력해주세요',
                  trigger: 'blur',
                }]"
              >
                <el-input v-model="form.passwordConfirm" type="password" size="large" show-password />
              </el-form-item>
              <el-button  @click="submitForm(formRef)">
                변경하기
              </el-button>
            </el-form>
          </div>
        </el-col>
      </el-row>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

const form = reactive({
  password:'',
  newPassword:'',
  passwordConfirm:'',
})
const formRef = ref<FormInstance>()
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style lang="scss" scoped>

.password{
  .box_head{
    margin-bottom:30px;
  }
  .el-button{
    width:100%;
    height:40px;
    background:#393939;
    color:#fff;
    border:0;
    margin-top:20px;
  }
}

</style>