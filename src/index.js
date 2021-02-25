var listArray = [
    {name:'王港', src:'./src/img/1.png',feature:'不爱笑',sex:'男',age:'18'},
    {name:'刘莹', src:'./src/img/2.png',feature:'你有见过的',sex:'女',age:'19'},
    {name:'刘金珠', src:'./src/img/3.png',feature:'古香',sex:'女',age:'21'},
    {name:'张菲菲', src:'./src/img/4.png',feature:'我是谁',sex:'女',age:'23'},
    {name:'刘翔', src:'./src/img/5.png',feature:'擅长跑步',sex:'男',age:'22'},
    {name:'王铁柱', src:'./src/img/6.png',feature:'可靠',sex:'男',age:'19'},
    {name:'李丽', src:'./src/img/7.png',feature:'眼光独到',sex:'女',age:'25'},

];
// var oDiv = document.getElementsByClassName('filterObject')[0];
var Ul = document.getElementsByTagName('ul')[0];
function renderPage(data){
    var htmlStr = '';
    data.forEach(function (ele , index , self){
        htmlStr += '<li><img src = " '+ ele.src + '"></img><div class ="desc"><span class = "name">' + ele.name +'</span><span class = "feature">' + ele.feature +'</span></div></li>';
    });
    // console.log(htmlStr);                                                                                                                                                                                                                       
    Ul.innerHTML = htmlStr;
}
renderPage(listArray);


function func(){
    var Input = document.getElementById('input').value;
    //Input.oninput =function(){return this.value;}
    console.log(Input);
    // var str = Input;
    renderPage(filterText(listArray,Input));
}

function filterText(data,txt){
    if(txt == null){
        return data;
    }else{
        
    
    var newArr = data.filter(function(ele,index,self){
        if(ele.name.indexOf(txt) != -1)
        {return true}else{return false};
    });
    console.log(newArr);
    return newArr;
}
}

var Span = document.getElementsByClassName('btn');
var ArrObject = new Array();
for(let i = 0;i < Span.length;i++){
    ArrObject.push(Span[i].innerText);
    Span[i].onclick = function(){
        renderPage(sexFilter(ArrObject[i]));
        console.log(ArrObject[i]);
        console.log(i);

};
    
// console.log(Span[i].innerText);  
}
console.log(ArrObject);
function sexFilter(sex){
    var newArr = listArray.filter(function(ele,index,self){
        switch(sex){
            case "Male" : return ele.sex == '女';break;
            case "Female" : return ele.sex == '男';break;
            case "All": return ele;
        }        
    });
    console.log(newArr);
    return newArr;
}