import Mock from "mockjs"
import msite from "./msite.json"
import category from "./category.json"
import shiwu from "./shiwu.json"


Mock.mock("/msite",{code:0,data : msite});
Mock.mock("/category",{code:0,data : category});
Mock.mock("/shiwu",{code:0,data : shiwu});

