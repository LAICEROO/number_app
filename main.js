function results(){
    let number=parseInt(document.getElementById('number').value);
    var loopCount = number / 2;  
          for (var i = 1; i <= loopCount; i++) {
            if (number % i == 0)
              document.getElementById("result3").innerHTML += i +",";
          }
          document.getElementById("result3").innerHTML +=  number;
       if(number%2==0){
            document.getElementById("result1").innerHTML='Even';
        }else{
            document.getElementById("result1").innerHTML='Odd';
        }
        if(number<2){
          document.getElementById("result2").innerHTML='The number is not prime';
        return;
        }
        for(var p=2;p<number;p++)
          if(number%p==0)
          {
            document.getElementById("result2").innerHTML='Compound';
            return;
          }
          document.getElementById("result2").innerHTML='Prime number';
        }
  
  var btn1=document.getElementById('btn');
  btn1.addEventListener('click', results);
  