var listArray = [
    {name:'王港', src:'./src/img/1.png',feature:'不爱笑',sex:'男',age:'18'},
    {name:'刘莹', src:'./src/img/2.png',feature:'你有见过的',sex:'女',age:'19'},
    {name:'刘金珠', src:'./src/img/3.png',feature:'古香',sex:'女',age:'21'},
    {name:'张菲菲', src:'./src/img/4.png',feature:'我是谁',sex:'女',age:'23'},
    {name:'刘翔', src:'./src/img/5.png',feature:'擅长跑步',sex:'男',age:'22'},
    {name:'王铁柱', src:'./src/img/6.png',feature:'可靠',sex:'男',age:'19'},
    {name:'李丽', src:'./src/img/7.png',feature:'眼光独到',sex:'女',age:'25'},

];
var store =createStore({
    text:"",
    sex:"a",
});

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
function update(){
    renderPage(lastFilter(listArray));
}
store.subscribe(update);
var getInput = document.getElementById('input');



getInput.oninput = function (){
    store.dispatch({type:"text",text:getInput.value});
    console.log(getInput.value);
}


var Span = document.getElementsByClassName('btn');
for(let i = 0;i < Span.length;i++){  
    Span[i].onclick = function(){
        store.dispatch({type:'sex',text:Span[i].getAttribute('sex')});
        console.log(Span[i].getAttribute('sex'));
};
}
