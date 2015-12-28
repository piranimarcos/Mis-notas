(function(){  
  
  var app = angular.module('starter.notestore', []);

  app.factory('NoteStore',function(){
    var notas = [
      {id: "1", title: "Nota 1", descripcion: "Descripcion 1"},
      {id: "2", title: "Nota 2", descripcion: "Descripcion 2"},
      {id: "3", title: "Nota 3", descripcion: "Descripcion 3"},
      {id: "4", title: "Nota 4", descripcion: "Descripcion 4"}
    ];
    
    return {
      list: function(){
        return notas;
      },
      get: function(id){
        return notas.filter(function(nota){
          return nota.id === id;
        })[0];
      },
      create: function(nota){
        notas.push(nota);
      },
      update: function(nota){
        for (var i = 0; i < notas.length; i++) {
          if(notas[i].id === nota.id ){
            notas[i] = nota;
            return;
          }
        }
      }
    };
  })
})();
