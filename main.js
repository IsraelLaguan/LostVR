   AFRAME.registerComponent('general-scene', {
     init: function () {
       var scene = document.querySelector('a-scene');
       var first = document.querySelector('#one');
       var moveOne = document.querySelector('#move1');
       var bushOne = document.querySelector('#right-white');
       var bushTwo = document.querySelector('#left-white');

       bushTwo.addEventListener('mouseenter', function(){
         var sphere = document.querySelector('#firstAnSphere');
         sphere.setAttribute('position', {x: -13.6, y: 4.6, z: 11.2});
       });

       bushOne.addEventListener('mouseenter', function(){
         console.log('hey');
         var plane = document.querySelector('#firstAnPlane');
         plane.setAttribute('position', {x: -6.2, y: 4, z: 12.5});
       });

       first.addEventListener('mouseenter', function(){
         var c = document.querySelector('a-camera');
         c.setAttribute('position', {x: 17, y: 5.9, z: 41.3});
        //  c.setAttribute('animation', 'property: position; dur: 100; easing: easeInOutSine; to:-13 5.9 41.3;');

       });



     }
   });
