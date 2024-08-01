<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { ComponentSize } from 'element-plus'

const articles = [
  { title: 'title 1', category: 'category 1', date: 'date 1', state: 'state 1' },
  { title: 'title 2', category: 'category 2', date: 'date 2', state: 'state 2' },
  { title: 'title 3', category: 'category 3', date: 'date 3', state: 'state 3' }
]

const currentPage = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const total = ref(40)

function handleSizeChange(val: number) {
  // console.log(`${val} items per page`)
}

function handleCurrentChange(val: number) {
  // console.log(`current page: ${val}`)
}

const formInline = reactive({
  user: '',
  leftRegion: '',
  rightRegion: '',
  date: ''
})

function onSubmit() {
  // console.log('submit!')
}

function onReset() {
  // console.log('reset!')
}
</script>

<template>
  <el-card>
    <div class="card-header">
      <span>Article Management</span>
      <el-button class="button" type="primary">Release Article</el-button>
    </div>
    <hr>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Category">
        <el-select v-model="formInline.leftRegion" clearable placeholder="Category">
          <el-option label="System" value="system" />
          <el-option label="Network" value="network" />
          <el-option label="Database" value="database" />
          <el-option label="Frontend" value="frontend" />
          <el-option label="Backend" value="backend" />
        </el-select>
      </el-form-item>

      <el-form-item label="State">
        <el-select v-model="formInline.rightRegion" clearable placeholder="State">
          <el-option label="Release" value="release" />
          <el-option label="Beta" value="beta" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="onReset">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="articles" border style="width: 100%">
      <el-table-column label="Title" prop="title" width="" /> <!-- title -->
      <el-table-column label="Category" prop="category" width="" />
      <el-table-column label="Date" prop="date" />
      <el-table-column label="State" prop="state" />
      <el-table-column label="Operation" prop="operation">
        <el-button :icon="Edit" circle type="primary" />
        <el-button :icon="Delete" circle type="danger" />
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="currentPage"
                   v-model:page-size="pageSize"
                   :background="background"
                   :disabled="disabled"
                   :page-sizes="[10, 20, 30, 40]"
                   :size="size"
                   :total="total"
                   class="el-page"
                   layout="jumper, total, sizes, prev, pager, next" @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" />

  </el-card>
</template>

<style scoped>
.el-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
