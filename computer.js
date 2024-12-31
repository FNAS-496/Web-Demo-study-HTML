  function fucck(){alert("What fucking that?\n Why don't you write the fucking number!");}
  function jis(){
  //获取数据
  var x=document.getElementById("ipa").value;
  var y=document.getElementById("ipe").value;
  var z=document.getElementById("ipc").value;
  //转换为数字
  x=+x;
  y=+y;
  z=+z;
  var panx=isNaN(x);
  var pany=isNaN(y);
  var panz=isNaN(z);
  function isz(){
      return ((4*x*x)+(y*y))/(8*x);
  }
function fuck(){
    var j=(z-x)*(z-x);
    var k=z*z-j;
    var s=Math.sqrt(k); 
    return 2*s
}
function funk(){
    var g=Math.sqrt(z*z-y*y/4);
    return z-g
    }
function shuc(){
     document.getElementById("nx").innerHTML=x;
     document.getElementById("ny").innerHTML=y;
     document.getElementById("nz").innerHTML=z;
     }
if(x!==0&&y!==0){
  if(panx||pany){
     fucck();
     }else{
     z=isz();
     shuc();
     }
    }else if(x!==0&&z!==0){
    if(panx||panz){
    fucck();
    }else{
    y=fuck();
    shuc();
    }
    
    }else if(y!==0&&z!==0){
    if(pany||panz){
  fucck();
    }else{
   x=funk()
    shuc();
    }

    }else{
     alert("请输入至少俩个有效值");
    }   
  }