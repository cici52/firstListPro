function combineFilterFunc(obj){
    return function(arr){
      console.log(arr);
        var lastArr = arr;
        for(var prop in obj){
          lastArr = obj[prop](state[prop],lastArr);
          console.log(state[prop]);
        }
        console.log(lastArr);
        return lastArr;
    }
}
var lastFilter = combineFilterFunc({text:filterText,sex:filterSex});