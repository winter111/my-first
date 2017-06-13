angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,HomeGoodlistRow,homemusic,homemv,homerudio) {
	$scope.sildes =[
	{'id':0,
		'images':'img/gufeng3.jpg'
},{
	'id':1,
	'images':'img/18800549325237486.jpg'
},{
	'id':2,
	'images':'img/tupian3.jpg'
},{
	'id':3,
	'images':'img/tupian4.jpg'
},{
	'id':4,
	'images':'img/tupian5.jpg'
},{
	'id':5,
	'images':'img/beijing8.jpg'
}]
	$scope.listrow = HomeGoodlistRow.all();
	$scope.homemusicss = homemusic.all();
	$scope.homemovess = homemv.all();
	$scope.homeradio = homerudio.all();
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('PersonCtrl', function($scope, $stateParams, Chats) {
  
})

.controller('AccountCtrl', function($scope) {
 
});
