let input = document.querySelector(".inp");
let amounts = document.querySelector(".amounts");
let paras = amounts.querySelectorAll(".amounts p");
let categories = document.querySelector(".categories")
let btns = categories.querySelectorAll(".categories button");
let paragraph = document.querySelector(".para-cont")
let wpm = document.getElementById("wpm");

let secs = document.getElementById("secs");
let type = document.getElementById("type");
let result = document.querySelector(".result");
let restart = document.querySelector(".restart")
let overlay = document.querySelector(".overlay");
let watch = document.querySelector(".watch");
let sliderCont = document.querySelector(".slider-cont")
let slider = document.querySelector(".slider")
let body = document.querySelector(".body")
let h1 = document.querySelector(".h1")

let theme = "black";

const wordsList = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
  "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
  "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
  "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know",
  "take", "people", "into", "year", "your", "good", "some", "could",
  "them", "see", "other", "than", "then", "now", "look", "only", "come",
  "its", "over", "think", "also", "back", "after", "use", "two", "how",
  "our", "work", "first", "well", "way", "even", "new", "want", "because",
  "any", "these", "give", "day", "most", "us", "great", "between", "need"
];

let musics = [
  "Aylex - Adrenaline Drive (freetouse.com).mp3",
  "Aylex - Back To Life (freetouse.com).mp3",
  "Aylex - LOUD (freetouse.com).mp3",
  "Aylex - Off Road (freetouse.com).mp3",
  "daynigthmorning-indie-rock-no-copyright-music-540676.mp3",
  "desifreemusic-edge-of-impact-powerful-action-trailer-drums-446564.mp3",
  "jonasblakewood-no-copyright-background-music-the-competitor-theme-317936.mp3",
  "jonasblakewood-the-spring-of-the-universe-449695.mp3",
  "miromaxmusic-stomps-percussion-and-rhythm-no-copyright-512023.mp3",
  "psychronic-hyperspace-hustle-448682.mp3",
  "Walen - Brazilian Hype (freetouse.com).mp3",
  "Walen - HEADPHONK (freetouse.com).mp3"
]

let selectedAmount = "15"; // default
let selectedCategory = "words"; // default

let finalise= "wordly";

sliderCont.addEventListener("click", () => {
  sliderCont.classList.toggle("active");
  body.classList.toggle("active");
  h1.classList.toggle("active");
  paragraph.classList.toggle("active");
  btns.forEach(btn => btn.classList.toggle("active1"));
  categories.classList.toggle("active")
  amounts.classList.toggle("active")
  paras.forEach(para => para.classList.toggle("active2"));
  if (theme === "black") {
    theme = "white";
  } else {
    theme ="black"
  }
  console.log(theme);
})


for (var i = 0; i < paras.length; i++) {
    paras[i].addEventListener("click", function() {
    document.querySelectorAll(".amounts p").forEach(p => {
      if(theme === "white") {
        p.classList.remove("active3")
      } else {
        p.classList.remove("active")
      }
      });
    if(theme === "white") {
      this.classList.add("active3")
    } else {
      this.classList.add("active");
    }
    
    selectedAmount = this.textContent;
    console.log(selectedAmount)
    if(selectedCategory.includes("words")) {
      if(selectedAmount === "15") {
      generateWords(15)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if (selectedAmount === "30") {
      generateWords(30)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if (selectedAmount === "60") {
      generateWords(60)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if (selectedAmount === "120") {
      generateWords(120)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } 
    } else {
      generateWords(200)
      
    }
    


  });
}

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    document.querySelectorAll(".categories button").forEach(btn => {
      if(theme === "white") {
        btn.classList.remove("active2");
    } else {
        btn.classList.remove("active");
    }
    });
    if(theme === "white") {
        this.classList.add("active2");
    } else {
        this.classList.add("active");
    }
    
    selectedCategory = this.textContent;
    console.log(selectedCategory)


    if (selectedCategory.includes("words")) {
      finalise = "wordly";
      if(selectedAmount === "15") {
      generateWords(15)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if(selectedAmount === "30") {
      generateWords(30)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if (selectedAmount === "60") {
      generateWords(60)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } else if (selectedAmount === "120") {
      generateWords(120)
      paragraph.innerHTML = words.slice(0,-1) + ".";
      paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");
      currIndex = 0
    } 
    } else {
      finalise = "timely";
      generateWords(1000)
      console.log(words)
    }
  });
}


function disable () {
  categories.style.display = "none";
  amounts.style.display = "none";
}

function enable() {
  categories.style.display = "flex";
  amounts.style.display = "flex";
  result.classList.remove("visible");
  overlay.classList.remove("visible");
  watch.style.display = "none";
  currIndex = 0;
  secGone = 0;
  blink = setInterval(() => {
    if(input.textContent === "Start typing...") {
      input.textContent = "";
    } else {
      input.textContent = "Start typing..."
    }
    
  }, 800)
  paragraph.querySelectorAll("span").forEach(span => span.style.backgroundColor = "transparent");
  started = false
}




let started = false;
let currIndex = 0;
let correctCount = 0;
let secGone = 0;
let stopWatch;
let words = "";


let music = new Audio(musics[Math.floor(Math.random() * musics.length)]);
console.log(music)

document.addEventListener("keydown", (e) => {
  if(result.classList.contains("visible")) return;
  clearInterval(blink);
  if(input.textContent === "Start typing...") {
    input.textContent = "";
  }
  
    if(finalise === "timely") {
      if(!started) {
      started = true;
      disable();
      music.currentTime = 0;
      music.play();
      console.log("finalise is:", finalise);
      paragraph.innerHTML = words.trim().split("").map(c => `<span>${c}</span>`).join("");
      watch.style.display = "block";
      startTimer(selectedAmount);
      }
    }
    
    if(finalise === "wordly") {
      if(!started) {
        disable();
        started = true;
        music.currentTime = 0;
        music.play();
        watch.style.display = "block";
        typeTrack();
        
      }
    }
    

    if(e.key.toLowerCase() === paragraph.textContent.trim().toLowerCase()[currIndex]) {
      let currentSpan = paragraph.querySelectorAll("span")[currIndex];
      if(theme === "white") {
        currentSpan.style.backgroundColor = "black";
      } else {
        currentSpan.style.backgroundColor = "white";
      }
      
      
      
      paragraph.scrollTop = currentSpan.offsetTop - paragraph.offsetTop;
      input.textContent += e.key;
      currIndex ++;
      correctCount++;
    }
    
    
      
    if(e.key === "Backspace") {
    if(currIndex > correctCount) {
      input.textContent = input.textContent.slice(0,-1);
      currIndex--;
    }
    }
    
    
  }
);


function generateWords(amount) {
  words = "";
  for(let i = 0; i < amount; i++) {
    words += wordsList[Math.floor(Math.random() * wordsList.length)] + " ";
  }
  
  paragraph.innerHTML = words.trim().split("").map(c => `<span>${c}</span>`).join("");
  currIndex = 0;
  
}
generateWords(15)
paragraph.innerHTML = words.slice(0,-1) + ".";
paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");

function typeTrack () {
  
stopWatch = setInterval(() => {
    secGone++;
    console.log(secGone);
    watch.textContent = "Seconds elapsed: " + secGone;
    if(input.textContent.length === paragraph.textContent.trim().length) {
        let totalChars =input.textContent.length;
        let paraLen = paragraph.innerHTML.length; 
        music.pause();
        overlay.classList.add("visible");
        result.classList.add("visible");
        clearInterval(stopWatch);
        console.log(secGone);
        secs.textContent = secGone + "s";
        type.textContent = finalise;
        wpm.textContent = ((totalChars/5) / (secGone / 60)).toFixed(0);
      }
      
  }, 1000)
}

function startTimer(seconds) {
  console.log("timer started with", seconds);
  let remaining = parseInt(seconds);
  let timer = setInterval(() => {
    
    remaining--;
    console.log(remaining);
    
    watch.textContent = "Seconds Remaining: " + remaining;
    if(remaining === 0) {
      clearInterval(timer);
      let correct = 0;
      let totalChars =input.textContent.length;
      let paraLen = paragraph.innerHTML.length; 
      console.log(input.textContent);
      console.log(paragraph.textContent.trim());
      
      for(let i = 0; i < totalChars; i++) {
        if(input.textContent[i].toLowerCase() === paragraph.textContent.trim()[i].toLowerCase() ) {
          correct ++;
        }
      }
      console.log(correct)
      music.pause();
      overlay.classList.add("visible");
      result.classList.add("visible");
      wpm.textContent = (totalChars / 5 ) / (seconds / 60);
      
      secs.textContent = seconds + "s";
      type.textContent = finalise;
      input.textContent = "";

    }
  }, 1000);

}

paragraph.innerHTML = paragraph.textContent.trim().split("").map(c => `<span>${c}</span>`).join("");

let blink = setInterval(() => {
  if(input.textContent === "Start typing...") {
    input.textContent = "";
  } else {
    input.textContent = "Start typing..."
  }
   
}, 800)



