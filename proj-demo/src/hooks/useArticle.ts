import { selectCategoryListService } from '@/apis'
import type { Result } from '@/types'
import { onMounted, ref } from 'vue'


export default function() {
  const categoryList = ref([
    {
      'id': 1,
      'categoryName': 'Go',
      'createTime': '2006-01-02 15:04:05',
      'updateTime': '2006-01-02 15:04:05'
    }
  ])

  async function selectCategoryList(): Promise<any> {
    const response = await selectCategoryListService() // use axios request interceptor
    const result: Result = response.data as Result
    categoryList.value = result.data
  }

  onMounted(() => {
    selectCategoryList()
  })
  return { categoryList, selectCategoryList }
}
