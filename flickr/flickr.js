'use strict';

// Imports
var angular = require('angular');

var FlickrCtrl  = require('./controllers/flickrCtrl');
var AlbumCtrl  = require('./controllers/albumCtrl');
var FlickrService  = require('./services/flickrService');

// Camera sub-module definition
var flickr = angular.module('app.flickr', []);

flickr.service('FlickrService', [
	'$q',
	'$http',
	FlickrService
]);


flickr.controller('FlickrCtrl', [
	'FlickrService',
	'$ionicLoading',
	'$state',
	'$scope',
	FlickrCtrl
]);

flickr.controller('AlbumCtrl', [
	'FlickrService',
	'$ionicLoading',
	'$stateParams',
	AlbumCtrl
]);

module.exports = flickr;

