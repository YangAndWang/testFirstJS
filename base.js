
//this is my base js
//this is all utils

(function(global,u){
  var wy = {};
  
  
  //utils is a object like {[name:value]...}
  wy.extends = function(utils){
    for(var name in utils){
      if(utils[name] === wy[name]){}
      wy[name] = utils[name];
    }
  }


  global.wy = wy;
})(window);
