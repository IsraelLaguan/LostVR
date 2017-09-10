   AFRAME.registerComponent('general-scene', {
     init: function () {
       var scene = document.querySelector('a-scene');
       var first = document.querySelector('#one');
       var moveOne = document.querySelector('#move1');
       var show = document.querySelector('#firstAnSphere2');
       var startEl = document.querySelector('#firstAnPlane');

       startEl.addEventListener('mouseenter', function(){
         var show = document.querySelector('#firstAnSphere2');
         show.setAttribute('scale', {x: 7, y: 7, z: 0.3});
       });

       show.addEventListener('mouseleave', function(){
         var nextLevel = document.querySelector('#firstAnSphere');
         nextLevel.setAttribute('position', {x: -8.7, y: 6, z:15});
       });

       first.addEventListener('mouseenter', function(){
         var c = document.querySelector('a-camera');
         c.setAttribute('position', {x: 17, y: 5.9, z: 41.3});
        //  c.setAttribute('animation', 'property: position; dur: 100; easing: easeInOutSine; to:-13 5.9 41.3;');

       });
     }
   });
