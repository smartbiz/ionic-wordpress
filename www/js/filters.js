angular.module('starter.filters', [])

.filter('rawHtml', ['$sce', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
}]);