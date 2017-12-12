angular.module('app',[])

	.controller('demoCtrl',['$scope',function($scope){

		/*
			添加任务

				1.获取用户输入的任务名称
				2.监听文本框的回车事件
				3.在事件处理函数中 判断用户输入的内容是否为空
				4.创建任务列表
				5.将用户输入的内容添加到任务列表中
				6.将任务列表中的数据展示在页面中

		*/
			
		// 任务列表
		$scope.taskList = [];

		$scope.addTask = function(e){

			// 如果用户敲击的是回车
			if(e.keyCode == 13){

				// 如果用户输入了内容
				if($scope.task){

					// 将任务添加到任务列表中
					$scope.taskList.push({
						name: $scope.task,
						isCompleted:false,//代表当前任务是否完成
						isEditing:false//当前任务是否处于可编辑状态
					});

					// 清空文本框
					$scope.task = "";
				}
			}
		}


	}])


