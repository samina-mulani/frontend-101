$(document).ready(function(){

	function vhtopix(a){
		return $(window).height()*a*0.01;
	}

	function vwtopix(a){
		return $(window).width()*a*0.01;
	}

	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	canvas.height = canvas.width = ctx.height = ctx.width = vhtopix(70);
	let r = vhtopix(35);
	let w = vhtopix(2);
	let h = vhtopix(5);
	ctx.translate(ctx.width/2, ctx.width/2);
	

	function face(){

		ctx.fillStyle = "#000";
		ctx.fillRect(-ctx.width/2,-ctx.width/2, ctx.width,ctx.width);
	
		
		let ang = 0;
		for(let i=0;i<=60;i++,ang += Math.PI/30)
		{
			ctx.fillStyle = "#fff";
			ctx.strokeStyle = "#f00";
			ctx.rotate(ang);
			if(i%5==0)
				if(i%15==0)
				{
					ctx.fillRect(-vhtopix(2.5)/2,-r,vhtopix(2.5),h+5);
					ctx.strokeRect(-vhtopix(2.5)/2,-r,vhtopix(2.5),h+5);
				}
				else
				{
					ctx.fillRect(-vhtopix(1.5)/2,-r,vhtopix(1.5),h);
					ctx.strokeRect(-vhtopix(1.5)/2,-r,vhtopix(1.5),h);
				}
			else
				ctx.fillRect(-1.5,-r+w/2,3,w);
			
			
			ctx.rotate(-ang);
		}

		
	}


	function hands(){

		let d = new Date();
		let h = d.getHours()%12;
		let m = d.getMinutes();
		let s = d.getSeconds();

		let frac1 = (s + 60*m)/3600;
		let frac2 = (s/60)*Math.PI/30; 
		let angh = (h*Math.PI/6) + (frac1*Math.PI/6);
		let angm = (m/60)*Math.PI*2 + frac2; 
		let angs = (s/60)*2*Math.PI;
		angs = Math.PI - angs;
		angm = Math.PI - angm;
		angh = Math.PI - angh;

		ctx.fillStyle = "#fff";
		ctx.rotate(-angh);
		ctx.fillRect(-w/2,0,w,vhtopix(19));
		ctx.rotate(Math.PI);
		ctx.fillRect(w/2,0,-w,vhtopix(5));
		ctx.rotate(angh-Math.PI);

		ctx.rotate(-angm);
		ctx.fillRect(-w/2,0,w,vhtopix(29));
		ctx.rotate(Math.PI);
		ctx.fillRect(w/2,0,-w,vhtopix(5));
		ctx.rotate(angm-Math.PI);

		ctx.rotate(-angs);
		ctx.fillStyle = "#f00";
		ctx.fillRect(0,0,2,vhtopix(35));
		ctx.rotate(Math.PI);
		ctx.fillRect(0,0,-2,vhtopix(5));
		ctx.rotate(angs-Math.PI);
	}

		function clock(){
			face();
			hands();
		}

		setInterval(clock,1000);
	
});
