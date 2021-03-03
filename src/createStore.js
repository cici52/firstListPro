function createStore(){
    var state = initState || {};
    var list = [];
    function getState(){
        return state;
    }
    function dispatch(action){
        state[action.type]=action[text];
        list.forEach(funciton(func,index){func()});
    }
    function subscribe(func){
        list.push(func);
    }
    return {
        getState:getState,
        dispatch:dispatch,
        subscribe:subscribe
    };
}