angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})


.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
     
    $ionicPlatform.ready(function() {    
 
	    $ionicLoading.show({
	        template: '<ion-spinner icon="lines"></ion-spinner>',
	    });
	                  
	    var latlng = new google.maps.LatLng('45.546282', '8.959073');
	         
	    var mapOptions = {
	        center: latlng,
	        zoom: 15,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };          
         
        var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);          
         
        $scope.map = map;   
        $ionicLoading.hide();  

        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
         
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.BOUNCE,
              position: latlng
          });           
        });  

    }, function(err) {
        $ionicLoading.hide();
        console.log(err);
    });
})               
