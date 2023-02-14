# 华理飞跃手册开发 & 维护手册

由于我们希望华理飞跃手册能够在一届一届的学生手中传递下去，我们需要将这个项目的开发以及维护的具体须知以尽可能详细的方式书写下来。

## 开发环境

1. https://ecust-leap.github.io/ 用户应该访问的网站，即prod server。对应的是`main` branch。
2. https://ecust-leap.github.io/ecust-leap-dev/ 维护者在发布到prod之前测试稿件以及特性的网站，即dev server。对应的是`dev` branch。
3. GitHub Actions。详情见`.github`文件夹。包含了PR自动测试，自动部署等功能，工程师需掌握并理解。

## 维护者角色分类

### 编辑

#### 职责

##### 1. 审核新投稿

编辑需要时常关注投稿的邮箱，并在邮箱或者其他方式收到新稿件后，对稿件内容进行评估，并且如果有认为可以增加/删减的内容并且能够和作者进行沟通的情况下，可以对稿件要求一定程度上的修改。

##### 2. 上架新稿件

1. 将稿件内容转换为对应模板的markdown文件格式
2. 创建Pull Request（PR）将该稿件加入对应的文件夹位置

##### 3. 审核其他编辑的PR

需要依据模板的格式，对别的编辑创建的PR进行review，使稿件质量达到符合模板的统一要求。

##### 4. 对模板格式的改进

如果认为模板格式有可以修改使之更好的方式，可以以PR的方式提出对模板的修改，并征得其他编辑的同意。

##### 5. 对已上架的稿件的修改

在稿件作者要求修改，或由于模板格式的修改而导致之前上架的稿件需要修改时，通过PR的方式对稿件进行修改。

##### 6. 评论区/论坛管理

回答在评论区/论坛中同学留下的可以回答的问题，并且删除不当言论。

##### 7. 邀稿

编辑需要在每一届的出国/考研/保研/工作季结束后，发动人脉邀请合适的同学投稿。

#### 技能需求

- 乐于学习新事物
- 很基础的GitHub操作
  - https://docs.github.com/en/repositories/working-with-files
  - https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests
- Markdown语法
  - https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- （optional）丰富的人脉

#### Onboarding

#### 人数

2+

### 软件工程师

#### 职责

##### 1. GitHub上所有活动的管理

由于本项目的所有活动几乎都基于GitHub，比如issues，PR，工程师需要维护队伍使用GitHub的方式正确且高效。

例如，如果编辑的PR出现了conflicts，工程师需要解决这些conflicts。

并且，工程师需要确保issues和pull request的正确创建和关闭，并确保issues在逐渐被解决而不是搁置。

需要将对应维护者加入到对应的`fxx`, `fxx-engineering`, `fxx-editors`等GitHub Teams，并在`.github/CODEOWNERS`中修改对应的owners，使自动PR reviewer的功能保持运转。（此处`fxx`指的是毕业后的第一个学期，例如`f23`指的是在2023年开始下一段旅程的那一届学生，即2019级。目前飞跃手册以年为单位进行交接，而`f23`的维护者队伍需要负责所有2019级同学的征稿以及维护任务。）

##### 2. 软件特性开发/维护

如有必要的话，需要开发新的功能满足读者。并且对已有的所有功能进行维护。

##### 3. 网站成品的质量把关

由于编辑可能不具有在他们的计算机本地运行飞跃手册网站的技能，所以导致他们的排版可能仍会出现疏漏导致在最终成品的网站上效果不如与其所想。工程师需要在本地以及在[dev server](https://ecust-leap.github.io/ecust-leap-dev/)上确保稿件的排版正确且符合预期。

##### 4. 固定周期发布

需要间隔固定时期把全部审核过并且没有问题的稿件/特性发布到prod server。即创建PR把`dev` merge到 `main`。

##### 5. 评论区/论坛管理

同上。

##### 6. 邀稿

同上。

#### 技能需求

- Git
  - Branching
  - Commit
  - Resolve Conflicts
- GitHub
  - Pull Request
  - Issues
  - Resolve Conflict
- TypeScript
- React

#### Onboarding

#### 人数

1+

## 工作流程举例

### 上架新稿件

1. 一名编辑通过监测投稿邮箱或者私聊得到一名同学的投稿。
2. 编辑将该投稿整理为符合模板的markdown文件。
3. 编辑在GitHub上创建Pull Request上传该文件。
4. 另一名编辑对该PR进行审核，并给出修改意见。上传稿件的编辑需要根据审核进行PR的修改，直到另一名编辑approve。
5. 编辑将该PR进行merge。
6. 编辑在PR对应的自动化完成之后（往往在数分钟内），需到dev server的对应位置查看本篇投稿，并确认一切格式正常且符合预期。

### 对现有工作流程/新特性/任何事情有新想法 或 收到用户反馈

1. 维护者需要创建一个新issue，并详细描述问题以及可能的解决办法。
2. 协商决定由哪位维护者在什么时间之前完成该任务。

### 邀稿

1. 维护者通过个人人脉和潜在邀稿对象取得联系，并征得对方的投稿允诺。
2. 维护者创建一个新issue，并且
   1. 在标题或内容中说明该对象的昵称，学院以及年级
   2. 在Labels中设置`邀稿`
   3. Assigneee选择自己
3. 定期再联络还没有投稿的对象。
4. 上架新稿件，如上所述。PR中请注明要close这个对象的issue。

## 周期

（TBD，主要描述一年中什么时候该找保研等等的人邀稿，以及传承至下一届）