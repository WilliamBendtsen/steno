window.onload = function() {
            let videosContainer = document.getElementsByClassName("videos")[0];
            let menu = document.getElementsByClassName("menu")[0];
            let menuOptions2 = menu.getElementsByClassName("options-2")[0];

            let playButton = document.getElementsByClassName("play")[0];
            playButton.onclick = function() {
                playButton.style.display = "none";
                playInitialMenu();
            }

            let firstLink = document.getElementById("option-1-link");
            firstLink.onclick = function() {
                playClosingMenu = false;
                showVideos(0, videosContainer.getElementsByClassName("option-1"));
            }

            let secondLink = document.getElementById("option-2-link");
            secondLink.onclick = function() {
                playClosingMenu = false;
                showVideos(0, videosContainer.getElementsByClassName("option-2"));
            }

            function playInitialMenu() {
                playVideo(videosContainer.getElementsByClassName("initial")[0], loop=false);

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("initial")[0].style.display = "block";
                    menuOptions2.style.display = "block";
                }, 22000);
            };

            function playClosingMenu() {
                playVideo(videosContainer.getElementsByClassName("closing")[0], loop=false);

                menu.getElementsByClassName("initial")[0].style.display = "none";

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("closing")[0].style.display = "block";
                    menuOptions2.style.display = "none";
                }, 1000);
            };

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