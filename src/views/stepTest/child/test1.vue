<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称1" prop="name1">
      <el-input v-model="ruleForm.name1"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      ruleForm: {
        name1: "",
      },
      rules: {
        name1: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm() {
      return new Promise((resolve) => {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            resolve(this.ruleForm);
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
