document.getElementById("1").onclick=function(){
    let message = {
        'error': "Вы допустили ошибку",
        'correct': "Верно!",
        'check':function(ans,mult){
            if(ans == mult) alert(this.correct);
            else alert(this.error);
        }
    }
    let gen = () => Math.round(Math.random()*8+2);
    let a = gen();
    let b = gen();
    let ans = +prompt(`Вычислите ${a}*${b}`);
    message.check(ans, a*b);
}


document.getElementById("2").onclick=function(){
    let str = prompt("Введите строку");
    let str1 ="";
    for (i = 1; i < str.length; i+=2){
        str1 += str.at(i);
    }
    alert(`Строка из четных символов: ${str1}`);
}


document.getElementById("3").onclick=function(){
    let str = prompt("Введите цифры");
    let mult = 1;
    if (isNaN(str))
        alert("Неверный ввод. Попробуйте ещё раз");
    else{
        for (i = 0; i < str.length; i++){
            let n = +str.at(i);
            mult*=n;
        }
        alert(`Произведение цифр равно ${mult}`);
    }    
}


document.getElementById("4").onclick=function(){
    function Reverse(str){
        let str1=""
        for (i = -1; i >= -str.length; i--)
            str1+=str.at(i);
        return str1;
    }
    let str=prompt("введите число");
    alert(Reverse(str));
}


document.getElementById("5").onclick=function(){
    function del_n(str,n){
        s = str.slice(0,n-1)+str.substring(n, str.length);
        return s;
    }
    let str = prompt("Введите строку");
    let n = prompt("Введите позицию, которую нужно удалить");
    alert(del_n(str,n));
}
