<template>
  <div class="todo_list">
    <el-input
      v-model="content"
      placeholder="请输入待办事项（回车添加）"
      @keyup.enter.native="addList"
    />
    <div class="todo_list-message">总事项 ({{ list.length }})</div>
    <div class="todo_list-message">待办事项 ({{ todoList.length }})</div>
    <div
      class="todo_list-content"
      v-for="item in todoList"
      :key="item.key"
      v-show="!item.isDo"
      @click="changeIsDo(item)"
    >
      <input type="checkbox" v-model="item.isDo" />
      <p>{{ item.content }}</p>
      <i class="el-icon-close" @click.stop="deleteList(item)"></i>
    </div>
    <div class="todo_list-message">已办事项 ({{ doneList.length }})</div>
    <div
      class="todo_list-content"
      v-for="item in doneList"
      :key="item.key"
      v-show="item.isDo"
      @click="changeIsDo(item)"
    >
      <input type="checkbox" v-model="item.isDo" />
      <p class="todo">{{ item.content }}</p>
      <i class="el-icon-close" @click.stop="deleteList(item)"></i>
    </div>
  </div>
</template>

<script>
import store from "../../utils/storageUtils";

export default {
  name: "TodoList",
  data() {
    return {
      content: "",
      list: [],
      todoList: [],
      doneList: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.list = store.get("todoList");
      this.todoList = this.list.filter((item) => item.isDo === false);
      this.doneList = this.list.filter((item) => item.isDo === true);
    },

    addList() {
      let content = {
        content: this.content,
        isDo: false,
        key: new Date().getTime(),
      };
      if (this.content) {
        this.list = [...this.list, content];
      }
      this.content = "";
      store.save("todoList", this.list);
      this.getList();
    },

    changeIsDo(item, flag = true) {
      item.isDo = !item.isDo;
      this.list.forEach((list, index) => {
        if (item.key == list.key) {
          this.list.splice(index, 1);
        }
      });
      flag && this.list.push(item);
      this.addList();
    },

    deleteList(item) {
      this.changeIsDo(item, false);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo_list {
  /deep/ .el-input {
    height: 50px;
  }

  /deep/ .el-input__inner {
    height: 100%;
    border-radius: 10px;
  }

  &-message {
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
  }

  &-content {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 20px;
    margin: 10px 0;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 95%;
    }
  }

  .todo {
    text-decoration: line-through;
    color: red;
  }
}
</style>
