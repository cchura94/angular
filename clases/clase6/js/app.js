
var aplicacion = angular.module("app", [])
aplicacion.controller("controlador", ["$scope", function($scope){
	
	$scope.productos = [{id: 1,	nombre: "Teclado", costo: 49.99},
						{id: 2,	nombre: "Monitor f18",costo: 1800},
						{id: 3,	nombre: "CPU", costo: 150}]


	$scope.add_producto = function(){
		var id = $scope.productos.length + 1
		var nombre = $scope.nombre
		var costo = $scope.costo
		$scope.productos.push({id: id, nombre: nombre, costo: costo})
	}

	$scope.carrito = []

	$scope.add_carrito = function() {
		var id = $scope.seleccionado

		var ob = $scope.productos.find(function(obj) {
			return obj.id == id
		})

		var nombre = ob.nombre
		var costo = ob.costo
		var cantidad = $scope.cantidad
		var total = costo * cantidad

		$scope.carrito.push({nombre: nombre, costo: costo, cantidad:cantidad, total: total})

		
	} 

}])