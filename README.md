# Ionic Wordpress (ee047460)

[![Build Status](https://travis-ci.org/smartbiz/angular2-wordpress.svg?branch=master)](https://travis-ci.org/smartbiz/angular2-wordpress)
[![Build Status](https://ci.appveyor.com/api/projects/status/cbpp0xtht82i6wco/branch/master?svg=true)](https://ci.appveyor.com/project/smartbiz/angular2-wordpress)
[![GPLv3+ License](https://img.shields.io/badge/license-GPLv3+-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Join the chat at https://gitter.im/smartbiz/angular2-wordpress](https://badges.gitter.im/smartbiz/angular2-wordpress.svg)](https://gitter.im/smartbiz/angular2-wordpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Creating a Mobile App for your WordPress-based Business using Ionic Framework (HTML5, CSS3, Cordova).

### Development Environment

####1. [Node.js](http://nodejs.org) and npm installed. I recommend using [nvm](https://github.com/creationix/nvm). I used nvm v0.31.0, node v4.4.2 & npm 2.14.7

```
  xcode-select --install
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  nvm install 4.2.2
```

####2. Install Ionic

```bash
   npm install -g cordova ionic
```

```bash
   # iOS Setup Steps
   npm install -g ios-sim
   # download & install XCode
```

####3. Test, Build, Simulate

   # Develop in the browser with live reload: 
   ionic serve
   
   # Configure Platforms:
   ionic platform add ios
   ionic platform add android

   # Build your app: ios || android
   ionic build <PLATFORM>

   # Simulate your app: ios || android
   ionic emulate <PLATFORM>

   # Run your app on a device: ios || android
   ionic run <PLATFORM>

   # Package an app using Ionic package service: ios || android
   ionic package <MODE> <PLATFORM>

   ionic --help or ionic docs
```

### Changelog

#### Version 1.2.0
> Online Wordpress Demo (Lazada-style)
> Build with IBM MobileFirst --> iOS & Android Native
> Improvement: SaaS, Font Icons, Maps
> Documentation

#### Version 1.1.1
1st Initial
  ```bash
     # Start a project
     ionic start ionic-wordpress sidemenu
  ```
  
  ```bash
     # Setup this project to use Sass: 
     npm install -g gulp
     ionic setup sass
   ```

   ```bash
      sudo chmod -R 777 '/Users/YourName/.config/configstore/update-notifier-cordova.json'
   ```
   
   iOS: 
   
   Android: http://developer.android.com/sdk/index.html#Other
   # ~./bash_profile
   export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_77.jdk/Contents/Home
   export ANT_HOME=/Library/Java/apache-ant-1.9.7
   export ANDROID_HOME=/Library/Java/Android/sdk
   export PATH="/usr/local/mysql/bin:/bin:/usr/bin:/usr/local/bin:$ANT_HOME/bin:$JAVA_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH"
   
   $ cd ionic-wordpress 
   $ android
   $ android sdk
   $ android avd
     HINT: For a faster emulator, use an Intel System Image and install the HAXM device driver