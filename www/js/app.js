(function(){
  
  var app = angular.module('starter', ['ionic', 'starter.notestore']);

  //Routs
  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('list',{
        url:"/list",
        templateUrl: "templates/list.html"
    });
    $stateProvider.state('edit',{
        url:"/edit/:id",
        controller: "EditCtrl",
        templateUrl: "templates/edit.html"
    });
    $stateProvider.state('create',{
        url:"/create",
        controller: "CreateCtrl",
        templateUrl: "templates/edit.html"
    });
    $urlRouterProvider.otherwise('/list');
  })

  app.controller('ListController', function($scope, NoteStore){
    $scope.notas = NoteStore.list();
  })

  app.controller('EditCtrl', function($scope, $state, NoteStore){
    $scope.titulo = "Editar nota";
    $scope.id = $state.params.id;
    $scope.nota = angular.copy(NoteStore.get($scope.id));
    
    $scope.save = function(){
      NoteStore.update($scope.nota);
      $state.go('list');
    }
  })

  app.controller('CreateCtrl', function($scope, $state, NoteStore){
    $scope.titulo = "Nueva nota";
    $scope.nota = {id: new Date().getTime().toString(), titulo: "", descripcion:""}    
    $scope.save = function(){
      NoteStore.create($scope.nota);
      $state.go('list');
    }
  })

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
})();
