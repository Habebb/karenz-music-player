// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "The Visitor",
        artist: "sienna spiro",
        album: "÷",
        albumArtUrl: "https://linkstorage.linkfire.com/medialinks/images/56a03cb4-e43b-4ccd-8e53-9cc4e09cedf3/artwork-440x440.jpg",
        audioSrc: "audio/The Visitor.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/36OpC3NK7kQzcOo8qiCHaA?si=4b9a4eabe5d2403f",
        videoBgSrc: "videos/2.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 19.86, text: "We lay on towers, on rented time" },
            { time: 25.02, text: "I'm yours for hours, you're always mine" },
            { time: 32.132, text: "All things expire, I know you won't stay" },
            { time: 40.06, text: "But I seem to inspire you to say" },
            { time: 46.94, text: "Say that you love me, say I'm all you need" },
            { time: 55.14, text: "In the back of my mind, I know I'm temporary" },
            { time: 62.35, text: "You're holding me for the night" },
            { time: 66.076, text: "For some pleasure if that's all we are" },
            { time: 70.754, text: "Know I'll always be a visitor, mm, in your arms" },
            { time: 77.6, text: "♪" },
            { time: 78.335, text: "It's in my nature to be cynical" },
            { time: 85.692, text: "I want to be remembered, so I get hysterical" },
            { time: 99.295, text: "I wanna be that one thing, some' special to you" },
            { time: 108.48, text: "Say you won't forget me, but you always do" },
            { time: 113.824, text: "Then say that you love me, say I'm all you need" },
            { time: 122.97, text: "In the back of my mind, I know I'm temporary" },
            { time: 130.927, text: "You're holding me for the night" },
            { time: 135.905, text: "For some pleasure if that's all we are" },
            { time: 141.138, text: "Know I'll always be a visitor, mm" },
            { time: 144.712, text: "In your arms, in your arms, oh-oh" },
            { time: 147.64, text: "Mm, no, no, no, no" },
            { time: 149.46, text: "In your arms" },
            { time: 150.38, text: "Say that you love me, say I'm all you need" },
            { time: 164.76, text: "In the back of my mind, I know I'm temporary" },
            { time: 190.1, text: "You're holding me for the night" },
            { time: 194.9, text: "For some pleasure if that's all we are" },
            { time: 201.9, text: "Know I'll always be a visitor, no, no, no, no, no" },
            { time: 206.58, text: "Know I'll always be a visitor in your arms" },
        ]
    },    
    {
        id: 3,
        title: "die on this hill",
        artist: "sienna spiro",
        album: "-",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--8PeLg812rTSmUaOcBzq-Y1QjpN_2XI9ew&s",
        audioSrc: "audio/die on this hill.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/2gYTC8DsplN3RNdpdBcCOQ?si=607febc9556a4e9d",
        videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 16.26, text: "Got me to stay, said that you need me" },
            { time: 20.715, text: "Starved 'cause his words don't have a meaning" },
            { time: 26.74, text: "No, they don't, at least not to me" },
            { time: 32.48, text: "There'll be a day I'll be more creative" },
            { time: 38.06, text: "A poetic way to say I'm not leaving" },
            { time: 44.0, text: "To the world, not to your face, mm" },
            { time: 51.06, text: "I'll take my pride, stand here for you" },
            { time: 58.863, text: "No, I'm not blind, just seeing it through" },
            { time: 64.945, text: "You take my life just for the thrill" },
            { time: 70.43, text: "I'll take tonight, and die on this hill" },
            { time: 76.632, text: "I always will" },
            { time: 79.093, text: "I know that I look stubborn, impatient" },
            { time: 90.27, text: "But you wrote the book, I just took a page out" },
            { time: 96.71, text: "To be loved, to be loved and nothing more" },
            { time: 102.62, text: "And you kept your word, do you want a medal?" },
            { time: 107.72, text: "The way that someone leaves this world is all just levels" },
            { time: 113.373, text: "To me now, oh, to me now" },
            { time: 115.804, text: "I'll take my pride, stand here for you" },
            { time: 128.32, text: "Know I'm not blind, just seeing it through" },
            { time: 134.36, text: "You take my life just for the thrill" },
            { time: 138.98, text: "I'll take tonight, and die on this hill" },
            { time: 143.84, text: "I always will" },
            { time: 146.78, text: "I'll be here the whole night" },
            { time: 150.96, text: "I'll be here 'cause I can" },
            { time: 158.24, text: "Yeah, I know you don't care" },
            { time: 160.82, text: "I know nothing could matter" },
            { time: 164.0, text: "God, I wish something mattered to you" },
            { time: 168.34, text: "I'll take my pride, stand here for you" },
            { time: 172.0, text: "Know I'm not blind, just seeing it through" },
            { time: 181.88, text: "You take my life just for the thrill" },
            { time: 187.2, text: "Well, I'll take tonight and die on this hill" },
            { time: 193.16, text: "I always, always" },
            { time: 194.62, text: "I always will" },
        ]
    },
    {
        id: 4,
        title: "The One That Got Away   ",
        artist: "Katy Perry",
        album: "-",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SvEQehUuB6EhYL9SCGN3S-kcdVOVEHjNhg&s",
        audioSrc: "audio/The One That Got Away.mp3",
        videoBgSrc: "videos/1.mp4",
        lyrics: [
            { time: 3.47, text: "Summer after high school when we first met" },
            { time: 7.15, text: "We'd make out in your Mustang to Radiohead" },
            { time: 10.60, text: "And on my 18th birthday we got matching tattoos" },
            { time: 17.63, text: "Used to steal your parents' liquor and climb to the roof" },
            { time: 21.54, text: "Talk about our future like we had a clue" },
            { time: 25.06, text: "Never planned that one day I'd be losing you" },
            { time: 30.79, text: "In another life" },
            { time: 34.18, text: "I would be your girl" },
            { time: 37.61, text: "We'd keep all our promises" },
            { time: 41.00, text: "Be us against the world" },
            { time: 44.96, text: "In another life" },
            { time: 48.64, text: "I would make you stay" },
            { time: 51.79, text: "So I don't have to say you were" },
            { time: 55.29, text: "The one that got away" },
            { time: 59.03, text: "The one that got away" },
            { time: 62.50, text: "I was June and you were my Johnny Cash" },
            { time: 66.16, text: "Never one without the other, we made a pact" },
            { time: 69.99, text: "Sometimes when I miss you I put those records on (whoa)" },
            { time: 77.07, text: "Someone said you had your tattoo removed" },
            { time: 80.79, text: "Saw you downtown singing the blues" },
            { time: 84.24, text: "It's time to face the music, I'm no longer your muse" },
            { time: 89.40, text: "But in another life" },
            { time: 93.31, text: "I would be your girl" },
            { time: 96.79, text: "We'd keep all our promises" },
            { time: 99.91, text: "Be us against the world" },
            { time: 104.12, text: "In another life" },
            { time: 107.40, text: "I would make you stay" },
            { time: 111.03, text: "So I don't have to say you were" },
            { time: 114.35, text: "The one that got away" },
            { time: 118.20, text: "The one that got away" },
            { time: 121.62, text: "The one" },
            { time: 125.22, text: "The one" },
            { time: 128.85, text: "The one" },
            { time: 132.42, text: "The one that got away" },
            { time: 135.97, text: "All this money can't buy me a time machine, no" },
            { time: 143.30, text: "Can't replace you with a million rings, no" },
            { time: 150.50, text: "I should've told you what you meant to me (whoa)" },
            { time: 157.55, text: "'Cause now I pay the price" },
            { time: 161.38, text: "In another life" },
            { time: 164.89, text: "I would be your girl" },
            { time: 168.55, text: "We'd keep all our promises" },
            { time: 171.74, text: "Be us against the world" },
            { time: 175.74, text: "In another life" },
            { time: 179.24, text: "I would make you stay" },
            { time: 182.54, text: "So I don't have to say you were" },
            { time: 186.08, text: "The one that got away" },
            { time: 189.94, text: "The one that got away" },
            { time: 193.31, text: "The one (the one)" },
            { time: 196.97, text: "The one (the one)" },
            { time: 200.42, text: "The one (the one)" },
            { time: 204.12, text: "In another life" },
            { time: 207.84, text: "I would make you stay" },
            { time: 211.16, text: "So I don't have to say you were" },
            { time: 214.67, text: "The one that got away" },
            { time: 218.49, text: "The one that got away" }
        ]
    },
    {
        id: 5,
        title: "BABY I'M BACK",
        artist: "The Kid LAROI",
        album: "THE FIRST TIME (DELUXE VERSION)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02a690d2e65a50a742f19939ea",
        audioSrc: "audio/baby im back.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/5kDgJffgJ0lYHTSiaXFWNw?si=c0d61417868a4b93",
        videoBgSrc: "videos/6.mp4",
        lyrics: [
            { time: 0.30, text: "Baby, come back any kind of fool could see" },
            { time: 6.17, text: "There was something in everything about you" },
            { time: 12.05, text: "Baby, come back (baby, come), you can blame it all on me" },
            { time: 18.22, text: "I was wrong, and I just can't live without you" },
            { time: 24.00, text: "Baby, come back" },
            { time: 25.25, text: "It's been a crazy last year, I'm tryna process still" },
            { time: 28.71, text: "I don't even know how I should feel" },
            { time: 31.37, text: "I got a couple big houses and some whips, maybe three" },
            { time: 34.11, text: "And I got family members that got bigger egos than me" },
            { time: 37.06, text: "And I got fans around the world whenever I'm overseas" },
            { time: 40.08, text: "And I got friends who just pretend and say they love everything" },
            { time: 42.89, text: "And yes, I fell in love again, I thought that shit was impossible" },
            { time: 46.17, text: "And I promise it's too real for me to care what they think" },
            { time: 48.90, text: "I promise I don't give a fuck because I know who I am" },
            { time: 51.93, text: "Hatin' on me undercover, I just won't understand" },
            { time: 54.81, text: "Say we're brothers, call me family, bitch, ya act like a fan" },
            { time: 57.81, text: "2 a.m. in Atlanta, screaming, \"Baby, I'm back\" (oh, yeah)" },
            { time: 62.48, text: "Play me like a fool, I see" },
            { time: 65.41, text: "But it's been so long since I thought about you" },
            { time: 69.96, text: "I swear, okay, baby, I'm back (baby, I'm)" },
            { time: 74.25, text: "I guess you weren't the one for me" },
            { time: 77.15, text: "But it's been so long since I thought about you (about you)" },
            { time: 82.35, text: "I swear, okay, baby, I'm back" },
            { time: 84.28, text: "I told my baby, \"Let them talk,\" that's the caption" },
            { time: 86.92, text: "I don't even really like being online, that shit taxing" },
            { time: 89.92, text: "Started off as an attraction, now it's turnin' to attachment" },
            { time: 92.93, text: "Overseas, we relaxin', now you think about the past tense (no)" },
            { time: 95.98, text: "'Cause everybody wanna say shit, all of a sudden, y'all believed in me" },
            { time: 98.83, text: "All of a sudden, you want a favor now" },
            { time: 100.30, text: "All of a sudden, you want beef with me" },
            { time: 101.82, text: "All of a sudden, y'all always knew, but I remember you ain't see it in me" },
            { time: 104.73, text: "And, yes, I know I'm blessed, but sometimes, I wish I could go back" },
            { time: 109.88, text: "To the way it used to be" },
            { time: 113.07, text: "Just so I can feel what I been missin' (oh, baby, come back)" },
            { time: 121.85, text: "You can have it all, you see" },
            { time: 124.79, text: "But there's just something that's not the same about you, oh, oh" },
            { time: 131.14, text: "Baby, come back (baby, come back)" },
            { time: 133.68, text: "Any kind of fool could see (yeah, oh, I see)" },
            { time: 136.56, text: "There was something in everything about you (about, about you)" },
            { time: 142.45, text: "Baby, come back (yeah)" },
            { time: 145.23, text: "You can blame it all on me (still want the blame for me)" },
            { time: 148.65, text: "I was wrong and I just can't live without you" },
            { time: 154.34, text: "Baby, come back" },
        ]
    },
    {
        id: 6,
        title: "K.",
        artist: "Cigarettes After Sex",
        album: "Cigarettes After Sex",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02dfed999f959177dfc4f33cdc",
        audioSrc: "audio/k.mp3",
        videoBgSrc: "videos/20.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/2xGjfbXZnI8uQDhukoQURQ",
        lyrics: [
            { time: 42.76, text: "I remember when I first noticed that you liked me back" },
            { time: 53.00, text: "We were sitting down in a restaurant waiting for the check" },
            { time: 63.28, text: "We had made love earlier that day with no strings attached" },
            { time: 73.76, text: "But I could tell that something had changed, how you looked at me then" },
            { time: 83.58, text: "Kristen, come right back" },
            { time: 89.34, text: "I've been waiting for you" },
            { time: 93.58, text: "To slip back in bed" },
            { time: 99.22, text: "When you light the candle" },
            { time: 125.05, text: "And on the Lower East Side, you're dancing with me now" },
            { time: 135.56, text: "And I'm taking pictures of you with flowers on the wall" },
            { time: 145.51, text: "Think I like you best when you're dressed in black from head to toe" },
            { time: 156.05, text: "Think I like you best when you're just with me and no one else" },
            { time: 165.25, text: "Kristen, come right back" },
            { time: 171.03, text: "I've been waiting for you" },
            { time: 175.38, text: "To slip back in bed" },
            { time: 181.24, text: "When you light the candle" },
            { time: 206.09, text: "And I'm kissing you, lying in my room" },
            { time: 217.02, text: "Holding you until you fall asleep" },
            { time: 226.84, text: "And it's just as good as I knew it would be" },
            { time: 237.58, text: "Stay with me, I don't want you to leave" },
            { time: 267.06, text: "Kristen, come right back" },
            { time: 272.74, text: "I've been waiting for you" },
            { time: 277.23, text: "To slip back in bed" },
            { time: 282.98, text: "When you light the candle" }
        ]
    },
    {
        id: 6,
        title: "The Night Is Still Young",
        artist: "Nicki Minaj",
        album: "The Pinkprint",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e026fc944ef0967cf846c7539d6",
        audioSrc: "audio/The Night Is Still Young.mp3",
        videoBgSrc: "videos/9.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/3idU3rXoFCEFhAAbPGbwht",
        lyrics: [
            { time: 13.52, text: "Yo" },
            { time: 14.87, text: "Ayo, tonight is the night that I'ma get twisted" },
            { time: 16.72, text: "Myx Moscato and Vodka, I'ma mix it" },
            { time: 18.73, text: "Roll that spaceship, we 'bout to get lifted" },
            { time: 20.64, text: "Live in the present, that gift is for the gifted" },
            { time: 22.53, text: "This what you came, this what you came for" },
            { time: 24.39, text: "You get what ya buy, this what you paid for" },
            { time: 26.19, text: "So make sure the stars is what you aim for" },
            { time: 28.09, text: "Make mistakes though" },
            { time: 29.06, text: "I never worry, life is a journey" },
            { time: 32.87, text: "I just wanna enjoy the ride" },
            { time: 36.53, text: "What is the hurry? It's pretty early" },
            { time: 40.25, text: "It's okay, we'll take our time" },
            { time: 44.54, text: "The night is still young" },
            { time: 48.32, text: "The night is still young" },
            { time: 52.07, text: "The night is still young" },
            { time: 54.88, text: "And so are we" },
            { time: 59.50, text: "The night is still young (how dare we sit quietly?)" },
            { time: 63.34, text: "The night is still young (and watch the world pass us by?)" },
            { time: 67.31, text: "The night is still young (how dare we sit quietly?)" },
            { time: 71.27, text: "So are we" },
            { time: 74.56, text: "Ayo, drinks on you or the drinks is on me?" },
            { time: 76.77, text: "We ain't going nowhere like tanks is on E" },
            { time: 78.67, text: "We still gettin' money, what bank it's gon' be?" },
            { time: 80.54, text: "If he sexy, he planking on me" },
            { time: 82.30, text: "So where them big boys with all of that? (Ayy)" },
            { time: 84.13, text: "Tell the bartender \"Say my order back\" (ayy)" },
            { time: 86.00, text: "It's bottle service, he ordered that (ayy)" },
            { time: 87.82, text: "Might let him take it home and slaughter that" },
            { time: 89.63, text: "He got friends for all of my friends" },
            { time: 91.54, text: "They ain't leaving 'til we say when" },
            { time: 93.44, text: "And we gon' hangover the next day" },
            { time: 95.21, text: "But we will remember this day" },
            { time: 97.16, text: "So drop the pop and get low" },
            { time: 99.08, text: "Or we can drop the top and just cruise" },
            { time: 101.06, text: "We fresh to death, down to the shoes" },
            { time: 102.79, text: "My only motto in life is \"don't lose,\" kyuh" },
            { time: 104.97, text: "I never worry, life is a journey" },
            { time: 107.85, text: "I just wanna enjoy the ride" },
            { time: 111.58, text: "What is the hurry? It's pretty early" },
            { time: 115.34, text: "It's okay, we'll take our time" },
            { time: 119.52, text: "The night is still young" },
            { time: 123.32, text: "The night is still young" },
            { time: 127.08, text: "The night is still young" },
            { time: 129.87, text: "And so are we" },
            { time: 134.54, text: "The night is still young (how dare we sit quietly?)" },
            { time: 138.26, text: "The night is still young (and watch the world pass us by?)" },
            { time: 142.05, text: "The night is still young (how dare we sit quietly?)" },
            { time: 146.24, text: "So are we" },
            { time: 150.90, text: "We're just getting started, yeah-yeah" },
            { time: 154.67, text: "We're just getting started, yeah-yeah" },
            { time: 158.31, text: "Can't you see the night's still early?" },
            { time: 161.97, text: "And we gon' get it wild and crazy" },
            { time: 165.93, text: "We're just getting started, yeah-yeah" },
            { time: 169.78, text: "We're just getting started, yeah-yeah" },
            { time: 173.41, text: "Can't you see the night's still early?" },
            { time: 176.94, text: "And we gon' get it wild and crazy" },
            { time: 179.42, text: "The night is still young" },
            { time: 183.31, text: "The night is still young" },
            { time: 187.06, text: "The night is still young" },
            { time: 189.86, text: "And so are we" },
            { time: 194.55, text: "The night is still young (how dare we sit quietly?)" },
            { time: 198.21, text: "The night is still young (and watch the world pass us by?)" },
            { time: 202.37, text: "The night is still young (how dare we sit quietly?)" },
            { time: 206.22, text: "So are we" },
            { time: 209.59, text: "How dare we sit quietly" },
            { time: 212.63, text: "And watch the world pass us by?" },
            { time: 217.02, text: "How dare we sit quietly" },
            { time: 220.38, text: "And watch the world pass us by?" }
        ]
    },
    {
        id: 7,
        title: "nuts",
        artist: "Lil Peep, rainy bear",
        album: "LIVE FOREVER",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02254820046b555c7751e67f76",
        audioSrc: "audio/nuts.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/4k3xDpAdBuM17mNNHhOZkK?si=527bbbce30be4b57",
        videoBgSrc: "videos/3.mp4",
        lyrics: [
            { time: 8.08, text: "I can see it in your eyes, that you wanna get out" },
            { time: 11.64, text: "I can see it in your eyes, that you need it right now" },
            { time: 15.56, text: "That you need it right now" },
            { time: 17.82, text: "That you wanna get out" },
            { time: 19.62, text: "That you need it right now" },
            { time: 21.74, text: "That you wanna get out" },
            { time: 23.46, text: "Yeah, I just wanna hear the sound" },
            { time: 25.467, text: "Drive our Camaros out of town" },
            { time: 27.28, text: "Baby, we could leave right now, whoa" },
            { time: 30.86, text: "Yeah, I just wanna feel alive" },
            { time: 33.78, text: "Baby, take your time" },
            { time: 35.22, text: "Smoking on this loud, whoa" },
            { time: 38.0, text: "Girl, you know you make my cold heart warm with a touch" },
            { time: 42.7, text: "One kiss, then we fuckin', I just can't get enough" },
            { time: 46.4, text: "Put it on me, that's the best part, baby, the trust" },
            { time: 50.32, text: "Trust me, I got nothin' for you, other than love" },
            { time: 54.16, text: "I remember eatin' pussy on the back of the bus" },
            { time: 58.12, text: "I remember gettin' nookie 'til the sun came up" },
            { time: 61.96, text: "All the places that you took me, no one came with us" },
            { time: 65.876, text: "Same hos overlook me, now they on my nuts" },
        ]
    },
    {
        id: 8,
        title: "Merry Christmas, Please Don't Call",
        artist: "Bleachers",
        album: "Merry Christmas, Please Don't Call",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e027fbed05d7226834da74c652b",
        audioSrc: "audio/merry chrismast.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/0UOG0zUn7t8m8QcxfzR7AH?si=bfe0dd02e2294a37",
        videoBgSrc: "videos/5.mp4",
        lyrics: [
            { time: 4.91, text: "To the tempo of your uptight" },
            { time: 6.89, text: "Is the flicker of a streetlight" },
            { time: 9.19, text: "You know this moment, don't you?" },
            { time: 13.21, text: "And time is strangely calm now" },
            { time: 16.01, text: "'Cause everybody's gone" },
            { time: 18.61, text: "It's just you and your anger" },
            { time: 21.41, text: "Oh, golden boy, don't act like you were kind" },
            { time: 26.99, text: "You were mine, but you were awful every time" },
            { time: 30.19, text: "So don't tell them what you told me" },
            { time: 32.67, text: "Don't hold me like you know me" },
            { time: 35.37, text: "I would rather burn forever" },
            { time: 37.489, text: "But you should know that I died slow" },
            { time: 43.49, text: "Running through the halls of your haunted home" },
            { time: 47.25, text: "And the toughest part is that we both know" },
            { time: 51.51, text: "What happened to you" },
            { time: 54.11, text: "Why you're out on your own" },
            { time: 56.13, text: "Merry Christmas, please don't call" },
            { time: 60.0, text: "♪" },
            { time: 60.115, text: "You really left me on the line, kid" },
            { time: 67.019, text: "Holding all your baggage" },
            { time: 69.707, text: "You know I'm not your father" },
            { time: 72.953, text: "Who says, \"Welcome to your uptight\"" },
            { time: 75.902, text: "While it flickers like a streetlight" },
            { time: 78.57, text: "He flickers through your damage" },
            { time: 81.67, text: "Oh, golden boy, you shined a light on your home" },
            { time: 86.73, text: "And at your best, you were magic, we were sold" },
            { time: 90.13, text: "But don't tell 'em what you told me" },
            { time: 92.61, text: "Don't even tell 'em that you know me" },
            { time: 95.49, text: "I would rather burn forever" },
            { time: 98.266, text: "But you should know that I died slow" },
            { time: 102.683, text: "Running through the halls of your haunted home" },
            { time: 107.619, text: "And the toughest part is that we both know" },
            { time: 111.763, text: "What happened to you" },
            { time: 114.08, text: "Why you're out on your own" },
            { time: 117.41, text: "Merry Christmas, please don't call" },
            { time: 120.221, text: "Just one ticket out of your heavy gaze" },
            { time: 123.665, text: "I want one ticket off of your carousel" },
            { time: 131.77, text: "I want one ticket out of your heavy gaze" },
            { time: 136.102, text: "I want one ticket off of your carousel" },
            { time: 140.536, text: "But you should know that I die slow" },
            { time: 144.434, text: "Running through the halls of your haunted home" },
            { time: 150.374, text: "And the toughest part is that we both know" },
            { time: 154.43, text: "What happened to you" },
            { time: 156.624, text: "Why you're out on your own" },
            { time: 159.786, text: "Merry Christmas, please don't call" },
            { time: 163.744, text: "Merry Christmas, I'm not yours at all" },
            { time: 167.9, text: "Merry Christmas, please don't call me" },
            { time: 172.149, text: "Please don't call me" },
            { time: 173.739, text: "Please don't call me" },
            { time: 176.45, text: "Please don't call me" },
        ]
    },
    {
        id: 9,
        title: "Secret Door",
        artist: "Artic Monkeys",
        album: "secret door",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8s6N17x5CFjnv0WyZ0MBatk4RBkgrKLQIQ&s",
        audioSrc: "audio/secret door.mp3",
        spotifyUrl: "https://open.spotify.com/intl-id/track/4dtP86vkhzwNXCFpCtizce?si=01602d1df95a466d",
        videoBgSrc: "videos/8.mp4",
        lyrics: [
            { time: 7.41, text: "Fools on parade cavort and carry on for waiting eyes" },
            { time: 14.25, text: "That you would rather be beside than in front of" },
            { time: 17.73, text: "But she's never been the kind to be hollowed by the stares" },
            { time: 22.49, text: "♪" },
            { time: 22.511, text: "She swam out of tonight's phantasm" },
            { time: 45.22, text: "Grabbed my hand and made it very clear" },
            { time: 50.64, text: "There's absolutely nothing for us here" },
            { time: 53.991, text: "It's a magnolia celebration to be attended on a Wednesday night" },
            { time: 60.72, text: "It's better than to get a reputation as a miserable little tyke" },
            { time: 64.82, text: "At least, that's the conclusion, she came to in this overture" },
            { time: 68.9, text: "♪" },
            { time: 69.146, text: "And the secret door swings behind us" },
            { time: 79.05, text: "She's saying nothing" },
            { time: 81.379, text: "She's just giggling along" },
            { time: 86.767, text: "Her arms were folded the most indignant" },
            { time: 94.78, text: "Not looking like she was soon to leave" },
            { time: 100.38, text: "I had to squint in order to believe" },
            { time: 104.684, text: "And then, like a butler pushing on a bookshelf, I'm unveiling the unexpected" },
            { time: 111.248, text: "I, who was earlier reluctant, was suddenly embarrassed and corrected" },
            { time: 115.411, text: "How could such a creature survive in such a habitat?" },
            { time: 119.0, text: "♪" },
            { time: 119.3, text: "And the secret door swings behind us" },
            { time: 122.449, text: "She's saying nothing" },
            { time: 130.812, text: "She's just giggling along" },
            { time: 135.338, text: "Even if they were to find us" },
            { time: 139.525, text: "I wouldn't notice" },
            { time: 142.66, text: "I'm completely occupied" },
            { time: 147.176, text: "As all the fools on parade cavort and carry on for waiting eyes" },
            { time: 158.849, text: "Ones you would rather be beside than in front of" },
            { time: 163.035, text: "But she's never been the kind to be hollowed by the stares" },
            { time: 167.85, text: "Fools on parade frolic and fuck about to make her gaze" },
            { time: 174.01, text: "Turn to a scribble on a page by a picture that holds her absence" },
            { time: 179.65, text: "But you're daft to think she'd care" },
            { time: 182.29, text: "Fools on parade" },
            { time: 184.8, text: "♪" },
            { time: 185.25, text: "Fools on parade" },
            { time: 186.31, text: "Fools on parade conduct a sing-along" },
        ]
    },
    {
        id: 10,
        title: "Apocalypse",
        artist: "Cigarettes After Sex",
        album: "Cas",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273aebdabfacc9871fa49862896",
        audioSrc: "audio/apocalypse.mp3",
        videoBgSrc: "videos/7.mp4",
        lyrics: [
            { time: 34.53, text: "You leapt from crumbling bridges, watching cityscapes turn to dust" },
            { time: 44.85, text: "Filming helicopters crashing in the ocean from way above" },
            { time: 55.10, text: "Got the music in you, baby, tell me why" },
            { time: 59.91, text: "Got the music in you, baby, tell me why" },
            { time: 65.85, text: "You've been locked in here forever, and you just can't say goodbye" },
            { time: 75.90, text: "Kisses on the foreheads of the lovers wrapped in your arms" },
            { time: 85.94, text: "You've been hiding them in hollowed-out pianos left in the dark" },
            { time: 96.22, text: "Got the music in you, baby, tell me why" },
            { time: 101.67, text: "Got the music in you, baby, tell me why" },
            { time: 106.71, text: "You've been locked in here forever, and you just can't say goodbye" },
            { time: 118.43, text: "Your lips, my lips" },
            { time: 121.22, text: "Apocalypse" },
            { time: 126.63, text: "Your lips, my lips" },
            { time: 132.61, text: "Apocalypse" },
            { time: 136.84, text: "Go and sneak us through the rivers" },
            { time: 138.98, text: "Flood is rising up on your knees" },
            { time: 143.81, text: "Oh, please" },
            { time: 147.88, text: "Come out and haunt me, I know you want me" },
            { time: 152.88, text: "Come out and haunt me" },
            { time: 157.25, text: "Sharing all your secrets with each other, since you were kids" },
            { time: 166.34, text: "Sleeping soundly with the locket that she gave you clutched in your fist" },
            { time: 177.09, text: "Got the music in you, baby, tell me why" },
            { time: 182.24, text: "Got the music in you, baby, tell me why" },
            { time: 187.21, text: "You've been locked in here forever, and you just can't say goodbye" },
            { time: 207.39, text: "You've been locked in here forever, and you just can't say goodbye" },
            { time: 237.35, text: "Oh, when you're all alone" },
            { time: 245.42, text: "I will reach for you" },
            { time: 250.22, text: "When you're feeling low" },
            { time: 255.44, text: "I will be there too" },
        ]
    },
    {
        id: 11,
        title: "back to friends",
        artist: "sombr",
        album: "back to friends",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e027fd4049ad3b037358cf809ef",
        audioSrc: "audio/back to friends.mp3",
        videoBgSrc: "videos/4.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/0FTmksd2dxiE5e3rWyJXs6",
        lyrics: [
            { time: 23.62, text: "Touch my body tender" },
            { time: 27.57, text: "'Cause the feeling makes me weak" },
            { time: 33.51, text: "Kicking off the covers" },
            { time: 38.05, text: "I see the ceiling, while you're looking down at me" },
            { time: 44.08, text: "How can we go back to being friends" },
            { time: 48.93, text: "When we just shared a bed?" },
            { time: 54.39, text: "How can you look at me and pretend" },
            { time: 59.35, text: "I'm someone you've never met?" },
            { time: 64.56, text: "It was last December" },
            { time: 68.81, text: "You were layin' on my chest" },
            { time: 74.98, text: "I still remember" },
            { time: 79.07, text: "I was scared to take a breath, didn't want you to move your head" },
            { time: 85.49, text: "How can we go back to being friends" },
            { time: 90.21, text: "When we just shared a bed? (Yeah)" },
            { time: 95.80, text: "How can you look at me and pretend" },
            { time: 100.42, text: "I'm someone you've never met?" },
            { time: 105.89, text: "The devil in your eyes" },
            { time: 112.66, text: "Won't deny the lies" },
            { time: 115.82, text: "You've sold, I'm holding on too tight" },
            { time: 122.63, text: "While you let go, this is casual" },
            { time: 137.05, text: "How can we go back to being friends" },
            { time: 142.00, text: "When we just shared a bed? (Yeah)" },
            { time: 147.41, text: "How can you look at me and pretend" },
            { time: 152.14, text: "I'm someone you've never met?" },
            { time: 157.61, text: "How can we go back to being friends" },
            { time: 162.54, text: "When we just shared a bed? (Yeah)" },
            { time: 168.02, text: "How can you look at me and pretend" },
            { time: 172.87, text: "I'm someone you've never met?" },
            { time: 180.21, text: "I'm someone you've never met" },
            { time: 186.03, text: "Oh yeah" }
        ]
    },
    {
        id: 12,
        title: "Brooklyn Baby",
        artist: "Lana Del Rey",
        album: "Ultraviolence (Deluxe)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f",
        audioSrc: "audio/Brooklyn Baby.mp3",
        videoBgSrc: "videos/19.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/1NZs6n6hl8UuMaX0UC0YTz",
        lyrics: [
            { time: 7.07, text: "Da-da-da-da-da-da-da" },
            { time: 9.18, text: "Pa-da-da-da-da-da-da" },
            { time: 11.40, text: "Da-da-da-da-da-da-da" },
            { time: 18.64, text: "They say I'm too young to love you" },
            { time: 23.00, text: "I don't know what I need" },
            { time: 27.57, text: "They think I don't understand" },
            { time: 31.06, text: "The freedom land of the '70s" },
            { time: 36.47, text: "I think I'm too cool to know ya" },
            { time: 40.67, text: "You say I'm like the ice, I freeze" },
            { time: 45.23, text: "I'm churning out novels like" },
            { time: 48.20, text: "Beat poetry on amphetamines" },
            { time: 55.93, text: "I say" },
            { time: 64.51, text: "I say" },
            { time: 70.02, text: "Well, my boyfriend's in a band" },
            { time: 74.23, text: "He plays guitar while I sing Lou Reed" },
            { time: 78.85, text: "I've got feathers in my hair" },
            { time: 83.34, text: "I get down to Beat poetry" },
            { time: 87.61, text: "And my jazz collection's rare" },
            { time: 92.06, text: "I can play most anything" },
            { time: 96.78, text: "I'm a Brooklyn baby" },
            { time: 100.96, text: "I'm a Brooklyn baby" },
            { time: 106.49, text: "Ta-da-da-da-da-da" },
            { time: 108.37, text: "Pa-da-da-da-da-ya-da" },
            { time: 110.55, text: "Ta-da-da-da-da-da-da" },
            { time: 115.68, text: "They say I'm too young to love you" },
            { time: 120.04, text: "They say I'm too dumb to sing" },
            { time: 124.32, text: "They judge me like a picture book" },
            { time: 127.42, text: "By the colors, like they forgot to read" },
            { time: 133.18, text: "I think we're like fire and water" },
            { time: 137.57, text: "I think we're like the wind and sea" },
            { time: 141.95, text: "You're burning up, I'm cooling down" },
            { time: 145.16, text: "You're up, I'm down, you're blind, I see" },
            { time: 152.55, text: "But I'm free, ooh" },
            { time: 161.25, text: "I'm free" },
            { time: 166.60, text: "Well, my boyfriend's in a band" },
            { time: 170.66, text: "He plays guitar while I sing Lou Reed" },
            { time: 175.31, text: "I've got feathers in my hair" },
            { time: 179.77, text: "I get down to Beat poetry" },
            { time: 184.13, text: "And my jazz collection's rare" },
            { time: 188.58, text: "I can play most anything" },
            { time: 193.01, text: "I'm a Brooklyn baby" },
            { time: 197.44, text: "I'm a Brooklyn baby" },
            { time: 203.02, text: "I'm talking 'bout my generation" },
            { time: 207.71, text: "Talking 'bout my newer nation" },
            { time: 212.26, text: "And if you don't like it, you can beat it" },
            { time: 217.76, text: "Beat it, baby" },
            { time: 220.65, text: "You never liked the way I said it" },
            { time: 224.91, text: "If you don't get it, then forget it" },
            { time: 229.17, text: "'Cause I don't have to fucking explain it" },
            { time: 236.72, text: "And my boyfriend's in a band" },
            { time: 240.89, text: "He plays guitar while I sing Lou Reed" },
            { time: 245.43, text: "I've got feathers in my hair" },
            { time: 249.72, text: "I get high on hydroponic weed" },
            { time: 254.37, text: "And my jazz collection's rare" },
            { time: 258.89, text: "I get down to Beat poetry" },
            { time: 263.21, text: "I'm a Brooklyn baby" },
            { time: 267.71, text: "I'm a Brooklyn baby" },
            { time: 272.12, text: "Pa-da-pa-pa, pa-de-da" },
            { time: 276.52, text: "Te-de-de, da-da-ah" },
            { time: 280.90, text: "Ooh, whoa, ah" },
            { time: 290.09, text: "Yeah, my boyfriend's pretty cool" },
            { time: 294.46, text: "But he's not as cool as me" },
            { time: 298.66, text: "'Cause I'm a Brooklyn baby" },
            { time: 303.34, text: "I'm a Brooklyn baby" },
            { time: 308.51, text: "Pa-da-da-da-da-da-da" },
            { time: 311.27, text: "Da-da-da-da, baby" },
            { time: 313.21, text: "Ah-ta-da-da-da-da" },
            { time: 315.62, text: "Da-da-da-da, baby" },
            { time: 317.64, text: "Pa-da-da-da-da-da-da" },
            { time: 319.84, text: "Pa-pa-da-pa-da, yeah" },
            { time: 322.31, text: "Yeah, yeah" }
        ]
    },
    {
        id: 13,
        title: "Hate Me",
        artist: "Ellie Goulding, Juice WRLD",
        album: "Brightest Blue",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02156d79bdb60fc5f7af75590b",
        audioSrc: "audio/Hate Me.mp3",
        videoBgSrc: "videos/21.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/15og0pCEcTFWEXOFKdcJlU",
        lyrics: [
            { time: 0.17, text: "Hate me, hate me, still tryna replace me" },
            { time: 3.38, text: "Chase me, chase me, tell me how you hate me" },
            { time: 6.20, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 9.84, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 12.80, text: "I bet you don't kiss her with your eyes closed" },
            { time: 16.38, text: "I bet you're still walkin' on a tightrope" },
            { time: 19.46, text: "Miss me so much, you've been goin' psycho" },
            { time: 22.27, text: "You ain't gotta say it, baby, I know (I know, I know)" },
            { time: 26.97, text: "It's a thin line between all this love and hate (okay)" },
            { time: 29.93, text: "And if you switch sides, you're gon' have to claim your place (okay)" },
            { time: 33.20, text: "So, baby, this time you're gon' have to seal your fate (okay)" },
            { time: 36.23, text: "Yeah, baby, this time you're gon' have to seal your fate" },
            { time: 39.21, text: "And tell me how you hate me, hate me, still tryna replace me" },
            { time: 43.32, text: "Chase me, chase me, tell me how you hate me" },
            { time: 46.43, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 49.84, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 53.04, text: "Hate me, hate me, still tryna replace me" },
            { time: 56.11, text: "Chase me, chase me, tell me how you hate me" },
            { time: 59.26, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 62.58, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 65.86, text: "Hate me, hate me, tell me how you hate me" },
            { time: 69.00, text: "Tell me how I'm trash and you could easily replace me" },
            { time: 72.08, text: "Tell me that I'm strung out, wasted on the daily" },
            { time: 75.35, text: "Prolly 'cause there's no one around me numbin' all my pain" },
            { time: 78.08, text: "Prolly 'cause there's no umbrella to shield me from all the rain" },
            { time: 81.34, text: "Probably because you're the one playin' the mind games" },
            { time: 84.52, text: "You hate me because I don't let you play no mind games" },
            { time: 87.72, text: "They give me migraines and damage my brain" },
            { time: 91.08, text: "Date me, break me, easily replace me" },
            { time: 94.57, text: "Hopefully you see it clear, hopefully it's HD" },
            { time: 97.74, text: "Bet you wonder why the last few months I've been spacey" },
            { time: 100.96, text: "In your head, I sing" },
            { time: 102.75, text: "And tell me how you hate me, hate me, still tryna replace me" },
            { time: 107.34, text: "Chase me, chase me, tell me how you hate me" },
            { time: 110.40, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 113.76, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 117.01, text: "Hate me, hate me, still tryna replace me" },
            { time: 120.17, text: "Chase me, chase me, tell me how you hate me" },
            { time: 123.33, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 126.58, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 129.61, text: "It's a thin line between all this love and hate (okay)" },
            { time: 132.64, text: "And if you switch sides, you're gon' have to claim your place (okay)" },
            { time: 135.63, text: "So, baby, this time you're gon' have to seal your fate (okay)" },
            { time: 138.81, text: "Yeah, baby, this time you're gon' have to seal your fate" },
            { time: 141.56, text: "And tell me how you hate me, hate me, still tryna replace me" },
            { time: 145.66, text: "Chase me, chase me, tell me how you hate me" },
            { time: 148.66, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 152.01, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 154.47, text: "Tell me how you hate me, hate me, still tryna replace me" },
            { time: 158.52, text: "Chase me, chase me, tell me how you hate me" },
            { time: 161.69, text: "Erase me, 'rase me, wish you never dated me" },
            { time: 164.83, text: "Lies, tell me lies, baby, tell me how you hate me" },
            { time: 168.12, text: "(Ooh, ooh)" },
            { time: 169.57, text: "Tell me how you hate me (ooh, ooh)" },
            { time: 171.29, text: "Lies, tell me lies, tell me how you hate me" },
            { time: 174.50, text: "(Ooh, ooh)" },
            { time: 176.21, text: "Tell me how you hate me" },
            { time: 177.82, text: "Lies, tell me lies, baby, tell me how you hate me" }
        ]
    },
    {
        id: 14,
        title: "Cinnamon Girl",
        artist: "Lana Del Rey",
        album: "Norman Fucking Rockwell!",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
        audioSrc: "audio/Cinnamon Girl.mp3",
        videoBgSrc: "videos/18.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/2mdEsXPu8ZmkHRRtAdC09e",
        lyrics: [
            { time: 2.34, text: "Cinnamon in my teeth" },
            { time: 9.41, text: "From your kiss, you're touchin' me" },
            { time: 16.56, text: "All the pills that you take" },
            { time: 22.58, text: "Violet, blue, green, red to keep me at arm's length don't work" },
            { time: 29.46, text: "You try to push me out" },
            { time: 32.39, text: "But I just find my way back in" },
            { time: 36.87, text: "Violet, blue, green, red to keep me out" },
            { time: 40.65, text: "I win" },
            { time: 41.78, text: "There's things I wanna say to you" },
            { time: 45.34, text: "But I'll just let you live" },
            { time: 48.32, text: "Like if you hold me without hurting me" },
            { time: 52.22, text: "You'll be the first who ever did" },
            { time: 55.48, text: "There's things I wanna talk about" },
            { time: 59.27, text: "But better not to give" },
            { time: 62.44, text: "But if you hold me without hurting me" },
            { time: 66.16, text: "You'll be the first who ever did" },
            { time: 69.76, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 73.54, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 76.90, text: "Hold me, love me, touch me, honey" },
            { time: 80.36, text: "Be the first who ever did" },
            { time: 83.61, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 87.87, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 90.83, text: "Hold me, love me, touch me, honey" },
            { time: 94.38, text: "Be the first who ever did" },
            { time: 100.21, text: "Kerosene in my hands" },
            { time: 106.74, text: "You make me mad, I'm fire again" },
            { time: 114.22, text: "All the pills that you take" },
            { time: 119.91, text: "Violet, blue, green, red to keep me at arm's length don't work" },
            { time: 125.86, text: "There's things I wanna say to you" },
            { time: 128.66, text: "But I'll just let you live" },
            { time: 131.65, text: "Like if you hold me without hurting me" },
            { time: 135.61, text: "You'll be the first who ever did" },
            { time: 138.77, text: "There's things I wanna talk about" },
            { time: 142.42, text: "But better not to give" },
            { time: 145.59, text: "But if you hold me without hurting me" },
            { time: 149.33, text: "You'll be the first who ever did" },
            { time: 153.02, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 156.98, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 160.39, text: "Hold me, love me, touch me, honey" },
            { time: 163.60, text: "Be the first who ever did" },
            { time: 166.91, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 170.82, text: "Ah, ah, ah, ah, ah, ah" },
            { time: 174.32, text: "Hold me, love me, touch me, honey" },
            { time: 177.70, text: "Be the first who ever did" },
            { time: 181.19, text: "There's things I wanna say to you" },
            { time: 184.36, text: "But I'll just let you live" },
            { time: 187.36, text: "Like if you hold me without hurting me" },
            { time: 191.24, text: "You'll be the first who ever did" },
            { time: 194.31, text: "There's things I wanna talk about" },
            { time: 198.67, text: "But better not to give" },
            { time: 201.61, text: "Like if you hold me without hurting me" },
            { time: 205.52, text: "You'll be the first who ever did" }
        ]
    },
    {
        id: 15,
        title: "Wonderwall",
        artist: "Oasis",
        album: "Time Flies...1994-2009",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02e00817d5e3bc5e8f83fd13cc",
        audioSrc: "audio/Wonderwall.mp3",
        videoBgSrc: "videos/12.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/41tTCXOzxSWAoVrfeIIh8x",
        lyrics: [
            { time: 19.24, text: "Today is gonna be the day that they're gonna throw it back to you" },
            { time: 29.69, text: "By now, you should've somehow realised what you gotta do" },
            { time: 34.94, text: "I don't believe that anybody feels the way I do about you now" },
            { time: 46.01, text: "Backbeat, the word is on the street that the fire in your heart is out" },
            { time: 51.79, text: "I'm sure you've heard it all before, but you never really had a doubt" },
            { time: 56.75, text: "I don't believe that anybody feels the way I do about you now" },
            { time: 67.52, text: "And all the roads we have to walk are winding" },
            { time: 73.02, text: "And all the lights that lead us there are blinding" },
            { time: 79.54, text: "There are many things that I would like to say to you" },
            { time: 83.78, text: "But I don't know how" },
            { time: 88.94, text: "Because maybe" },
            { time: 93.78, text: "You're gonna be the one that saves me" },
            { time: 99.24, text: "And after all" },
            { time: 104.64, text: "You're my wonderwall" },
            { time: 117.29, text: "Today was gonna be the day, but they'll never throw it back to you" },
            { time: 122.09, text: "By now, you should've somehow realised what you're not to do" },
            { time: 127.25, text: "I don't believe that anybody feels the way I do about you now" },
            { time: 139.14, text: "And all the roads that lead you there were winding" },
            { time: 146.41, text: "And all the lights that light the way are blinding" },
            { time: 149.13, text: "There are many things that I would like to say to you" },
            { time: 153.16, text: "But I don't know how" },
            { time: 159.85, text: "I said, \"Maybe" },
            { time: 164.25, text: "You're gonna be the one that saves me" },
            { time: 169.40, text: "And after all" },
            { time: 174.66, text: "You're my wonderwall\"" },
            { time: 182.80, text: "I said, \"Maybe (I said maybe)" },
            { time: 186.19, text: "You're gonna be the one that saves me" },
            { time: 191.66, text: "And after all" },
            { time: 196.68, text: "You're my wonderwall\"" },
            { time: 204.37, text: "I said, \"Maybe (I said maybe)" },
            { time: 208.32, text: "You're gonna be the one that saves me (that saves me)" },
            { time: 213.52, text: "You're gonna be the one that saves me (that saves me)" },
            { time: 219.27, text: "You're gonna be the one that saves me\" (that saves me)" }
        ]
    },
    {
        id: 16,
        title: "Don't Look Back in Anger - Remastered",
        artist: "Oasis",
        album: "(What's The Story) Morning Glory? [Remastered]",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e0285e5dcc05cc216a10f141480",
        audioSrc: "audio/Don't Look Back in Anger.mp3",
        videoBgSrc: "videos/16.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/0UvCh63URrLFcPkKt99hHd",
        lyrics: [
            { time: 11.90, text: "Slip inside the eye of your mind" },
            { time: 16.08, text: "Don't you know you might find a better place to play?" },
            { time: 23.46, text: "You said that you'd never been" },
            { time: 27.68, text: "But all the things that you've seen slowly fade away" },
            { time: 35.85, text: "So I start a revolution from my bed" },
            { time: 41.08, text: "'Cause you said the brains I had went to my head" },
            { time: 47.22, text: "Step outside, summertime's in bloom" },
            { time: 52.95, text: "Stand up beside the fireplace" },
            { time: 56.16, text: "Take that look from off your face" },
            { time: 58.81, text: "You ain't ever gonna burn my heart out" },
            { time: 70.86, text: "So, Sally can wait" },
            { time: 74.75, text: "She knows it's too late as we're walking on by" },
            { time: 82.33, text: "Her soul slides away" },
            { time: 87.68, text: "But don't look back in anger, I heard you say" },
            { time: 103.34, text: "Take me to the place where you go" },
            { time: 107.49, text: "Where nobody knows if it's night or day" },
            { time: 115.22, text: "Please don't put your life in the hands" },
            { time: 119.04, text: "Of a rock and roll band who'll throw it all away" },
            { time: 127.08, text: "I'm gonna start a revolution from my bed" },
            { time: 132.46, text: "'Cause you said the brains I had went to my head" },
            { time: 138.44, text: "Step outside, 'cause summertime's in bloom" },
            { time: 144.33, text: "Stand up beside the fireplace" },
            { time: 147.38, text: "Take that look from off your face" },
            { time: 150.05, text: "'Cause you ain't ever gonna burn my heart out" },
            { time: 161.95, text: "And so, Sally can wait" },
            { time: 166.27, text: "She knows it's too late as she's walking on by" },
            { time: 173.82, text: "My soul slides away" },
            { time: 178.91, text: "But don't look back in anger, I heard you say" },
            { time: 221.11, text: "So, Sally can wait" },
            { time: 225.24, text: "She knows it's too late as we're walking on by" },
            { time: 232.56, text: "Her soul slides away" },
            { time: 237.82, text: "But don't look back in anger, I heard you say" },
            { time: 244.72, text: "So, Sally can wait" },
            { time: 248.73, text: "She knows it's too late as she's walking on by" },
            { time: 256.02, text: "My soul slides away" },
            { time: 261.58, text: "But don't look back in anger" },
            { time: 264.72, text: "Don't look back in anger" },
            { time: 270.34, text: "I heard you say" },
            { time: 279.13, text: "At least not today" }
        ]
    },
    {
        id: 17,
        title: "Heaven",
        artist: "Bryan Adams",
        album: "Reckless (30th Anniversary / Deluxe Edition)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02cf1fee2a55e98e22bf358512",
        audioSrc: "audio/Heaven.mp3",
        videoBgSrc: "videos/23.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/7Ewz6bJ97vUqk5HdkvguFQ",
        lyrics: [
            { time: 16.17, text: "Oh, thinkin' about all our younger years" },
            { time: 21.75, text: "There was only you and me" },
            { time: 25.22, text: "We were young and wild and free" },
            { time: 29.70, text: "Now, nothing can take you away from me" },
            { time: 35.25, text: "We've been down that road before" },
            { time: 38.51, text: "But that's over now" },
            { time: 41.77, text: "You keep me comin' back for more" },
            { time: 45.71, text: "Baby, you're all that I want" },
            { time: 48.86, text: "When you're lyin' here in my arms" },
            { time: 52.58, text: "I'm findin' it hard to believe" },
            { time: 55.59, text: "We're in heaven" },
            { time: 59.47, text: "And love is all that I need" },
            { time: 62.40, text: "And I found it there in your heart" },
            { time: 66.33, text: "Isn't too hard to see" },
            { time: 69.11, text: "We're in heaven" },
            { time: 83.01, text: "Oh, once in your life you find someone" },
            { time: 88.48, text: "Who will turn your world around" },
            { time: 91.90, text: "Bring you up when you're feelin' down" },
            { time: 96.65, text: "Yeah, nothin' can change what you mean to me" },
            { time: 101.35, text: "Oh, there's lots that I could say" },
            { time: 105.25, text: "Just hold me now" },
            { time: 108.55, text: "'Cause our love will light the way" },
            { time: 112.58, text: "And, baby, you're all that I want" },
            { time: 115.52, text: "When you're lyin' here in my arms" },
            { time: 119.42, text: "I'm findin' it hard to believe" },
            { time: 122.43, text: "We're in heaven" },
            { time: 125.98, text: "Yeah, love is all that I need" },
            { time: 129.53, text: "And I found it there in your heart" },
            { time: 133.30, text: "It isn't too hard to see" },
            { time: 136.33, text: "We're in heaven, yeah" },
            { time: 144.94, text: "I've been waitin' for so long" },
            { time: 148.68, text: "For somethin' to arrive" },
            { time: 152.18, text: "For love to come alone" },
            { time: 158.66, text: "Now our dreams are comin' true" },
            { time: 162.19, text: "Through the good times and the bad" },
            { time: 166.23, text: "Yeah, I'll be standin' there by you, oh" },
            { time: 184.17, text: "And, baby, you're all that I want" },
            { time: 187.46, text: "When you're lyin' here in my arms" },
            { time: 191.05, text: "I'm findin' it hard to believe" },
            { time: 194.03, text: "We're in heaven" },
            { time: 197.85, text: "And love is all that I need" },
            { time: 201.04, text: "And I found it there in your heart" },
            { time: 204.90, text: "Isn't too hard to see" },
            { time: 207.76, text: "We're in heaven, heaven, whoa-oh-oh" },
            { time: 218.27, text: "You're all that I want" },
            { time: 220.11, text: "You're all that I need" }
        ]
    },
    {
        id: 18,
        title: "Last Night on Earth",
        artist: "Green Day",
        album: "21st Century Breakdown",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02c2ced39899b0d67cd5a724fa",
        audioSrc: "audio/Last Night on Earth.mp3",
        videoBgSrc: "videos/24.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/5TpPSTItCwtZ8Sltr3vdzm",
        lyrics: [
            { time: 16.46, text: "I text a postcard sent to you" },
            { time: 20.79, text: "Did it go through?" },
            { time: 24.72, text: "Sendin' all my love to you" },
            { time: 32.48, text: "You are the moonlight of my life" },
            { time: 37.09, text: "Every night" },
            { time: 40.96, text: "Givin' all my love to you" },
            { time: 48.43, text: "My beatin' heart belongs to you" },
            { time: 56.43, text: "I walked for miles 'til I found you" },
            { time: 64.54, text: "I'm here to honour you" },
            { time: 68.07, text: "If I lose everything in the fire" },
            { time: 73.25, text: "I'm sendin' all my love to you" },
            { time: 92.49, text: "With every breath that I am worth" },
            { time: 96.98, text: "Here on Earth" },
            { time: 100.53, text: "I'm sendin' all my love to you" },
            { time: 108.26, text: "So if you dare to second-guess" },
            { time: 112.90, text: "You can rest" },
            { time: 116.57, text: "Assured that all my love's for you" },
            { time: 124.48, text: "My beatin' heart belongs to you" },
            { time: 132.32, text: "I walked for miles 'til I found you" },
            { time: 140.47, text: "I'm here to honour you" },
            { time: 144.00, text: "If I lose everything in the fire" },
            { time: 149.25, text: "I'm sendin' all my love to you" },
            { time: 184.44, text: "My beatin' heart belongs to you" },
            { time: 192.35, text: "I walked for miles 'til I found you" },
            { time: 200.47, text: "I'm here to honour you" },
            { time: 204.07, text: "If I lose everything in the fire" },
            { time: 209.44, text: "Did I ever make it through?" }
        ]
    },
    {
        id: 19,
        title: "SUMMER",
        artist: "BROCKHAMPTON",
        album: "SATURATION II",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e027d15fb20303a589acc1ab98b",
        audioSrc: "audio/SUMMER.mp3",
        videoBgSrc: "videos/13.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/66dQdXAbtuPdSasezCQVZE",
        lyrics: [
            { time: 5.51, text: "In the heat of the summer, oh" },
            { time: 21.94, text: "Yeah, yeah, mmm-mmm-mmm" },
            { time: 26.30, text: "You know that you should be my boy" },
            { time: 33.14, text: "Oh, yes, you know" },
            { time: 35.83, text: "In the heat of the summer" },
            { time: 39.17, text: "You're so different from the rest" },
            { time: 44.91, text: "You know, you know, you know, oh-oh" },
            { time: 49.73, text: "You know that you should be my boy" },
            { time: 57.02, text: "Oh, yes, you do" },
            { time: 59.73, text: "In the heat of the summer" },
            { time: 63.01, text: "You're so different from the rest" },
            { time: 68.74, text: "You know, you know, you know" },
            { time: 97.68, text: "You know that you should be my boy" },
            { time: 105.00, text: "Ooh, yeah, yeah" },
            { time: 107.98, text: "In the heat of the summer" },
            { time: 111.08, text: "You're so different from the rest" },
            { time: 116.75, text: "You know, you know, you know, oh-oh" },
            { time: 121.64, text: "You know that you should be my boy" },
            { time: 129.39, text: "Oh, yes, you know" },
            { time: 131.94, text: "In the heat of the summer" },
            { time: 134.91, text: "You're so different from the rest" },
            { time: 141.09, text: "You know, you know, you know" }
        ]
    },
    {
        id: 20,
        title: "the feeling",
        artist: "Steve Lacy",
        album: "the feeling",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02c2051e257fca29adecca19ee",
        audioSrc: "audio/the feeling.mp3",
        videoBgSrc: "videos/17.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/3SoarlzPEiF7NgSeGsh44S",
        lyrics: [
            { time: 3.02, text: "Na-na-na-na" },
            { time: 14.57, text: "Da-da-da-da" },
            { time: 23.88, text: "Something's burning, I smell fire" },
            { time: 34.70, text: "The devil's working hard to keep me alone, mm" },
            { time: 45.84, text: "I know we're down to the wire" },
            { time: 52.60, text: "Oh, I can't be without you" },
            { time: 57.17, text: "I often wonder where your head is, so confused" },
            { time: 66.97, text: "The heart takes what it wants (the heart takes what it wants)" },
            { time: 69.57, text: "I'm not scared to bleed, you know our history (ooh)" },
            { time: 77.57, text: "After all, there's one thing I don't know" },
            { time: 85.83, text: "Am I your baby? Am I your baby?" },
            { time: 93.60, text: "(Am I your baby?)" },
            { time: 97.03, text: "Am I your baby? Am I your baby?" },
            { time: 103.30, text: "(Oh, oh)" },
            { time: 111.82, text: "Staring at your pictures, wishing I was with you" },
            { time: 114.43, text: "Drunker than a bitch, sure'd be nice to kiss you" },
            { time: 117.24, text: "I could let it go, but I'm not a quitter" },
            { time: 120.34, text: "I can't let you go, I'm in love with you (I can't let you go)" },
            { time: 122.91, text: "Sending all the signals, pay me some attention" },
            { time: 125.76, text: "Fuck it, I'ma call you, I'ma tell you I been hurting" },
            { time: 128.58, text: "Kept it to myself 'cause I ain't wanna be a burden" },
            { time: 131.26, text: "This ain't gonna heal, if we don't make a deal" },
            { time: 136.50, text: "Why the fuck you gotta test my patience? Mm" },
            { time: 142.37, text: "'Cause I could spend my whole life waiting" },
            { time: 147.66, text: "I'd rather not, so baby, let's get on" },
            { time: 153.38, text: "Oh, please come take me, please come take me" },
            { time: 156.34, text: "The heart takes what it wants (the heart takes what it wants)" },
            { time: 159.02, text: "I'm not scared to bleed, you know our history (oh)" },
            { time: 166.92, text: "After all, there's one thing I don't know" },
            { time: 175.18, text: "Am I your baby? Am I your baby? (Baby)" },
            { time: 181.57, text: "Baby, baby (ooh)" },
            { time: 186.44, text: "Am I your baby? Am I your baby? (Baby)" },
            { time: 192.66, text: "Baby, baby (ooh)" },
            { time: 200.95, text: "When your heart's on your sleeve, but it don't even matter (baby, baby)" },
            { time: 206.34, text: "When you're only a friend, don't it just make you sadder? (Baby, baby)" },
            { time: 211.30, text: "Uh, when you start writing songs just to stop thinking 'bout him (baby, baby)" },
            { time: 216.86, text: "Oh, then you start writing songs, and you make 'em about him (baby, baby)" },
            { time: 222.51, text: "Uh, when we fucked on your rug, had me floating like Aladdin (baby, baby)" },
            { time: 228.57, text: "When we tripped in the Airbnb, 2019 (baby, baby)" },
            { time: 234.03, text: "When it seems it was some kind of dream, but it happened (baby, baby)" },
            { time: 239.68, text: "That's the feeling tonight (baby, baby)" },
            { time: 242.41, text: "That's how I'm feeling tonight, oh (baby, baby)" },
            { time: 254.94, text: "(Feeling)" },
            { time: 260.72, text: "(Feeling)" }
        ]
    },
    {
        id: 21,
        title: "About You",
        artist: "The 1975",
        album: "Being Funny In A Foreign Language",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e0200702474f8e0e2b6155d48e3",
        audioSrc: "audio/About You.mp3",
        videoBgSrc: "videos/26.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/3hEfpBHxgieRLz4t3kLNEg",
        lyrics: [
            { time: 44.51, text: "I know a place" },
            { time: 53.93, text: "It's somewhere I go when I need to remember your face" },
            { time: 64.14, text: "We get married in our heads" },
            { time: 74.19, text: "Something to do while we try to recall how we met" },
            { time: 84.28, text: "Do you think I have forgotten?" },
            { time: 88.96, text: "Do you think I have forgotten?" },
            { time: 93.90, text: "Do you think I have forgotten about you?" },
            { time: 103.94, text: "You and I (don't let go), we're alive (don't let go)" },
            { time: 114.07, text: "With nothing to do, I could lay and just look in your eyes" },
            { time: 124.37, text: "Wait (don't let go), and pretend (don't let go)" },
            { time: 134.55, text: "Hold on, and hope that we'll find our way back in the end (in the end)" },
            { time: 144.23, text: "Do you think I have forgotten?" },
            { time: 148.75, text: "Do you think I have forgotten?" },
            { time: 153.75, text: "Do you think I have forgotten about you?" },
            { time: 163.70, text: "Do you think I have forgotten?" },
            { time: 168.66, text: "Do you think I have forgotten?" },
            { time: 173.57, text: "Do you think I have forgotten about you?" },
            { time: 184.42, text: "And there was something 'bout you that now I can't remember" },
            { time: 189.38, text: "It's the same damn thing that made my heart surrender" },
            { time: 194.26, text: "And I miss you on a train, I miss you in the morning" },
            { time: 199.21, text: "I never know what to think about" },
            { time: 203.73, text: "I think about you (don't let go)" },
            { time: 208.61, text: "About you (don't let go)" },
            { time: 213.88, text: "Do you think I have forgotten about you? (Don't let go)" },
            { time: 223.99, text: "About you" },
            { time: 228.70, text: "About you" },
            { time: 233.90, text: "Do you think I have forgotten about you? (Don't let go)" }
        ]
    },
    {
        id: 22,
        title: "Blank Space",
        artist: "Taylor Swift",
        album: "1989 (Deluxe)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e0252b2a3824413eefe9e33817a",
        audioSrc: "audio/Blank Space.mp3",
        videoBgSrc: "videos/22.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/1u8c2t2Cy7UBoG4ArRcF5g",
        lyrics: [
            { time: 5.53, text: "Nice to meet you, where you been?" },
            { time: 8.21, text: "I could show you incredible things" },
            { time: 10.77, text: "Magic, madness, heaven, sin" },
            { time: 13.22, text: "Saw you there, and I thought" },
            { time: 15.13, text: "\"Oh, my God, look at that face" },
            { time: 17.63, text: "You look like my next mistake" },
            { time: 20.09, text: "Love's a game, wanna play?\", ay" },
            { time: 25.75, text: "New money, suit and tie" },
            { time: 28.39, text: "I can read you like a magazine" },
            { time: 30.84, text: "Ain't it funny? Rumors fly" },
            { time: 33.29, text: "And I know you heard about me" },
            { time: 35.67, text: "So, hey, let's be friends" },
            { time: 37.68, text: "I'm dying to see how this one ends" },
            { time: 40.18, text: "Grab your passport and my hand" },
            { time: 42.60, text: "I can make the bad guys good for a weekend" },
            { time: 45.33, text: "So it's gonna be forever" },
            { time: 47.97, text: "Or it's gonna go down in flames" },
            { time: 50.46, text: "You can tell me when it's over, mm" },
            { time: 53.06, text: "If the high was worth the pain" },
            { time: 55.41, text: "Got a long list of ex-lovers" },
            { time: 57.94, text: "They'll tell you I'm insane" },
            { time: 60.32, text: "'Cause you know I love the players" },
            { time: 62.97, text: "And you love the game" },
            { time: 65.31, text: "'Cause we're young, and we're reckless" },
            { time: 67.95, text: "We'll take this way too far" },
            { time: 70.39, text: "It'll leave you breathless, mm" },
            { time: 73.03, text: "Or with a nasty scar" },
            { time: 75.39, text: "Got a long list of ex-lovers" },
            { time: 77.95, text: "They'll tell you I'm insane" },
            { time: 80.46, text: "But I've got a blank space, baby" },
            { time: 84.11, text: "And I'll write your name" },
            { time: 90.78, text: "Cherry lips, crystal skies" },
            { time: 93.27, text: "I could show you incredible things" },
            { time: 95.79, text: "Stolen kisses, pretty lies" },
            { time: 98.31, text: "You're the king, baby, I'm your queen" },
            { time: 100.40, text: "Find out what you want" },
            { time: 102.62, text: "Be that girl for a month" },
            { time: 105.19, text: "Wait, the worst is yet to come, oh no" },
            { time: 110.46, text: "Screaming, crying, perfect storms" },
            { time: 113.22, text: "I can make all the tables turn" },
            { time: 115.73, text: "Rose garden filled with thorns" },
            { time: 118.25, text: "Keep you second guessing like" },
            { time: 120.00, text: "\"Oh, my God, who is she?\"" },
            { time: 122.51, text: "I get drunk on jealousy" },
            { time: 125.04, text: "But you'll come back each time you leave" },
            { time: 127.40, text: "'Cause, darling, I'm a nightmare dressed like a daydream" },
            { time: 130.44, text: "So it's gonna be forever" },
            { time: 132.82, text: "Or it's gonna go down in flames" },
            { time: 135.47, text: "You can tell me when it's over, mm" },
            { time: 137.81, text: "If the high was worth the pain" },
            { time: 140.13, text: "Got a long list of ex-lovers" },
            { time: 142.82, text: "They'll tell you I'm insane" },
            { time: 145.33, text: "'Cause you know I love the players" },
            { time: 147.81, text: "And you love the game" },
            { time: 150.34, text: "'Cause we're young, and we're reckless (oh-ooh)" },
            { time: 153.18, text: "We'll take this way too far" },
            { time: 155.30, text: "It'll leave you breathless, mm (oh)" },
            { time: 157.99, text: "Or with a nasty scar" },
            { time: 160.28, text: "Got a long list of ex-lovers" },
            { time: 162.75, text: "They'll tell you I'm insane (insane)" },
            { time: 165.64, text: "But I've got a blank space, baby" },
            { time: 169.29, text: "And I'll write your name" },
            { time: 170.74, text: "Boys only want love if it's torture" },
            { time: 175.21, text: "Don't say I didn't, say I didn't warn ya" },
            { time: 180.49, text: "Boys only want love if it's torture" },
            { time: 185.15, text: "Don't say I didn't, say I didn't warn ya" },
            { time: 190.32, text: "So it's gonna be forever" },
            { time: 192.92, text: "Or it's gonna go down in flames" },
            { time: 195.34, text: "You can tell me when it's over (over)" },
            { time: 197.98, text: "If the high was worth the pain" },
            { time: 200.34, text: "Got a long list of ex-lovers" },
            { time: 202.88, text: "They'll tell you I'm insane" },
            { time: 205.44, text: "'Cause you know I love the players" },
            { time: 207.94, text: "And you love the game" },
            { time: 210.59, text: "'Cause we're young, and we're reckless (yeah)" },
            { time: 213.19, text: "We'll take this way too far (oh)" },
            { time: 215.75, text: "It'll leave you breathless, mm" },
            { time: 217.84, text: "Or with a nasty scar (leave a nasty scar)" },
            { time: 220.51, text: "Got a long list of ex-lovers" },
            { time: 222.83, text: "They'll tell you I'm insane" },
            { time: 225.66, text: "But I've got a blank space, baby" },
            { time: 229.05, text: "And I'll write your name" }
        ]
    },
    {
        id: 23,
        title: "All Too Well (10 Minute Version) (Taylor's Version) (From The Vault)",
        artist: "Taylor Swift",
        album: "Red (Taylor's Version)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d",
        audioSrc: "audio/All Too Well.mp3",
        videoBgSrc: "videos/11.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/5enxwA8aAbwZbf5qCHORXi",
        lyrics: [
            { time: 23.16, text: "I walked through the door with you, the air was cold" },
            { time: 28.22, text: "But something 'bout it felt like home somehow" },
            { time: 32.61, text: "And I left my scarf there at your sister's house" },
            { time: 37.95, text: "And you've still got it in your drawer even now" },
            { time: 53.44, text: "Oh, your sweet disposition and my wide-eyed gaze" },
            { time: 59.38, text: "We're singing in the car, getting lost upstate" },
            { time: 64.45, text: "Autumn leaves falling down like pieces into place" },
            { time: 68.79, text: "And I can picture it after all these days" },
            { time: 74.52, text: "And I know it's long gone and that magic's not here no more" },
            { time: 79.78, text: "And I might be okay, but I'm not fine at all, oh" },
            { time: 90.33, text: "'Cause there we are again on that little town street" },
            { time: 95.48, text: "You almost ran the red 'cause you were looking over at me" },
            { time: 99.85, text: "Wind in my hair, I was there" },
            { time: 102.43, text: "I remember it all too well" },
            { time: 110.47, text: "Photo album on the counter, your cheeks were turning red" },
            { time: 115.47, text: "You used to be a little kid with glasses in a twin-sized bed" },
            { time: 120.95, text: "And your mother's telling stories 'bout you on the tee-ball team" },
            { time: 126.46, text: "You taught me 'bout your past, thinking your future was me" },
            { time: 130.76, text: "And you were tossing me the car keys" },
            { time: 133.65, text: "\"Fuck the patriarchy\" keychain on the ground" },
            { time: 137.97, text: "We were always skipping town" },
            { time: 141.12, text: "And I was thinking on the drive down" },
            { time: 144.09, text: "\"Anytime now, he's gonna say it's love\"" },
            { time: 148.03, text: "You never called it what it was" },
            { time: 151.35, text: "'Til we were dead and gone and buried" },
            { time: 154.24, text: "Check the pulse and come back swearing it's the same" },
            { time: 158.58, text: "After three months in the grave" },
            { time: 161.63, text: "And then you wondered where it went to" },
            { time: 164.72, text: "As I reached for you, but all I felt was shame" },
            { time: 168.84, text: "And you held my lifeless frame" },
            { time: 172.10, text: "And I know it's long gone and there was nothing else I could do" },
            { time: 177.58, text: "And I forget about you long enough to forget why I needed to" },
            { time: 188.37, text: "'Cause there we are again in the middle of the night" },
            { time: 193.62, text: "We're dancing 'round the kitchen in the refrigerator light" },
            { time: 197.93, text: "Down the stairs, I was there" },
            { time: 200.52, text: "I remember it all too well" },
            { time: 208.81, text: "And there we are again when nobody had to know" },
            { time: 214.19, text: "You kept me like a secret, but I kept you like an oath" },
            { time: 218.51, text: "Sacred prayer, and we'd swear" },
            { time: 221.03, text: "To remember it all too well, yeah" },
            { time: 244.27, text: "Well, maybe we got lost in translation, maybe I asked for too much" },
            { time: 249.45, text: "But maybe this thing was a masterpiece 'til you tore it all up" },
            { time: 254.62, text: "Running scared, I was there" },
            { time: 257.22, text: "I remember it all too well (yeah)" },
            { time: 265.09, text: "And you call me up again just to break me like a promise" },
            { time: 270.89, text: "So casually cruel in the name of being honest" },
            { time: 275.30, text: "I'm a crumpled-up piece of paper lying here" },
            { time: 279.53, text: "'Cause I remember it all, all, all" },
            { time: 285.87, text: "They say all's well that ends well, but I'm in a new hell every time" },
            { time: 293.36, text: "You double-cross my mind" },
            { time: 296.59, text: "You said if we had been closer in age, maybe it would've been fine" },
            { time: 303.52, text: "And that made me want to die" },
            { time: 306.88, text: "The idea you had of me, who was she?" },
            { time: 309.78, text: "A never-needy, ever-lovely jewel" },
            { time: 313.46, text: "Whose shine reflects on you" },
            { time: 317.23, text: "Not weeping in a party bathroom" },
            { time: 319.73, text: "Some actress asking me what happened, you" },
            { time: 323.85, text: "That's what happened, you" },
            { time: 327.17, text: "You, who charmed my dad with self-effacing jokes" },
            { time: 332.85, text: "Sipping coffee like you're on a late-night show" },
            { time: 337.39, text: "But then he watched me watch the front door all night, willing you to come" },
            { time: 342.58, text: "And he said, \"It's supposed to be fun turning 21\"" },
            { time: 361.43, text: "Time won't fly, it's like I'm paralyzed by it" },
            { time: 366.26, text: "I'd like to be my old self again, but I'm still trying to find it" },
            { time: 371.20, text: "After plaid shirt days and nights when you made me your own" },
            { time: 376.57, text: "Now you mail back my things and I walk home alone" },
            { time: 381.68, text: "But you keep my old scarf from that very first week" },
            { time: 386.81, text: "'Cause it reminds you of innocence and it smells like me" },
            { time: 391.57, text: "You can't get rid of it" },
            { time: 394.10, text: "'Cause you remember it all too well, yeah" },
            { time: 402.35, text: "'Cause there we are again when I loved you so (loved you so)" },
            { time: 407.94, text: "Back before you lost the one real thing you've ever known" },
            { time: 412.15, text: "It was rare, I was there" },
            { time: 414.67, text: "I remember it all too well (oh, oh)" },
            { time: 422.17, text: "Wind in my hair, you were there" },
            { time: 424.84, text: "You remember it all" },
            { time: 427.57, text: "Down the stairs, you were there" },
            { time: 430.27, text: "You remember it all" },
            { time: 432.78, text: "It was rare, I was there" },
            { time: 435.33, text: "I remember it all too well" },
            { time: 441.83, text: "And I was never good at telling jokes, but the punchline goes" },
            { time: 447.88, text: "\"I'll get older, but your lovers stay my age\"" },
            { time: 453.26, text: "From when your Brooklyn broke my skin and bones" },
            { time: 458.22, text: "I'm a soldier who's returning half her weight" },
            { time: 463.67, text: "And did the twin flame bruise paint you blue?" },
            { time: 469.12, text: "Just between us, did the love affair maim you too?" },
            { time: 474.06, text: "'Cause in this city's barren cold" },
            { time: 477.70, text: "I still remember the first fall of snow" },
            { time: 483.07, text: "And how it glistened as it fell" },
            { time: 487.63, text: "I remember it all too well" },
            { time: 494.96, text: "Just between us, did the love affair maim you all too well?" },
            { time: 505.16, text: "Just between us, do you remember it all too well?" },
            { time: 515.61, text: "Just between us, I remember it (just between us) all too well" },
            { time: 521.50, text: "Wind in my hair, I was there, I was there (I was there)" },
            { time: 526.83, text: "Down the stairs, I was there, I was there" },
            { time: 532.02, text: "Sacred prayer, I was there, I was there" },
            { time: 537.27, text: "It was rare, you remember it all too well" },
            { time: 542.12, text: "Wind in my hair, I was there, I was there (oh)" },
            { time: 547.63, text: "Down the stairs, I was there, I was there (I was there)" },
            { time: 552.65, text: "Sacred prayer, I was there, I was there" },
            { time: 557.93, text: "It was rare, you remember it (all too well)" },
            { time: 562.79, text: "Wind in my hair, I was there, I was there" },
            { time: 568.20, text: "Down the stairs, I was there, I was there" },
            { time: 573.29, text: "Sacred prayer, I was there, I was there" },
            { time: 578.57, text: "It was rare, you remember it" },
            { time: 583.26, text: "Wind in my hair, I was there, I was there" },
            { time: 588.73, text: "Down the stairs, I was there, I was there" },
            { time: 593.84, text: "Sacred prayer, I was there, I was there" },
            { time: 599.14, text: "It was rare, you remember it" }
        ]
    },
    {
        id: 24,
        title: "Multo",
        artist: "Cup of Joe",
        album: "Multo",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02394048503e3be0e65e962638",
        audioSrc: "audio/Multo.mp3",
        videoBgSrc: "videos/10.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/4cBm8rv2B5BJWU2pDaHVbF",
        lyrics: [
            { time: 22.75, text: "Humingang malalim, pumikit na muna" },
            { time: 31.99, text: "At baka-sakaling namamalikmata lang" },
            { time: 41.02, text: "Ba't nababahala? 'Di ba't ako'y mag-isa?" },
            { time: 50.36, text: "'Kala ko'y payapa, boses mo'y tumatawag pa" },
            { time: 59.97, text: "Binaon naman na ang lahat" },
            { time: 64.55, text: "Tinakpan naman na 'king sugat" },
            { time: 69.16, text: "Ngunit ba't ba andito pa rin?" },
            { time: 74.01, text: "Hirap na 'kong intindihin" },
            { time: 78.07, text: "Tanging panalangin, lubayan na sana" },
            { time: 87.03, text: "Dahil sa bawat tingin, mukha mo'y nakikita" },
            { time: 96.80, text: "Kahit sa'n man mapunta ay anino mo'y kumakapit sa 'king kamay" },
            { time: 105.77, text: "Ako ay dahan-dahang nililibing nang buhay pa" },
            { time: 115.05, text: "Hindi na makalaya" },
            { time: 119.72, text: "Dinadalaw mo 'ko bawat gabi" },
            { time: 124.20, text: "Wala mang nakikita" },
            { time: 128.75, text: "Haplos mo'y ramdam pa rin sa dilim" },
            { time: 133.51, text: "Hindi na nananaginip" },
            { time: 138.07, text: "Hindi na ma-makagising" },
            { time: 142.61, text: "Pasindi na ng ilaw" },
            { time: 147.36, text: "Minumulto na 'ko ng damdamin ko" },
            { time: 151.48, text: "Ng damdamin ko" },
            { time: 153.19, text: "Hindi mo ba ako lilisanin?" },
            { time: 157.77, text: "Hindi pa ba sapat pagpapahirap sa 'kin? (Ng damdamin ko)" },
            { time: 162.30, text: "Hindi na ba ma-mamamayapa?" },
            { time: 166.93, text: "Hindi na ba ma-mamamayapa?" },
            { time: 170.41, text: "Hindi na makalaya" },
            { time: 175.31, text: "Dinadalaw mo 'ko bawat gabi" },
            { time: 179.68, text: "Wala mang nakikita" },
            { time: 184.20, text: "Haplos mo'y ramdam pa rin sa dilim" },
            { time: 188.65, text: "Hindi na nananaginip" },
            { time: 193.45, text: "Hindi na ma-makagising" },
            { time: 198.05, text: "Pasindi na ng ilaw" },
            { time: 202.65, text: "Minumulto na 'ko ng damdamin ko" },
            { time: 206.78, text: "Ng damdamin ko" },
            { time: 208.42, text: "Makalaya (hindi mo ba ako lilisanin?)" },
            { time: 211.92, text: "Dinadalaw mo 'ko bawat gabi (hindi pa ba sapat pagpapahirap sa 'kin?)" },
            { time: 216.43, text: "Wala mang nakikita (hindi na ba ma-mamamayapa?)" },
            { time: 221.18, text: "Haplos mo'y ramdam pa rin sa dilim (hindi na ba ma-mamamayapa?)" }
        ]
    },
    {
        id: 25,
        title: "The Way Life Goes (feat. Oh Wonder)",
        artist: "Lil Uzi Vert, Oh Wonder",
        album: "Luv Is Rage 2",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02f23aee9d3be9fcbca1bc6352",
        audioSrc: "audio/The Way Life Goes.mp3",
        videoBgSrc: "videos/14.mp4",
        spotifyUrl: "https://open.spotify.com/intl-id/track/2eAZfqOm4EnOF9VvN50Tyc",
        lyrics: [
            { time: 0.45, text: "That's true (that's true)" },
            { time: 1.77, text: "That's right (that right, that right)" },
            { time: 2.87, text: "She's sipping Moët, and yeah, I swear it gets her wetter" },
            { time: 5.54, text: "My Louboutins new, so my bottoms, they is redder" },
            { time: 8.47, text: "No, I'm not a rat, but I'm all about my cheddar" },
            { time: 11.37, text: "Just talked to your homie she said we should be together" },
            { time: 14.38, text: "Gave me brain, was so insane that I made her my header" },
            { time: 17.23, text: "If she ever call my phone you know I gotta dead her" },
            { time: 20.23, text: "But I like that girl too much, I wish I never met her" },
            { time: 23.18, text: "Hello" },
            { time: 30.16, text: "I was listening to this song" },
            { time: 33.03, text: "It go like" },
            { time: 34.67, text: "I know it hurts sometimes, but you'll get over it (yeah)" },
            { time: 40.02, text: "You'll find another life to live (yeah)" },
            { time: 43.06, text: "I swear that you'll get over it" },
            { time: 46.30, text: "I know you're sad and tired" },
            { time: 48.97, text: "You've got nothing left to give (yeah)" },
            { time: 51.83, text: "You'll find another life to live (yeah)" },
            { time: 54.96, text: "I know that you'll get over it (yeah)" },
            { time: 58.46, text: "Wish I never, ever, ever told you things" },
            { time: 61.61, text: "I was only, only trying to show you things (yeah)" },
            { time: 64.69, text: "Iced out heart on your neck tried to froze your ring" },
            { time: 67.23, text: "I had to get a me a new bitch to hold the pain" },
            { time: 70.43, text: "We was in Hawaii looking at the ring (damn, yeah)" },
            { time: 76.17, text: "She smiling happy, but I'm laughing 'cause her new man a lame" },
            { time: 79.33, text: "(Broke boy, broke boy, broke boy, broke boy)" },
            { time: 81.43, text: "Damn, that just goes to show me money don't attract a thing (real shit)" },
            { time: 87.84, text: "Stuck to the plan even though you used to go with my mans (yeah)" },
            { time: 93.33, text: "I know it hurts sometimes, but you'll get over it (yeah)" },
            { time: 98.69, text: "You'll find another life to live" },
            { time: 101.39, text: "I swear that you'll get over it" },
            { time: 104.69, text: "And I know you're sad and tired" },
            { time: 107.46, text: "You've got nothing left to give (yeah)" },
            { time: 110.36, text: "You'll find another life to live" },
            { time: 113.23, text: "I know that you'll get over it" },
            { time: 116.44, text: "See, I tied up my RAF you strapped up your Rick" },
            { time: 119.94, text: "Diamonds on your neck, ice all on my wrist" },
            { time: 123.02, text: "Complement my style" },
            { time: 124.87, text: "She don't want me, I'm running wild" },
            { time: 127.88, text: "You know I respect her on that level" },
            { time: 129.90, text: "She don't want me, then I'ma let her (bye)" },
            { time: 132.44, text: "Go over there with that broke fella (go over)" },
            { time: 134.40, text: "Walk off my Saint Laurent, that leather, ooh" },
            { time: 136.87, text: "My new chick, I swear that she better, ooh" },
            { time: 139.06, text: "Want me back, never, ooh (ooh)" },
            { time: 140.97, text: "That's true (that's true)" },
            { time: 142.17, text: "That's right (that's right, that right)" },
            { time: 143.33, text: "She's sipping Moët, and yeah, I swear it gets her wetter" },
            { time: 146.00, text: "My Louboutins new, so my bottoms, they is redder" },
            { time: 148.93, text: "No, I'm not a rat, but I'm all about my cheddar" },
            { time: 151.91, text: "Just talked to your homie, she said we should be together" },
            { time: 154.82, text: "Gave me brain, was so insane that I made her my header" },
            { time: 158.03, text: "If she ever call my phone you know I gotta dead her" },
            { time: 160.75, text: "But I like that girl too much, I wish I never met her" },
            { time: 163.54, text: "I know it hurts sometimes, but you'll get over it (but why?)" },
            { time: 168.81, text: "You'll find another life to live (you'll find)" },
            { time: 171.56, text: "I swear that you'll get over it (you'll get over it)" },
            { time: 175.08, text: "I know it hurts sometimes, but you'll get over it (no, no)" },
            { time: 180.16, text: "You'll find another life to live (you will)" },
            { time: 183.39, text: "I know that you'll get over it (oh)" },
            { time: 187.97, text: "That's true, that's right" },
            { time: 190.05, text: "She's sipping Moët, and yeah, I swear it gets her wetter" },
            { time: 192.78, text: "My Louboutins new, so my bottoms, they is redder" },
            { time: 195.64, text: "No, I'm not a rat, but I'm all about my cheddar" },
            { time: 198.92, text: "Just talked to your homie, she said we should be together" },
            { time: 201.82, text: "Gave me brain, was so insane that I made her my header" },
            { time: 204.68, text: "If she ever call my phone you know I gotta dead her" },
            { time: 207.67, text: "But I like that girl too much, I wish I never met her" }
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    const spotifyButton = document.getElementById('spotifyButton');
    if (spotifyButton) {
        spotifyButton.hidden = !song.spotifyUrl;
        spotifyButton.onclick = () => window.open(song.spotifyUrl, '_blank', 'noopener,noreferrer');
    }
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();