
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
            ScreenTwoVid.src = "video/lose card.mp4";
            ScreenTwoVid.play()
            ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/wolfLose.mp4";
                ScreenOneVid.play();
               }
              break;
            case "smile":
              ScreenTwoVid.src = "video/win.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/wolfWin.mp4";
                ScreenOneVid.play();
               }
              break;
            case "roll":
              ScreenTwoVid.src = "video/lose card.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/wolfLose.mp4";
                ScreenOneVid.play();
               }
              break;
            case "indifferent":
              ScreenTwoVid.src = "video/lose card.mp4";
              ScreenTwoVid.play()
              ScreenTwoVid.onended = function(){
                jumpToScreenOne.click();
                ScreenOneVid.src = "video/wolfLose.mp4";
                ScreenOneVid.play();
               }
              break;
            default:
              }
            })
        })
      }())