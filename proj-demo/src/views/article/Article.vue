<script lang="ts" setup>
import { Delete, Edit, Plus } from '@element-plus/icons-vue'

import useArticle from '@/hooks/useArticle'
import { type Ref, ref, watch } from 'vue'
import type { Article, Result } from '@/types'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useTokenStore } from '@/stores'
import { insertArticleService } from '@/apis'

const { token } = useTokenStore()
const { params, categoryList, total, articleList, selectArticleList } = useArticle()

watch(params, async (newValue, oldValue) => {
  await selectArticleList(params.value)
}, {
  deep: true, // default true
  immediate: true // default false
})

const visible = ref(false)
const article: Ref<Article> = ref({
  title: '',
  content: '',
  image: '',
  state: undefined,
  categoryId: undefined
})

async function reset() {
  [article.value.title, article.value.content, article.value.categoryId, article.value.state] =
    ['', '<p></p>', undefined, undefined]
  await selectArticleList(params.value)
}

function uploaded(result: Result) {
  console.log(result.data)
  article.value.image = result.data
}

async function insertArticle() {
  await insertArticleService(article.value)
  await reset()
  visible.value = false
}
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>Article Management</span>
        <div class="extra">
          <el-button round type="primary" @click="visible = true">Insert Article</el-button>
        </div>
      </div>
    </template>
    <el-form inline>
      <el-form-item label="Article Category">
        <el-select v-model="params.categoryId" placeholder="Category List">
          <el-option v-for="c in categoryList" :key="c.id" :label="c.categoryName" :value="c.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Article State">
        <el-select v-model="params.state" placeholder="0 as BETA, 1 as RELEASE">
          <el-option label="BETA" value=0></el-option>
          <el-option label="RELEASE" value=1></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button round type="danger"
                   @click="reset">Reset
        </el-button>
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
    <el-pagination v-model:current-page="params.pageNum" v-model:page-size="params.pageSize" :page-sizes="[5 ,10, 15]"
                   :total="total" layout="jumper, total, sizes, prev, pager, next"
                   style="margin-top: 20px; justify-content: flex-end" />
    <el-drawer v-model="visible" direction="rtl" size="80%" title="Insert Article">
      <el-form :model="article" label-width="100px">
        <el-form-item label="Title">
          <el-input v-model="article.title" placeholder="Input Title"></el-input>
        </el-form-item>
        <el-form-item label="Category">
          <el-select v-model="article.categoryId" placeholder="Select Category">
            <el-option v-for="c in categoryList" :key="c.id" :label="c.categoryName" :value="c.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Image">
          <el-upload :auto-upload="true" :headers="{'Authorization': token}" :on-success="uploaded"
                     :show-file-list="false" action="/api/upload" class="avatar-uploader"
                     name="image"
          >
            <img v-if="article.image" :src="article.image" alt="image" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="Content">
          <div class="editor">
            <quill-editor v-model:content="article.content" contentType="html"></quill-editor>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button round @click="article.state = 0; insertArticle()">BETA</el-button>
          <el-button round type="primary" @click="article.state = 1; insertArticle()">RELEASE</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </el-card>
</template>

<style scoped>
.el-select {
  --el-select-width: 300px;
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

.avatar-uploader :deep(.avatar) {
  width: 180px;
  height: 180px;
  display: block;
}

.avatar-uploader :deep(.el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader :deep(.el-upload:hover) {
  border-color: var(--el-color-primary);
}

.avatar-uploader :deep(.avatar-uploader-icon) {
  font-size: 28px;
  color: black;
  width: 180px;
  height: 180px;
  text-align: center;
}

.editor {
  width: 100%;
}

.editor :deep(.ql-editor) {
  min-height: 200px;
}
</style>
