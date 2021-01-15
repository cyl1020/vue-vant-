<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <template v-for="item in formData">
      <el-form-item :label="item.label" :prop="item.prop" :key="item.key">
        <el-input v-model="ruleForm[item.key]"></el-input>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import { formData1, ruleForm1, rule1 } from "./static.js";

export default {
  name: "Test1",
  data() {
    return {
      formData: formData1,
      ruleForm: ruleForm1,
      rules: rule1,
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
