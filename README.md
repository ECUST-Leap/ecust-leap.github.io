# 华东理工大学飞跃手册
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

https://ecust-leap.github.io

论坛：https://github.com/ECUST-Leap/ecust-leap.github.io/discussions

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Yuchen-Wang-SH"><img src="https://avatars.githubusercontent.com/u/17931662?v=4?s=100" width="100px;" alt="Yuchen Wang"/><br /><sub><b>Yuchen Wang</b></sub></a><br /><a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=Yuchen-Wang-SH" title="Code">💻</a> <a href="#content-Yuchen-Wang-SH" title="Content">🖋</a> <a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=Yuchen-Wang-SH" title="Documentation">📖</a> <a href="#ideas-Yuchen-Wang-SH" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-Yuchen-Wang-SH" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-Yuchen-Wang-SH" title="Maintenance">🚧</a> <a href="#projectManagement-Yuchen-Wang-SH" title="Project Management">📆</a> <a href="#tool-Yuchen-Wang-SH" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Oliver20001031"><img src="https://avatars.githubusercontent.com/u/123611315?v=4?s=100" width="100px;" alt="Oliver20001031"/><br /><sub><b>Oliver20001031</b></sub></a><br /><a href="#ideas-Oliver20001031" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-Oliver20001031" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Qiying-Hong"><img src="https://avatars.githubusercontent.com/u/113129569?v=4?s=100" width="100px;" alt="Qiying-Hong"/><br /><sub><b>Qiying-Hong</b></sub></a><br /><a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=Qiying-Hong" title="Documentation">📖</a> <a href="#maintenance-Qiying-Hong" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pvvq"><img src="https://avatars.githubusercontent.com/u/57176977?v=4?s=100" width="100px;" alt="pwq"/><br /><sub><b>pwq</b></sub></a><br /><a href="#content-pvvq" title="Content">🖋</a> <a href="#ideas-pvvq" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulzrq"><img src="https://avatars.githubusercontent.com/u/68681350?v=4?s=100" width="100px;" alt="paulzrq"/><br /><sub><b>paulzrq</b></sub></a><br /><a href="#content-paulzrq" title="Content">🖋</a> <a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=paulzrq" title="Documentation">📖</a> <a href="#ideas-paulzrq" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-paulzrq" title="Maintenance">🚧</a> <a href="#projectManagement-paulzrq" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Muro967"><img src="https://avatars.githubusercontent.com/u/103167971?v=4?s=100" width="100px;" alt="Muro967"/><br /><sub><b>Muro967</b></sub></a><br /><a href="#content-Muro967" title="Content">🖋</a> <a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=Muro967" title="Documentation">📖</a> <a href="#ideas-Muro967" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-Muro967" title="Maintenance">🚧</a> <a href="#projectManagement-Muro967" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JianAN1999"><img src="https://avatars.githubusercontent.com/u/118014310?v=4?s=100" width="100px;" alt="JianAN1999"/><br /><sub><b>JianAN1999</b></sub></a><br /><a href="#content-JianAN1999" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
