    var flag1 = false;
	
    function checkform() {
		var realname_1 = document.getElementById("realname");
		var gender_1 = document.getElementsByName("gender");
		var addr_1 = document.getElementById("addr");
		var tel_1 = document.getElementById("tel");	
		var comments_1 = document.getElementById("comments");	
	
        if (flag1 == false) {
            alert("商品尚未結帳");
            return (false);
        }
        else {

            if (realname_1.value == "") {
                alert("請輸入大名！");
                return (false);
            }

			
            if (addr_1.value == "") {
                alert("請輸入地址！");
                return (false);
            }
			
            if (tel_1.value == "") {
                alert("請輸入電話！");
                return (false);
            }
			
		
        }
        display();
    }



    function shopform() {
		var amount1_1 = document.getElementById("amount1");
		var amount2_1 = document.getElementById("amount2");
		var amount3_1 = document.getElementById("amount3");
		var amount4_1 = document.getElementById("amount4");
		var ch1_1 = document.getElementById("ch1");
		var ch2_1 = document.getElementById("ch2");
		var ch3_1 = document.getElementById("ch3");
		var ch4_1 = document.getElementById("ch4");
		var total1_1 = document.getElementById("total1");
		var total2_1 = document.getElementById("total2");
		var total3_1 = document.getElementById("total3");
		var total4_1 = document.getElementById("total4");
		var total_1 = document.getElementById("total");
		
		var amount_t = new Array(amount1_1,amount2_1,amount3_1,amount4_1);
		var ch_t = new Array(ch1_1,ch2_1,ch3_1,ch4_1);
		
		for(var i = 0; i < 4 ; i++)
		{
			if ((amount_t[i].value == "" && amount_t[i].value == "0" ) && cht[i].checked) {
				alert("輸入錯誤!\n請按取消，重新輸入");

			}
			
			if (!(amount_t[i].value == "" || amount_t[i].value == "0") && !ch_t[i].checked) {
            alert("輸入錯誤!\n請按取消，重新輸入");
			}
		}
		
 

        var vtotal = parseInt(total1_1.value) + parseInt(total2_1.value) + parseInt(total3_1.value) + parseInt(total4_1.value);
 
		if (vtotal == 0) {
            alert("尚未購物");
			total_1.value = 0;
        }
		else
		{
			total_1.value = vtotal;
			flag1=true;
		}
    }

    function subsum() {
		var amount1_1 = document.getElementById("amount1");
		var amount2_1 = document.getElementById("amount2");
		var amount3_1 = document.getElementById("amount3");
		var amount4_1 = document.getElementById("amount4");
		var ch1_1 = document.getElementById("ch1");
		var ch2_1 = document.getElementById("ch2");
		var ch3_1 = document.getElementById("ch3");
		var ch4_1 = document.getElementById("ch4");	
		var pri1_1 = document.getElementById("pri1");
		var pri2_1 = document.getElementById("pri2");	
		var pri3_1 = document.getElementById("pri3");
		var pri4_1 = document.getElementById("pri4");
		var total1_1 = document.getElementById("total1");
		var total2_1 = document.getElementById("total2");
		var total3_1 = document.getElementById("total3");
		var total4_1 = document.getElementById("total4");
		if(ch1_1.checked)
		{
			total1_1.value = subsum1(amount1_1,pri1_1,ch1_1);

		}
		else
		{
			amount1_1.value = 0;
			total1_1.value = 0;
			
		}
		
		if(ch2_1.checked)
		{
			total2_1.value = subsum1(amount2_1,pri2_1,ch2_1);
			
		}
		else
		{
			amount2_1.value = 0;
			total2_1.value = 0;
			
		}

		if(ch3_1.checked)
		{
			total3_1.value = subsum1(amount3_1,pri3_1,ch3_1);
			
		}
		else
		{
			amount3_1.value = 0;
			total3_1.value = 0;
			
		}

		if(ch4_1.checked)
		{
			total4_1.value = subsum1(amount4_1,pri4_1,ch4_1);
			
		}
		else
		{
			amount4_1.value = 0;
			total4_1.value = 0;
			
		}				
	}
	
	
    function subsum1(c_amount, price, c_name) {
		var pp = parseInt(price.innerHTML);
        if ((c_amount.value == "" || c_amount.value == "0") && c_name.checked) {
            alert("請輸入數量");
			c_name.checked = false;
            return 0;
        }

        if (c_name.checked) {
            c_value = pp * parseInt(c_amount.value);
            return c_value;
        }
        else
            return 0;
    }


    function display() {
        var d_name = document.getElementById("realname").value;
        var d_addr = document.getElementById("addr").value;
        var d_tel = document.getElementById("tel").value;
        var d_gender;

		var gender_1 = document.getElementsByName("gender");
		var comments_1 = document.getElementById("comments");			
		var amount1_1 = document.getElementById("amount1");
		var amount2_1 = document.getElementById("amount2");
		var amount3_1 = document.getElementById("amount3");
		var amount4_1 = document.getElementById("amount4");
		var ch1_1 = document.getElementById("ch1");
		var ch2_1 = document.getElementById("ch2");
		var ch3_1 = document.getElementById("ch3");
		var ch4_1 = document.getElementById("ch4");
		var total1_1 = document.getElementById("total1");
		var total2_1 = document.getElementById("total2");
		var total3_1 = document.getElementById("total3");
		var total4_1 = document.getElementById("total4");
		var total_1 = document.getElementById("total");	
		
		var pri1_1 = document.getElementById("pri1");
		var pri2_1 = document.getElementById("pri2");	
		var pri3_1 = document.getElementById("pri3");
		var pri4_1 = document.getElementById("pri4");		
		
        for (var i = 0; i < gender_1.length; i++) {
            if (gender_1[i].checked)
                d_gender = gender_1[i].value;
        }

        var c_price = new Array(parseInt(pri1_1.innerHTML), parseInt(pri2_1.innerHTML), parseInt(pri3_1.innerHTML), parseInt(pri4_1.innerHTML));
        var c_check = new Array(ch1_1.checked,ch2_1.checked,ch3_1.checked,ch4_1.checked);
        var c_value = new Array(ch1_1.value,ch2_1.value,ch3_1.value,ch4_1.value);
        var c_amount = new Array(amount1_1.value,amount2_1.value,amount3_1.value,amount4_1.value);
        var c_total = new Array(total1_1.value,total2_1.value,total3_1.value,total4_1.value);
        var b_total = total_1.value;

        if (flag1 == true) {
			document.write("<!DOCTYPE html>");
			document.write("<html>");	
			document.write("<head>");	
			document.write("<meta charset='utf-8'>");
			document.write("<title>送貨單</title>")
			document.write("</head>");	
		    document.write("</body>");
            document.write("<center>");
            document.write("<h2>送貨單</h2>");
            document.write("<table border='1'>");
            document.write("<hr width=70%>");
            document.write("<tr>");
            document.write("<td align= 'center' width='50px'>姓名</td><td align='center' width='150px'>" + d_name + "</td>");
            document.write("<td align= 'center' width='50px'>性別</td><td align='center' width='50px'>" + d_gender + "</td>");
            document.write("<td align= 'center' width='50px'>電話</td><td align= 'center' width='100px'>" + d_tel + "</td>");
            document.write("</tr>");
            document.write("<tr>");
            document.write("<td align= 'center' width='50px'>地址</td><td colspan='5'>" + d_addr + "</td>");
            document.write("</tr>");
            document.write("<tr>");
            document.write("<td align= 'center' colspan='6'>購買清單</td>");
            document.write("</tr>");
            document.write("<tr>");
            document.write("<td align= 'center' width='50px'>項目</td><td align= 'center' width='150px'>物品名稱</td>");
            document.write("<td align= 'center' width='50px'>單價</td><td align= 'center' width='50px'>數量</td><td align='center' colspan='2'>單項金額</td>");
            document.write("</tr>");



            if (c_check[0]) {
                document.write("<tr>");
                document.write("<td align= 'center' width='50px'>1</td><td align= 'center' width='150px'>" + c_value[0] + "</td>");
                document.write("<td align= 'center' width='50px'>" + c_price[0] + "</td><td align= 'center' width='50px'>" + c_amount[0] + "</td><td align='center' colspan='2'>" + c_total[0] + "</td>");
                document.write("</tr>");
            }


            if (c_check[1]) {
                document.write("<tr>");
                document.write("<td align= 'center' width='50px'>2</td><td align= 'center' width='150px'>" + c_value[1] + "</td>");
                document.write("<td align= 'center' width='50px'>" + c_price[1] + "</td><td align= 'center' width='50px'>" + c_amount[1] + "</td><td align='center' colspan='2'>" + c_total[1] + "</td>");
                document.write("</tr>");
            }

            if (c_check[2]) {
                document.write("<tr>");
                document.write("<td align= 'center' width='50px'>3</td><td align= 'center' width='150px'>" + c_value[2] + "</td>");
                document.write("<td align= 'center' width='50px'>" + c_price[2] + "</td><td align= 'center' width='50px'>" + c_amount[2] + "</td><td align='center' colspan='2'>" + c_total[2] + "</td>");
                document.write("</tr>");
            }

            if (c_check[3]) {
                document.write("<tr>");
                document.write("<td align= 'center' width='50px'>4</td><td align= 'center' width='150px'>" + c_value[3] + "</td>");
                document.write("<td align= 'center' width='50px'>" + c_price[3] + "</td><td align= 'center' width='50px'>" + c_amount[3] + "</td><td align='center' colspan='2'>" + c_total[3] + "</td>");
                document.write("</tr>");
            }
            

            document.write("<tr>");
            document.write("<td colspan='4'></td>");
            document.write("<td align= 'center' width='50px'>合計</td><td align= 'center' width='100px'>" + b_total + "</td>");
            document.write("</tr>");
            document.write("</table>");
            document.write("<br/>");			
            document.write("<br/>");	
            document.write("<a href='shopping.html'>返回<a>");					
            document.write("</center>");
            document.write("</body>");		
		    document.write("</html>");			
            flag1 = false;
        }
    }