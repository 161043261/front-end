<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { userLoginService, userRegisterService } from '@/apis'
import { useRouter } from 'vue-router'
import type { Result } from '@/types'
import { useTokenStore } from '@/stores'

const router = useRouter()
const isLogin = ref(true)
const formData = ref({
  username: '',
  password: '',
  confirmPwd: ''
})

function checkPwd(rules: string, value: string, callback: (error?: Error) => any) {
  if (value == '') {
    callback(new Error('ConfirmPwd is required'))
  } else if (value != formData.value.password) {
    callback(new Error('Password is NOT equivalent to confirmPwd'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [{ required: true, message: 'Username is required', trigger: 'blur' },
    { min: 4, max: 16, message: 'Username must be 4 to 16 characters', trigger: 'blur' }],
  password: [{ required: true, message: 'Password is required', trigger: 'blur' },
    { min: 4, max: 16, message: 'Password must be 4 to 16 characters', trigger: 'blur' }],
  confirmPwd: [{ validator: checkPwd, trigger: 'blur' }]
})

async function register() {
  await userRegisterService({
    username: formData.value.username,
    password: formData.value.password
  })
  isLogin.value = true
}

const tokenStore = useTokenStore()

async function login() {
  let response = await userLoginService(formData.value)
  let result: Result = response.data as Result
  tokenStore.$subscribe((mutation, state) => {
    console.log('set sessionStorage')
    sessionStorage.setItem('token', state.token)
  })
  tokenStore.setToken(result.data) // trigger tokenStore.$subscribe
  await router.push('/article/manage')
}
</script>

<script lang="ts">
export default {
  name: 'UserView'
}
</script>

<template>
  <el-row class="login-page" v-bind:rules="rules">
    <el-col :span="12" class="bg" />
    <el-col :offset="3" :span="6" class="form">
      <!-- Login Form -->
      <el-form v-if="isLogin" ref="form" :model="formData" :rules="rules" autocomplete="off" size="large">
        <el-form-item>
          <h1>Login</h1>
        </el-form-item>
        <el-form-item label="Username" prop="username"> <!-- prop="username" corresponds to rules.value.username -->
          <el-input v-model="formData.username" :prefix-icon="User" placeholder="Input username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="formData.password" :prefix-icon="Lock" name="password" placeholder="Input password"
                    type="password" />
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>Remember me</el-checkbox>
            <el-link :underline="false" type="primary">Forget password?</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary" @click="login">Login</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isLogin = false">Register</el-link>
        </el-form-item>
      </el-form>

      <!-- Register Form -->
      <el-form v-else ref="form" :model="formData" :rules="rules" autocomplete="off" size="large">
        <el-form-item>
          <h1>Register</h1>
        </el-form-item>
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username" :prefix-icon="User" placeholder="Input username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="formData.password" :prefix-icon="Lock" placeholder="Input password" type="password" />
        </el-form-item>
        <el-form-item label="ConfirmPwd" prop="confirmPwd">
          <el-input v-model="formData.confirmPwd" :prefix-icon="Lock" placeholder="Confirm password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button auto-insert-space class="button" type="primary" @click="register">Register</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link :underline="false" type="info" @click="isLogin = true">Go back</el-link>
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
  background: url('@/assets/default.png') no-repeat center / cover;
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