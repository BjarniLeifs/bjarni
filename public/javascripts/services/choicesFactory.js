/* About rames info factory */
app.factory('choicesFactory', ['$http', '$window', 'configFactory', 
	function ($http, $window, configFactory) {
    
		var choice = {};
		var baseUrl = configFactory.getHttpUrl();

		choice.getRadio = function () {
			var returnMe = [];
			$http
			 .get(baseUrl + "/api/questionradiochoices")
			  .success(function (data) {
				angular.copy(data, returnMe);
			});
			return returnMe;
		}
		choice.getFeedbackRadio = function () {
			var returnMe = [];
			$http
			 .get(baseUrl + "/api/feedback/questionradiochoices")
			  .success(function (data) {
				angular.copy(data, returnMe);
			});
			return returnMe;
		}

		choice.getDrowpdown = function () {
			var returnMe = [];
			$http
			 .get(baseUrl + "/api/questiondropdownchoices")
			  .success(function (data) {
				angular.copy(data, returnMe);
			});
			return returnMe;
		}

		choice.getCheckbox = function () {
			var returnMe = [];
			$http
			 .get(baseUrl + "/api/questioncheckboxchoices")
			  .success(function (data) {
				angular.copy(data, returnMe);
			});
			return returnMe;
		}

		choice.getFeedbackCheckbox = function () {
			var returnMe = [];
			$http
			 .get(baseUrl + "/api/feedback/questioncheckboxchoices")
			  .success(function (data) {
				angular.copy(data, returnMe);
			});
			return returnMe;
		}
		return choice;
	}
]);