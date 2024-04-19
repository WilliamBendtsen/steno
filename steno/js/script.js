window.onload = function() {
            let videosContainer = document.getElementsByClassName("videos")[0];
            let menu = document.getElementsByClassName("menu")[0];

            let playButton = document.getElementsByClassName("play-button")[0];
            playButton.onclick = function() {
                playButton.style.display = "none";
                playInitialScene();
            }

            /* Så man kan klikke på vinduet for at komme videre */
            function windowClick() {
                playRoofScene();
            }

            let window = document.querySelector(".window");
            window.addEventListener("click", function() {
                windowClick();
            })


            /* Så man kan klikke på månen for at komme videre */
            let firstLink = document.getElementById("moon-box");
            firstLink.onclick = function() {
                showVideos(0, videosContainer.getElementsByClassName("moon-option"));
                playMoonChoice();
            }

            /* Så man kan klikke på pilen til højre for at komme videre */
            let secondLink = document.getElementById("arrow-2");
            secondLink.onclick = function() {
                showVideos(0, videosContainer.getElementsByClassName("planets-option"));
                playPlanetsChoice();
            }


            /* Funktioner for at man kan trykke på et element for at spille en ny scene */

            /* Den første scene på værelset, hvor man skal trykke på vinduet for at komme videre */
            function playInitialScene() {
                playVideo(videosContainer.getElementsByClassName("room-scene")[0], loop=false);

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("window")[0].style.display = "block";
                }, 14000);
            };

            /* Scenen på taget der ender med valget mellem at tage til månen eller videre i rummet */
            function playRoofScene() {
                playVideo(videosContainer.getElementsByClassName("roof-scene")[0],
                loop=false);

                let windowDiv = menu.getElementsByClassName("window")[0];
                windowDiv.parentNode.removeChild(windowDiv);

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("options-2")[0].style.display = "block";
                }, 30000);
            };

            /* Scenen hvor Alex flyver hen til månen */
            function playMoonChoice() {
                playVideo(videosContainer.getElementsByClassName("moon-option")[0],
                loop=false);

                setTimeout (function () {
                    menu.style.display = "block";
                }, 1000);
            };

            /* Scenen hvor Alex flyver videre til de andre planeter*/
            function playPlanetsChoice() {
                playVideo(videosContainer.getElementsByClassName("planets-option")[0],
                loop=false);

                let windowDiv = menu.getElementsByClassName("window")[0];
                windowDiv.parentNode.removeChild(windowDiv);

                setTimeout (function () {
                    menu.style.display = "block";
                }, 1000);
            };



            /* ? */
            function playVideo(videoContainer, loop=false) {
                let lastVideoContainer = videosContainer.getElementsByClassName("active")[0];
                lastVideoContainer.classList.remove("active");
                lastVideoContainer.style.display = "none";

                videoContainer.style.display = "block";
                videoContainer.classList.add("active");

                let video = videoContainer.getElementsByTagName("video")[0];
                video.preload = "auto";
                video.load();
                video.play();
                video.loop = loop;

                return video;
            }

            /* ? */
            function showVideos(index, videos) {
                if (index < (videos.length - 1)) {
                    hasNextVideo = true;
                } else {
                    hasNextVideo = false;
                }

                menu.style.display = "none";

                let video = playVideo(videos[index]);

                video.addEventListener("timeupdate", function() {
                    let currentTime = (this.currentTime / this.duration) * 100;

                    if (hasNextVideo && currentTime > 70) {
                        nextVideo = videos[index + 1];
                        nextVideoTag = nextVideo.getElementsByTagName("video")[0];
                        nextVideoTag.preload = "auto";
                    }
                })

                video.onended = function() {
                    if (hasNextVideo) {
                        showVideos(index+1, videos);
                    } else {
                    playClosingMenu();
                    }
                }
            }
        }