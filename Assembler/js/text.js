function out()
	{
		var x,y,p,q,z;
		x=document.getElementById("form1");
		y=document.getElementById("form2");
		p=x.elements["b1"].value;
		q=y.elements["b2"].value;
			
		
		var s=0;
		var temp=p;
		while(p>0)
		{
			s = s+(p%10);
			p = Math.floor(p/10);
			var t=s;
		}
		
		var b=0;
		
		if(t=>10)
		{
			while(t>0)
			{
				
				b=b+(t%10);
				t= Math.floor(t/10);
				var u=b;
			}
		}
		if(t<10)
		{
			if(t==q)
			{
				
				document.getElementById("demo").innerHTML="Number is a lucky number"+"<br>";
			}
			else
			{
				document.getElementById("demo").innerHTML="Number is not a lucky number"+"<br>"+"Lucky Number is:"+t;
			}
		}
		
		
			if(u==q)
			{
				
				document.getElementById("demo").innerHTML="Number is a lucky number"+"<br>";
			}
			else
			{
				document.getElementById("demo").innerHTML="Number is not a lucky number"+"<br>"+"<br>"+"Lucky Number is:"+u;
			}
				
		
		
		
		
		
	}
	