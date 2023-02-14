# 华理飞跃手册开发 & 维护手册

由于我们希望华理飞跃手册能够在一届一届的学生手中传递下去，我们需要将这个项目的开发以及维护的具体须知以尽可能详细的方式书写下来。

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

#### Onboarding

#### 推荐人数

2+

### 软件工程师

#### 职责

##### 1. GitHub上所有活动的管理

由于本项目的所有活动几乎都基于GitHub，比如issues，PR，工程师需要维护队伍使用GitHub的方式正确且高效。

例如，如果编辑的PR出现了conflicts，工程师需要解决这些conflicts。

##### 2. 软件特性开发/维护

如有必要的话，需要开发新的功能满足读者。并且对已有的所有功能进行维护。

##### 3. 网站成品的质量把关

由于编辑可能不具有在他们的计算机本地运行飞跃手册网站的技能，所以导致他们的排版可能仍会出现疏漏导致在最终成品的网站上效果不如与其所想。工程师需要在本地以及在[dev server](https://ecust-leap.github.io/ecust-leap-dev/)上确保稿件的排版正确且符合预期。

##### 4. 评论区/论坛管理

同上。

##### 5. 邀稿

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

#### 推荐人数

1+