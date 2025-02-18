arr = [
    {
        img : "/assets/card-1img.webp",
        h2 : "Technology Blog",
        paragraph1 : "Title :Innovating the Future",
        p_description : "Description: Explore groundbreaking advancements in AI and robotics shaping tomorrow.",
        paragraph2 :"Image Idea: A futuristic image showing AI robots collaborating with humans.",
        lang1 : "Html",
        lang2 : "CSS",
        lang3 : "JavaScript",
        lang5 : "Boot Strap",
        button : "See Project",
        year : "2023",
        cardimg : "/assets/card-1img.webp"
    },
    {
        img : "/assets/card-2img.webp",
        h2 : "Photography Portfolio",
        paragraph1 : "Title: Lens Stories",
        p_description : "Description: A collection of awe-inspiring moments captured around the globe.",
        paragraph2 :"Image Idea: A scenic view of mountains or a person with a camera.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        lang5 : "Boot Strap",
        button : "See Project",
        year : "2024",
        cardimg :"/assets/card-2img.webp"
    },
    {
        img : "/assets/card-3img.webp",
        h2 : "Fitness App",
        paragraph1 : "Title: oveSmart",
        p_description :"Description: Your companion for tracking workouts and achieving fitness goals.",
        paragraph2 :"Image Idea: A person jogging with fitness metrics displayed.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        lang5 : "Boot Strap",
        button : "See Project",
        year : "2025",
        cardimg : "/assets/card-3img.webp"
    },
    {
        img : "/assets/card-4img.webp" ,
        h2 : "Online Learning",
        paragraph1 : "Title: Skillify",
        p_description : "Description: Join courses from world-class instructors and master new skills.",
        paragraph2 :"Image Idea: A laptop with an open notebook and a student studying.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        lang5 : "Boot Strap",
        button : "See Project",
        year : "2025",
        cardimg :"/assets/card-4img.webp" 
    }
]

const cards = document.querySelector(".cards");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const bodyy = document.querySelector(".wholebody");

arr.forEach((element) => {
    cards.innerHTML += `<div class="card flex">
      <img class="card-img" src= ${element.img} alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 class="card-head">${element.h2}</h2>
        <p class="content-p">${element.paragraph1}</p>
        <p class="content-sp">${element.p_description}</p>  
        <p class="content-p">${element.paragraph2}</p>        
        <div class="languages flex">
          <p class="lang">${element.lang1}</p>
          <p class="lang">${element.lang2}</p>
          <p class="lang">${element.lang3}</p>
        </div>
        <button id = "cardbtn" class="content-btn">${element.button}</button>
      </div>
    </div>
`
});
document.querySelectorAll("#cardbtn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popup(arr[index]);
    bodyy.classList.add("blur");
    document.querySelector(".inner-container").classList.add("style");
    document.querySelector(".container").style.display = "block"; 
  });
});
function popup(element) {
  const popup = document.querySelector(".container");
    popup.innerHTML = 
      `<div class="inner-container">
    <div class="icon-head flex">
        <h2 class="heading flex">${element.h2}</h2>
        <i class="fa-solid fa-x" id = "close-popup" ></i>
    </div>
    <div class="languages flex">
        <p class="lang">Canopy</p>
        <p class="lang">Back End Dev</p>
        <p class="lang">${element.year}</p>
    </div>
    <img src= ${element.cardimg} class="wrapimg">
    <div class="languages flex">
        <p class="lang">${element.lang1}</p>
        <p class="lang">${element.lang5}</p>
        <p class="lang">${element.lang2}</p>
    </div>
    
    <div class="paragraph">
        <p class="p1">${element.paragraph1}</p>
        <p class="p2">${element.p_description}</p>
        <p class="p3">${element.paragraph2}</p>
    </div>
    
    <div class="buttons flex">
        <div class="livebtn flex">
            <p>See live</p>
            <img src="/assets/Icon - Export.svg" class="btnimg">
        </div>
        <div class="sourcebtn flex">
            <p>See source</p>
            <img src="/assets/Icon -GitHub.png" class="btnimg">
        </div>
    </div>
            
    </div>`;

    document.querySelector("#close-popup").addEventListener("click", () => {
      popup.style.display = "none"; 
      bodyy.classList.remove("blur");
    });
  }
  document.addEventListener("DOMContentLoaded",()=> {
    const navicon = document.querySelector("#nav-icon");
    navicon.addEventListener("click",()=> {
      const heropage = document.querySelector(".hero-page");
      heropage.classList.add("herostyle")
      bodyy.classList.add("blur")
      const herooverlay = document.querySelector(".herostyle")
      herooverlay.classList.add("herostyle");      
      herooverlay.innerHTML = `<div>
        <p>Portfolio</p>
        <p>About</p>
        <p>Contact</p>
      </div>`
    })
  })







  




  




{/* <div class="inner-container">
<div class="icon-head flex">
    <h2 class="heading flex">Tonic</h2>
    <i class="fa-solid fa-x" ></i>
</div>
<div class="languages flex">
    <p class="lang">Canopy</p>
    <p class="lang">Back End Dev</p>
    <p class="lang">2015</p>
</div>
<img src="/assets/Snapshoot Portfolio.png" class="wrapimg">
<div class="languages flex">
    <p class="lang">HTML</p>
    <p class="lang">Bootstrap</p>
    <p class="lang">Ruby on rails</p>
</div>

<div class="paragraph">
    <p class="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
    <p class="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
    <p class="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
</div>

<div class="buttons flex">
    <div class="livebtn flex">
        <p>See live</p>
        <img src="/assets/Icon - Export.svg" class="btnimg">
    </div>
    <div class="sourcebtn flex">
        <p>See source</p>
        <img src="/assets/Icon -GitHub.png" class="btnimg">
    </div>
</div>
        
</div>
 */}














/* <div class="card flex">
      <img class="card-img" src="/assets/card-1img.webp" alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 class="card-head">Technology Blog</h2>
        <p class="content-p">Title: "Innovating the Future"</p>
        <p class="content-sp">Description: "Explore groundbreaking advancements in AI and robotics shaping tomorrow."</p>  
        <p class="content-p">Image Idea: A futuristic image showing AI robots collaborating with humans.</p>        
        <div class="languages flex">
          <p class="lang">Html</p>
          <p class="lang">CSS</p>
          <p class="lang">JavaScript</p>
        </div>
        <button class="content-btn">See Project</button>
      </div>
    </div>
    <div class="card flex">
      <img class="card-img" src="/assets/card-2img.webp" alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 id="photo-head">Photography Portfolio</h2>
        <p class="content-p">Title: "Lens Stories"<p>
        <p class="content-sp">Description: "A collection of awe-inspiring moments captured around the globe."</p>
        <p class="content-p">Image Idea: A scenic view of mountains or a person with a camera.
        </p>        
        <div class="languages flex">
          <p class="lang">Html</p>
          <p class="lang">Ruby on Rails</p>
          <p class="lang">CSS</p>
          <p class="lang">JavaScript</p>
        </div>
        <button class="content-btn">See Project</button>
      </div>
    </div>
    <div class="card flex">
      <img class="card-img" src="/assets/card-3img.webp" alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 class="card-head">Fitness App</h2>
        <p class="content-p">Title: "MoveSmart"<p>
        <p class="content-sp">Description: "Your companion for tracking workouts and achieving fitness goals."</p>
        <p class="content-p">Image Idea: A person jogging with fitness metrics displayed.</p>        
        <div class="languages flex">
          <p class="lang">Html</p>
          <p class="lang">Ruby on Rails</p>
          <p class="lang">CSS</p>
          <p class="lang">JavaScript</p>
        </div>
        <button class="content-btn">See Project</button>
      </div>
    </div>
    <div class="card flex">
      <img class="card-img" src="/assets/card-4img.webp" alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 class="card-head">Online Learning</h2>
        <p class="content-p">Title: "Skillify"p>
        <p class="content-sp">Description: "Join courses from world-class instructors and master new skills."</p>
        <p class="content-p">Image Idea: A laptop with an open notebook and a student studying.</p>        
        <div class="languages flex">
          <p class="lang">Html</p>
          <p class="lang">Ruby on Rails</p>
          <p class="lang">CSS</p>
          <p class="lang">JavaScript</p>
        </div>
        <button class="content-btn">See Project</button>
      </div>
    </div> */