# Ionic Wordpress (ee047460)

[![Build Status](https://travis-ci.org/smartbiz/angular2-wordpress.svg?branch=master)](https://travis-ci.org/smartbiz/angular2-wordpress)
[![Build Status](https://ci.appveyor.com/api/projects/status/cbpp0xtht82i6wco/branch/master?svg=true)](https://ci.appveyor.com/project/smartbiz/angular2-wordpress)
[![GPLv3+ License](https://img.shields.io/badge/license-GPLv3+-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Join the chat at https://gitter.im/smartbiz/angular2-wordpress](https://badges.gitter.im/smartbiz/angular2-wordpress.svg)](https://gitter.im/smartbiz/angular2-wordpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Creating a Mobile App for your WordPress-based Business using Ionic Framework (HTML5, CSS3, Cordova).

# Development Environment

1. [Node.js](http://nodejs.org) and npm installed. I recommend using [nvm](https://github.com/creationix/nvm). I used nvm v0.31.0, node v4.4.2 & npm 2.14.7

```
  xcode-select --install
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  nvm install 4.2.2
```

2. Install Ionic

```bash
   npm install -g cordova ionic
```

3. Start a project

```bash
   ionic start ionic-wordpress sidemenu
```

4. Configure Platforms
```bash
   ___ ionic platform add ios ___
   ionic platform add android
```

5. 
```bash
   ionic build ios
   ionic platform add android
```

# Changelog

## Version 1.0.0
- 1st Initial