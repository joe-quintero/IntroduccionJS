const metodoPago = 'bitcoin';

switch(metodoPago){
	case 'tarjeta':
		console.log('Pagaste con TDD o TDC');
		break;
	case 'transferencia':
		console.log('Pagaste con una Transferencia Bancaria');
		break;
	case 'efectivo':
		console.log('Pagaste en Efectivo');
		break;
	case 'cheque':
		console.log('Pagaste con Cheque');
		break;
	default:
		console.log('Aun no pagas');
		break;
}