# 华东理工大学飞跃手册
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The website has moved to https://ecust-leap.pages.dev/.

GitHub Pages publishes only the files in `redirect/`, which redirect the old
domain and deep links to the new site. The previous Docusaurus source remains in
this repository as an archive.

论坛：https://github.com/ECUST-Leap/ecust-leap-discussions

---

# Archived website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command serves the redirect-only site at http://localhost:3000/. To run
the archived Docusaurus development site instead, use `yarn start:archive`.

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
