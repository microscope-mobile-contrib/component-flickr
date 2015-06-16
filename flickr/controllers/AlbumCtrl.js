'use strict';

//Import
var angular = require('angular');
// privates

// Album controller class
function AlbumCtrl(FlickrService, $ionicLoading, $stateParams) {
    var self = this;

    $ionicLoading.show();

    this.idAlbum = $stateParams.id;
    this.photoList = [];
                   
    // Getting Photosets Detail from Flickr Service
    FlickrService.getPhotos(this.idAlbum).then(function (result) {

        $ionicLoading.hide();

        var photos = result.data.photoset.photo;
        self.title = result.data.photoset.title;

        angular.forEach(photos, function (photo, key) {
            var id = photo.id;
            var secret = photo.secret;

            FlickrService.getInfo(id, secret).then(function (result) {
                self.photoList.push({ sizes: result[0].data, info: result[1].data });
            });
        });
    });
}

module.exports = AlbumCtrl;