/* Sørger for at funktionen kun gælder efter siden er loaded */
window.onload = function() {
            /* Definition af vigtige relative variabler der går igen */
            let videosContainer = document.getElementsByClassName("videos")[0];
            let menu = document.getElementsByClassName("menu")[0];

            /* så vi kan fetche alt vores skrift i produktet gennem vores json fil */
            fetch('json/text.json')
            .then(response => response.json())
            .then(menuText => {
                document.querySelector('.planets-option h3').textContent = menuText.planetsOption;
                document.querySelector('.options-2 h3').textContent = menuText.options2H3;
                document.getElementById('option-1-link').textContent = menuText.option1Li;
                document.getElementById('option-2-link').textContent = menuText.option2Li;
                document.getElementById('back-option').textContent = menuText.backOption;
                document.getElementById('continue-option').textContent = menuText.continueOption;
            });

            /* Så startknappen starter den første video */
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

            /* Så man kan klikke på alle månerne og få deres tilhørende video spillet */
                    let fullMoonLink = document.getElementById("fuld");
                    fullMoonLink.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("full-moon"));
                        playFullMoon();
                    }

                    let waningMoonLink = document.getElementById("aftagende");
                    waningMoonLink.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("aftagende"));
                        playWaningMoon();
                    }

                    let waxingMoonLink = document.getElementById("tiltagende");
                    waxingMoonLink.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("tiltagende"));
                        playWaxingMoon();
                    }

                    let newMoonLink = document.getElementById("ny");
                    newMoonLink.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("new-moon"));
                        playNewMoon();
                    }

            
            /* Tilbage og Fortsæt knapper */
                    let backOption = document.getElementById("back-option");
                    backOption.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("moon-option"));
                        playMoonChoice();
                    }

                    let continueOption = document.getElementById("continue-option");
                    continueOption.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("end-part-2"));
                        playEnd2();
                    }

            /* Så man kan trykke på mobilen for at fortsætte */
            let phoneClick = document.querySelector(".phone-click");
            phoneClick.onclick = function() {
                showVideos(0, videosContainer.getElementsByClassName("end-part-3"));
                playEnd3();
            }

            

            /* Den første scene på værelset, hvor man skal trykke på vinduet for at komme videre */
            function playInitialScene() {
                playVideo(videosContainer.getElementsByClassName("room-scene")[0], loop=false);

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("window")[0].style.display = "block";
                }, 17000);
            };

             /* Scenen hvor Alex flyver videre til de andre planeter*/
             function playPlanetsChoice() {
                playVideo(videosContainer.getElementsByClassName("planets-option")[0],
                loop=false);
            };


            /* Scenen på taget der ender med valget mellem at tage til månen eller videre i rummet */
            function playRoofScene() {
                playVideo(videosContainer.getElementsByClassName("roof-scene")[0],
                loop=false);

                menu.getElementsByClassName("window")[0].style.display = "none";


                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("options-2")[0].style.display = "block";
                }, 31000);
            };


            /* Scenen hvor Alex flyver hen til månen */
            function playMoonChoice() {
                playVideo(videosContainer.getElementsByClassName("moon-option")[0],
                loop=false);

                menu.getElementsByClassName("options-2")[0].style.display = "none";
                    menu.getElementsByClassName("final-option")[0].style.display = "none";

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("moon-phase-options")[0].style.display = "block";
                    menu.getElementsByClassName("final-option")[0].style.display = "block";
                    continueOption.style.display = "none";
                    backOption.onclick = function() {
                        showVideos(0, videosContainer.getElementsByClassName("roof-scene"));
                        playRoofScene2();
                    }
                }, 8000);
            };

            /* Tag-scenen efter man har trykket på "tilbage". Her starter videoen 40 sekunder inde */
            function playRoofScene2() {
                playVideo2(videosContainer.getElementsByClassName("roof-scene")[0],
                loop=false);

                backOption.style.display = "none";

                menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";
                menu.getElementsByClassName("options-2")[0].style.display = "block";
                menu.style.display = "block";
            };
            


            /* Alle 4 scener for alle de 3 faser af månen */
                    function playFullMoon() {
                        playVideo(videosContainer.getElementsByClassName("full-moon")[0],
                        loop=false);

                        menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";

                        setTimeout (function () {
                            menu.style.display = "block";
                            playEnd1();
                        }, 16000);
                    };

                    function playWaningMoon() {
                        playVideo(videosContainer.getElementsByClassName("aftagende")[0],
                        loop=false);

                        menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";

                        setTimeout (function () {
                            menu.getElementsByClassName("final-option")[0].style.display = "block";
                            menu.style.display = "block";
                            playEnd1();
                        }, 20000);
                    };

                    function playWaxingMoon() {
                        playVideo(videosContainer.getElementsByClassName("tiltagende")[0],
                        loop=false);

                        menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";

                        setTimeout (function () {
                            menu.style.display = "block";
                            playEnd1();
                        }, 20000);
                    };

                    function playNewMoon() {
                        playVideo(videosContainer.getElementsByClassName("new-moon")[0],
                        loop=false);

                        menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";

                        setTimeout (function () {
                            menu.style.display = "block";
                            playEnd1();
                        }, 27000);
                    };


            /* Scenen hvor Alex snakker om månen, der ender med valget om at tage tilbage eller fortsætte */
            function playEnd1() {
                playVideo(videosContainer.getElementsByClassName("end-part-1")[0],
                loop=false);

                menu.getElementsByClassName("moon-phase-options")[0].style.display = "none";
                menu.getElementsByClassName("final-option")[0].style.display = "none";
                
                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("final-option")[0].style.display = "block";
                    continueOption.style.display = "block";
                }, 10000);
            };

            /* Scenen hvor man skal klikke på bamsens walkie-talkie for at komme videre */
            function playEnd2() {
                playVideo(videosContainer.getElementsByClassName("end-part-2")[0],
                loop=false);

                menu.getElementsByClassName("final-option")[0].style.display = "none";

                setTimeout (function () {
                    menu.style.display = "block";
                    menu.getElementsByClassName("phone-click")[0].style.display = "block";
                }, 7000);
            };


            /* Den afsluttende scene, der ender med at refreshe siden efter 30 sekunder, for at give effekten af at videoen looper */
            function playEnd3() {
                playVideo(videosContainer.getElementsByClassName("end-part-3")[0],
                loop=false);

                menu.getElementsByClassName("phone-click")[0].style.display = "none";

                setTimeout (function () {
                    location.reload();
                }, 30000);
            };


            /* Funktionen for at afspille videoerne i .videos */
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

            /* Funktionen for af afspille playRoofScene2, hvor videoen skal start 40 sekunder inde */
            function playVideo2(videoContainer, loop=false) {
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
                video.currentTime = 40;

                return video;
            }

            /* Bestemmer hvorvidt der er en video der skal spilles efter den gældende, og preloader den næste video når den nuværende video er over 70% færdig */
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