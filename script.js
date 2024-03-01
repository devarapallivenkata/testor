window.onload = function () 
{
	document.querySelector('.hamburger').addEventListener('click', function (){
		document.querySelector('.hamburger').classList.toggle('press');
		document.querySelector('.mobile_menu').classList.toggle('press');
	});
}