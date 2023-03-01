export function log(...args) {
  console.log.call(null, `[${new Date()}] `, ...args);
}
