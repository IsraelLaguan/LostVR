   AFRAME.registerComponent('general-scene', {
     init: function () {
       var scene = document.querySelector('a-scene');
       var first = document.querySelector('#one');
       var moveOne = document.querySelector('#move1');

      moveOne.emit('animationstart');


       first.addEventListener('mouseenter', function(){
         var c = document.querySelector('a-camera');
         c.setAttribute('position', {X: -13, y: 7.5, z: 9.9});
        //  c.setAttribute('animation', 'property: position; dur: 100; easing: easeInOutSine; to:-13 5.9 41.3;');

       });



     }
   });
