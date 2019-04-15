window.onload= function() {
    const players = [
        {
            rank:1,
            name:"Dustin Martin",
            team:"Richmond",
            bio:"He started the season bound for the same sort of impact he had in 2017 when he won the Brownlow and the Norm Smith medals and Richmond won the flag, but a knee problem slowed him considerably towards the end of the season and he barely kicked the ball in the preliminary final loss to Collingwood. But he still went at better than 25 disposals per game and he kicked 31 goals. When you sit down to compare “the big three” it is quality of disposal that gives “Dusty” the edge at the moment. He is an elite kick. It makes him that little bit more dangerous around goals and it makes him a bigger help to teammates in better scoring positions than him."
        },
        {
            rank:2,
            name:"Patrick Dangerfield",
            team:"Geelong",
            bio:"It is incredible to think he has already played 70 games for the Cats after crossing from Adelaide. His numbers were still very good in 2018 - he averaged more than 28 disposals per game and kicked 24 goals but he wasn’t quite at the dizzy levels he hit in 2017 when he went at 30 touches and kicked 45 goals in a mix of roles between midfield and attack. He still has a great balance to his game. He wins clearances five times a match, takes it in side attacking fifty five times and he dipped below 20 disposals in a game just once in 22 matches last year."
        },
        {
            rank:3,
            name:"Nat Fyfe",
            team:"Fremantle",
            bio:"There were times last year when he looked every bit the dominant force of the 2014 and 2015 seasons. You wouldn’t like to be the midfielder matched up on him in the centre this season without the ability to get help from defenders coming from the back of the square. The scary thing about Fyfe for opposition coaches is that of the big three at the top of this list he is the one with the most upside. He averaged nearly 30 disposals per game last year with seven clearances and 11 goals. Imagine if he dropped his disposal rate to about 25 but went forward more and kicked 30 goals. With the new rules he would be close to unstoppable."
        },
        {
            rank:4,
            name: "Lance Franklin",
            team:"Sydney",
            bio:"He starts the sixth year of his mammoth Swans contract as a 32-year-old but he also starts it as still the game’s biggest star and still alongside Jack Riewoldt and Josh Kennedy (Eagles) as one of its most potent forwards. He battled to train in 2018 because of a sore heel but he still kicked 57 goals in 19 games including that incredible eight goal haul against West Coast in round one when he literally decided the outcome. If he stays fit he is still capable of a 60-70 goal season."
        },
        {
            rank:5,
            name: "Patrick Cripps",
            team: "Carlton",
            bio:"Has any 23-year-old been asked to do more in his first 80 games of AFL football than Paddy Cripps? Carlton’s dearth of marquee players has meant the youngster has had to carry a mighty load. Luckily his 195cm, 93kg frame is built for work. Imagine that: A 195cm midfielder. That is bigger than Nick Riewoldt, Jonathan Brown and Matthew Pavlich and they were the three pre-eminent power forwards of the generation just gone. He averaged 29.5 disposals per game in 2018 and polled 20 Brownlow votes in a team that won just two of 22 games. He polled in half the games and was rated best on ground in both the Blues’ wins."
        },
        {
            rank:6,
            name:"Jeremy McGovern",
            team: "West Coast",
            bio:"We are all still talking about Dom Sheed finishing the match-winning play in the grand final against Collingwood but it took McGovern to start it. It was typical McGovern - the swagger to attack a contest and take a hanger, the game sense to play on and move the ball and the skill to pick out Nathan Vardy in a dangerous position midfield, all done with cracked ribs. Superb reader of the play, a great mark and a very good user of the ball either short or long. The Eagles won without Gaff, Naitanui and Sheppard last year but you wouldn’t back them to go back-to-back without McGovern."
        },
        {
            rank:7,
            name:"Josh Kelly",
            team: "GWS",
            bio:"As close as this competition has to a midfield Rolls Royce. He was injury affected for much of the season, missing a seven game stretch between rounds three and 10 when hampered by a groin problem, then absent when the Giants lost to Collingwood in a semi final because of a knee problem suffered early in the GWS win over Sydney in their elimination final. But he still went at better than 26 disposals per game when he played and kicked two goals four times. Elite runner, elite ball user, elite game sense. In a word: Elite."
        },
        {
            rank:8,
            name:"Max Gawn",
            team:"Melbourne",
            bio:"The ruck giant just shaded Grundy for status as the best ruckman in the AFL last year. He averaged just shy of 16 disposals per game and had a whopping 1119 hit outs at better than 44 per game. Some of his taps to his midfield’s advantage were absolutely gold to Clayton Oliver, Angus Brayshaw and co. He also kicked goals in 11 of Melbourne’s 25 games. At 208cm he is just three cm shorter than Aaron Sandilands but like the giant Docker is a great runner. He gets to very good attacking and defensive positions and was often the intercept marker in defence for the Dees in their break out year."
        },
        {
            rank:9,
            name:"Alex Rance",
            team:"Richmond",
            bio:"He will be one of the more intriguing players to watch under the new rules in 2019 because we are still not sure how many quick and clean entries to attacking fifty teams will be able to get from centre stoppages and how that will affect the league’s great “help” defenders. Rance is one shy of the 200 game milestone now and remains one of the game’s absolutely elite backmen, confident in getting to the “next” contest up the ground, provide the outnumber there and stop the ball from reaching his own man."
        },
        {
            rank:10,
            name:"Brodie Grundy",
            team:"Collingwood",
            bio:"Tied with Steele Sidebottom for the Copeland Trophy as the Magpies best and fairest winner in a grand final year. He is now 24 years old and is probably the nearest thing we have seen to Dean Cox since Cox himself. He averaged 20 disposals per game in 2018, took the ball inside fifty three times a game, laid five tackles a game, won five clearances for himself per game and kicked nine goals. He had 20 or more disposals in 15 of 26 games, peaking at 33 in round four against Adelaide. West Coast’s ability to limit him to 10 disposals in the grand final was a key to their premiership."
        }
    ]



    let pics =document.getElementsByClassName("pic");

    for (let i = 0; i< pics.length; i++) {
        pics[i].addEventListener("click", function() {
            document.getElementById("rank").innerHTML = players[i].rank;
            document.getElementById("name").innerHTML = players[i].name;
            document.getElementById("team").innerHTML = players[i].team;
            document.getElementById("bio").innerHTML = players[i].bio;

            //Ensures playeDisplay panel slides in at top of viewheight in smartphone mode
            let headline = document.getElementById("headline");
            let headlineOffset = headline.offsetHeight;
            headlineOffset += parseInt(window.getComputedStyle(headline).getPropertyValue('margin-bottom'));
            if(window.matchMedia("(max-width: 479px)").matches && window.pageYOffset > headlineOffset) {
                document.getElementById("playerDisplay").style.top=pageYOffset-headlineOffset;
            }

            document.getElementById("playerDisplay").style.left=0;
        });  

        pics[i].addEventListener("mouseover", function(){
            this.nextElementSibling.style.fontSize="150%";
        });

        pics[i].addEventListener("mouseout", function(){
            this.nextElementSibling.style.fontSize="100%";
        });
    }

    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
        document.getElementById("playerDisplay").style.left=-820;
    });



}