let currentScene=0;
let currentChat = 0;
let die=0;


//the game values
let energy = 5;
let knowledge = 5;
let sanity = 5;


let currentContent1 ="Umm...";
let currentContent2 ="";


//check if the game is over
let stillPlaying = true;

//check if it's time to play the catching flower game
let playFlower = false;

//check if it's time to shout
let playShout = false;

//check if it's time to make a choice
let makingChoice = false;

//check if it's time to throw the dice
let readyToGo = false;

//check if it's someone speaking
let showBody = true;
let whoSpeaks = "Bai";

//canvas size
var cnv;


//catching flower
var coins;
var player;
var score = 0;
var spr;
var anim;
var anim2;
let startFlower=0;
let flowerCatched=false;


//shout
let song, analyzer;

//open world

let encounterVolcano =0;
let encounterGrassland = 0;


let worldName = false;

//the text content
textStuff =[
    [
        {
            "line1": "Where ... am I?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "This morning, when you open your eyes, you find",
            "line2": "yourself somewhere unfamiliar.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is blowing so hard that you can't even ",
            "line2": "stand up.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind can't send me here... Can it?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Strangely, you don't panic at all.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Although you don't know what is going on, one thing",
            "line2": "is sure: you need to go home.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Which direction should I go?",
            "line2": "Ah! Morning stars!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "According to the morning stars, you are now",
            "line2": "somewhere far west from your home.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Then I need to go that way... Here we go! ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I'm tired... How long have I walked on this land?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You carefully take steps, avoiding the hot lavas and ",
            "line2": "ground seams.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Suddenly, a clap of thunder ring in the distance.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It greatly startles you as you nearly fall down.",
            "line2": " ",
            "someonespeaking": false
        },
        {
            "line1": "A few seconds later, the lightning shows up in the ",
            "line2": "sky.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "What the heck... The thunder comes first?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Is this the real world? Or am I in a dream? I shall not",
            "line2": "be dead right?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "... I miss a good breakfast.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is still nothing familiar in sight. You begin to ",
            "line2": "feel scared and tired gradually.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Anyway, I can't stay here. Keep moving, Bai!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Sanity decreased, energy decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Well... I have to say this place looks pretty cool.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is no trace of living things around, not even ",
            "line2": "a thing besides rocks or lavas.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Is there anyone here? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No one replys.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I should have thought that. Such an unknown place...",
            "line2": "How did I get here anyway?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Keep walking, you notice some rocks are floating",
            "line2": "right above your head.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "The wind is not weakening, but the floating rocks ",
            "line2": "stay stable in the air.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's weird... I have never read about anywhere ",
            "line2": "like here before.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After I get home, I am definitely going to record this ",
            "line2": "place on my travel notes!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I'm tired... How long have I walked on this land?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You carefully take steps, avoiding the hot lavas and ",
            "line2": "ground seams.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Suddenly, a clap of thunder ring in the distance.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It greatly startles you as you nearly fall down.",
            "line2": " ",
            "someonespeaking": false
        },
        {
            "line1": "A few seconds later, the lightning shows up in the ",
            "line2": "sky.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "What the heck... The thunder comes first?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Is this the real world? Or am I in a dream? I shall not",
            "line2": "be dead right?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "... I miss a good breakfast.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There is still nothing familiar in sight. You begin to ",
            "line2": "feel scared and tired gradually.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Anyway, I can't stay here. Keep moving, Bai!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Sanity decreased, energy decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Ah~ Ah~ ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "After some time, a faint voice appears. It sounds like",
            "line2": "singing and calling out to you.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "As you keep walking, the sound becomes clearer",
            "line2": "and you now recognizes it's a lady's voice.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "That's creepy! Where does this sound come from?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Well, I can't get out of here anyway. Let me try if I",
            "line2": "can get some help from this person.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Hi! Can you hear me? Who are you? Do you know ",
            "line2": "how can I leave here? I want to go home...",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "The voice seems to be shocked and pauses. You",
            "line2": "know that's a sign that she heard your words.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Can you help me? I don't know why but I was here",
            "line2": "this morning when I woke up.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You don't belong here... I know the way to send you",
            "line2": "back to where you're from.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "The voice replys in a while. She sounds like a nice",
            "line2": "guy, and you try to believe her.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "But before that, I hope you can come here and do",
            "line2": "me a favor.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "But where are you? I can't see you!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Close your eyes and think about my voice, and the",
            "line2": "wind will lead you here.",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "That's a weird instruction. You follow what she said",
            "line2": "and close your eyes.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "All of a sudden, you are lifted by a gust of wind.",
            "line2": "It's so strong that you can't even open your eyes.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Sanity decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Your head spins dizzily as soon as you land. You are",
            "line2": "now at a new place nothing like before.",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Finally! I am out of that wasteland.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After climbing over several mountains, green color",
            "line2": "appears on the ground.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Just in a few minutes, some white dots also appear",
            "line2": "in sight and gradually become bigger.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Ah! Sheep!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "A flock of sheep are grazing here and there on the",
            "line2": "hillside.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Although you have no idea where they come from, ",
            "line2": "seeing living animals does make you feel better.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Wow. I didn't expect this. ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You come close to one sheep and carefully touch ",
            "line2": "its hair. It's real.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I wonder... if those sheep are herded by someone.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You look around, and there is still no one in sight.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Maybe I can wait here for the sheepherd to get some",
            "line2": "help... Should I stay?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You decide to stay with those sheep. After all, they",
            "line2": "are cute enough for you to look at.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "As expected, a middle-aged man show up in a while.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hello! I am Bai. I come from the Pine Village. May I",
            "line2": "ask what place is this?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "The sheep man looks pretty surprised at first, but in",
            "line2": "a few seconds, a friendly smile appears on his face.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "I haven't seen a new face in a long time! I am Lee.",
            "line2": "This is the land of forgotten.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "Land of forgotten? I have never heard this name.",
            "line2": "Do you know how can I get home?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You must come from the east world! If you want to",
            "line2": "go home, you need to get across a river in between.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "But before reaching the river, you need to make your",
            "line2": "way through a forest in that direction.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "Um... Unluckily I don't know much about that area...",
            "line2": "I haven't been there recently.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "I live on this grassland with my sheep. ",
            "line2": "They are cute, aren't they?",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "Yes they surely are. Thank you for your information!",
            "line2": "By the way, do you have something to... eat?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After walking for a long time, you do feel hungry. But",
            "line2": "asking for food still makes you shy.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Haha! Look at me. I should treat my guest better!",
            "line2": "I have some cheese with me today. Here you are!",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "Thank you! May I do something for you?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You don't need to repay me! I am happy to meet you",
            "line2": "today.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "I wish we could talk more, but I need to get my sheep",
            "line2": "back before dark.",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "Good luck with your journey! ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Lee"
        },
        {
            "line1": "After saying goodbye, Lee and his sheep leave this",
            "line2": "hillside soon.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Ha... What a nice guy. And these cheese taste so",
            "line2": "good. Let's go!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Energy increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Finally! I am out of that wasteland.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After climbing over several mountains, green color",
            "line2": "appears on the ground.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Keep walking, you hear the sound of singing from",
            "line2": "the distance.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It seems like a group of people are singing chrous",
            "line2": "behind this hill.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "There are some people here! I can ask them for ",
            "line2": "help!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "The sound inspires you a lot.",
            "line2": "You quickly climb up for a better sight.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "You see a large white tent several hunderds meters",
            "line2": "away. It's moving on the grassland.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "People wearing long suits are singing and dancing",
            "line2": "around it in a circle, and the lyrics become clear.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Once upon a time, there's a beautiful land~",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "A Girl"
        },
        {
            "line1": "Humans and fairies are the ones live there~",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "A Boy"
        },
        {
            "line1": "When the war came, the darkness clouded the sky~",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "A Lady"
        },
        {
            "line1": "And the Saint Lan lead us to a new world~",
            "someonespeaking": true,
            "whospeaking": "A Girl"
        },
        {
            "line1": "That's the origin of the forgotten land~",
            "someonespeaking": true,
            "whospeaking": "A Man"
        },
        {
            "line1": "Ah~ The saint Lan lead us to a new world~",
            "line2": "That's the origin of the forgotten land~",
            "someonespeaking": true,
            "whospeaking": "Together"
        },
        {
            "line1": "You can't wait to run towards them. But unexpectedly,",
            "line2": "you are bounced back by a force when going down.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "What the... ? ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "There seems to be an invisible air wall in front of you.",
            "line2": "You tried more times but still can't get through.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! Can you hear me? How can I get through this",
            "line2": "air wall?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "It seems like they can't hear you. ",
            "line2": "You have no choice but to see them move away.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Damn...This place is so weird! Is that what they were",
            "line2": "singing about?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "I need to find a way out.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You turn around and set off again.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Sanity decreased, Wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "Finally! I am out of that wasteland.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "After climbing over several mountains, green color",
            "line2": "appears on the ground.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Suddenly, a voice appears on your left.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hey! You! The new comer! Come here!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "Who is speaking?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You search around, but can't see anyone in that",
            "line2": "direction.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Yes! You! Come closer! Help me out of this!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "With curiosity, you move closer to the voice. ",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "After getting closer, you see a black bird in a cage.",
            "line2": "You then realize the shouting sound comes from it.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "A bird? You can speak?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Don't be silly. I have a name! My name is Gu!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "Sorry. How come you are trapped in this cage?",
            "line2": "Do you know how I can go home from this place?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "I was searching for food the other day when I got ",
            "line2": "caught by a greedy hunter.",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "This is the land of Greed. People here keep robbing",
            "line2": "and hurting other species.",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "Um... You seem to be from the east world...",
            "line2": "Let's make a deal.",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "You open this cage and let me out,",
            "line2": "I can lead you out of this land.",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "After all, we both want to go home.",
            "line2": "What do you think?",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "Well... Let me see...",
            "line2": "Should I trust him?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Ok. I believe you. Please carry out your promise",
            "line2": "then.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You open the cage. However, Gu doesn't stay but",
            "line2": "scratch you and then fly away instead.",
            "someonespeaking": false,
            "whospeaking": "Gu"
        },
        {
            "line1": "Haha! Stuipid guy! I am a great actor but I don't have ",
            "line2": "time to waste on you. Bye bye!",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "Gu soon disappears. In the end, you don't get help.",
            "line2": "What's worse, your wound hurts.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "......",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Energy decreased, sanity decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "No, I'm not gonna believe you. You are a lier.",
            "line2": "This place is not the land of Greed.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "And who knows? Maybe you are being punished for ",
            "line2": "the bad things you did.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Humph! Then there's nothing to say.",
            "line2": "Good luck with your endless journey.",
            "someonespeaking": true,
            "whospeaking": "Gu"
        },
        {
            "line1": "Same to you. Good luck with your endless cage life.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You turn around and set off again, ignoring the loud",
            "line2": "cursing sound behind.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Wit increased, sanity increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Throw the dice to move)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "As you continue walking, more trees show up.",
            "line2": "Later you realize you have entered a forest.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Plants you have never seen before grow around ",
            "line2": "shallow pools.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Light spots shine in the air. When you try to catch",
            "line2": "them, they quickly fly away.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Wow, such a nice place... like a wonderland! This ",
            "line2": "forest will definitely go into my journal.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "But how can I find my way out? It’s like a huge maze.",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "You get tired after circling in this forest and sit down",
            "line2": "for rest until a voice appears behind you.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Hello?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "???"
        },
        {
            "line1": "You turn around and find a lady floating in the air.",
            "line2": "She is tiny, only about half size of a human.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "She has six pink wings on her back, and they look",
            "line2": "like sakura petals.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Uh... Who are you?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Hi, don’t panic, I am Miranda, a flower fairy. ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": " I can lead you out of this place... but I have a ",
            "line2": "request…",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": " I have 7 naughty kids. They are now trapped by",
            "line2": "5 ghosts. ",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "Flower fairies' wings would get paralyzed near ghosts.",
            "line2": "So... could you please help me save them out?",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "You can feel the anxiety in her voice. Out of sympathy,",
            "line2": "you decide to help her.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Sure, I will try my best.",
            "line2": "But what can I do?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "I will lead you to the place where those ghosts rest.",
            "line2": "Please take my kids back with this basket.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "Be careful and do not disturb the ghosts!",
            "line2": "The Saint Lan will bless you.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "GAME: CATCHING FLOWER",
            "line2": "(move mouse to “catch” flowers and avoid ghosts)",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Game is on!",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "You succcessfully took Miranda's children back.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Thank you! I don't know what to say to thank you",
            "line2": "enough.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "I am happy to help. ",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Now it's time for me to fulfill my promise.",
            "line2": "Close your eyes and the wind will lead you out.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "A wind comes and surrounds you gently.",
            "line2": "Miranda's voice gradually fades into whisper.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "You need to get across the Bond River... ",
            "line2": "It's dangerous, so please take care...",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "(Wit increased, sanity increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "When you open your eyes again, long-lost brigtness",
            "line2": "fully filled your sight.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "You didn't finish the task, but got yourself hurt instead.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "My bad... I shouldn't let you do this alone... I'm a ",
            "line2": "terrible mother.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "Please don't say that. I am not strong enough to ",
            "line2": "help you.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "No, you are my guest. I don't know what to do to",
            "line2": "make up for you...",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "Uh! I will still fulfill my promise and send you out.",
            "line2": "That's the only thing I can do for you now.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "......",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Please close your eyes. And take care in the future",
            "line2": "journey.",
            "someonespeaking": true,
            "whospeaking": "Miranda"
        },
        {
            "line1": "A wind comes and surrounds you gently.",
            "line2": "Miranda's voice gradually fades into whisper.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Energy decreased, sanity decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "When you open your eyes again, long-lost brigtness",
            "line2": "fully filled your sight.",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "As you continue walking, more trees show up.",
            "line2": "Later you realize you have entered a forest.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "This forest is like a maze. You can't find a way out",
            "line2": "in any case.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "In the end, it seems that you have gone a full circle",
            "line2": "and back to where you entered the forest.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line2": " "
        },
        {
            "line2": " ",
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "As you continue walking, more trees show up.",
            "line2": "Later you realize you have entered a forest.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "This forest is like a maze. You can't find a way out",
            "line2": "in any case.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "In the end, it seems that you have gone a full circle",
            "line2": "and back to where you entered the forest.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line2": " "
        },
        {
            "line2": " ",
            "whospeaking": " "
        }
    ],
    [
        {
            "line1": "A wide river lies in front of you. I sparkles under ",
            "line2": "sunshine like a bond of jewelry.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Miranda did not cheat you. You look up to the sky ",
            "line2": "and feel your breast full of hope.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Ho! Finally there are no giant trees over me.",
            "line2": "I miss the feeling of bathed in sunlight.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Everything here looks perfect, but to your surprise,",
            "line2": "there is no bridge over it.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "No bridge?? How can I get across it then... I am a ",
            "line2": "bad swimmer.",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "Actually, the suface of the river looks calm.",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It seems that anyone can swim across that river with",
            "line2": "some knowledge about swimming. ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Should I try to swim across it by myself?",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "To the contrary of its calm surface, the river is turbulent",
            "line2": "under the cover. ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Unknown strange powers keep pulling you down, and",
            "line2": "it took you great effort to swim back to the bank.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "..... Oh my god! I almost died! How could this river",
            "line2": "actually dangerous like that?",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "I need to get some help...",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "(Energy decreased, sanity decreased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "As you continue walking along the bank, your sharp",
            "line2": "eyes spot a black dot on the river.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Thank God! That must be a boat! I am saved!",
            "line2": " ",
            "someonespeaking": true,
            "whospeaking": " Bai"
        },
        {
            "line1": "I have to make some noise and let that buddy hear ",
            "line2": "me!",
            "someonespeaking": true,
            "whospeaking": "Bai"
        },
        {
            "line1": "GAME: SHOUT! SHOUT! SHOUT!",
            "line2": "(Shout as loud as you can to fill the bar.)",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Game is on!",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "It seems that your shout works. ",
            "line2": "The boat stops for a while and then approaches.",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "(Energy decreased, wit increased)",
            "line2": " ",
            "someonespeaking": false,
            "whospeaking": " "
        },
        {
            "line1": "Now you see clearly, it's a small canoe.",
            "line2": "On the canoe stands a girl in light yellow dress.",
            "someonespeaking": false,
            "whospeaking": " "
        }
    ]
]
// set the canvas at the center of the page
function centerCanvas(){
    let x = (windowWidth - width)/2;
    let y = (windowHeight - height)/2;
    cnv.position(x,y);
}

function preload(){
    forest = loadSound("resource/sound/forest.mp3");
    river = loadSound("resource/sound/river.mp3");
    village = loadSound("resource/sound/village.mp3");
    grassland = loadSound("resource/sound/grassland.mp3");
    volcano = loadSound("resource/sound/volcano.mp3");
    failure = loadSound("resource/sound/gameover.mp3");


    forestbg = loadImage("resource/pic/forestbg.png");
    villagebg = loadImage("resource/pic/villagebg.png");
    riverbg = loadImage("resource/pic/riverbg.png");
    volcanobg = loadImage("resource/pic/volcanobg.png");
    grasslandbg = loadImage("resource/pic/grasslandbg.png");

    coordinate = loadImage("resource/pic/coordinate.png");

    headIcon = loadImage("resource/pic/head.png");
    bodyIcon = loadImage("resource/pic/body.png");

    chatFont = loadFont('resource/fonts/ComicNeue-Regular.ttf');
    nameFont = loadFont('resource/fonts/ComicNeue-Bold.ttf');

    //choices
    yesAnswer = loadImage("resource/pic/right.png");
    noAnswer = loadImage("resource/pic/wrong.png");

//catching flower
    myHand = loadImage("resource/pic/hand.png")
    myCanvas = loadImage("resource/pic/gamecanvas.png")
    anim = loadAnimation("resource/assets/asterisk_normal0001.png",
    "resource/assets/asterisk_normal0002.png",
    "resource/assets/asterisk_normal0003.png");
    anim2 = loadAnimation("resource/assets/ghost_standing0001.png",
    "resource/assets/ghost_standing0002.png","resource/assets/ghost_standing0003.png")
}



function setup(){
    cnv = createCanvas(1200,600);
    centerCanvas();

    noStroke();


    userStartAudio();
    volcano.loop();

    //shout
    song=new p5.AudioIn();
    song.start();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);

    //catching flower
    coins = new Group();
    coins2 = new Group();
    for (var i = 0; i < 7; i++) {
      var c = createSprite(random(250, 950),random(170, 330),10, 10);
      //c.shapeColor = color(255, 255, 0);
      c.addAnimation("default",anim);
      coins.add(c);
    }
    for (var i = 0; i < 4; i++) {
      var d = createSprite(random(250, 950),random(170, 350),10, 10);
      //c.shapeColor = color(255, 255, 0);
      d.addAnimation("default",anim2);
      coins2.add(d);
    }
    //user's block
    player = createSprite(600, 600, 10, 10);
    player.addImage("default",myHand);

}

function draw(){
    if (stillPlaying == true){
        

        //background picture
        background(myBg());

        //chatbox
        chatBox();
        rect(200,400,800,180,10);

        //the name & image of the character
        speakerName();

        //the text content
        chatContent();

        image(headIcon,20,20,80,80);

        threeEnergy();
        step();
        home();

        //coordinate of the character
        myCoordinate();

        fill(250,250,250);
        rect(1050,450,100,100);

        dice();

      

        

        //catching flower
        if (playFlower == true){
            gameCanvas();
            catchingFlower();
            
        }

        //make choice
        if (makingChoice == true){
            image(yesAnswer,yesAnswerX(),yesAnswerY(),yesAnswerSize(),yesAnswerSize());
            image(noAnswer,noAnswerX(),noAnswerY(),noAnswerSize(),noAnswerSize());
        }

        

    }else{
        //game over
        background(28,28,28);

        textSize(72);
        textAlign(CENTER, CENTER);
        fill("red");
        text("GAME OVER",width/2, height/2);

    }


}


//draw the game value bars
function threeEnergy(){
    

    fill("white");
    textSize(15);
    text("Energy", 110, 34);
    text("Wit", 110, 64);
    text("Sanity", 110, 94);



    fill("pink");
    rect(165,24,energy * 15,15);
    fill("blue");
    rect(165,54,knowledge * 15,15);
    fill("red");
    rect(165,84,sanity * 15,15);
}

function step(){
    i=1;
    while(i<=17){
    noStroke();
    fill(106,166,164);
    quad(280+i*45,90,320+i*45,90,345+i*45,50,305+i*45,50);
    i=i+1;
    }
}

function home(){

    fill("pink");
    rect(1120,30,70,70);
}


//coordinate of the character
function myCoordinate(){


    yourpos=330+currentScene*45;
   image(coordinate,yourpos-20,myCoordinateY(),100,100);
}

function myCoordinateY(){

    return -10 + floor(frameCount/9)%3 *5;
}

function dice(){
    fill("white");
    rect(1280,700,70,70);
    if(die==1){
        fill("black");
        textSize(50);
        text("1", 1300, 760);
    }
    else if(die==2){
        fill("black");
        textSize(50);
        text("2", 1300, 760);
    }
    else if(die==3){
        fill("black");
        textSize(50);
        text("3", 1300, 760);
    }else{
        fill("black");
        textSize(46);
        text("Die", 1280, 760);
    }

}



//mousePressed inteaction
function mousePressed() {

    //For the update of the chatbox
    if (mouseX >= 200 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 580){
        if (!readyToGo && !playFlower  && !makingChoice && !playShout){
            let nowStuff = textStuff[currentScene][currentChat];
                currentChat ++;
                showBody = nowStuff.someonespeaking;
                whoSpeaks = nowStuff.whospeaking;
                currentContent1 = nowStuff.line1;
                currentContent2 = nowStuff.line2;
            if (currentScene == 0){
                
                if(currentChat == 10){
                    readyToGo = true;
                }

            }else if (currentScene == 1 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }
            }else if (currentScene == 2 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }else if(currentChat == 23){
                    sanity = sanity - 1;
                    energy = energy - 1;
                    encounterVolcano ++;
                    readyToGo = true;
                }
            }else if (currentScene == 3 ){
                if (currentChat == 11){
                    
                    knowledge ++;
                    encounterVolcano ++;
                    readyToGo = true;
                    
                }else if(currentChat == 23){
                    sanity = sanity - 1;
                    energy = energy - 1;
                    encounterVolcano ++;
                    readyToGo = true;
                }else if(currentChat == 40){
                    sanity = sanity - 1;
                    
                    currentScene = 7;
                    currentChat = 0;

                    volcano.stop();
                    forest.loop();
                }
            }else if(currentScene == 4){

                if (currentChat == 11){
                    makingChoice = true;
                }else if(currentChat == 32){
                    energy = energy + 1;
                    encounterGrassland ++;
                    readyToGo = true;
                    worldName = true;
                }
            }else if(currentScene == 5){
                if (currentChat == 24){
                    
                    knowledge ++;
                    sanity = sanity -1;
                    encounterGrassland ++;
                    readyToGo = true;
                    worldName = true;
                    
                }
                
            }else if(currentScene == 6){
                if (currentChat == 18){
                    
                    if (worldName == true){
                        makingChoice = true;
                    }
                    
                }else if(currentChat == 25){
                    energy =energy -1;
                    sanity = sanity -1;
                    encounterGrassland ++;
                    readyToGo = true;
                }else if(currentChat == 32){
                    knowledge ++;
                    sanity ++;
                    readyToGo = true;
                    encounterGrassland ++;
                }
                
            }else if(currentScene == 7){
                if(currentChat == 20){
                    playFlower = true;
                }else if(currentChat == 28){
                    sanity = sanity + 1;
                    knowledge ++;
                    
                    currentScene = 10;
                    currentChat = 0;

                    forest.stop();
                    river.loop();
                }else if(currentChat == 37){
                    sanity = sanity - 2;
                    energy = energy -1;
                }else if(currentChat == 38){
                    currentScene = 10;
                    currentChat = 0;

                    forest.stop();
                    river.loop();
                }
                
            }else if(currentScene == 8){
                if (currentChat == 3){
                    
                    currentScene = 7;
                    currentChat = 1;
                    
                }
            }else if(currentScene == 9){
                if (currentChat == 3){
                    
                    currentScene = 7;
                    currentChat = 1;
                    
                }
            }else if(currentScene == 10){
                if(currentChat == 8){
                    makingChoice = true;
                }else if(currentChat == 13){

                    energy = energy -1;
                    sanity = sanity -1;
                }else if(currentChat == 18){

                    playShout =true;
                }else if (currentChat == 21){
                    energy = energy -1;
                    knowledge ++;

                    currentChat =0;
                    currentScene = 12;
                }
            }
            

        }
    }


    //for the dice
    if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 450 && mouseY <= 550){
        if (readyToGo == true){
            readyToGo = false;
            currentChat = 0;

            var randomValue = random();
            if (currentScene<=17){
                    if(randomValue < 0.3333){
                    die=1;
                    currentScene=currentScene+1;
                }
                    else if(randomValue < 0.6666 && randomValue>=0.3333){
                    die=2;
                    currentScene=currentScene+2;
                }
                    else{
                    die=3;
                    currentScene=currentScene+3;
                }
                //currentScene ++;
            }


            if (currentScene == 2 || currentScene == 3){
                if (encounterVolcano == 1){
                    currentChat = 11;
                }else if (encounterVolcano == 2){
                    currentChat = 23;
                }
            }else if (currentScene == 4 || currentScene == 5 || currentScene == 6){
                if (volcano.isPlaying() == true){
                    volcano.stop();
                    grassland.loop();
                }

                if (encounterGrassland >= 1){
                    currentChat = 2;
                }
            }else if (currentScene == 7 || currentScene == 8 || currentScene == 9){
                if (grassland.isPlaying() == true){
                    grassland.stop();
                    forest.loop();
                }       
            }else if (currentScene == 10 || currentScene == 11 || currentScene == 12){
                if (forest.isPlaying() == true){
                    forest.stop();
                    river.loop();
                }  

            }
            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
            
            

        }
    }



    //for the choice
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){

        if (makingChoice == true){
        

            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
    
            makingChoice = false;
        }
        
    }
    
    
    if(mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        if (makingChoice == true){
            if (currentScene == 4){
                currentChat = 31;
                readyToGo = true;
                encounterGrassland ++;
            }else if(currentScene == 6){
                currentChat = 25;
            }else if(currentScene == 10){
                currentChat = 13;
            }

            let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
    
            makingChoice = false;
        }
        
    }
    


  }






//background music
function myBgm(){
    return river;
}

//background picture
function myBg(){
    if (volcano.isPlaying()){
        return volcanobg;
    }else if(grassland.isPlaying()){
        return grasslandbg;
    }else if(river.isPlaying()){
        return riverbg;
    }else if(forest.isPlaying()){
        return forestbg;
    }else if(village.isPlaying()){
        return villagebg;
    }

}

//reset the position of the canvas
function windowResized(){
    centerCanvas();
}

//color of the chatbox
function chatBox(){
    if (volcano.isPlaying()){
        fill(50,30,25,150);
    }else if(grassland.isPlaying()){
        fill(67,67,67,130);
    }else if(river.isPlaying()){
        fill(67,67,67,130);
    }else if(forest.isPlaying()){
        fill(28,40,28,150);
    }else if(village.isPlaying()){
        fill(50,28,28,150);
    }
}

//the speaker's name & body image
function speakerName(){
    if (showBody == true){
        fill(200,200,200);
        textFont(nameFont);
        textSize(30);
        text(whoSpeaks,300,440);

        if (whoSpeaks == "Bai"){

            image(bodyIcon,20,300,280,280);
        }
        
    }



}

//the current showing chat content
function chatContent(){
    fill(200,200,200);
    textFont(chatFont);
    textSize(25);
    text(currentContent1,350,480);
    text(currentContent2,350,520);
}



//catching flower
function catchingFlower(){
    player.velocity.x = (mouseX-player.position.x)*0.1;
    player.velocity.y = (mouseY-player.position.y)*0.1;
    player.overlap(coins, getCoin);
    player.overlap(coins2,gameLose);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    
    if (coins.length > 0) {
        if(playFlower){
            currentContent2 = "Your score:" + score;
        }else{
            currentContent2 = " "; 
        }
        
    }
    else {
        playFlower = false;
        currentChat = 20;
        let nowStuff = textStuff[currentScene][currentChat];
            showBody = nowStuff.someonespeaking;
            currentChat ++;
            whoSpeaks = nowStuff.whospeaking;
            currentContent1 = nowStuff.line1;
            currentContent2 = nowStuff.line2;
       
    }
}

function getCoin(player, coin) {
    coin.remove();
    score += 1;
  }

function gameLose(){
    playFlower = false;
    currentChat = 28;
    let nowStuff = textStuff[currentScene][currentChat];
     showBody = nowStuff.someonespeaking;
    currentChat ++;
    whoSpeaks = nowStuff.whospeaking;
     currentContent1 = nowStuff.line1;
    currentContent2 = nowStuff.line2;


}


//gameover
  function gameOver(){
    
    volcano.stop();
    grassland.stop();
    forest.stop();
    river.stop();
    village.stop();

    failure.loop();
    currentScene =30;
    stillPlaying = false;
    
  }


  //canvas for the game
function gameCanvas(){
    image(myCanvas,100,100,1000,300);
}

function shout(){
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);
  // Draw an ellipse with size based on volume
  a=5 + rms * 10000;
  fill("white");
  rect(200,200,800,100);

  
  if (a<800){
 
  fill("blue")
  rect(200, 200, a,100);
  }else if (a>=800){
    fill("red")
    rect(200, 200, 800,100);
    noloop();
  }
}



//position of the choice buttons
function yesAnswerX(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 440;
    }else{
        return 450;
    }
}

function yesAnswerY(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 290;
    }else{
        return 300;
    }
}

function yesAnswerSize(){
    if (mouseX>= 450 && mouseX <= 530 && mouseY >= 300 && mouseY <= 380){
        return 100;
    }else{
        return 80;
    }
}

function noAnswerX(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 640;
    }else{
        return 650;
    }
}

function noAnswerY(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 290;
    }else{
        return 300;
    }
}

function noAnswerSize(){
    if (mouseX>= 650 && mouseX <= 730 && mouseY >= 300 && mouseY <= 380){
        return 100;
    }else{
        return 80;
    }
}


