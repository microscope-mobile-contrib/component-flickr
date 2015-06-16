'use strict';

// privates
var _$state;
var _$scope;
var _FlickrService;

// Flickr controller class
function FlickrCtrl (FlickrService,$ionicLoading,$state,$scope) {
    var self = this;
    
    _$scope = $scope;
    _$state = $state;
    _FlickrService = FlickrService;
    $ionicLoading.show();

    // Getting Photosets Detail from Flickr Service
    _FlickrService.getPhotoSets().then(function(result){
        self.photoList = result.data.photosets.photoset;
        $ionicLoading.hide();
    });

}


/**
 * doRefresh
 * @return {[type]}
 */
FlickrCtrl.prototype.doRefresh = function (photoset_id) {
    var self = this;
    _FlickrService.getPhotoSets().then(function(result){
        self.photoList = result.data.photosets.photoset;
        _$scope.$broadcast('scroll.refreshComplete');
    });
};

/**
 * openAlbum
 * @return {[type]}
 */
FlickrCtrl.prototype.openAlbum = function (photoset_id) {
    _$state.go('app.album',{id: photoset_id });
};

module.exports = FlickrCtrl;