			var j = 10;
			var Timer = null;
			var p=0;
			var total1=0;
			var total2=0;
			var flag1=false;
			var flag2=false;


			function myRandom() {
				x = Math.floor(Math.random() * 6 + 1);
				return x
			}

			function dice(p) {
				var total = 0;
				var num;
				var dd1 = document.getElementById("d3");
				dd1.value = "";
				if(p==1)
				{
					flag1=true;
					var dd = document.getElementById("d1");
					for (var i = 1; i < 4; i++) {
						var objdice = document.getElementById("dice1_" + i);
						num = myRandom();
						total += num;
						objdice.src = "images/dice" + num + ".gif";
						total1=total;
					}

					if (j != 0) {
						j--;
						Timer = setTimeout("dice(1)", 200);
					}
					else {
						clearTimeout(Timer);
						dd.value = total + "點";
						win();
						j = 10;
					}
				}
				else if(p==2)
				{
					flag2=true;
					var dd = document.getElementById("d2");
					for (var i = 1; i < 4; i++) {
						var objdice = document.getElementById("dice2_" + i);
						num = myRandom();
						total += num;
						objdice.src = "images/dice" + num + ".gif";
						total2=total;
					}		
				if (j != 0) {
						j--;
						Timer = setTimeout("dice(2)", 200);
					}
					else {
						clearTimeout(Timer);
						dd.value = total + "點";
						win();
						j = 10;
					}		
				}

			}
			
			function win() {
				if(flag1 && flag2)
				{
					var dd1 = document.getElementById("d3");
					if(total1>total2)
					{
						dd1.value = "甲贏乙";
						flag1=false;
						flag2=false;
					}
					else if(total1<total2)
					{
						dd1.value = "乙贏甲";
						flag1=false;
						flag2=false;
					}
					else
					{
						dd1.value = "雙方平手";
						flag1=false;
						flag2=false;
					}
				}				
			}

           $(document).ready(function(){
				$("#d1").bind('click',function(){
							  p=1;
							  dice();
			});
           $("#d2").bind('click',function(){
			   p=2;
			   dice();
		   });
			});
