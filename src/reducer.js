export default (state,action)=>{
    if(!state) return {
        themeColor : 'red'
    }

    switch (action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor:action.color
            }
        default : 
            return state;
    }
}