var inputRule = function(val) {
  val = val.replace(/[\[\]\\\/]/g, '')
  return val
}
export default inputRule
//   /[\[\]\\\/\s*]/g  包括去掉空格
