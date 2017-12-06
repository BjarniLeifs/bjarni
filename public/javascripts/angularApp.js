/* Angular routing and app declatation */

var app = angular.module('ramesApp', ['ui.router', 'angular-growl']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
	'growlProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, growlProvider) {
		$httpProvider.interceptors.push('authInterceptor');
		growlProvider.globalTimeToLive(3000);
		$stateProvider
/* Main content starts*/
		.state('main', {
			url: '/main',
			templateUrl: 'views/main.html',
			controller: 'AuthCtrl',
		})
	/* About content starts */
		.state('main.about', {
			url: '/about',
			templateUrl: 'views/about/about.html',
			controller: 'AboutCtrl',
		})
		.state('main.about.picture', {
			url: '/picture',
			templateUrl: 'views/ramesInfo/picture.html',
			controller: 'AboutCtrl',
		})
		.state('main.about.roles', {
			url: '/info/roles',
			templateUrl: 'views/ramesInfo/info.html',
			controller: 'RamesRolesCtrl',
		})
		.state('main.about.activites', {
			url: '/info/activites',
			templateUrl: 'views/ramesInfo/info.html',
			controller: 'RamesActiviteCtrl',
		})
		.state('main.about.material', {
			url: '/info/material',
			templateUrl: 'views/ramesInfo/info.html',
			controller: 'RamesMaterialCtrl',
		})
		.state('main.about.environment', {
			url: '/info/environment',
			templateUrl: 'views/ramesInfo/info.html',
			controller: 'RamesEnvironmentCtrl',
		})
		.state('main.about.software', {
			url: '/info/software',
			templateUrl: 'views/ramesInfo/info.html',
			controller: 'RamesSoftwareCtrl',
		})
	/* Contributer content starts */
		.state('main.aboutcreator', {
			url: '/aboutcreator',
			templateUrl: 'views/about/aboutcreator.html',
			controller: 'AboutCreatorCtrl',
		})
	/* Dashboard content starts */
		.state('main.dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard/dashboard.html',
			controller: 'DashboardCtrl',
		})
		.state('main.dashboard.overview', {
			url: '/overview',
			templateUrl: 'views/dashboard/overview.html',
			controller: 'ProjectCtrl',
		})
		.state('main.dashboard.newproject', {
			url: '/newproject',
			templateUrl: 'views/dashboard/newproject.html',
			controller: 'ProjectCtrl',
		})
		.state('main.dashboard.edit', {
			url: '/edit/project/:id',
			templateUrl: 'views/dashboard/editproject.html',
			controller: 'ProjectCtrl',
		})
		.state('main.dashboard.delete', {
			url: '/delete/project/:id',
			templateUrl: 'views/dashboard/deleteproject.html',
			controller: 'ProjectCtrl',
		})
	/* Project conent starts */
	/*
	*
	*
	*
	*/
		.state('main.project', {
			url: '/project/:id',
			templateUrl: 'views/projectoverview/project.html',
			controller: 'ProjectCtrl',
		})
		.state('main.project.overview', {
				url: '/overview',
				templateUrl: 'views/projectoverview/overview.html',
				controller: 'ReportCtrl',
			})
		.state('main.project.newreport', {
			url: '/newreport',
			templateUrl: 'views/projectoverview/newreport.html',
			controller: 'NewReportCtrl',
		})
		.state('main.project.deletereport', {
			url: '/delete/report/:reportid',
			templateUrl: 'views/projectoverview/deletereport.html',
			controller: 'DeleteReportCtrl',
		})
		.state('main.project.viewreport', {
			url: '/report/:reportid/view',
			templateUrl: 'views/projectoverview/report.html',
			controller: 'ViewReportCtrl',
		})
		.state('main.editreport', {
			url: '/edit/project/:id/report/:reportid',
			templateUrl: 'views/projectoverview/editreport.html',
			controller: 'EditReportCtrl',
		})
		.state('main.editreport.editroles', {
			url: '/roles',
			templateUrl: 'views/projectoverview/editreportattribute.html',
			controller: 'EditRolesCtrl'
		})
		.state('main.editreport.editactivity', {
			url: '/activities',
			templateUrl: 'views/projectoverview/editreportattribute.html',
			controller: 'EditActivityCtrl'
		})
		.state('main.editreport.editmaterial', {
			url: '/material',
			templateUrl: 'views/projectoverview/editreportattribute.html',
			controller: 'EditMaterialCtrl'
		})
		.state('main.editreport.editenvironment', {
			url: '/environment',
			templateUrl: 'views/projectoverview/editreportattribute.html',
			controller: 'EditEnvironmentCtrl'
		})
		.state('main.editreport.editsoftware', {
			url: '/software',
			templateUrl: 'views/projectoverview/editreportattribute.html',
			controller: 'EditSoftwareCtrl'
		})


		.state('main.editfeedbackreport', {
			url: '/feedback/project/:id/report/:reportid',
			templateUrl: 'views/feedback/feedbackoverview.html',
			controller: 'EditFeedbackReportCtrl',
		})
		.state('main.editfeedbackreport.feedbackroles', {
			url: '/roles',
			templateUrl: 'views/feedback/editfeedbackreport.html',
			controller: 'EditFeedbackRolesCtrl'
		})
		.state('main.editfeedbackreport.feedbackactivity', {
			url: '/activities',
			templateUrl: 'views/feedback/editfeedbackreport.html',
			controller: 'EditFeedbackActivityCtrl'
		})
		.state('main.editfeedbackreport.feedbackmaterial', {
			url: '/material',
			templateUrl: 'views/feedback/editfeedbackreport.html',
			controller: 'EditFeedbackMaterialCtrl'
		})
		.state('main.editfeedbackreport.feedbackenvironment', {
			url: '/environment',
			templateUrl: 'views/feedback/editfeedbackreport.html',
			controller: 'EditFeedbackEnvironmentCtrl'
		})
		.state('main.editfeedbackreport.feedbacksoftware', {
			url: '/software',
			templateUrl: 'views/feedback/editfeedbackreport.html',
			controller: 'EditFeedbackSoftwareCtrl'
		})
		.state('main.editfeedbackreport.feedbackview', {
			url: '/view',
			templateUrl: 'views/feedback/feedbackreportview.html',
			controller: 'FeedbackViewCtrl'
		})
	/*
	*
	*
	*
	*
	*/
	/* Single page purpose starts */
		.state('main.contactus', {
			url: '/contactus',
			templateUrl: 'views/contact/contactus.html',
			controller: 'ContractUsCtrl',
		})
		.state('main.login', {
			url: '/login',
			templateUrl: 'views/authentication/login.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'authFactory', function ($state, authFactory) {
				if (authFactory.isLoggedIn()) {
					$state.go('main'); //This is where to go html state. 
				}
			}]
		})
		.state('main.register', {
			url: '/register',
			templateUrl: 'views/authentication/register.html',
			controller: 'AuthCtrl',
		})
		.state('main.error', {
			url: '/notfound',
			templateUrl: 'views/error.html',
			controller: 'ErrorCtrl',
		})
	/* Management conent starts*/
		.state('main.management', {
			url: '/management',
			templateUrl: 'views/management/index.html',
			controller: 'ManagementCtrl',
		})
		.state('main.management.reporttype', {
			url: '/reporttype',
			templateUrl: 'views/management/reporttype/overview.html',
			controller: 'ReportTypeCtrl',
		})
		.state('main.management.newreportype', {
			url: '/newreporttype',
			templateUrl: 'views/management/reporttype/newreporttype.html',
			controller: 'ReportTypeCtrl',
		})
		.state('main.management.editreporttype', {
			url: '/edit/reporttype/:id',
			templateUrl: 'views/management/reporttype/editreporttype.html',
			controller: 'ReportTypeCtrl',
		})
		.state('main.management.deletereporttype', {
			url: '/delete/reporttype/:id',
			templateUrl: 'views/management/reporttype/deletereporttype.html',
			controller: 'ReportTypeCtrl',
		});

		$urlRouterProvider.otherwise('main');

	}
]);

