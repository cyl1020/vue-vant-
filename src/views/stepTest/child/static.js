let formData1 = [{
    label: "活动名称1",
    prop: "name1",
    key: "name1",
  },
  {
    label: "活动名称4",
    prop: "name4",
    key: "name4",
  },
  {
    label: "活动名称5",
    prop: "name5",
    key: "name5",
  },
]

let ruleForm1 = {
  name1: "",
  name4: "",
  name5: "",
}

let rule1 = {
  name1: [{
      required: true,
      message: "请输入活动名称",
      trigger: "blur"
    },
    {
      min: 3,
      max: 5,
      message: "长度在 3 到 5 个字符",
      trigger: "blur"
    },
  ],
  name4: [{
      required: true,
      message: "请输入活动名称",
      trigger: "blur"
    },
    {
      min: 3,
      max: 5,
      message: "长度在 3 到 5 个字符",
      trigger: "blur"
    },
  ],
  name5: [{
      required: true,
      message: "请输入活动名称",
      trigger: "blur"
    },
    {
      min: 3,
      max: 5,
      message: "长度在 3 到 5 个字符",
      trigger: "blur"
    },
  ],
}

export {
  formData1,
  ruleForm1,
  rule1
}