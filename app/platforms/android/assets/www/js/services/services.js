angular.module('starter.services', [])
    .service('WC', function(Shop){
    return {
        api: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url           : Shop.URL,
                queryStringAuth: true,
                consumerKey   : Shop.ConsumerKey,
                consumerSecret: Shop.ConsumerSecret
            });
            return Woocommerce;
        }
	}
})
    .factory('StorageService', function ($localStorage) {

        $localStorage.things = $localStorage.things || [];
        $localStorage.things.userObj = $localStorage.things.userObj || {};

       // console.log()

        var _getAll = function () {
            console.log($localStorage.things);
            return $localStorage.things;
        };
        var _push = function (thing) {
            $localStorage.things.push(thing);
        }
        var _addUserObj = function (data) {
            $localStorage.things.userObj = $localStorage.things.userObj || {};
            $localStorage.things.userObj = data;
        }
        var _getUserObj = function (data) {
		console.log('Getting user idddddddddddddddddddddddddddddddddddddddd');
            console.log(JSON.stringify($localStorage.things.userObj));
           return $localStorage.things.userObj;
        }
        var _remove = function () {
            $localStorage.things = [];
            console.log('userObj removed')
        }
        return {
            getAll: _getAll,
            getUserObj: _getUserObj,
            add: _addUserObj,
            push: _push,
            remove: _remove
        };
    })
    
    .factory('CartService', function ($localStorage) {

        $localStorage.cart = $localStorage.cart || [];

        var _getAll = function () {
            console.log($localStorage.cart);
            return $localStorage.cart;
        };
        var _push = function (thing) {
            $localStorage.cart.push(thing);
            console.log($localStorage.cart);
        }
        var _remove = function (thing) {
            $localStorage.cart.splice($localStorage.cart.indexOf(thing), 1);
            console.log('removed, current length'+ $localStorage.cart.length);
        }
        
        var _removeAll = function () {
            $localStorage.cart = [];
            console.log('all items removed');
        }
        return {
            getAll: _getAll,
            push: _push,
            remove: _remove,
            removeAll: _removeAll
        };
    })
    
    .factory('WishlistService', function ($localStorage) {

        $localStorage.wishlist = $localStorage.wishlist || [];

        var _getAll = function () {
            console.log($localStorage.wishlist);
            return $localStorage.wishlist;
        };
        var _push = function (thing) {
            $localStorage.wishlist.push(thing);
            console.log($localStorage.wishlist);
        }
        var _remove = function (thing) {
            $localStorage.wishlist.splice($localStorage.wishlist.indexOf(thing), 1);
            console.log('removed, current length'+ $localStorage.wishlist.length);
        }
        return {
            getAll: _getAll,
            push: _push,
            remove: _remove
        };
    })
    
    .factory('$dataService', ['$http', '$constants', function ($http, $constants) {
        var apiUrl = $constants.jsonApiUrl,
         
            header = {
                'Content-Type': "application/json"
            };

        return {

            $getNonce: function () {
                return $http.post(apiUrl + '/get_nonce/?controller=user&method=register', {}, {
                    header: header
                })

            },

            $signup: function (data) {
                return $http.get(apiUrl + '/user/register/', {
                    header: header,
                    params: data
                })

            },

            $login: function (data) {
                return $http.get(apiUrl + '/user/generate_auth_cookie/', {
                    header: header,
                    params: data
                })
            },

            $passwordReset: function (params) {
                console.log(params);
                return $http.get(apiUrl + '/user/retrieve_password/', {
                    header: header,
                    params: params
                })
            },

            $getPosts: function (params) {
                console.log(params);
                return $http.get(apiUrl + '/get_category_posts/', {
                    header: header,
                    params: params
                })
            }



        }
    }])
