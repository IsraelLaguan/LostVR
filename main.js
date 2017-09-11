   AFRAME.registerComponent('general-scene', {
     init: function () {
       var scene = document.querySelector('a-scene');
       var firstMove = document.querySelector('#one');
       var moveOne = document.querySelector('#move1');
       var show = document.querySelector('#firstAnSphere2');
       var startEl = document.querySelector('#firstAnPlane');
       var secondSphereTop = document.querySelector('#second-sphere-one');
       var secondSphereBottom = document.querySelector('#second-sphere-two');
       var secondSphereBox = document.querySelector('#second-sphere-three');
       var secondEl = document.querySelector('#second-nextLevel');
       var moveTwo = document.querySelector('#movetwo');



      //  first episode animations
       startEl.addEventListener('mouseenter', function(){
         var show = document.querySelector('#firstAnSphere2');
         show.setAttribute('scale', {x: 1.3, y: 1.3, z: 0.3});
       });

       console.log('hey');
       show.addEventListener('mouseleave', function(){
         var nextLevel = document.querySelector('#firstAnSphere');
         nextLevel.setAttribute('position', {x: -19.2, y: 3.3, z:17.7});
       });
       firstMove.addEventListener('mouseenter', function(){
         var c = document.querySelector('a-camera');
         c.setAttribute('position', {x: -2.7, y: 4.6, z: 35.3});
         c.setAttribute('rotation', {x: 0, y: 0, z: 0});
       });

      //  second episode animations
      secondSphereTop.addEventListener('mouseleave', function(){
        var secondBox = document.querySelector('#second-box');
        secondBox.setAttribute('scale', {x: 2.1, y: 2.1, z: 2.1});
      });
      secondSphereBottom.addEventListener('mouseleave', function(){
        var secondBox = document.querySelector('#second-box');
        secondBox.setAttribute('rotate', {x: 0, y: 0, z: 180});
        secondBox.setAttribute('position', {x: 14.3, y: 8.3, z: 20.5});
        secondBox.setAttribute('animation', 'dur="1000"');
      });
      secondSphereBox.addEventListener('mouseenter', function(){
        var secondSphereTop = document.querySelector('#second-sphere-one');
        var secondSphereBottom = document.querySelector('#second-sphere-two');
        secondSphereTop.setAttribute('position', {x: 17, y: 3.1, z: 21});
        secondSphereBottom.setAttribute('position', {x: 21, y: 8.3, z: 21});
        secondSphereBottom.setAttribute('scale', {x: 0.7, y: 0.7, z: 0.7});
      });
      secondEl.addEventListener('mouseleave', function(){
        var moveTwo = document.querySelector('#movetwo');
        moveTwo.setAttribute('position', {x: 17, y: 6.3, z: 15});
      });
      moveTwo.addEventListener('mouseleave', function(){
        var c = document.querySelector('a-camera');
        c.setAttribute('position', {x: 32, y: 5.9, z: -16.7});
        c.setAttribute('rotation', {x: 0, y: 90, z: 0});
      });
     }
   });
