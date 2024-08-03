<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'

import { ref } from 'vue'
import useArticle from '@/hooks/useArticle'

const { categoryList, total, articleList } = useArticle()
const categoryId = ref('')
const state = ref('')
const pageNum = ref(1)
const pageSize = ref(5)

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
        <el-select v-model="categoryId" placeholder="Category List">
          <el-option
            v-for="c in categoryList"
            :key="c.id"
            :label="c.categoryName"
            :value="c.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Article State">
        <el-select v-model="state" placeholder="0 as BETA, 1 as RELEASE">
          <el-option label="BETA" value=0></el-option>
          <el-option label="RELEASE" value=1></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Search</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articleList" style="width: 100%">
      <el-table-column label="Title" prop="title" width="400"></el-table-column>
      <el-table-column label="Category" prop="categoryName"></el-table-column>
      <el-table-column label="Push Date" prop="createTime"></el-table-column>
      <el-table-column label="State" prop="stateName"></el-table-column>
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
    <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[5 ,10, 15]"
                   :total="total" background layout="jumper, total, sizes, prev, pager, next"
                   style="margin-top: 20px; justify-content: flex-end"
                   @size-change="onPageSizeChange" @current-change="onPageNumChange" />
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
