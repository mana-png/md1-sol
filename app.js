(function() {
'use strict';
    angular.module(LunchCheck,[])

    .controller('lunchController',LunchController);

    LunchController.$inject=['$scope'];
    function LunchController($scope){
        $scope.message="";
		$scope.items="";
		$scope.totalItems=0;
		$scope.color="";

        //function to count the number of items in textbox
		$scope.countItems= function(message) {
			//, , is not an item
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

        //function that shows a message depending on the number of items
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
    }

})();