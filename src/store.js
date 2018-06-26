export default (reducers)=>{
    var state = null;
    var listeners = [];
    var subscribe = (f)=>{
        listeners.push(f);
    }
    var getState = ()=>{return state;}

    var dispatch = (action)=>{
        state = reducers(state,action);
        listeners.forEach(item=>item());
    }
    dispatch({});

    return {
        dispatch,
        getState,
        subscribe
    }
}