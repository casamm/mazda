if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	document.getElementById('desktop').classList.add('hidden');
	document.getElementById('phone').classList.remove('hidden');
} else {
	document.getElementById('phone').classList.add('hidden');
	document.getElementById('desktop').classList.remove('hidden');
}