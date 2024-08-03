<script setup lang="ts">
import { Delete, Edit } from '@element-plus/icons-vue'

import { ref } from 'vue'

const categoryList = ref([
  { 'id': 1, 'categoryName': 'CategoryA', 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05' },
  { 'id': 2, 'categoryName': 'CategoryB', 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05' },
  { 'id': 3, 'categoryName': 'CategoryC', 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05' }
])

const categoryId = ref('')
const state = ref('')
const articles = ref([
  {
    'id': 1, 'title': 'TitleA', 'content': 'ContentA', 'image': '@/assets/default.png', 'state': 1,
    'categoryId': 1, 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05'
  },
  {
    'id': 2, 'title': 'TitleB', 'content': 'ContentB', 'image': '@/assets/default.png', 'state': 1,
    'categoryId': 2, 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05'
  },
  {
    'id': 3, 'title': 'TitleC', 'content': 'ContentC', 'image': '@/assets/default.png', 'state': 1,
    'categoryId': 3, 'createTime': '2006-01-02 15:04:05', 'updateTime': '2006-01-02 15:04:05'
  }
])

const pageNum = ref(1)
const total = ref(20)
const pageSize = ref(3)

function onPageNumChange(num: number) {
  pageNum.value = num
}

function onPageSizeChange(size: number) {
  pageSize.value = size
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>Article Management</span>
        <div class="extra">
          <el-button type="primary">Insert Article</el-button>
        </div>
      </div>
    </template>
    <el-form inline>
      <el-form-item label="Article Category">
        <el-select placeholder="Category List" v-model="categoryId">
          <el-option
            v-for="c in categoryList"
            :key="c.id"
            :label="c.categoryName"
            :value="c.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Article State">
        <el-select placeholder="BETA || RELEASE" v-model="state">
          <el-option label="BETA" value=0></el-option>
          <el-option label="RELEASE" value=1></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Search</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articles" style="width: 100%">
      <el-table-column label="Title" width="400" prop="title"></el-table-column>
      <el-table-column label="Category" prop="categoryId"></el-table-column>
      <el-table-column label="Push Date" prop="createTime"></el-table-column>
      <el-table-column label="State" prop="state"></el-table-column>
      <el-table-column label="Operate" width="100">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary"></el-button>
          <el-button :icon="Delete" circle plain type="danger"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="No data" />
      </template>
    </el-table>
    <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[3, 5 ,10, 15]"
                   layout="jumper, total, sizes, prev, pager, next" background :total="total"
                   @size-change="onPageSizeChange"
                   @current-change="onPageNumChange" style="margin-top: 20px; justify-content: flex-end" />
  </el-card>
</template>

<style scoped>
.el-select {
  --el-select-width: 250px;
}

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
