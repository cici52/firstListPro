function filterSex(sex,data){
    var newArr = data.filter(function(ele,index,self){
        return ele.sex == sex;      
    });
    return newArr;
}