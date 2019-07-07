let srcPhoto = 
[
	"_IYFAd-Dq8s.jpg",
	"F1S3DHZxFTE.jpg",
	"mfvST3a_g0I.jpg",
	"oC3YtdZQiP0.jpg",
	"QORQllW2ay0.jpg",
	"18_champagnerat_website_01b.jpg",
	"chlt14-7.jpg",
	"ilyou.jpg"

];
let mainP = document.querySelector('.mainphoto');
let mini =document.querySelectorAll('.minphoto');
for(let i=0;i<srcPhoto.length;i++){
	mini[i].addEventListener('click',function(){
	mainP.setAttribute("src",srcPhoto[i]);
	})
}