# typescript-learn
learn TS

# VScode 配置
- 1.先安转TypeScript Compiler(编译器) npm install -g typescript
- 2.在项目文件下 运行 tsc --init 后会创建一个tsconfig.json(配置文件)
- 3.几个重要的配置属性
  target：编译之后生成的JavaScript文件需要遵循的标准。主要的候选项：es3、es5、es2015、ES2016。
  module：遵循的JavaScript模块规范。主要的候选项有：commonjs、AMD和es2015。
  outDir：编译输出JavaScript文件存放的文件夹。
  esModuleInterop：允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
  include、exclude：编译时需要包含/剔除的文件夹。

  详细的配置属性
  https://www.tslang.cn/docs/handbook/compiler-options.html
- 4.command+shift+b 选择第二个监控文件 (第一个编译文件)

#说明
- src目录下的文件为 编译后的 js 文件