function abc(){
var a= parseInt(prompt("enter first number"));
var b= parseInt(prompt("enter 2nd number"));
var c=(a+b);
confirm("result is "+ c);
}
function abc1(){
var a=15;
num=1;
while(num<10)
{
document.write(a + "*" + num + "=" + (a*num) +"</br>");
num++;
}
}
var array= new Array("20","21","22","23","24","25");
for(var i=1;i<=array.length;i++)
{
var a=parseInt(array[i]);
document.write(a);
}
function mousein(){
document.getElementById("demo1").style.backgroundColor = "blue";
}
function mouseout(){
document.getElementById("demo1").style.backgroundColor = "red";
}
var mywindow;
function mywin()
{
mywindow = window.open("","My window","width=400,height=400");

mywindow.document.write("<p>cwhbdkksdbcwdnkjcwkjnckbw</p>");

}
function winclose()
{
mywindow.blur();
}
function abcd() {
var x=document.getElementById("sel").value;
document.getElementById("demo").innerHTML="U CHOSE" + x;
}