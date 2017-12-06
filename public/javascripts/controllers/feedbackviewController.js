'use strict';
app.controller('FeedbackViewCtrl', ['$scope', '$state', '$stateParams', '$location', '$timeout', 'aboutFactory',
				 'ramesInfoFactory', 'questionFactory', 'choicesFactory', 'categoryFactory', 
				 'reportInfoFactory',
	function ($scope, $state, $stateParams, $location, $timeout, aboutFactory, ramesInfoFactory, 
		questionFactory, choicesFactory, categoryFactory, reportInfoFactory) {

				
			$scope.answers   = reportInfoFactory.getByFeedbackReportId($stateParams.reportid);			
			$scope.questions = questionFactory.getFeedbackQuestions();
			
			$timeout(
				function() {
					$scope.viewReport = [];
					angular.forEach($scope.questions,
						function (que, iKey) {
							var text = '';	
							angular.forEach($scope.answers,
								function (ans, qKey) {
									if (que.ID == ans.QuestionID) {
										if (ans.Answer.number){
											if (text == '')
												text += ans.Answer.number;
											else 
												text += ' ,'+ans.Answer.number;
										}
										else if (ans.Answer.Text) {
											if (ans.Answer.Text.conditionalyesnotext) {
												if (text == '')
													text += ans.Answer.Text.conditionalyesnotext;
												else
													text += ans.Answer.Text.conditionalyesnotext;
											}
											else {
												if (text == '')
													text += ans.Answer.Text;
												else
													text += ' ,'+ans.Answer.Text;
											}
											if (ans.Answer.Textbox) {
												if (ans.Answer.Textbox.conditionalyesnotext) {
													if (text == '')
														text += ans.Answer.Textbox.conditionalyesnotext;
													else
														text += ans.Answer.Textbox.conditionalyesnotext;
												}
												else {
													if (text == '')
														text += ans.Answer.Textbox;
													else
														text += ', '+ans.Answer.Textbox;
												}
											}
										}
										else if (ans.Answer.checkbox) {
											if (ans.Answer.checkbox.data) {
												angular.forEach(ans.Answer.checkbox.data,
													function(value, key) {
														if (text == '')
															text += value;
														else
															text += ', '+value;		
													})
												if (ans.Answer.checkbox.Text) {
													if (text == '')
														text += ans.Answer.checkbox.Text;
													else
														text += ', '+ ans.Answer.checkbox.Text;
												}

											}
										}
										else if (ans.Answer.text) {
											if (text == '')
												text += ans.Answer.text;
											else
												text += ', '+ ans.Answer.text;
										}
										else if (ans.Answer.radio) {
											if (text == '')
												text += ans.Answer.radio;
											else 
												text += ', '+ ans.Answer.radio;
										}
										else if (ans.Answer.yesno) {
											if (text == '')
												text += ans.Answer.yesno;
											else 
												text += ', '+ ans.Answer.yesno;
										}
										else if (ans.Answer.conditionalyesnotext) {
											if( text == '')
												text += ans.Answer.conditionalyesnotext;
											else
												text += ', '+ ans.Answer.conditionalyesnotext;
										}
									}
								}
							)
							var addMe = {
								id : que.ID,
								Question : que.Question,
								Answer : text
							};
							$scope.viewReport.push(addMe);
							text = '';					
						}
					)
				}, 150
			);
		}
	]
);
