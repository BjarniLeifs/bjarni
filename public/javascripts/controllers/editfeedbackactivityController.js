'use strict';


app.controller('EditFeedbackActivityCtrl', ['$scope', '$state', '$stateParams', '$location', '$timeout', 'aboutFactory', 
	 			'ramesInfoFactory', 'questionFactory', 'choicesFactory', 'categoryFactory','reportInfoFactory',
	 			'growl',

	function ($scope, $state, $stateParams, $location, $timeout, aboutFactory, 
		ramesInfoFactory, questionFactory, choicesFactory, categoryFactory, reportInfoFactory,
		growl) {

		$scope.buttonNext = "Save & next";
		$scope.buttonSave = "Save Information";
		$timeout(
			function() {
				$scope.answers   = reportInfoFactory.getFeedbackByCategoryIdAndReportId(2, $stateParams.reportid);
				$scope.questions = questionFactory.getFeedbackQuestionsByCategoryId(2);
				$scope.category  = categoryFactory.getCategorybyID(2);
				$scope.checkbox  = choicesFactory.getFeedbackCheckbox();
				$scope.radio 	 = choicesFactory.getFeedbackRadio();


			}, 100


		);

		$scope.saveInfo = function(status) {
			var config = {};
			var error = false;

			
			angular.forEach($scope.answers, function(value, key) {
				reportInfoFactory.postFeedback(value).then(function (data) {
					if (data.status != 200)
						error = true;
				});
			})
			if (error)
				growl.error("Something went wrong, please try again later.", config); // info warning error sucess
			else {
				if (status === 'next') {
					growl.success("Information successfully saved.", config);
					$state.go('main.editfeedbackreport.feedbackmaterial',{'id': $stateParams.id });
				}
				else
					growl.success("Information successfully saved.", config);
			}
		};
    }
      

]);