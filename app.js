(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject= ['$scope'];
	function LunchCheckController($scope) {
		$scope.message="";
		$scope.items="";
		$scope.totalItems=0;
		$scope.color="";

		// function that count items
		$scope.countItems= function(message) {
			console.log("message "+message)
			if(message==="")
				return 0;
			var count=0;
			var array= message.split(',');
			for (var i = 0; i < array.length; i++) {
				if(array[i].trim()!=="")
					count++;
			}
			return count;
		};
		//function shows a message dep the number of items
		$scope.showMessage= function() {
			$scope.totalItems= $scope.countItems($scope.items)
			$scope.setData($scope.totalItems);
			if($scope.totalItems<1)
				$scope.message="Please enter data first";

			else if($scope.totalItems<4 && 
					$scope.totalItems>0)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!"
		};
		// function that set style data depending on the number of items

	// 	$scope.setData=function (numberOfItems) {
	// 		if(numberOfItems===0)
	// 			{
	// 				$scope.messageStyle.color="red";
	// 				$scope.input={
	// 					"border-color": "red"
	// 				};
	// 			}
	// 		else
	// 			{
	// 				$scope.messageStyle.color="green";
	// 				$scope.input={
	// 					"border-color": "green"
	// 				};
	// 			}
	// 	}
	// 	$scope.input={
	// 		"border": ""
	// 	}
	// 	$scope.messageStyle={
	// 		"color": ""
	// 	}
	};

})();