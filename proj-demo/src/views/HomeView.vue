<script lang="ts" setup>
import { CaretBottom, Crop, Lock, Menu, Promotion, SwitchButton, User, UserFilled } from '@element-plus/icons-vue'
import defaultAvatar from '@/assets/default.png'
</script>

<script lang="ts">
export default {
  name: 'HomeViews'
}
</script>

<template>
  <el-container class="home-container">
    <!-- left side pink element -->
    <el-aside width="200px">
      <div class="el-aside__logo"></div>

      <!-- left side white menu element -->
      <el-menu active-text-color="lightpink" background-color="white" router text-color="black">
        <el-menu-item index="/article/category">
          <el-icon>
            <Menu />
          </el-icon>
          <span>Article Category</span>
        </el-menu-item>
        <el-menu-item index="/article/manage">
          <el-icon>
            <Promotion />
          </el-icon>
          <span>Article Management</span>
        </el-menu-item>

        <!-- left side white submenu element -->
        <el-sub-menu>
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>User Dashboard</span>
          </template>
          <el-menu-item index="/user/profile">
            <el-icon>
              <User />
            </el-icon>
            <span>User Profile</span>
          </el-menu-item>
          <el-menu-item index="/user/avatar">
            <el-icon>
              <Crop />
            </el-icon>
            <span>Update Avatar</span>
          </el-menu-item>
          <el-menu-item index="/user/password">
            <el-icon>
              <Lock />
            </el-icon>
            <span>Reset Password</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- header element -->
      <el-header>
        <div>Welcome: <strong>Administrator</strong></div>
        <el-dropdown placement="bottom-end">
          <span class="el-dropdown__box">
            <el-avatar :src="defaultAvatar" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </span>

          <!-- right side dropdown menu element -->
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="User" command="profile">User Profile</el-dropdown-item>
              <el-dropdown-item :icon="Crop" command="avatar">Update Avatar</el-dropdown-item>
              <el-dropdown-item :icon="Lock" command="password">Reset Password</el-dropdown-item>
              <el-dropdown-item :icon="SwitchButton" command="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <!-- main element -->
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>

      <!-- footer element -->
      <el-footer>
        <a href="https://github.com/161043261">GitHub</a>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.home-container {
  height: 100vh;
}

.home-container .el-aside {
  background-color: lightpink;
}

.home-container .el-aside__logo {
  height: 120px;
  background: url('@/assets/default.png') no-repeat center / 120px auto;
}

.home-container .el-aside .el-menu {
  border-right: none;
}

.home-container .el-header {
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-container .el-header .el-dropdown__box {
  display: flex;
  align-items: center;
}

.home-container .el-header .el-dropdown__box .el-icon {
  color: white;
  margin-left: 10px;
}

.home-container .el-header .el-dropdown__box:active, .home-container .el-header .el-dropdown__box:focus {
  outline: none;
}

.home-container .el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: lightblue;
}

.article {
  width: 90%;
  height: 100%;
  border: 3px dotted lightpink;
  padding: 10px;
  /* background-color: lightyellow; */
}
</style>