//Data
var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 38.807195,
        long : -77.08787899999999
    }
];
// http://jsfiddle.net/pc7Uu/524/
//Angular App Module and Controller
angular.module('churchMouseApp')
    .controller('MapCtrl', ['$scope', function($scope) {

    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(38.805195, -77.0858789),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            // infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.setContent('<b>Capital Area Budokai</b><br/>25 S. Quaker Lane<br/>22304 Alexandria');
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

}]);