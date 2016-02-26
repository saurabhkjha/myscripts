var app = angular.module('app',[]);

app.controller('work', ['$scope', function ($scope) {
		$scope.logDone = function(yes){
			alert(yes+' is done');
		}
		$scope.flavor= "blackberry";
}]);


app.directive('task1', [function () {
	return {
		restrict: 'E',
		template:'<input type="text" ng-model="t">{{t}}'
	};
}]);

app.directive('task2', [function () {
	return {
		restrict: 'E',
		scope:{},
		template:'<input type="text" ng-model="t">{{t}}'
	};
}]);

app.directive('task3', [function () {
	return {
		restrict: 'E',
		scope:{
			done:'&'
		},
		template:'<input type="text" ng-model="t">{{t}}'+
				 '<input type="button"  ng-click="done({t:t})" value="ok">'
	};
}]);

app.directive('drink', [function () {
	return {
		restrict: 'A',
		template:'<div>{{flavor}}</div>',
		scope:{
			flavor:'@'
		}
		/*link: function (scope, iElement, iAttrs) {
			scope.flavor=iAttrs.flavor;
		}*/
	};
}])

app.directive('drink1', [function () {
	return {
		restrict: 'A',
		template:'<input type="text" ng-model="flavor">{{flavor}}',
		scope:{
			flavor:'='
		}
		/*link: function (scope, iElement, iAttrs) {
			scope.flavor=iAttrs.flavor;
		}*/
	};
}])