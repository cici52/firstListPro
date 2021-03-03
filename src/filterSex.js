function filterSex(sex,data){
    if(sex == 'a'){
        return data;
    }else{
        return data.filter(function(ele,index,self){
            return ele.sex == sex;      
        });
    }
    
}