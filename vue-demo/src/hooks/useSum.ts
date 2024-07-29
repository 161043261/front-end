import { computed, onMounted, ref } from 'vue'

export default function() {
  // data
  let sum = ref(0)
  let bigSum = computed(() => {
    return sum.value * 10
  })

  // methods
  function addSum() {
    sum.value++
  }

  onMounted(() => {
    sum.value += 100
  })
  return { sum, addSum, bigSum }
}