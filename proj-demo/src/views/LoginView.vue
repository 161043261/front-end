<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import api from '@/apis/index'

const isRegister = ref(false)
const registerData = ref({
  username: '',
  password: '',
  confirmPwd: ''
})

function checkPwd(rule: string, value: string, callback: (error?: Error) => {}) {
  if (value == '') {
    callback(new Error('confirmPwd is required'))
  } else if (value != registerData.value.password) {
    callback(new Error('Password != confirmPwd'))
  } else {
    callback()
  }
}

const rules = {
  username: [{ required: true, message: 'Username is required', trigger: 'blur' },
    { min: 4, max: 16, message: '4 <= username.length <= 16', trigger: 'blur' }],

  password: [{ required: true, message: 'Password is required', trigger: 'blur' },
    { min: 4, max: 16, message: '4 <= password.length <= 16', trigger: 'blur' }],

  confirmPwd: [{ validator: checkPwd, trigger: 'blur' }]
}

async function register() {
  let result = await api.userRegisterService(registerData.value)
  if (result.data.code == 0) {
    console.log(result.data.msg == null ? 'registration success' : result.data.msg)
  } else {
    console.log('registration failed')
  }
  return
}
</script>

<script lang="ts">
export default {
  name: 'LoginView'
}
</script>

<template>
  <el-row class="login-page" v-bind:rules="rules">
    <!-- Register Form -->
    <el-col :span="12" class="bg" />
    <el-col :offset="3" :span="6" class="form">
      <el-form v-if="isRegister" ref="form" autocomplete="off" size="large" v-bind:model="registerData"
               v-bind:rules="rules">
        <el-form-item>
          <h1>Register</h1>
        </el-form-item>
        <el-form-item label="Username" prop="username">
          <el-input v-model="registerData.username" :prefix-icon="User" placeholder="Input username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="registerData.password" :prefix-icon="Lock" placeholder="Input password"
                    type="password" />
        </el-form-item>
        <el-form-item label="ConfirmPwd" prop="confirmPwd">
          <el-input v-model="registerData.confirmPwd" :prefix-icon="Lock" placeholder="Confirm password"
                    type="password" />
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary" @click="register">
            Register
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = false">
            Go back
          </el-link>
        </el-form-item>
      </el-form>

      <!-- Login Form -->
      <el-form v-else ref="form" autocomplete="off" size="large">
        <el-form-item>
          <h1>Login</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="Input username" />
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" name="password" placeholder="Input password" type="password" />
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>Remember me</el-checkbox>
            <el-link :underline="false" type="primary">Forget password?</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary">Login</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isRegister = true">
            Register
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
.login-page {
  height: 100vh;
  background-color: white;
}

.login-page .bg {
  background: url('@/assets/login_bg.png') no-repeat center / cover;
  border-radius: 0 20px 20px 0;
}

.login-page .form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}

.login-page .form .title {
  margin: 0 auto;
}

.login-page .form .button {
  width: 100%;
}

.login-page .form .flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
