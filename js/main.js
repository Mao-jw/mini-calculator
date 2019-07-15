function count(){
    var t1 = document.getElementById("text1").value;
    var t2 = document.getElementById("text2").value;
    var s = document.getElementById("select").value;
    var over;
   
    switch(s){
        case "+" :
            over = parseInt(t1) + parseInt(t2);
        break;
        case "-" :
            over = parseInt(t1) - parseInt(t2);
        break;
        case "*" :
            over = parseInt(t1) * parseInt(t2);
        break;
        case "/" :
            over = parseInt(t1) / parseInt(t2);
    }

    document.getElementById("result").value = over;
}
