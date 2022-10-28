<template>
  <section class="rich_text_wrap">
    <quill-editor-tool @setEditData = addSetEditData />
  </section>
</template>

<script>
// import quillEditorTool from '@/components/richText/quillEditorTool'  // 富文本编辑器

export default {
  name: "quill-editor",

  components: {
    // quillEditorTool
  },

  data() {
    return {
    }
  },

  methods: {
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
.rich_text_wrap {
  width: 90%;
  margin: 30px 0 0 30px;
}
</style>