'use strict';

const btnGenerar = document.getElementById('btn-generar-codigo');
const btnDescargar = document.getElementById('btn-descargar-imagen');
const inputTexto = document.getElementById('txt-contenido');
const imgCodigQR = document.getElementById('img-codigo-qr');
const lblMensaje = document.getElementById('lbl-mensaje');
let txtValueTemporal = '';

// inputTexto.addEventListener('keyup', function(e) {
// 	let valor = e.target.value;
// 	if (valor !== txtValueTemporal) {
// 		console.log("Recarga")
// 	}
// });

btnGenerar.addEventListener('click', function(e) {
	if (inputTexto.value && inputTexto.value !== '') {
		txtValueTemporal = inputTexto.value;
		// background: '#2D2D2D',
		// backgroundAlpha: 0.8,
		// foreground: '#fefefe',
		// foregroundAlpha: 0.8,
		let qr = new QRious({
			element: imgCodigQR,
			value: inputTexto.value,
			level: 'H',
			padding: 25,
			size: 500,
		});
		imgCodigQR.classList.add('visible');
		btnDescargar.classList.add('visible');
		lblMensaje.classList.add('visible');
		lblMensaje.textContent = inputTexto.value;
		inputTexto.value = '';
		btnDescargar.download = true;
		btnDescargar.href = imgCodigQR.src;
	}
});

imgCodigQR.addEventListener('click', (e) => console.log(e))

// btnDescargar.addEventListener('click', function(e) {
// 	btnDescargar.download = true;
// 	btnDescargar.href = imgCodigQR.src;
// });
