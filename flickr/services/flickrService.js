'use strict';

// privates
var _$q;
var _$http;
// Contacts service class
function FlickrService($q, $http) {

    _$http = $http;
    _$q = $q;

    this.Flickr_data = {
        key: 'apikey',
        user_id: 'userid',
        endpoint: 'https://api.flickr.com/services/rest/'
    };
}

/**
* getPhotoSets
* @return {[type]}
*/
FlickrService.prototype.getPhotoSets = function () {
    var self = this;
    var url = self.Flickr_data.endpoint +
        '?method=flickr.photosets.getList&api_key=' + self.Flickr_data.key +
        '&user_id=' + self.Flickr_data.user_id +
        '&format=json&nojsoncallback=1';
    return _$http.get(url);

};

/**
* getPhotos
* @return {[type]}
*/
FlickrService.prototype.getPhotos = function (idAlbum) {
    var self = this;
    var url = self.Flickr_data.endpoint +
        '?method=flickr.photosets.getPhotos&api_key=' + self.Flickr_data.key +
        '&user_id=' + self.Flickr_data.user_id +
        '&photoset_id=' + idAlbum +
        '&format=json&nojsoncallback=1';
    return _$http.get(url);
};

/**
* getInfo
* @return {[type]}
*/
FlickrService.prototype.getInfo = function (id, secret) {
    var self = this;

    var urlSizes = self.Flickr_data.endpoint +
        '?method=flickr.photos.getSizes&api_key=' + self.Flickr_data.key +
        '&photo_id=' + id + '&format=json&nojsoncallback=1';

    var urlInfo = self.Flickr_data.endpoint +
        '?method=flickr.photos.getInfo&api_key=' + self.Flickr_data.key +
        '&photo_id=' + id + '&secret=' + secret +
        '&format=json&nojsoncallback=1';
    return _$q.all([
        _$http.get(urlSizes),
        _$http.get(urlInfo)
    ]);
};

module.exports = FlickrService;