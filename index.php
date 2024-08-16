<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brentspine.de</title>
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="./styles/dark.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</head>
<body>
    <div id="app">
        <div id="header">
            <div class="flex-fill"></div>
            <div class="header-link active">Home</div>
            <div class="header-link">Portfolio</div>
        </div>
        <div class="section" id="section-1">
            <div class="text">
                <div class="text-wrapper">
                    <div class="title">
                        <span>Brentspine</span>
                    </div>
                    <div class="text-append">
                        Web Developer & PHP enthusiast 
                    </div>
                    <div class="button">
                        <button class="non-background-button">
                            Kontaktiere mich
                        </button>
                    </div>
                </div>
            </div>
            <div class="image">
                <div class="image-wrapper">
                    <img src="pfp.gif">
                    <div class="gradient"></div>
                </div>
            </div>
            <div class="scroll-notice">
                <div class="scroll-notice-wrapper">
                    <div class="scroll-notice-text">
                        <span>Scroll please :)</span>
                    </div>
                    <div class="scroll-notice-arrow">
                        <img src="./images/arrow-down-secondary-color.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="section-2">
            <div class="wrapper">
                <div class="title">
                    <span>Über mich</span>
                </div>
                <div class="text-wrapper">
                    <div class="line"></div>
                    <div class="text">
                        Hallo, mein Name ist Luca. Ich studiere momentan dual angewandte Informatik an der Hochschule Darmstadt und bei R+V in Wiesbaden. Ich liebe Sushi und das Programmieren, sonst spiele ich in meiner Freizeit gerne Tennis oder zocke ein paar Games. Am Ehesten lerne ich Neues über praktisches Anwenden. Bitte zögere nicht mich bei Fragen oder Ähnlichem zu kontaktieren. Vielen Dank für deinen Besuch auf meiner Website, viel Spaß!
                    </div>
                </div>
            </div>
        </div>
        <div id="section-skill">
            <div class="title">
                <span>Meine Skills</span>
            </div>
            <!-- TODO: Add click me arrow top right pointing at one listing -->
            <div class="skill-grid-wrapper">
                <div class="skill-grid" id="skill-grid">
                    
                </div>
            </div>
        </div>
        <div id="section-contact">
            <div class="header">
                <div class="flex-fill line"></div>
                <div class="title">
                    <span>Kontaktiere mich</span>
                </div>
                <div class="flex-fill line"></div>
            </div>
            <div class="content">

            </div>
            <div class="footer">
                <div class="flex-fill line"></div>
                <div class="links">
                    <a href="https://brentspine.de/r/github" target="_blank">
                        <div class="image-wrapper-contain">
                            <img src="./images/github_white_256_256.png">
                        </div>
                    </a>
                    <a href="https://brentspine.de/r/instagram" target="_blank">
                        <div class="image-wrapper-contain">
                            <img src="./images/instagram_white_300_300.svg">
                        </div>
                    </a>
                    <a href="https://brentspine.de/r/twitter" target="_blank">
                        <div class="image-wrapper-contain">
                            <img src="./images/twitter_white_32_32.svg">
                        </div>
                    </a>
                </div>
                <div class="flex-fill line"></div>
            </div>
        </div>
        <div id="section-footer">
            <div></div>
            <div class="thanks">
                <span>>> Vielen Dank für deinen Besuch! <<</span>
            </div>
            <div class="bottom">
                <div>
                    <span>Made with <span class="heart">❤</span> by Brentspine (&copy; 2024)</span>
                </div>
                <div>
                    <span><a href="./impressum" class="nolink">Impressum</a></span>
                </div>
                <div>
                    <span><a href="./inspirationen" class="nolink">Inspirationen</a></span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>