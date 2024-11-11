import { io } from "./socket.io.esm.min.js"

window.io = io

/**
 * Await for socket.io to be loaded
 * @returns {Promise}
 */
function waitingIoLoaded() {
    return new Promise((resolve, reject) => {
        executeWhenIoLoaded(resolve)
    })
}
/**
 * Execute callback when socket.io is loaded
 * @param {Function} callback 
 * @param  {...any} args 
 */
function executeWhenIoLoaded(callback, ...args) {
    callback(...args)
}
executeWhenIoLoaded()


console.log("LiteLoaderQQNT socket.io support loaded!")
console.log("Variable \"io\" has been loaded into Window")

export {
    io
}