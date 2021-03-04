function combineFilterFunc(obj){
    return function(arr){
      console.log(arr);
        var lastArr = arr;
        for(var prop in obj){
          lastArr = obj[prop](store.getState()[prop],lastArr);
        }
        console.log(lastArr);
        return lastArr;
    }
}
var lastFilter = combineFilterFunc({text:filterText,sex:filterSex});