# 华东理工大学飞跃手册
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

https://ecust-leap.github.io

论坛：https://github.com/ECUST-Leap/ecust-leap.github.io/discussions

## Contributors

[![All Contributors](https://img.shields.io/github/all-contributors/ECUST-Leap/ecust-leap.github.io?color=ee8449&style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulzrq"><img src="https://avatars.githubusercontent.com/u/68681350?v=4?s=100" width="100px;" alt="paulzrq"/><br /><sub><b>paulzrq</b></sub></a><br /><a href="#content-paulzrq" title="Content">🖋</a> <a href="https://github.com/ECUST-Leap/ecust-leap.github.io/commits?author=paulzrq" title="Documentation">📖</a> <a href="#ideas-paulzrq" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-paulzrq" title="Maintenance">🚧</a> <a href="#projectManagement-paulzrq" title="Project Management">📆</a></td>
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
