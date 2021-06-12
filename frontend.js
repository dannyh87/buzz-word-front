'use strict';

let bigHex = document.getElementById('bigHex')

function add_img() {

	let topEdge = 5
	let stop = 8
	
	for (let r = topEdge; r <= stop; r++) {
		
		bigHex.appendChild(buildRow(r))
	}
	for (let r = stop-1; r >= topEdge; r--) {
		
		bigHex.appendChild(buildRow(r))
	}

}
function buildRow(cols){
	let row = document.createElement('div')

	for (let c = cols; c > 0; c--) {

		var img = document.createElement('img');
		img.src = 'icons/hexagon.svg'
		img.style.width = "30px"
		row.appendChild(img);

	}
	return row
}
add_img()

let test = document.getElementById('test')
