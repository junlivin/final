
  var ScreenTwoVid = document.getElementById("sceneSecond");
  var ScreenOneVid = document.getElementById("sceneFirst");
  let jumpToScreenTwo = document.getElementById('jumpToScreenTwo');
  let jumpToScreenOne = document.getElementById('jumpToScreenOne');
  let buttonOne = document.getElementById('playSceneOne')
  let firstTime = true;

    (function (){
      [].forEach.call(document.getElementsByClassName('sceneTwoButtons'), function(btn) {
        btn.addEventListener('click', function(e) {

          switch (e.target.id){
          case "angry":
            ScreenTwoVid.src = "/video/mountainView.mp4";
            ScreenTwoVid.play()
              break;
            case "smile":
              ScreenTwoVid.src = "/video/mountainView.mp4";
              ScreenTwoVid.play()
              break;
            case "roll":
              ScreenTwoVid.src = "/video/cloudLadder.mp4";
              ScreenTwoVid.play()
              break;
            case "indifferent":
              ScreenTwoVid.src = "/video/mountainView.mp4";
              ScreenTwoVid.play()
              break;
            default:
              }
            })
        })
      }())

