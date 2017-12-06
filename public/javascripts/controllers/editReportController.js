'use strict';
app.controller('EditReportCtrl', ['$scope', '$state', '$stateParams', '$location',
	'$timeout', 'questionFactory', 'categoryFactory', 'ramesInfoFactory', 'questionFactory',
	'choicesFactory', 'categoryFactory', 'reportInfoFactory',

	function ($scope, $state, $stateParams, $location, 
	 $timeout, questionFactory, categoryFactory, ramesInfoFactory,
	 questionFactory, choicesFactory, categoryFactory, reportInfoFactory) {
		
		$timeout(
			function() {
				if ($stateParams.id != undefined)
					$scope.projectId = $stateParams.id;
				if ($stateParams.reportid != undefined)
					$scope.reportId = $stateParams.reportid

				//$scope.questions 		  	= questionFactory.getQuestions();
				//$scope.categoryordSEg 	  	= categoryFactory.getCategoryOrdSeq();
				/* Getting the Answers */
			//	$scope.reportypes = reportTypeFactory.getAll();
			//	$scope.reports = reportFactory.getAll();
			}, 110
		);
		$scope.saveInfo = function(status) {
			var config = {};
			var error = false;
			
			angular.forEach($scope.answers, function(value, key) {
				reportInfoFactory.post(value).then(function (data) {
					if (data.status != 200)
						error = true;
				});
			})
			if (error)
				growl.error("Something went wrong, please try again later.", config); // info warning error sucess
			else {
				if (status === 'next') {
					growl.success("Information successfully saved.", config);
					$state.go('main.project.overview',{'id': $stateParams.id });
				}
				else if (status === 'Roles') {
					$state.go('main.editreport.editroles');
				}
				else if (status === 'Activities') {
					$state.go('main.editreport.editactivity');
				}
				else if (status === 'Material') {
					$state.go('main.editreport.editmaterial');
				}
				else if (status === 'Environment') {
					$state.go('main.editreport.editenvironment');
				}
				else if (status === 'Software') {
					$state.go('main.editreport.editsoftware');
				}
				else if (status === 'Project') {
					$state.go('main.project.overview',{id: $stateParams.id});
				}
				else
					growl.success("Information successfully saved.", config);
			}
		};
	}
]);
