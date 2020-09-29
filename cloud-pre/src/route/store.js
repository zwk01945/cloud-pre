const stroage ={
    state: {
        count: 0,
        username:sessionStorage.getItem('username'),
        userid:sessionStorage.getItem('userid'),
        id:sessionStorage.getItem('id')
    },
    mutations: {
        increment (state) {
            state.count++
        },
        userinfo(state,param) {
            sessionStorage.setItem("username",param.userName)
            sessionStorage.setItem("userid",param.userId)
            sessionStorage.setItem("id",param.id)
            state.username=param.userName
            state.userid=param.userId
            state.id=param.id
        }
    }
}
export default stroage;