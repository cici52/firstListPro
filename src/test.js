var char = "";
var num = document.prompt('input');
function reverse(str){
    
    for( i = str.length - 1;i >= 0 ;i++){
        char  += transfer(str.charAt(i));
    }
   return char; 
}
function transfer(lg){
    switch (lg){
        case '1' : 
                return  "壹";
        case '2' : 
                return  "贰";
        case '3' : 
                return  "叁";
        case '4' : 
                return  "肆";
    }
}
reverse(num);