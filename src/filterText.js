function filterText(txt,data){ 
 
    if(!txt){
        return data;
    }
    else{
        var newArr = data.filter(function(ele,index,self){
            if(ele.name.indexOf(txt) != -1)
            {return true}else{return false};
        });
        return newArr;
    }
}
