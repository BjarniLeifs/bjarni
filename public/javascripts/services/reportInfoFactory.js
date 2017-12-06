/* About rames info factory */
app.factory('reportInfoFactory', ['$http', '$window', 'configFactory', 
	function ($http, $window, configFactory) {
    
    var info = {};
    var baseUrl = configFactory.getHttpUrl();

    info.getByReportId = function (id) {
		var returnMe = [];
		$http
		 .get(baseUrl + "/api/reportsinfo/report/"+id)
		  .success(function (data) {
			angular.copy(data, returnMe);
			console.log(data);
		});
		return returnMe;
	}

	info.getByCategoryIdAndReportId = function (cid, rid) {
		var returnMe = [];
		$http
		 .get(baseUrl + "/api/reportsinfo/category/"+cid+"/report/"+rid)
		  .success(function (data) {
			angular.copy(data, returnMe);
		});

		return returnMe;

	}
	info.getFeedbackByCategoryIdAndReportId = function (cid, rid) {
		var returnMe = [];
		$http
		 .get(baseUrl + "/api/feedback/reportsinfo/category/"+cid+"/report/"+rid)
		  .success(function (data) {
			angular.copy(data, returnMe);
		});

		return returnMe;

	}

    info.getByFeedbackReportId = function (id) {
		var returnMe = [];
		$http
		 .get(baseUrl + "/api/feedback/reportsinfo/report/"+id)
		  .success(function (data) {
			angular.copy(data, returnMe);

		});
		return returnMe;
	}

	info.post = function (data) {
		
		return $http.put(baseUrl + '/api/reportsinfo', data);//.success(function (data) {
		
	}

	info.postFeedback = function (data) {
		
		return $http.put(baseUrl + '/api/feedback/reportsinfo', data);//.success(function (data) {
		
	}
    return info;
}]);

