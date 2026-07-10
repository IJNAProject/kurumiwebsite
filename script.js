// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function(){

    const loading = document.getElementById("loading");

    setTimeout(function(){

        loading.style.opacity = "0";
        loading.style.transition = "0.6s";

        setTimeout(function(){

            loading.style.display = "none";

        },600);

    },1200);

});

// ===============================
// LIGHTBOX
// ===============================

function buka(img){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("gambarBesar").src=img.src;

}

function tutup(){

    document.getElementById("lightbox").style.display="none";

}

// ===============================
// NIGHTMARE MODE
// ===============================

function nightmare(){

    const body=document.body;

    const flash=document.getElementById("flash");

    const bullet=document.getElementById("bullet");

    body.classList.add("nightmare");

    flash.style.opacity=".6";

    setTimeout(function(){

        flash.style.opacity="0";

    },150);

    bullet.style.display="block";

    bullet.style.left="-100px";

    let x=-100;

    let animasi=setInterval(function(){

        x+=35;

        bullet.style.left=x+"px";

        if(x>window.innerWidth){

            clearInterval(animasi);

            bullet.style.display="none";

        }

    },10);

    setTimeout(function(){

        body.classList.remove("nightmare");

    },3000);

}// ===============================
// MUSIC PLAYER
// ===============================

const bgm = document.getElementById("bgm");
const playlist = document.getElementById("playlist");

function toggleMusic(){

    if(bgm.paused){

        bgm.play();

    }else{

        bgm.pause();

    }

}

function gantiLagu(){

    bgm.src = playlist.value;

    bgm.load();

    bgm.play();

}

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ===============================
// EYE GLOW
// ===============================

const kurumi = document.getElementById("kurumi");

if(kurumi){

    kurumi.addEventListener("click",function(){

        kurumi.classList.add("eye-active");

        setTimeout(function(){

            kurumi.classList.remove("eye-active");

        },1500);

    });

}

// ===============================
// DIGITAL CLOCK
// ===============================

setInterval(function(){

    const sekarang = new Date();

    const jam = String(sekarang.getHours()).padStart(2,"0");

    const menit = String(sekarang.getMinutes()).padStart(2,"0");

    const detik = String(sekarang.getSeconds()).padStart(2,"0");

    const clock = document.getElementById("clock");

    if(clock){

        clock.innerHTML = jam + ":" + menit + ":" + detik;

    }

},1000);// ===============================
// BOT KURUMI
// ===============================

const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

function kirim() {

    let pesan = userInput.value.trim();

    if (pesan === "") return;

    chatBody.innerHTML += `
    <div class="user">
        ${pesan}
    </div>
    `;

    userInput.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(function () {

        chatBody.innerHTML += `
        <div class="bot">
            Kurumi sedang mengetik...
        </div>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(function () {

            let bot = chatBody.querySelectorAll(".bot");
            bot[bot.length - 1].remove();

            balasBot(pesan);

        },1000);

    },300);

}

// ===============================
// BALASAN BOT
// ===============================

function balasBot(teks){

    teks = teks.toLowerCase();

    let jawaban = "";

    if(teks.includes("halo")){

        jawaban = "Ara ara... Halo juga. Senang bertemu denganmu.";

    }

    else if(teks.includes("siapa kamu")){

        jawaban = "Aku Tokisaki Kurumi, Spirit Ketiga dari Date A Live.";

    }

    else if(teks.includes("zafkiel")){

        jawaban = "Zafkiel adalah malaikatku yang mampu memanipulasi waktu.";

    }

    else if(teks.includes("shido")){

        jawaban = "Shido adalah seseorang yang dapat menyegel kekuatan para Spirit.";

    }

    else if(teks.includes("anime")){

        jawaban = "Aku berasal dari anime Date A Live.";

    }

    else if(teks.includes("terima kasih")){

        jawaban = "Ara ara... Sama-sama.";

    }

    else{

        const random = [

            "Ara ara... Pertanyaanmu menarik.",

            "Waktu akan menjawab semuanya.",

            "Aku akan selalu mengawasimu.",

            "Jangan takut pada waktu.",

            "Hehe... Itu rahasiaku."

        ];

        jawaban = random[Math.floor(Math.random()*random.length)];

    }

    chatBody.innerHTML += `
    <div class="bot">
        ${jawaban}
    </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;

}

// ===============================
// ENTER UNTUK MENGIRIM
// ===============================

userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        kirim();

    }

});

// ===============================
// PESAN SELAMAT DATANG
// ===============================

setTimeout(function(){

    chatBody.innerHTML += `
    <div class="bot">
        Selamat datang di Kurumi Fan Website ❤️
    </div>
    `;

},1500);