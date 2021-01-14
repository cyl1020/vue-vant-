<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称3" prop="name3">
      <el-input v-model="ruleForm.name3"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Test3",
  data() {
    return {
      ruleForm: {
        name3: "",
      },
      rules: {
        name3: [
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
