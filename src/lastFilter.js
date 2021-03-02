function combineFilterFunc(obj){
    return function(arr){
        var lastArr = arr;
        for(var prop in obj){
          lastArr = obj[prop](state[prop],lastArr);  
        }
        return lastArr;
    }
}
var lastFilter = combineFilterFunc({text:filterText,sex:filterSex});