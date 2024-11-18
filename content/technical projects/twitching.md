---
title: HLS-Based Livestreaming Platform
draft: false
tags:
date: 2023-04-14
---

### [GitHub link 🎧 🔌](https://github.com/abenav4/Twitching-Livestream-App)

HLS Livestreaming Application (Twitch.tv Alternative). This application lets you livestream using a server or a specified `.m3u8` file. It uses HLS as opposed to RTMP protocol and has a chat functionality for viewers of the stream.

Built using: 🍃 Node.js, 🎥 Video.js, 👨🏿‍🔧 Nginx

![[182185239-0969ff33-0c0e-4c3e-be34-2e73c0900697.webm|182185239-0969ff33-0c0e-4c3e-be34-2e73c0900697]]

---

### Installation and build instructions

Clone the repository locally.

```
git clone https://github.com/abenav4/livestreaming-application.git
```

Importantly, you need to have an active server running (and a corresponding video file) in order to run this application. Alternatively, an existing server on the web can be used as well. A helpful list of free HLS m3u8 URLs can be found at [this link](https://ottverse.com/free-hls-m3u8-test-urls/).

To alter the .m3u8 file, please modify line 38 on `index.html` by changing the value of `src` to your server address.

```
<source src="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8" type="application/x-mpegURL">
```

To install the relevant dependencies:

```
npm install
```

To start application (in /client/)

```
npm start
```

Open http://localhost:3000 to view the app in your browser.
