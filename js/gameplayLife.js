
  var ScreenTwoVid = document.getElementById("sceneSecond");
  var ScreenOneVid = document.getElementById("sceneFirst");
  let jumpToScreenTwo = document.getElementById('jumpToScreenTwo');
  let jumpToScreenOne = document.getElementById('jumpToScreenOne');
  let buttonOne = document.getElementById('playSceneOne')
  let firstTime = true;

  buttonOne.addEventListener('click', function(e){
        if(e.target)
        jumpToScreenOne.click();
        document.getElementById("sceneFirst").play();
        buttonOne.disabled = true;
        buttonOne.style.backgroundColor = '#808080';
    })

    ScreenOneVid.onended = function(){
      if (firstTime == true){
        jumpToScreenTwo.click();
        ScreenTwoVid.play();
        firstTime = false;
      }
     }

      buttonOne.addEventListener('click', function(e){
        if(e.target)
        document.getElementById("sceneFirst").play();
        ScreenTwoVid.onended = function(){
          document.querySelector(".sceneTwoButtons").style.visibility = "visible";
         }
    })

    (function(){
      [].forEach.call(document.getElementsByClassName('sceneTwoButtons'), function(btn) {
        btn.addEventListener('click', function(e) {

          switch (e.target.id){
          case "angry":
            ScreenTwoVid.src = "video/no.mp4";
            ScreenTwoVid.play()
            ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/BridgeLose.mp4";
                ScreenOneVid.play();
               }
              break;
            case "smile":
              ScreenTwoVid.src = "video/ok.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/Bridgewin.mp4";
                ScreenOneVid.play();
               }
              break;
            case "roll":
              ScreenTwoVid.src = "video/no.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/BridgeLose.mp4";
                ScreenOneVid.play();
               }
              break;
            case "indifferent":
              ScreenTwoVid.src = "video/no.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/BridgeLose.mp4";
                ScreenOneVid.play();
               }
              break;
            default:
              }
            })
        })
      }())



      // function challenge1(){
//     if(document.getElementById("subscribe").checked == true)
//     {
//     console.log("this works");
//     document.querySelector("#emailDiv").style.display = "initial";
// }
//     else{
//         document.querySelector("#emailDiv").style.display = "none";
//     }
// }

// function challenge2(element){
//     let bill = document.querySelector("#bill")
//     let home = document.querySelector("#home")
//     console.log("home value is" + home.value);
//     console.log("bill value is" + bill.value);
//     if (element.checked){
//         home.value = bill.value;
//         home.disabled = true;
//     } else{
//         home.value = ""
//         home.disabled = false;
//     }

    //       document.getElementById('playSceneOne').addEventListener(onended, function() {
    //     console.log("this works");
    // });


//     {
//     console.log("this works");
//     document.querySelector("#sceneFirst").style.display = "initial";
// }
//     else{
//         document.querySelector("#emailDiv").style.display = "none";
//     }
// }
