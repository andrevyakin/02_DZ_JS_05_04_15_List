/**
 * Created by Andrey on 09.04.2015.
 */
/** 1.	������� ������ �� 10 �������, � ������� ����������� �������,
 *  ������� ����� ���������� � ����� ���� ������ ������ ��� ������� ����
 *  � ��� ���������� ����� �������� �������.
 *  ����� ������ �� ������ ������ ���, �� � ��� ���� ����.
 *  �� ���� �� ������ ������ ���� ����� ������ ����.
 *  ��� ��������� ������, �� ������� �� ���������� ������ � ������ ������, ������ ���� ������ �����.*/

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



function Clock ()
{
   timer = window.setInterval('Show()', 2000) ;
}



document.write("��������")