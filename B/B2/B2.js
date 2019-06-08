$(document).ready(function(){
	let x = document.getElementsByClassName("mem")[0].offsetWidth;
	document.getElementById("add").style.width = x/2 + 'px';
	document.getElementById("add").style.height = x/2 + 'px';
	document.getElementById("sub").style.width = x/2 + 'px';
	document.getElementById("sub").style.height = x/2 + 'px';

	$("form").hide();

	function Cancel(){
		$("form").hide();
	}

	$('#add').click(
		function(){
			$(".close").hide();
    		$("form").toggle();
    	});

	$(".btn").click(Cancel);
	$("#sub").click(function(){
		$("form").hide();
		$(".close").toggle();
		$(".close").click(function(){
			$(this).parent().hide();
		});
	});

	let form = document.getElementById("frm");
	form.onsubmit = function(e){
		let name = form.Name.value || "";
		let pos = form.Position.value || "";
		let prof = form.Profile.value || "";
		let con = form.Contact.value || "";
		let image = "Member.png";
		e.preventDefault();

		let newmem = document.createElement('div');
		newmem.className = 'mem';

		let img = document.createElement("img");
		img.className = "img";
		img.setAttribute("alt",`${name}`);
		img.setAttribute("src",`${image}`);

		let p1 = document.createElement('p');
		p1.className = "name";
		p1.textContent = `${name}`;
		let p2 = document.createElement('p');
		p2.className = "pos";
		p2.textContent = `${pos}`;
		let p3 = document.createElement('p');
		p3.className = "prof";
		p3.textContent = `${prof}`;
		let p4 = document.createElement('p');
		p4.className = "con";
		p4.textContent = `${con}`;

		let closebtn = document.createElement('div');
		closebtn.innerHTML = "X";
		closebtn.className = "close";
		
		newmem.appendChild(closebtn);
		newmem.appendChild(img);
		newmem.appendChild(p1);
		newmem.appendChild(p2);
		newmem.appendChild(p3);
		newmem.appendChild(p4);
		//let l = $(".mem").length;
		let parent = document.getElementsByClassName("container")[0];
		parent.appendChild(newmem);
	};



	/*window.addmem = function(){   //binding created functions to window
		let x = document.getElementById("frm");
		let n = x.Name;
		alert(n);
	}*/
});
