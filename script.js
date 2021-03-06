window.onload = function() {
    const players = [
        {
            name:"Dustin Martin",
            team:"Richmond",
            bio:"He started the season bound for the same sort of impact he had in 2017 when he won the Brownlow and the Norm Smith medals and Richmond won the flag, but a knee problem slowed him considerably towards the end of the season and he barely kicked the ball in the preliminary final loss to Collingwood. But he still went at better than 25 disposals per game and he kicked 31 goals. When you sit down to compare “the big three” it is quality of disposal that gives “Dusty” the edge at the moment. He is an elite kick. It makes him that little bit more dangerous around goals and it makes him a bigger help to teammates in better scoring positions than him.",
            pic: "martin"
        },
        {
            name:"Patrick Dangerfield",
            team:"Geelong",
            bio:"It is incredible to think he has already played 70 games for the Cats after crossing from Adelaide. His numbers were still very good in 2018 - he averaged more than 28 disposals per game and kicked 24 goals but he wasn’t quite at the dizzy levels he hit in 2017 when he went at 30 touches and kicked 45 goals in a mix of roles between midfield and attack. He still has a great balance to his game. He wins clearances five times a match, takes it in side attacking fifty five times and he dipped below 20 disposals in a game just once in 22 matches last year.",
            pic: "dangerfield"
        },
        {
            name:"Nat Fyfe",
            team:"Fremantle",
            bio:"There were times last year when he looked every bit the dominant force of the 2014 and 2015 seasons. You wouldn’t like to be the midfielder matched up on him in the centre this season without the ability to get help from defenders coming from the back of the square. The scary thing about Fyfe for opposition coaches is that of the big three at the top of this list he is the one with the most upside. He averaged nearly 30 disposals per game last year with seven clearances and 11 goals. Imagine if he dropped his disposal rate to about 25 but went forward more and kicked 30 goals. With the new rules he would be close to unstoppable.",
            pic: "fyfe"
        },
        {
            name: "Lance Franklin",
            team:"Sydney",
            bio:"He starts the sixth year of his mammoth Swans contract as a 32-year-old but he also starts it as still the game’s biggest star and still alongside Jack Riewoldt and Josh Kennedy (Eagles) as one of its most potent forwards. He battled to train in 2018 because of a sore heel but he still kicked 57 goals in 19 games including that incredible eight goal haul against West Coast in round one when he literally decided the outcome. If he stays fit he is still capable of a 60-70 goal season.",
            pic: "franklin"

        },
        {
            name: "Patrick Cripps",
            team: "Carlton",
            bio:"Has any 23-year-old been asked to do more in his first 80 games of AFL football than Paddy Cripps? Carlton’s dearth of marquee players has meant the youngster has had to carry a mighty load. Luckily his 195cm, 93kg frame is built for work. Imagine that: A 195cm midfielder. That is bigger than Nick Riewoldt, Jonathan Brown and Matthew Pavlich and they were the three pre-eminent power forwards of the generation just gone. He averaged 29.5 disposals per game in 2018 and polled 20 Brownlow votes in a team that won just two of 22 games. He polled in half the games and was rated best on ground in both the Blues’ wins.",
            pic: 'cripps'
        },
        {
            name:"Jeremy McGovern",
            team: "West Coast",
            bio:"We are all still talking about Dom Sheed finishing the match-winning play in the grand final against Collingwood but it took McGovern to start it. It was typical McGovern - the swagger to attack a contest and take a hanger, the game sense to play on and move the ball and the skill to pick out Nathan Vardy in a dangerous position midfield, all done with cracked ribs. Superb reader of the play, a great mark and a very good user of the ball either short or long. The Eagles won without Gaff, Naitanui and Sheppard last year but you wouldn’t back them to go back-to-back without McGovern.",
            pic:"mcgovern"
        },
        {
            name:"Josh Kelly",
            team: "GWS",
            bio:"As close as this competition has to a midfield Rolls Royce. He was injury affected for much of the season, missing a seven game stretch between rounds three and 10 when hampered by a groin problem, then absent when the Giants lost to Collingwood in a semi final because of a knee problem suffered early in the GWS win over Sydney in their elimination final. But he still went at better than 26 disposals per game when he played and kicked two goals four times. Elite runner, elite ball user, elite game sense. In a word: Elite.",
            pic:'kelly'
        },
        {
            name:"Max Gawn",
            team:"Melbourne",
            bio:"The ruck giant just shaded Grundy for status as the best ruckman in the AFL last year. He averaged just shy of 16 disposals per game and had a whopping 1119 hit outs at better than 44 per game. Some of his taps to his midfield’s advantage were absolutely gold to Clayton Oliver, Angus Brayshaw and co. He also kicked goals in 11 of Melbourne’s 25 games. At 208cm he is just three cm shorter than Aaron Sandilands but like the giant Docker is a great runner. He gets to very good attacking and defensive positions and was often the intercept marker in defence for the Dees in their break out year.",
            pic:'gawn'
        },
        {
            name:"Alex Rance",
            team:"Richmond",
            bio:"He will be one of the more intriguing players to watch under the new rules in 2019 because we are still not sure how many quick and clean entries to attacking fifty teams will be able to get from centre stoppages and how that will affect the league’s great “help” defenders. Rance is one shy of the 200 game milestone now and remains one of the game’s absolutely elite backmen, confident in getting to the “next” contest up the ground, provide the outnumber there and stop the ball from reaching his own man.",
            pic:'rance'
        },
        {
            name:"Brodie Grundy",
            team:"Collingwood",
            bio:"Tied with Steele Sidebottom for the Copeland Trophy as the Magpies best and fairest winner in a grand final year. He is now 24 years old and is probably the nearest thing we have seen to Dean Cox since Cox himself. He averaged 20 disposals per game in 2018, took the ball inside fifty three times a game, laid five tackles a game, won five clearances for himself per game and kicked nine goals. He had 20 or more disposals in 15 of 26 games, peaking at 33 in round four against Adelaide. West Coast’s ability to limit him to 10 disposals in the grand final was a key to their premiership.",
            pic:'grundy'
        },
        {
            name:"Clayton Oliver",
            team: "Melbounrne",
            bio: "You might want to put a bullet next to this bloke’s name as he could be considerably higher next year. Finished second in Melbourne’s best and fairest behind Max Gawn and you can safely assume to see Gawn’s name further up the ladder here. He did everything you expect gun midfielders to do in 2018. He averaged 29 disposals per game, won about 16 of them in contests, laid six tackles a match and won 6.5 clearances. He kicked 12 goals and he did all of this in his third AFL season in the year he turned 21. Wow.",
            pic:'oliver'
        },
        {
            name:"Jack Riewoldt",
            team:"Richmond",
            bio:"Kicked 70 goals in 2018 to take his career tally past 600. Riewoldt has dipped below 50 goals just once in nine seasons and that was in 2016 when the Tigers won only eight games and he still managed 48. The 70 goals don’t do justice to the season he had. He was the Tigers’ sole tall target much of the time and had to either mark it or get it on the deck for the crumbers to get to work. The five goals he kicked against in a pummelling from West Coast in Perth were evidence of what a great player he has become.",
            pic:'riewoldt'
        },
        {
            name:"Phil Davis",
            team:"GWS",
            bio:"He has been the primary power defender in a team that has played finals in each of the past three seasons. The modern defender often gets a lot of help from teammates, but the Giants regularly trade on Davis’ ability to cope one-on-one and isolated with the likes of Lance Franklin, Josh Kennedy and others. He is a great body player. He has that knack most great defenders have of being able to keep the forward off balance without conceding free kicks. He won 41 free kicks last year and conceded less than one per game.",
            pic:'davis'
        },
        {
            name:"Elliot Yeo",
            team: "West Coast",
            bio:"You are going all right when you win your second club best and fairest in a premiership year. I think all of the Eagles’ midfielders are underrated, but Yeo perhaps most of all. He averaged 25 disposals per game in 2018, kicking 14 goals, laying seven tackles a match and winning 12 contested possessions. He can play midfield or half-back, kicks well off either foot and can be used in attacking or defensive midfield roles. Is often the one sent to quell the likes of Nat Fyfe, Dustin Martin, Dangerfield and Toby Greene.",
            pic:'yeo'
        },
        {
            name:"Rory Sloane",
            team:"Adelaide",
            bio:"Injury cut his season in half in 2018 and trimmed his output by about the same percentage. But when he did play the Crows defied an otherwise bleak season to win seven of 12 games. A heart-and-soul midfielder who was still winning a powerful 13 contested possessions and six clearances per game, even in a season pulled apart by injury. He handles the pressure of being the club’s primary midfielder in the post-Patrick Dangerfield era very well and at his best he hits the scoreboard as well.",
            pic:'sloane'
        },
        {
            name: "Steele Sidebottom",
            team: "Collingwood",
            bio:"Has been a quality player for a long time, but his 2018 was something else again, sharing the Copeland Trophy as the Magpies’ best and fairest with ruckman Brodie Grundy. He averaged 29 disposals per game and in a three-match finals run had 27, 31 and 41 disposals to see his team into the decider. He finds the football in contests, but you want him on the outside where his elite run and ball use hurts the most. Mark Hutchings’ job on him in the grand final was a key to West Coast’s premiership.",
            pic:'sidebottom'
        },
        {
            name: "Josh Kennedy",
            team:"West Coast",
            bio:"Had his 2018 season shortened by injury and the fact he is injured again at the start of this year at the age of 31 is a concern. But if you are to recognise excellence over time in a position, then he has to be on this list and nearer the top than the bottom. Played 14 games in 2018 and West Coast won 13 of them. He kicked goals in every game he played and dipped below two goals just once, with three or more in nine of his 14 appearances. Always gives an option, always makes a contest and kicks two goals with every three shots. A money man.",
            pic: 'kennedy'
        },
        {
            name:"Robbie Gray",
            team:"Port Adelaide",
            bio:"In the absence of Cyril Rioli, Gray is probably the best player of his type in the AFL. He played a mixture of forward and midfield in 2018, but still managed to kick 36 goals and tally more than 21 touches each week. It is not just the number, but the nature of his deeds that set him apart. There are split-second deft gives to teammates and wonderful link-up clearances with Paddy Ryder. Port need another big year from the 30-year-old if they are to get anywhere near the top eight.",
            pic:'gray'
        },
        {
            name:"Dayne Beams",
            team: "Collingwood",
            bio:"As big a gain as Lachie Neale is to Brisbane, Beams is an even bigger loss and it will be interesting to see if the Lions can improve from underneath enough to offset that loss. He is a massive gain for Collingwood. Finished second in Brisbane’s club champion award last year after he averaged 29 disposals, including 11 per game in contests, and kicking 18 goals. Very strong in the contest and highly skilled when he gets the ball on the outside. His skill set was recognised by the umpires, who gave him 18 votes in the Brownlow.",
            pic:'beams'
        },
        {
            name:"Shaun Higgins",
            team:"North Melbourne",
            bio:"Has been a good player for a long time, but had a career-best season to win trth Melbourne’s best and fairest. He averaged 27 disposals, 10 contested possessions, six inside 50s and five clearances per game, kicking 14 goals and polling 15 Brownlow Medal votes. If Ben Cunnington is a key on the inside, Robbie Tarrant the plank to their defence and Ben Brown a focal point in attack, then Higgins gives them the run and silk that links it all up.",
            pic:'higgins'
        }
    ]

    let pics = document.getElementsByClassName('pic');

    for (let i = 0; i < pics.length; i++) {

        document.getElementsByClassName('picText')[i].innerHTML=(i+1);
        pics[i].src="images/"+players[i].pic+"blur.jpg";

         //Adds relevant player info to playerDisplay panel
        pics[i].addEventListener('click', function(){
            document.getElementById("rank").innerHTML = (i+1)+". ";
            document.getElementById("name").innerHTML = players[i].name;
            document.getElementById("team").innerHTML = players[i].team;
            document.getElementById("bio").innerHTML = players[i].bio;
            document.getElementById('playerPic').src="images/"+players[i].pic+".jpg";

            //Ensures playeDisplay panel slides in at top of viewheight in smartphone mode
            if(window.matchMedia("(max-width: 479px)")){
                let headline = document.getElementById("headline");
                let headlineOffset = headline.offsetHeight;
                console.log(window.pageYOffset);
                console.log(headline.offsetHeight);
                headlineOffset += parseInt(window.getComputedStyle(headline).getPropertyValue('margin-bottom'));
                if(window.pageYOffset>headlineOffset){
                    document.getElementById("playerDisplay").style.top=pageYOffset-headlineOffset;
                } else {
                    document.getElementById("playerDisplay").style.top=0;
                }
            } 
            
            document.getElementById("playerDisplay").style.left=0;
            
            //Reveals clicked-on player's picture and remove's number once playerDisplay panel slides into view
            setTimeout(function(){
                    document.getElementsByClassName('pic')[i].src = "images/"+players[i].pic+".jpg";
                    document.getElementsByClassName('picText')[i].innerHTML="";
                }, 1500
            );            
        })

        if(window.matchMedia("(min-width: 1000px)").matches) {
            pics[i].addEventListener("mouseover", function(){
            this.nextElementSibling.style.fontSize="150%";
            });

            pics[i].addEventListener("mouseout", function(){
                this.nextElementSibling.style.fontSize="100%";
            });
        }
    }

    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
        if(window.matchMedia("(min-width: 1000px)").matches) {
            document.getElementById("playerDisplay").style.left=-1450;
        } else {
            document.getElementById("playerDisplay").style.left=-820;
        }
    });    
}