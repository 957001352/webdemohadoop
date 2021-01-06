// 控制按钮权限
const hasPermission = function(permission) {
	const operationAuthority = localStorage.getItem('operationAuthority')
	if (operationAuthority) {
		const routerLists = operationAuthority.split(',')
		return true //routerLists.indexOf(permission) > -1
	} else {
		return true
	}
}
export default hasPermission
