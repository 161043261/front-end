<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { ComponentSize } from 'element-plus'

const articles = [
  { title: 'title 1', category: 'category 1', date: 'date 1', state: 'state 1' },
  { title: 'title 2', category: 'category 2', date: 'date 2', state: 'state 2' },
  { title: 'title 2', category: 'category 2', date: 'date 2', state: 'state 2' }
]

const currentPage = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const total = ref(40)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const formInline = reactive({
  user: '',
  leftRegion: '',
  rightRegion: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const onReset = () => {
  console.log('reset!')
}
</script>

<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Category">
      <el-select v-model="formInline.leftRegion" placeholder="Category" clearable>
        <el-option label="Java" value="java" />
        <el-option label="TypeScript" value="typescript" />
      </el-select>
    </el-form-item>

    <el-form-item label="State">
      <el-select v-model="formInline.rightRegion" placeholder="State" clearable>
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
  <el-table :data="articles" style="width: 100%" border>
    <el-table-column prop="title" label="Title" width="" /> <!-- title -->
    <el-table-column prop="category" label="Category" width="" />
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="operation" label="Operation">
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-table-column>
  </el-table>
  <!-- v-bind: == : -->
  <!-- v-on: == @ -->
  <el-pagination class="element-pagination"
                 v-model:current-page="currentPage"
                 v-model:page-size="pageSize"
                 v-bind:page-sizes="[10, 20, 30, 40]"
                 :size="size"
                 :disabled="disabled"
                 :background="background"
                 layout="jumper, total, sizes, prev, pager, next"
                 :total="total" v-on:size-change="handleSizeChange"
                 @current-change="handleCurrentChange" />
</template>

<style scoped>
.element-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
