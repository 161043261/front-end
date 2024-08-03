<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { articleCategoryService } from '@/apis'
import type { Result } from '@/types'
import { useTokenStore } from '@/stores'

const categoryList = ref([
  {
    'id': 1,
    'categoryName': 'C/C++',
    'createTime': '2006-01-02 15:04:05',
    'updateTime': '2006-01-02 15:04:05'
  },
  {
    'id': 2,
    'categoryName': 'Go',
    'createTime': '2006-01-02 15:04:05',
    'updateTime': '2006-01-02 15:04:05'
  },
  {
    'id': 3,
    'categoryName': 'Java',
    'createTime': '2006-01-02 15:04:05',
    'updateTime': '2006-01-02 15:04:05'
  }
])

async function selectCategoryList() {
  const tokenStore = useTokenStore()
  const token: string = tokenStore.token // compute stateToken
  // const { token } = storeToRefs(tokenStore) // Ref<string>

  // use axios request interceptor instead
  let response = await articleCategoryService(/* { headers: { 'Authorization': token } } */)
  // let response = await articleCategoryService({ headers: { 'Authorization': sessionStorage.getItem('token') as string } })
  let result: Result = response.data as Result
  if (result.code != 1) {
    return
  }
  categoryList.value = result.data
}

selectCategoryList()
</script>

<script lang="ts">
export default {
  name: 'ArticleCategory'
}
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>Article Category</span>
        <div class="extra">
          <el-button type="primary">Insert Category</el-button>
        </div>
      </div>
    </template>
    <el-table :data="categoryList" style="width: 100%">
      <el-table-column label="ID" type="index" width="100"></el-table-column>
      <el-table-column label="Category Name" prop="categoryName"></el-table-column>
      <el-table-column label="Operation" width="100">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary"></el-button>
          <el-button :icon="Delete" circle plain type="danger"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="NO data" />
      </template>
    </el-table>
  </el-card>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
}

.page-container .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
