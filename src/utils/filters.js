/**
 * 用户名称脱敏处理
 * @param name
 * @returns {string|*}
 */
function unameFormat (name) {
  if (!name) {
    return name
  }
  return name.substr(0, 2) + '***'
}

export {
  unameFormat
}
