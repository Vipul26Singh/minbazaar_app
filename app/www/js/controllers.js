angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout,$localStorage, $ionicScrollDelegate, StorageService, $state, Maestro, CartService, $ionicPopup, $ionicSlideBoxDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // var firstLaunch = true
  // $scope.$on('$ionicView.loaded', function(e) {
    
    
  // });


  $scope.$on("$ionicView.afterLeave", function (event, data) {
    // handle event
    $ionicScrollDelegate.scrollTop();

  });
 
//get categories
 
  var getCategories = function(){
    //console.log('get categories');
    Maestro.$getCategories().then(function(res){
	//alert(res.data);

      console.log(res.data);
     $scope.allcategories= res.data;
     $scope.categories=[];
     $scope.groups=[];
     for(var i=0;i<res.data.length;i++){
            if(res.data[i].parent==0)
		$scope.categories.push(res.data[i]);
	}

  var c="";
  for (var i=0; i<$scope.categories.length; i++) {
    $scope.groups[i] = {
      name: $scope.categories[i].name,
      id : $scope.categories[i].id,
      items: [],
      Length: 0,
      show: false
    };
  
    for (var j=0; j<$scope.allcategories.length; j++) {
	  if($scope.allcategories[j].parent==$scope.groups[i].id){
      		$scope.groups[i].items.push($scope.allcategories[j]);
 		$scope.groups[i].Length++;
	}
        
    }
	
  }
  

  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
  


	

    // $scope.categories = res.data;
    }, function(err){
      console.log(err);
    })
  }
getCategories();
  
   $scope.user=JSON.parse(localStorage.getItem('userObj'));

  //go to product pages based on categories
  $scope.goToProductCategories = function(catagoryName, menuOrder, id){
    if(menuOrder == 1){
      $state.go('app.editorial');
    }else{
      $state.go('app.product-list', {categoryId: id, catagoryName: catagoryName});
    }
  }
  

  //reload / refresh
$scope.reloadView = function(){
  console.log('reload');
  $state.reload();
}

//get userObj
var userObj = StorageService.getUserObj();
 // alert("userObj"+localStorage.getItem('userObj'));
  //logout
  $scope.logout = function (userObj) {

	localStorage.setItem('userObj','null');
		   location.reload(); 
    StorageService.remove();
    $state.go('onboarding');
  }


  // Form data for the login modal
  $scope.loginData = {};


  // Create the search modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/search-product.html', {
    id: 'search',
    scope: $scope
  }).then(function (modal) {
    $scope.searchModal = modal;
  });
  $scope.closeSearchModal = function () {
    $scope.searchModal.hide();
  };

  $scope.openSearchModal = function () {
    $scope.searchModal.show();
  };


  /*$scope.openSearchModal = function () {
	alert($scope.search);
   
  };*/

  // Create the wishlist modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/wishlist.html', {
    id: 'wishlist',
    scope: $scope
  }).then(function (modal) {
    $scope.wishlistModal = modal;
  });
  $scope.closeWishlistModal = function () {
    $scope.wishlistModal.hide();
  };

  $scope.openWishlistModal = function () {
    $scope.wishlistModal.show();
  };


  $ionicModal.fromTemplateUrl('templates/modal/cart.html', {
    id: 'cart',
    scope: $scope
  }).then(function (modal) {
    $scope.cartModal = modal;
  });
  $scope.closeCartModal = function () {
    $scope.cartModal.hide();
  };
//check if cart has items
var checkCartItems = function(){

  if(CartService.getAll().length){
    return true;
  }else{
    return false;
  }

}

//open cart modal
  $scope.openCartModal = function () {
    if(checkCartItems()){
       $scope.cartModal.show();
    }else{
       // An alert dialog
 $ionicPopup.alert({
     title: 'Cart Empty',
     template: 'No item on cart.',
     buttons: [
       { text: '<b>CLOSE</<b>',
      type: 'button-small button-dark' }
     ]
   });
  };

  }






// Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.cartModal.remove();
    $scope.searchModal.remove();
    $scope.wishlistModal.remove();
    $scope.profileModal.remove();
    $scope.settingsModal.remove();
    $scope.editProfileModal.remove();
  });


  // Create the profile modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/profile.html', {
    id: 'profile',
    scope: $scope
  }).then(function (modal) {
    $scope.profileModal = modal;
  });
  $scope.closeProfileModal = function () {
    $scope.profileModal.hide();
  };

  $scope.openProfileModal = function () {
    $scope.profileModal.show();
  };

  // Create the settings modal
  $ionicModal.fromTemplateUrl('templates/modal/settings.html', {
    id: 'settings',
    scope: $scope
  }).then(function (modal) {
    $scope.settingsModal = modal;
  });
  $scope.closeSettingsModal = function () {
    $scope.settingsModal.hide();
  };

  $scope.openSettingsModal = function () {
    $scope.settingsModal.show();
  };

  // Create the edit profile modal
  $ionicModal.fromTemplateUrl('templates/modal/edit-profile.html', {
    id: 'edit-profile',
    scope: $scope
  }).then(function (modal) {
    $scope.editProfileModal = modal;
  });
  $scope.closeEditProfileModal = function () {
    $scope.editProfileModal.hide();
  };

  $scope.openEditProfileModal = function () {
    $scope.editProfileModal.show();
  };

  // Create the change password modal
  $ionicModal.fromTemplateUrl('templates/modal/change-password.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.changePasswordModal = modal;
  });
  $scope.closeChangePasswordModal = function () {
    $scope.changePasswordModal.hide();
  };

  $scope.openChangePasswordModal = function () {
    $scope.changePasswordModal.show();
  };



  // Terms and conditions modal
  $ionicModal.fromTemplateUrl('templates/modal/terms.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.termsModal = modal;
  });
  $scope.closeTermsModal = function () {
    $scope.termsModal.hide();
  };

  $scope.openTermsModal = function () {
    console.log('clicked');
    $scope.termsModal.show();
  };



  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeSearchModal();
    }, 1000);
  };





//image zoom modal

$scope.allImages = [];

  $scope.zoomMin = 1;

  $scope.showImages = function(index, images) {
    console.log('clicked to show gallery');
    $scope.activeSlide = index;
    $scope.allImages = images;
    $scope.showModal('templates/modal/gallery-zoomview.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.galleryModal = modal;
      $scope.galleryModal.show();
    });
  }

  $scope.closeGalleryModal = function() {
    $scope.galleryModal.hide();
    $scope.galleryModal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };












  



})

.controller('SignUpCtrl', function ($scope, $stateParams, $timeout, $dataService, StorageService, Maestro, $state, $ionicModal) {

	$scope.otpBtn="Validate Mobile";
 	$scope.phoneNumbr = /^\d{10}$/;
	$scope.mobilevalid= false; 
	$scope.status1=false;    
	$scope.status2=false;	//mobile validation successfull
	$scope.status3=false;	//wrong otp message
	$scope.sendotp=false;
  	$scope.status4=true;
	
		// show send/resend otp button			
	$scope.user = {		// declare user object
      		insecure: 'cool',
      		notify: 'no',
		mobile_num: null,
    	};

	$scope.otpObj={auth_key:'ck_bca5ee0c5f916c12896590606abab1c4cee4cc08',
		validate: 'NO'
	};  
	
	$scope.settime=function(){
		$timeout(function(){	$scope.sendotp=false;},60000);
	}
	$scope.showotpinput= function(){
       		return  $scope.status1;
   	}

	$scope.generateOTP = function(){
			$scope.sendotp=true;
		$scope.settime();
		if($scope.user.mobile_number!=null){
			$scope.status1=true; 
			$scope.otpBtn="Resend OTP";
			$scope.otpObj.mobile_no=$scope.user.mobile_number;
			Maestro.$generateOTP($scope.otpObj).then(function (res) {

			});
   		}
		else {
  				$scope.status1=false;
 		}
    	}

	$scope.validateOTP = function(){
        	$scope.otpObj.validate= "YES";
        	$scope.otpObj.OTP=$scope.user.otp;
        	//alert(JSON.stringify($scope.otpObj));
		Maestro.$validateOTP($scope.otpObj).then(function (res) {
			if(res.data=="\n1"){
                   		$scope.status2=true;
		   		$scope.status3=false;
		   		$scope.status1=false;
		   		
		   		$scope.status4=false;
					
			}
			else{
		   		$scope.status2=false;
		   		$scope.status3=true;
			}
	});	
    }

    $scope.$on("$ionicView.enter", function (event, data) {
      getNonce(); //get nonce for signUp
    });

    var getNonce = function () {
      	$scope.disableSubmit = true;
      	$dataService.$getNonce().then(function (res) {
        	console.log(res);
       	 	$scope.user.nonce = res.data.nonce;
        	$scope.disableSubmit = false;

      	}, function (err) {
        	console.log(err)
      	})
    };

    $scope.disableSubmit = false;
    //signUp function

    $scope.signUp = function () {
	    //alert(JSON.stringify($scope.user));
      	$scope.disableSubmit = true;
      	$scope.loading = true; //show loading
      	console.log($scope.user);
      	$scope.user.display_name = $scope.user.username; // specify display_name
  
      		$dataService.$signup($scope.user).then(function (res) {
        		console.log(res);
        		if (res.status === 200) 
			{
          			var userObj = {
  					first_name:$scope.user.first_name,
					last_name:$scope.user.last_name,
            				username: $scope.user.username,
            				cookie: res.data.cookie,
            				email: $scope.user.email,
            				time: new Date(),
	    				mobile_number:$scope.user.mobile_number,
            				user_id: res.data.user_id
          			}

          			localStorage.setItem('userObj',JSON.stringify(userObj)); // store userObj on localStorage
          			$state.go('app.editorial');
          			//StorageService.getAll();  
        		} 
			else {
          			$scope.signUpError = res.data.error;
				if(res.data.error=="Mobile already exists.")
				$scope.status4=true;
        		}
        		$scope.disableSubmit = false;
        		$scope.loading = false;

      		}, function (err) {
        		console.log(err);
        		$scope.signUpError = err.data.error;
       		 	$scope.disableSubmit = false;
        		$scope.loading = false;
      		})

    };


     // Terms and conditions modal
  $ionicModal.fromTemplateUrl('templates/modal/terms.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.termsModal = modal;
  });
  $scope.closeTermsModal = function () {
    $scope.termsModal.hide();
  };

  $scope.openTermsModal = function () {
    console.log('clicked');
    $scope.termsModal.show();
  };




  })
  .controller('LoginCtrl', function ($scope, $stateParams, $dataService, $ionicModal, $ionicLoading, StorageService, $state, $pinroUiService) {
	$pinroUiService.showLoading();        
	if(localStorage.getItem('userObj')!='null'){
		
		$state.go('app.editorial');
	}
	$pinroUiService.hideLoading();
	
    	$scope.user = {    		// declare user object
      		insecure: 'cool'  
    	}
     	$scope.loading = false; 	//to show and hide loading
    	$scope.disableSubmit = false; 	// to disable and enable button on submit
    	//localStorage.setItem('userObj','null'); // set userobject on local storage to null



//------------------------------------------------------------- login function start -------------------------------------------------------------
    	$scope.login = function () {		    	//login function start
		alert("i m in login");
      		$scope.disableSubmit = true;
    		$pinroUiService.showLoading();//$ionicLoading.show();// $scope.loading = true;
		alert("user is" + JSON.stringify($scope.user));
      		$dataService.$login($scope.user).then(function (res) {
        		console.log(res);
        		if (res.data && !res.data.error) {
          			var userObj = {
            				username: res.data.user.username,
					first_name: res.data.user.firstname,
					last_name: res.data.user.lastname,
					mobile_number: res.data.user.mobile_number, // user object
            				cookie: res.data.cookie,
            				time: new Date(),
            				email: res.data.user.email,
            				user_id: res.data.user.id
          			}
				localStorage.setItem('userObj',JSON.stringify(userObj)); // store userObj on localStorage
          			//StorageService.add(userObj);  //commented by mizan
         			// StorageService.getUserObj(); // commented by mizan
          			$state.go('app.editorial');		

        		} else {
          			$scope.loginError = 'Invalid username or password';
        		}
       			$scope.disableSubmit = false;
       			$pinroUiService.hideLoading(); //$ionicLoading.hide();// $scope.loading = false;

     	}, function (err) {
        console.log(err);
        $scope.loginError = 'Invalid username or password';
        $scope.disableSubmit = false;        
        $pinroUiService.hideLoading();  //$ionicLoading.hide();         // $scope.loading = false;
      })
    };
// login function end--------------------------------------------------------------------------------------------------------------------------


//reset password request function (fortgot password)----------------------------------------------------------------------------------------------
    $scope.resetPassword = function (user) {
      	$scope.disableSubmit = true;
      	$pinroUiService.showLoading();       	//$ionicLoading.show();       	// $scope.loading = true;
      	var params = {
        	insecure: 'cool',
        	user_login: user.user_login
      	};
      	$dataService.$passwordReset(params).then(function (res) {
        	console.log(res)
        	if (res.status === 200) {
          		$scope.resetError = '';
          		$scope.resetSuccess = res.data.msg;
        	} else {
          		$scope.resetSuccess = '';
          		$scope.resetError = res.data.error;
        	}
 
       		$scope.disableSubmit = false;
       		$pinroUiService.hideLoading();        // $ionicLoading.hide();        // $scope.loading = false;
      }, function (err) {
        	console.log(err)
        	$scope.resetSuccess = '';
        	$scope.resetError = `Email or username not found`;
        	$scope.disableSubmit = false;
        	//$ionicLoading.hide();
         	$scope.loading = true;
      })
    };
// reset password function end ---------------------------------------------------------------------------------------------------------

    // Terms and conditions modal
  $ionicModal.fromTemplateUrl('templates/modal/terms.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.termsModal = modal;
  });
  $scope.closeTermsModal = function () {
    $scope.termsModal.hide();
  };

  $scope.openTermsModal = function () {
    console.log('clicked');
    $scope.termsModal.show();
  };



  })
  .controller('MainCtrl', function ($scope, $state, $ionicHistory, $ionicScrollDelegate, Maestro, $dataService, $pinroUiService) {
	$pinroUiService.hideLoading();

    $scope.featuredProducts = [];
    $scope.latestProducts = [];

    $scope.$on("$ionicView.enter", function (event, data) {
      $ionicHistory.clearHistory();
      getOfferImg();
      getEditorialProducts(); //get nonce for signUp
    });
  
    var productLoaded = false,
      offerImgLoaded = false,
      checkLoading = function () {
        if (offerImgLoaded && productLoaded) {
         // $scope.loading = false;
         $pinroUiService.hideLoading();
        }
      }

    //Get Editorial Products
    var getEditorialProducts = function () {
      
      $pinroUiService.showLoading();
      //should be changed to slug instead of ID
        Maestro.$getProductsByCategory(152).then(function (res) { // 21 is editorial category id
          console.log(res);
          angular.forEach(res.data, function (product) {
            if (product.featured && $scope.featuredProducts.length < 2) {
              	$scope.featuredProducts.push(product);
            	} else {
              		$scope.latestProducts.push(product);
            	}
          })
          productLoaded = true;
          checkLoading();

        }, function (err) {
          console.log(err);
          
          $pinroUiService.hideLoading();
        });
      }
      // get offer post
    var getOfferImg = function () {
      $dataService.$getPosts({
        slug: 'editorial'
      }).then(function (res) {
        console.log(res);
        if(res.data.posts.length && res.data.posts[0].attachments.length && res.data.posts[0].attachments[0].url){
          $scope.offerImgSrc = res.data.posts[0].attachments[0].url;
        }else{
          $scope.offerImgSrc = res.data.posts[0].thumbnail;
        }

        offerImgLoaded = true;
        checkLoading();

      }, function (err) {
        console.log(err);
        $pinroUiService.hideLoading();
      })
    }

 


  })
  .controller('ProductListCtrl', function ($scope, $stateParams, $state, $ionicScrollDelegate, $pinroUiService, Maestro) {
    $scope.order = 'name'; //for product list filtering

   $scope.page=1;
   $scope.isLoading=false;	
   $scope.loadText="Load more products";
   // $scope.loading = true;
 $scope.productList = []
    $scope.layout = 'grid'; // for layout controll
$scope.$on("$ionicView.enter", function(event, data){
   // handle event
   console.log("State Params: ", data.stateParams);

   $scope.categoryName = data.stateParams.catagoryName;

  // $ionicLoading.show(); // show ionicLoading
  $pinroUiService.showLoading();

   $scope.loadMoreProducts= function (){
	 $scope.isLoading=true;
	$scope.page++;
	Maestro.$getProductsByCategory(data.stateParams.categoryId,$scope.page).then(function(res){
  	console.log(res.data); 
	if(res.data.length>0){
	$scope.productList = $scope.productList.concat(res.data);
	//$scope.productList=res.data;
	
 	// $ionicLoading.hide();
 	}else{
		$scope.loadText="No more products";
	}
   	 $scope.isLoading=false;
	
	}, function(err){
  		console.log(err);
  		//$ionicLoading.hide();
  		$pinroUiService.hideLoading();
   		// $scope.loading = false; //hide ionicLoading
	})

	$scope.$broadcast('scroll.infiniteScrollComplete');

	
   }
	 $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMoreProducts();
  });




Maestro.$getProductsByCategory(data.stateParams.categoryId,$scope.page).then(function(res){
  	console.log(res.data); 
	if(res.data.length>0){
  	$scope.productList = res.data;
	}
	else
	{
		$scope.loadText="No more products";
	}
 	// $ionicLoading.hide();
 	$pinroUiService.hideLoading();
   	// $scope.loading = false; //hide ionicLoading
	}, function(err){
  		console.log(err);
  		//$ionicLoading.hide();
  		$pinroUiService.hideLoading();
   		// $scope.loading = false; //hide ionicLoading
	})

});

    $scope.scrollToTop = function () {
      $ionicScrollDelegate.scrollTop();
    }



    $scope.goToProduct = function (id) { //close all open modal and go to product page
      console.log('clicked');
      $scope.cartModal.isShown() ? $scope.cartModal.hide() : null;
      $scope.searchModal.isShown() ? $scope.searchModal.hide() : null;
      $scope.profileModal.isShown() ? $scope.profileModal.hide() : null;
      $scope.wishlistModal.isShown() ? $scope.wishlistModal.hide() : null;
      $state.go('app.single', {
        id: id
      });
    }



   

  })

.controller('SingleProductCtrl', function ($scope, $stateParams, $window, $timeout, $ionicLoading, $ionicScrollDelegate, Maestro, CartService, WishlistService, $pinroUiService) {

  console.log($stateParams);

  $scope.selectedProduct = {}; // to get Selected Product to Cart
  $scope.productImages = []; // to show data on slider

//$ionicLoading.show(); // show $ionicLoading
 //$scope.loading = true;

 $pinroUiService.showLoading();



  Maestro.$getProductsById($stateParams.id).then(function (res) {
    console.log(res.data)
    if(res.data.id){

      $scope.product = res.data;
      
      $scope.selectedProduct = { //populate selected product with initial data
        name: $scope.product.name,
        product_id: $scope.product.id,
        price: $scope.product.price, // selected product price, will be updated if it has variation
        imgUrl: $scope.product.images[0].src,
        quantity: 1
      }

     $scope.productImages = angular.copy($scope.product.images);

     // $ionicLoading.hide(); // hide $ionicLoading
      //$scope.loading = false;
      $pinroUiService.hideLoading();

    }else{
      alert('no product found');
      //$ionicLoading.hide(); //hide $ionicLoading
      // $scope.loading = false;
       $pinroUiService.hideLoading();
    }



  }, function (err) {
    console.log(err);
    // $scope.loading = false;
     $pinroUiService.hideLoading();
  })


  //update price and get variation details

  $scope.updatePriceAndVariation = function (selectedProduct) {

    var keepGoing = true;
    angular.forEach($scope.product.variations, function (variation) {
      if (keepGoing) {
        var selectedSize = false,
          selectedColor = false;
        angular.forEach(variation.attributes, function (singleVariation) {
          if (selectedProduct.color && singleVariation.option === selectedProduct.color) {
            selectedColor = true;
            return
          }

          if (selectedProduct.size && singleVariation.option === selectedProduct.size) {
            selectedSize = true;
            return
          }

        })

        if (selectedColor && selectedSize) {
          console.log(variation.id);
          $scope.selectedProduct.variation_id = variation.id; // set selected product variation id;
          $scope.selectedProduct.price = variation.price; //update price with variation
          keepGoing = false;

          if(variation.image.length){
            $scope.productImages = variation.image; // to show selected item images on slider
            $scope.selectedProduct.imgUrl = variation.image[0].src;
        }else{
            $scope.productImages = $scope.product.images;
          }
          
        }
      } else {
        return; //strop running forEach if variation id is found
      }
    })

  }


//add item to cart
  $scope.addToCart = function (selectedProduct) {
    console.log(selectedProduct);

var itemToPushToCart = angular.copy(selectedProduct);
    //$scope.updatePriceAndVariation(selectedProduct);
    CartService.push(itemToPushToCart);

    //Animation for Cart
    addToCartAnimation();

  }


//wishlist
  $scope.wishListButtonText = "Add to wishlist";
  $scope.itemAddedToWishList = false;

  //add item to wishlist
  $scope.addToWishlist = function(selectedProduct){
    selectedProduct.category = $scope.product.categories[0].name;
    WishlistService.push(selectedProduct);
    $scope.wishListButtonText = "Added to wishlist";
  $scope.itemAddedToWishList = true;
  }

  //Animation function for Add to Cart
    var cart = angular.element(document.getElementsByClassName("shopping-cart"));
  var addToCartAnimation = function () {
    cart.css({
      'opacity': '1',
      'animation': 'bounceIn 0.5s linear'
    });
$ionicScrollDelegate.scrollTop(); // scroll to Top

    $timeout(function () {
      cart.css({
        'animation': ''
      });
      
      //$scope.selectedProduct.reset();
      
    }, 500)
  }

})

.controller('CartCtrl', function ($scope, $state, $stateParams, $timeout, Maestro, CartService, StorageService, $pinroUiService) {

  //CartService.getAll();
  $scope.CartItemList = [];




//Get CartItemList function
var getCartItems = function(){
    console.log('cart');
    if(CartService.getAll().length){
        $scope.CartItemList = CartService.getAll();
        addToCartAnimation();
      }
  }

  $scope.$on('modal.shown', function(event, data) {
  console.log('Modal is shown!'+ data.id);
  if(data.id === 'cart'){

    getCartItems(); //populate CartItemList from CartService
  }
});

//Animation function for Add to Cart
    var cart = angular.element(document.getElementsByClassName("shopping-cart"));
  var addToCartAnimation = function () {
    cart.css({
      'opacity': '1',
      'animation': 'bounceIn 0.5s linear'
    });

    $timeout(function () {
      cart.css({
        'animation': ''
      });
    }, 500)
  }



$scope.goToCheckout = function(){ 
  var user=JSON.parse(localStorage.getItem('userObj'));
 // var user = StorageService.getUserObj();
  if(user && user.cookie){
    
    $state.go('app.payment_step1');
  }else{
    $pinroUiService.showConfirm('signin', "Please login to continue with your order");
  }
  $scope.closeCartModal();
}

  


//remove item from cart function
$scope.removeItem = function(item){
  CartService.remove(item);

  if(!$scope.CartItemList.length){
    $scope.closeCartModal();
    cart.css({
        'opacity': '0'
      });
  }

}



// get subtotal 
		$scope.getSubtotal = function () {
			var total = total || 0;
			angular.forEach($scope.CartItemList, function (item) {
				total += parseInt(item.price) * item.quantity;

			});
			return total;
		};


		// Calculates the tax of the invoice
		$scope.calculateTax = function (rate) {
			return ((rate * $scope.getSubtotal()) / 100);
		};

		// Calculates the grand total of the invoice
		$scope.calculateGrandTotal = function (vatRate) {
			return $scope.getSubtotal()+50;
			/*if(vatRate){
				return ($scope.calculateTax(vatRate) + $scope.getSubtotal());
			} else{
				return $scope.getSubtotal();
			}*/
		};







      

})


.controller('OrderCtrl', function ($scope, $stateParams, $ionicHistory, $state, StorageService, Maestro, CartService, $pinroUiService) {
	$scope.user = {};
	$scope.regex = /^[789]\d{9}$/
	$scope.order = {
		"status": "pending",	
		"set_paid": false,
  		"currency": "INR",
 		"line_items": []
	};
	$scope.order.shipping = {};
	$scope.order.billing = {};
	$scope.order.line_items = [];
	$scope.order.shipping_lines = [
    	{
      		"method_id": "flat_rate",
      		"method_title": "Flat Rate",
      		"total": 50
    	}];
	$scope.step1=JSON.parse(localStorage.getItem('userObj'));
	
	//$scope.order.shipping.first_name = $scope.step1.first_name;
	//$scope.order.shipping.last_name = $scope.step1.last_name;
	//$scope.order.shipping.phone = $scope.step1.mobile_number;
	//alert(JSON.stringify($scope.order.shipping));
 	//$scope.countryList = countries;
 	//console.log($scope.countryList);
	var getUserInfo = function(user_id){
   		//$scope.loading = true;
   		$pinroUiService.showLoading();
			
    		Maestro.$getCustomerById(user_id).then(function(res){
    			//alert("hello mizzz");    console.log(res);
 			//$scope.loading = false;
 			$pinroUiService.hideLoading();
			
			var user1=JSON.parse(localStorage.getItem('userObj'));
			$scope.order.shipping.first_name=user1.first_name;
			$scope.order.shipping.last_name=user1.last_name;
			$scope.order.shipping.phone=user1.mobile_number;
			if(res.data.id){
				
    				$scope.user = res.data;
    				$scope.order.shipping = $scope.user.shipping || {};
			
			}else{
 				// alert(`There's been an error`);
			};

			if(!$scope.order.shipping.country){
      				$scope.order.shipping.country = "IN";
    			}

  		}, function(err){
    			// $scope.loading = false;
    			$pinroUiService.hideLoading();
    			console.log(err);
  		})// maestro.$getCustomerById close
	}// get user info

	var user = {};

 	$scope.$on("$ionicView.enter", function(event, data){
   		// handle event
   		console.log(StorageService.getUserObj());
   		console.log("State Params: ", data.stateParams);
   		//get user_id
   		var user = JSON.parse(localStorage.getItem('userObj'));
   		console.log(user);
      		if(user && user.user_id){
			
      			$scope.order.customer_id = user.user_id; //assing customer id
      			console.log($scope.order);
      			getUserInfo($scope.order.customer_id); //get user info
      		}
	 }); // scope on end
	var cartItems = CartService.getAll();											//get cart items
	angular.forEach(cartItems, function(item){
  		var itemToPush = {
    			product_id: item.product_id,
    			quantity: item.quantity
  		}
  		if(item.variation_id){
    			itemToPush.variation_id = item.variation_id;
  		}
  		console.log(itemToPush);
  		$scope.order.line_items.push(itemToPush);
	})// angular for each

/// Shipping address form validation
//	$scope.errorField="no error";


	$scope.validConfirm = function(){
		alert($scope.order.shipping.address_1);
		if(($scope.order.shipping.first_name==undefined)||($scope.order.shipping.last_name==undefined)||($scope.order.shipping.phone==undefined)||($scope.order.shipping.postcode==undefined)||($scope.order.shipping.city==undefined)||($scope.order.shipping.state==undefined)||($scope.order.shipping.last_name=="")||($scope.order.shipping.first_name=="")||($scope.order.shipping.last_name=="")||($scope.order.shipping.phone=="")||($scope.order.shipping.postcode=="")||($scope.order.shipping.city=="")||($scope.order.shipping.state=="")||($scope.order.shipping.last_name=="")){
			$scope.errorField='required all field';
		}
		else
		{
			$scope.confirmOrder();
		}		
	}
	$scope.confirmOrder = function(){											//confirm order
  		$pinroUiService.showLoading();  	 	
		$scope.order.shipping.country="India";
//		$scope.order.shipping_lines[0].total=42.5;
  		$scope.order.billing = $scope.order.shipping;
		if(user && user.user_id){
  			$scope.order.customer_id = user.user_id;
		}
		//alert(JSON.stringify($scope.order));
		console.log($scope.order); // $scope.order.billing = $scope.order.shipping;
		//alert('$scope.order ' +JSON.stringify($scope.order));
		//alert(JSON.stringify($scope.order));
		Maestro.$createOrder($scope.order).then(function(res){
  			console.log(res);
			//alert(JSON.stringify(res));
  			if(res.data.id){
				
    				CartService.removeAll(); //remove all item in cart
    				$state.go('app.payment_step2', {orderId: res.data.id, 
							amount: res.data.total, 
							currency: res.data.currency, 
							name: res.data.billing.first_name+" "+res.data.billing.last_name, 
							phone: res.data.billing.phone});
  			}
			else
			{
    				alert('Order couldn\'t be processed');
  			}
			$pinroUiService.hideLoading();
		}, function(err){
  			console.log(err);
  			$pinroUiService.hideLoading();
		})//Maestro.$createOrder
	};
										//go to main screen
 	$scope.goToMain = function () {
    		$ionicHistory.nextViewOptions({
      			disableBack: true
    		});
    		$state.go('app.editorial');
 	}// goToMain
}) // orderCtrl

.controller('PaymentCtrl', function ($scope, $http, $stateParams, $ionicPopup, $ionicHistory, $state, StorageService, Maestro, CartService,$cordovaNgCardIO, $pinroUiService, $interval) {
  

var orderId;

 $scope.cardType = {};
    $scope.card = {};

    var dataForStripe = {};

 $scope.$on("$ionicView.enter", function(event, data){
   // handle event
   console.log("State Params: ", data.stateParams);
	   
   orderId = data.stateParams.orderId;

  // pass order and amount details for stripe
  dataForStripe.amount = parseInt(data.stateParams.amount); // amount is in cents/pence for stripe so * 100
      dataForStripe.currency = data.stateParams.currency;
      dataForStripe.name = data.stateParams.name;
      dataForStripe.phone = data.stateParams.phone;
      dataForStripe.description =  "Payment for Maestro Order #"+ orderId;

 });


//Stripe card payment_method

  /* $scope.makeStripePayment =  function (_cardInformation) {

      console.log('clicked');
     // $scope.loading = true;
$pinroUiService.showLoading();

      dataForStripe.card = {
            "number": _cardInformation.number,
            "exp_month": _cardInformation.exp_month,
            "exp_year": _cardInformation.exp_year,
            "cvc": _cardInformation.cvc,
            "name": _cardInformation.name
          }
          console.log(dataForStripe);

      if (!window.stripe) {
        alert("stripe plugin not installed");
        return;
      }

      if (!_cardInformation) {
        alert("Invalid Card Data");
        return;
      }

      // charge card with card and order data
      stripe.charges.create(dataForStripe,
        function(response) {
         // $scope.loading = false;
         $pinroUiService.hideLoading();
          console.log(JSON.stringify(response, null, 2));
          //alert(JSON.stringify(response, null, 2));
          $state.go('app.payment_step3', {orderId: orderId, transactionId: response.id});
        },
        function(response) {
          //$scope.loading = false;
          $pinroUiService.hideLoading();
          
        } // error handler
      );
    }
*/
$scope.payCashOnDelivery = function(){
	
  $state.go('app.payment_step3', {orderId: orderId, payByCash: true})
}
$scope.payOnline = function(){



	//alert(JSON.stringify(StorageService.getUserObj()));
//-----------------------------------------------------------------------------------------------------------------------------------------------
		  // added by mizan
			var paymentobj = { "window" : "open",
                                             "payment" : "pending"};
			paymentstr= JSON.stringify(paymentobj);
			var bemail= JSON.parse(localStorage.getItem('userObj')).email;
			//alert(JSON.stringify(dataForStripe)+bemail);
                        var paymentStatus="pending";// creaded  by mizan 
			link = 'https://minbazaar.com/wp_instamojo_gate/payment.php';
			$http.post(link, {username : dataForStripe.name,
				amount : dataForStripe.amount,
			        email : bemail,
				phone : dataForStripe.phone}).then(function (res){
				//window.open(res.data+"?embed=form", '_blank', 'location=no');
			    	var win = window.open(res.data+"?embed=form", '_blank', 'location=no, toolbar=yes, EnableViewPortScale=yes');
				win.addEventListener("loadstart", function(){
					navigator.notification.activityStart("Please Wait, ", "Its loading....");
				});
				
				win.addEventListener("loadstop", function() {
					navigator.notification.activityStop();
					win.executeScript({code: "localStorage.setItem('paymentobj','paymentstr');"});
					var loop = $interval(function(){
						win.executeScript({code: "localStorage.getItem('paymentobj');"},
                            			function(values){
                                			var name = values[0];
							paymentobj= JSON.parse(name);	
							if(paymentobj.window==='closed'){
							    	win.close();
								win.localStorage.setItem('paymentobj','paymentstr');			 
                                			}
                            			});
                       			 },1000);                            	
				});				
				win.addEventListener('exit', function() {
						
					if(paymentobj.payment==="done"){
						alert('payment success: payment_request_id'+ paymentobj.payment_request_id + 'payment_id'+ paymentobj.payment_id);
						$state.go('app.payment_step3', {orderId: orderId, transactionId: paymentobj.payment_id});
					}
					else if(paymentobj.payment==="cancel"){
						alert('payment failed please go to your orders and payment again of your ');
					}
					else
					{
						alert("order has been cancelled");
						
						$scope.goToMain();
						/*$ionicPopup.alert({
									title: 'payment failed',
									template:'order has been cancelled'
								});*/
					}
				})// exit event listner
        		});// post method
			
// if payment done
//-----------------------------------------------------------------------------------------------------------------------------------------------

}
 	$scope.goToMain = function () {
    		$ionicHistory.nextViewOptions({
      			disableBack: true
    		});
    		$state.go('app.editorial');
 	}
$scope.scanCard = function(){
    $cordovaNgCardIO.scanCard()
        .then(function (response) {
                //Success response - it`s an object with card data
                console.log(response);
                $scope.card.number = response.card_number;
                $scope.card.exp_month = response.expiry_month;
                $scope.card.exp_year = response.short_expiry_year;
                $scope.card.cvc = response.cvv;


              },
              function (response) {
                //We will go there only when user cancel a scanning.
                //response always null
                console.log(response);
              }
        );
}


})

.controller('OrderConfirmCtrl', function ($scope, $stateParams, $ionicHistory, $state, $ionicPopup, StorageService, Maestro, CartService, $pinroUiService) {
	var order = {};
	var updateOrder = function(data){
  		$pinroUiService.showLoading();
  		//$scope.loading = true;
  		Maestro.$updateOrder(data).then(function(res){
    		console.log(res)
   		// $scope.loading = false;
   		$pinroUiService.hideLoading();
  	}, function(err){
   	 	console.log(err);
    		//$scope.loading = false;
    		$pinroUiService.hideLoading();
  	})
}
$scope.$on("$ionicView.enter", function(event, data){    // handle event
	console.log("State Params: ", data.stateParams);
    	if(data.stateParams.payByCash){
        order = {
              		id: data.stateParams.orderId,
              		payment_method: 'Cash on delivery',
              		payment_method_title: 'Cash on delivery',
              		status: 'processing'
          	}
      }
	else{
        	order = {
            		id: data.stateParams.orderId,
            		transaction_id: data.stateParams.transactionId,
            		payment_method: 'Instamojo',
            		payment_method_title: 'Instamojo',
            		set_paid: true,
            		status: 'processing'
        }
  
   }
  

    

   updateOrder(order); // update order

 });


//go to main screen
 $scope.goToMain = function () {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go('app.editorial');
  }






})
.controller('WishlistCtrl', function ($scope, $stateParams, $state, $timeout, Maestro, WishlistService) {
//CartService.getAll();
  $scope.WishListItems = [];


  $scope.editWishlist = false;


//Get CartItemList function
var getWishlistItems = function(){
    if(WishlistService.getAll().length){
        $scope.WishListItems = WishlistService.getAll();
       
      }
  }

  $scope.$on('modal.shown', function(event, data) {
  console.log('Modal is shown!'+ data.id);
  if(data.id === 'wishlist'){

    getWishlistItems(); //populate WishListItems from WishlistService
  }
});

$scope.makeListEditable = function(){
  $scope.editWishlist = true;
}


//remove item from wishlist function
$scope.removeSelectedItems = function(){
  angular.forEach($scope.WishListItems, function(item){
    if(item.selected){
      WishlistService.remove(item);
    }
  });
  $scope.editWishlist = false;
  getWishlistItems(); 
}


//go to product

    $scope.goToProduct = function (id) { //close all open modal and go to product page
      console.log('clicked');
      $scope.wishlistModal.isShown() ? $scope.wishlistModal.hide() : null;
      $state.go('app.single', {
        id: id
      });
    }

})
.controller('SearchCtrl', function ($scope, $stateParams, $state, $ionicScrollDelegate, $ionicLoading, Maestro) {
	$scope.buttonShow=false;
	$scope.page=1;
	$scope.loadText="load more products";
	$scope.productList = [];
 	$scope.loading = false;


	$scope.$on('modal.shown', function(event, data) {
  		console.log('Modal is shown!'+ data.id);
  		if(data.id === 'search'){
    			//getSearchListItems();
  		}
	});


	$scope.goToProduct = function (id) { //close open modal and go to product page
      		console.log(id);
      		$scope.searchModal.isShown() ? $scope.searchModal.hide() : null;
      		$state.go('app.single', {
        		id: id
      		});
    	};
	$scope.searchProducts= function(){
		$scope.page=1;
		   		$scope.loading = true;
   		Maestro.$getAllProducts($scope.search1,$scope.page).then(function(res){
    			console.log(res.data);
			alert(JSON.stringify(res.data));
    			if(res.data.length){
      				$scope.productList = res.data;
    			}
				$scope.buttonShow=true;
     		$scope.loading = false;
  		}, function(err){
    			console.log(err);
     			$scope.loading = false;
  		})
	};
	 $scope.loadMoreProducts= function (){
	 	$scope.isLoading=true;
		$scope.page++;
		Maestro.$getAllProducts($scope.search1,$scope.page).then(function(res){
  		console.log(res.data); 
		if(res.data.length>0){
			$scope.productList = $scope.productList.concat(res.data);
	//$scope.productList=res.data;
	
 	// $ionicLoading.hide();
 	}else{
		$scope.loadText="No more products";
	}
   	 $scope.isLoading=false;
	
	}, function(err){
  		console.log(err);
  		//$ionicLoading.hide();
  		$pinroUiService.hideLoading();
   		// $scope.loading = false; //hide ionicLoading
	})

	$scope.$broadcast('scroll.infiniteScrollComplete');

	
   }



})

//profile controller
.controller('ProfileCtrl', function ($scope, $stateParams, $ionicHistory, $state, StorageService, $dataService, Maestro, CartService, $pinroUiService) {

$scope.user = {}; // to assign and display user Data
$scope.show = 'orders'; //to show and hide orders and offer in profile

$scope.orderList = [];
 $scope.offerPosts = [];
$scope.username = JSON.parse(localStorage.getItem('userObj'));
var getUserInfo = function(user_id){
//alert(JSON.stringify(StorageService.getUserObj()));
  $pinroUiService.showLoading();
    Maestro.$getCustomerById(user_id).then(function(res){
    console.log(res);
    $pinroUiService.hideLoading();

if(res.data.id){
    $scope.user = res.data;
    if($scope.user.first_name && $scope.user.last_name){
      $scope.full_name = $scope.user.first_name + ' ' + $scope.user.last_name+"hwllo";
    }
}else{
  ////alert(`There's been an error`);
}

  }, function(err){
    console.log(err);
    $pinroUiService.hideLoading();
  })
}
//get all orders by customer
var getOrdersByCustomer = function(userId){
  // $scope.loading = true;
  $pinroUiService.showLoading();
  Maestro.$getOrderByCustomer(userId).then(function(res){
    console.log(res);

    if(res.data.length){
      $scope.orderList = res.data;

    }
     //$scope.loading = false;
     $pinroUiService.hideLoading();
  }, function(err){
    console.log(err);

     //$scope.loading = false;
     $pinroUiService.hideLoading();
  })
}


// get offer post
    var getOfferPosts = function () {
      $dataService.$getPosts({
        slug: 'offers'
      }).then(function (res) {
        console.log(res);
        if(res.data && res.data.posts.length){
          $scope.offerPosts = res.data.posts; //.thumbnail
        }

      }, function (err) {
        console.log(err);
      })

    }



$scope.$on("modal.shown", function(event, data){

  if(data.id === 'profile'){
	
    var user_id = JSON.parse(localStorage.getItem('userObj')).user_id; 
	
	//var str = JSON.stringify(user_id, null, 4);
	
	//console.log("Valueeeeeeeeeeeeeeeeee" + str);
	// to get userObj from localStorage Service
    //var user_id = 2;
    getUserInfo(user_id);
    getOrdersByCustomer(user_id);
    getOfferPosts();

	
  }

})

})
//Settings controller
.controller('SettingsCtrl', function ($scope, $stateParams, $ionicHistory, $ionicPopup, $state, StorageService, $dataService, Maestro, CartService) {

$scope.user = $scope.user || {}; // to assign and display user Data


var getUserInfo = function(user_id){
   $scope.loading = true;
    Maestro.$getCustomerById(user_id).then(function(res){
    console.log(res);
 $scope.loading = false;
if(res.data.id){
    $scope.user = res.data;
    $scope.user.shipping = $scope.user.shipping || {};
    if(!$scope.user.shipping.country){
      $scope.user.shipping.country = "GB";
    }
    
}else{
  alert(`There's been an error`);
}

  }, function(err){
     $scope.loading = false;
    console.log(err);
  })
}

$scope.updateProfile = function(){
  $scope.loading = true;
  Maestro.$updateCustomer($scope.user).then(function(res){
    console.log(res.data);

    if(res.data.id){
       $scope.loading = false;
      //error pop up dialog
    $ionicPopup.alert({
     title: 'Success',
     template: `Your profile has been updated`,
     buttons: [
       { text: '<b>CLOSE</<b>',
      type: 'button-small button-dark' }
     ]
   });
   closeModals();
    }

  }, function(err){
    console.log(err);
     $scope.loading = false;

//error pop up dialog
    $ionicPopup.alert({
     title: 'Error',
     template: `There's been an error. Please log out and try again.`,
     buttons: [
       { text: '<b>CLOSE</<b>',
      type: 'button-small button-assertive' }
     ]
   });

  })
}

var closeModals = function(){

      $scope.changePasswordModal.isShown() ? $scope.changePasswordModal.hide() : null;
      $scope.editProfileModal.isShown() ? $scope.editProfileModal.hide() : null;
}



$scope.$on("modal.shown", function(event, data){

  if(data.id === 'settings'){
    var user_id = StorageService.getUserObj().user_id; // to get userObj from localStorage Service
    //var user_id = 2;
    getUserInfo(user_id);
  }

})

$scope.$on("modal.shown", function(event, data){

  if(data.id === 'edit-profile'){
    //var user_id = StorageService.getUserObj().user_id; // to get userObj from localStorage Service
    $scope.user.password = null;
  }

})


});
