# LiteLoaderQQNT socket.io Support

This framework plugin allows you to use [`socket.io`](https://socket.io/) in your LiteLoaderQQNT scripts or extension.

这个依赖允许开发者在 LiteLoaderQQNT 的脚本或其他附属中使用 [`socket.io`](https://socket.io/zh-CN/) 带来的功能，如支持及时、双向与基于事件的交流（客户端与服务端的）。

You can do everything you can do in [`socket.io`](https://socket.io/) in this plugin, theoretically not limited in any way.

你可以在这个插件中使用 [`socket.io`](https://socket.io/zh-CN/) 中的所有功能，理论上不受任何限制。

## Installation 安装

Was like any other plugin (Download zip from release, and put it into LiteLoaderQQNT's plugins folder, restart), then you can find `io` in window object if it works.

插件安装方式与任何插件一样（从Release下载zip文件，然后放入LiteLoaderQQNT的plugins文件夹并重启），如果一切正常，你可以在 `window` 对象中找到 `io`。

## Usage 使用

Read socket.io's docs: [https://socket.io/docs/v4/tutorial/introduction](To get started)

去阅读 socket.io 的文档 [https://socket.io/docs/v4/tutorial/introduction](教程)

Or, here is a simple example:

或者，这里有一些基础的示例：

```javascript
// In English
// Here is only Client side (LiteLoaderQQNT) code, if you want know server side code, read socket.io's docs.
const socket = io(/* Put your server url here */) // You can use the "io" variable directly and nothing else!
socket.on('connect', () => {/* When connected */})
socket.on('disconnect', () => {/* When disconnected */})
socket.on('any-message', (data) => {/* When receive a "any-message" */})

socket.emit('any-message', 'Hello World!' /* Emit something on "any-message" channel */)
socket.connent() // Connect to server (Manually, unless you set autoConnect to false)
socket.disconnect() // Disconnect from server

```

```javascript
// 中文
// 这里只提供客户端（LiteLoaderQQNT）的代码，服务端的代码请自行查看文档。
const socket = io(/* 填入服务器URL */) // 可以直接使用"io"而无需其他任何操作。
socket.on('connect', () => {/* 当连接时... */})
socket.on('disconnect', () => {/* 当断开时... */})
socket.on('any-message', (data) => {/* 当收到"any-message"时... */})

socket.emit('any-message', 'Hello World!' /* 广播在 "any-message" 频道... */)
socket.connent() // 连接至服务器（手动的，除非你将"autoConnect"设为false，否则无需这样做）。
socket.disconnect() // 与服务器断开连接。

```

## Licenses & Developers 开源协议与开发者

USE [MIT](LICENSE) LICENSE.

Developer: Only [QWXL](https://github.com/QWXL) self.
