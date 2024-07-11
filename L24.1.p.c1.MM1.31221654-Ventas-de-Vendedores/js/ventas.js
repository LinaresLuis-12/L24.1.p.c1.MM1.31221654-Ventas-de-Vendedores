const ventas = [
    { nombre: 'Mary', monto: 150 },
    { nombre: 'José', monto: 135 },
    { nombre: 'Carlos', monto: 160 },
    { nombre: 'Pedro', monto: 75 }
];
let ventasMenor100 = 0;
let ventasMayor100 = 0;
let montoTotalVentas = 0;
ventas.forEach(venta => {
    montoTotalVentas += venta.monto;
    if (venta.monto <= 100) {
    ventasMenor100++;
    } else {
    ventasMayor100++;
    }
});
const salida = document.getElementById("salida");
salida.innerHTML = "Ventas de Vendedores:";
salida.innerHTML += `<br>Cantidad de Ventas por $100 o menos: ${ventasMenor100}`;
salida.innerHTML += `<br>Cantidad de Ventas mayores a $100: ${ventasMayor100}`;
salida.innerHTML += `<br>Monto Total de Todas las Ventas: $${montoTotalVentas}`;