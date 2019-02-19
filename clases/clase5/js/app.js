
var aplicacion = angular.module("app", [])
aplicacion.controller("controlador", ["$scope", function($scope){
	
	$scope.productos = [{"id": 1,
						"nombre": "Teclado",
						"costo": 50
						},
						{
						"id": 2,
						"nombre": "Monitor",
						"costo": 100
						},
						{
						"id": 3,
						"nombre": "CPU",
						"costo": 150
						}]


	$scope.add_producto = function(){
		var id = document.getElementById('id').value
		var nombre = document.getElementById('nombre').value
		var costo = document.getElementById('costo').value
		$scope.productos.push({
						"id": id,
						"nombre": nombre,
						"costo": costo
						})
	}

}])