var numc=0
var sum=0
function add(x)
{
sum=sum+x;
numc=numc+1;
printif();
}
function cear()
{
  document.getElementById('eqfnh').innerHTML="";
 numc=0
 sum=0
}
function printif()
{
  document.getElementById('eqfnh').innerHTML="The sum is= "+sum+"<br><p>number count</p>"+numc;
}
