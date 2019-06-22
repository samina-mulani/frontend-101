$(document).ready(function(){

if(localStorage.getItem("members"))
for(let m of JSON.parse(localStorage.getItem("members")))
{
	appendmem(m);
}

$("form").hide();

	function Cancel(){
		$("form").hide();
	}

	$('#add').click(
		function(){
			$(".close").hide();
    		$("form").toggle();
    	});

function appendmem(member){

	let newmem = document.createElement('div');
		newmem.className = 'mem';

		let img = document.createElement("img");
		img.className = "img";
		img.setAttribute("alt",member.name);
		img.setAttribute("src",member.image);

		let p1 = document.createElement('p');
		p1.className = "name";
		p1.textContent = member.name;
		let p2 = document.createElement('p');
		p2.className = "pos";
		p2.textContent = member.pos;
		let p3 = document.createElement('p');
		p3.className = "prof";
		p3.textContent = member.prof;
		let p4 = document.createElement('p');
		p4.className = "con";
		p4.textContent = member.con;

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
		let parent = document.getElementsByClassName("containerformem")[0];
		parent.appendChild(newmem);

}
	function addmem(form){

		let oldMem = JSON.parse(localStorage.getItem('members')) || [];

		let newMem = 
	{
 		name: form.Name.value || "Name",
 		pos: form.Position.value || "Position",
 		prof: form.Profile.value || "Profile",
 		con: form.Contact.value || "Contact",
 		image: "Member.png",
	};

	oldMem.push(newMem);

 	localStorage.setItem('members', JSON.stringify(oldMem));

		let l = JSON.parse(localStorage.getItem("members")).length;
		
		appendmem(JSON.parse(localStorage.getItem("members"))[l-1]);		
	}

	

	$(".btn").click(Cancel);
	$("#sub").click(function(){
		$("form").hide();
		$(".close").toggle();
		$(".close").click(function(){
			let x = this;
			$(this).parent().animate({opacity:0},500);
			setTimeout(function(){
				x.parentElement.style.display = 'none';
			},500);

			let child = x.parentElement;
			
			let i=0;
			while( (child = child.previousElementSibling) != null ){console.log(child);i++};
			
			let memList = JSON.parse(localStorage.getItem("members"));
			memList.splice(i,1);
			localStorage.setItem("members",JSON.stringify(memList));
			

		});
	});

	let form = document.getElementById("frm");
	form.onsubmit = function(e){
		e.preventDefault();
		addmem(form);
	};

});