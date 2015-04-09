/**
 * Created by Andrey on 09.04.2015.
 */
/** 1.	Создать список из 10 пунктов, в скрипте реализовать функцию,
 *  которая будет поочередно с верху вниз менять задний фон пунктов меню
 *  и при достижении конца начинать сначала.
 *  Нужно менять не только задний фон, но и сам цвет фона.
 *  То есть на каждом пункту меню будет разный цвет.
 *  Все остальные пункты, на которых не происходит замена в данный момент, должны быто одного цвета.*/

var button = document.getElementById ("button");
button.style.background = "yellow";
button.style.marginLeft = "14%";
button.style.marginTop = "2%";

var myList = document.getElementById("List");
myList.style.margin = "5%";
myList.style.paddingLeft = "7%";
myList.style.width = "300px";
myList.style.fontSize = "250%";
myList.style.background = "green";

myStr = new Array (10);

for (var i = 1; i < 11; i++) {
    myStr[i - 1] = document.getElementById('li' + i);
    myStr[i - 1].style.paddingLeft = "20px";
}

var timer;
var count = 0;
var color;

function GetRandom (num)
{
    return Math.round(num*Math.random());
}

function GetRandomColor()
{
    var red = GetRandom (255);
    var green = GetRandom (255);
    var blue = GetRandom (255);
    var color = "rgb("+red+","+green+","+blue+")";
    return color;
}

function Show()
{
    myStr[count].style.background = GetRandomColor();

    if (count)
        myStr[count - 1].style.background = "green";
    else
        myStr[9].style.background = "green";

    count++;
    if (count == 10)
        count = 0;
}

function Clock ()
{
   if (!timer) {
       timer = window.setInterval('Show()', 500);
       button.firstChild.nodeValue = "Остановить";
       }
    else
   {
       button.firstChild.nodeValue = "Запустить";
       Stop();
   }
}

function Stop ()
{
    window.clearInterval(timer);
    timer = null;
}
