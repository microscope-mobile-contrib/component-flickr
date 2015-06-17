# microscope-component-flickr
This is an addon starter component for the Ionic Framework.

## Features

 - List photosets
 - List photos
 - Pull to refresh

## How to use this template

*This component does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, add the component using the microscope-mobile node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

Set your API key and userId in the FlickrService : 

     this.Flickr_data = {
      key: 'apikey',
      user_id: 'userid',
      endpoint: 'https://api.flickr.com/services/rest/'
     };


Add angular module :

     require('./components/flickr/flickr');
     
     // application definition
     var app = angular.module('app', [
     	'app.flickr'
     ]);
     
Add route :

    $stateProvider
      .state('app.flickr', {
        url: '/flickr',
        views: {
          'menuContent': {
            templateUrl: 'components/flickr/controllers/flickr.html',
            controller: 'FlickrCtrl as vm'
          }
        }
    }).state('app.album', {
        url: '/album',
        views: {
          'menuContent': {
            templateUrl: 'components/flickr/controllers/album.html',
            controller: 'AlbumCtrl as vm'
          }
        }
    });



