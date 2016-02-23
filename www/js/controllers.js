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
	        mapTypeId: google.maps.MapTypeId.ROADMAP, 
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl:false,
          draggable: false,
	    };          
         
        var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);          
         
        var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];

        map.setOptions({styles: styles});

        $scope.map = map;   
        $ionicLoading.hide();  

        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
         
          var image = 'img/location_map.png';
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.BOUNCE,
              position: latlng,
              icon: image
          });           
        });  

    }, function(err) {
        $ionicLoading.hide();
        console.log(err);
    });
})               
