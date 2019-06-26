


appModule.controller('appCtrl',($scope,appFactory,$window, $location)=>{
    $scope.details={};
    $scope.selected={};
    $scope.newDetails={};
    $scope.select={};
    $scope.userDetails={};

    $scope.doLogin=()=>{
        const promise = appFactory.dologinfn($scope.userDetails);
        promise.then(data=>{
            console.log(data);
            $scope.data=data;
            localStorage.userid = data.data.userid;
            $window.location.href = '/contacts.html';
        },err=>{
            $scope.err=err;
        })
    }

    $scope.doSignup=()=>{
        const promise = appFactory.doSignupfn($scope.userDetails);
        promise.then(data=>{
            console.log(data);
            $scope.data=data;
            
        }, err=>{
            $scope.err=err;
        })
    }

    $scope.onLoadFun=()=>{
        console.log('in controller');
        const promise = appFactory.onloadfn();
        promise.then(data=>{
            console.log(data);
            $scope.data=data;
        },err=>{
            $scope.err=err;
        })
    }

    $scope.doCreateContact=()=>{
        const promise = appFactory.createContact($scope.details);
            localStorage.data= $scope.details;
            promise.then(data=>{
            $scope.data = data;
            $window.location.reload();
            alert("New Contact Added");
        },err=>{
            $scope.err=err;
        })
        
    }

    $scope.doUpdate=()=>{
        const promise = appFactory.updateContact($scope.selected);
        promise.then(data=>{
            $scope.data = data;
            $window.location.href = 'contacts.html';
            alert("Contact Updated");
        },err=>{
            $scope.err=err;
        })
    }

    $scope.doDeleteContact=()=>{
        const promise = appFactory.deleteContact($scope.select);
        promise.then(data=>{
            $scope.data = data;
            $window.location.reload();
        },err=>{
            $scope.err=err;
        })
    }

    $scope.logout=()=>{
        $window.localStorage.clear();
        $window.location.href = 'index.html'
    }

})