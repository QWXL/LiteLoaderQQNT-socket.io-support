/**
 * Execute callback when socket.io is loaded
 * @param {Function} callback 
 * @param  {...any} args 
 */
function executeWhenIoLoaded(callback) {
    callback(io)
}
executeWhenIoLoaded()
window.executeWhenIoLoaded = executeWhenIoLoaded

/**
 * Await for socket.io to be loaded
 * @returns {Promise}
 */
function waitingIoLoaded() {
    return new Promise((resolve, reject) => {
        executeWhenIoLoaded(resolve)
    })
}
window.waitingIoLoaded = waitingIoLoaded

import { io } from "./socket.io.esm.min.js"

window.io = io

console.log("LiteLoaderQQNT socket.io support loaded!")
console.log("Variable \"io\" has been loaded into Window")

export {
    io,
    waitingIoLoaded,
    executeWhenIoLoaded
}