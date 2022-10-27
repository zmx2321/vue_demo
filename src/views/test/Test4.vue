<template>
  <section class="main_cont">
    <RichText @setEditData = addSetEditData />
  </section>
</template>

<script>
import RichText from '@/components/tools/RichText'  // 富文本编辑器

export default {
  name: "testmap",

  components: {
    RichText
  },

  data() {
    return {
    }
  },

  methods: {
    // 添加合同时富文本内容赋值数据
    addSetEditData(val) {
      console.log("获取添加时富文本内容", val);

      // 编辑完成将数据存入需要提交的对象中
      // this.addContractData.supplementAgreement = val;
    },
  },

  mounted() {
  },

  created() {

  }
}
</script>

<style lang="less" scoped>
.main_cont {
}
</style>