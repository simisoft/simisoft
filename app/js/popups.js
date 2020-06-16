let popup = document.getElementById('mypopup'),
	popupBtn = document.getElementById('btn-menu'),
	popupClose = document.querySelector('.close');

popupBtn.onclick = function() {
	popup.style.display = 'block';
}

popupClose.onclick = function() {
	popup.style.display = 'none';
}