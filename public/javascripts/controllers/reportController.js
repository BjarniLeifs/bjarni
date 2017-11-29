'use strict';
app.controller('ReportCtrl', ['$scope', '$state', '$stateParams', '$location',
	'$timeout', 'reportTypeFactory', 'reportFactory',

	function ($scope, $state, $stateParams, $location, 
	 	$timeout, reportTypeFactory, reportFactory) {

		$timeout(
			function() {
				console.log($stateParams.id);
				// $scope.infos = aboutFactory.getRamesInfoByCategoryId(2); ?????
				$scope.projectid = $stateParams.id;
				$scope.reports = reportFactory.getReportByProjectId($stateParams.id); // þetta á að vera get report by projectid
				$scope.feedbackreports = reportFactory.getFeedbackReportByProjectId($stateParams.id);
				$scope.reportypes = reportTypeFactory.getAll();

			}, 110
		);

	}
]);
