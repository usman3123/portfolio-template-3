arr = [
    {
        img : "/assets/card-1img.webp",
        h2 : "Technology Blog",
        paragraph : "Title :Innovating the Future",
        p_description : "Description: Explore groundbreaking advancements in AI and robotics shaping tomorrow.",
        paragraph :"Image Idea: A futuristic image showing AI robots collaborating with humans.",
        lang1 : "Html",
        lang2 : "CSS",
        lang3 : "JavaScript",
        button : "See Project"
    },
    {
        img : "/assets/card-2img.webp",
        h2 : "Photography Portfolio",
        paragraph : "Title: Lens Stories",
        p_description : "Description: A collection of awe-inspiring moments captured around the globe.",
        paragraph :"Image Idea: A scenic view of mountains or a person with a camera.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        button : "See Project"
    },
    {
        img : "/assets/card-3img.webp",
        h2 : "Fitness App",
        paragraph : "Title: oveSmart",
        p_description :"Description: Your companion for tracking workouts and achieving fitness goals.",
        paragraph :"Image Idea: A person jogging with fitness metrics displayed.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        button : "See Project"
    },
    {
        img : "/assets/card-4img.webp" ,
        h2 : "Online Learning",
        paragraph : "Title: Skillify",
        p_description : "Description: Join courses from world-class instructors and master new skills.",
        paragraph :"Image Idea: A laptop with an open notebook and a student studying.",
        lang1 : "Html",
        lang2 :"Ruby on Rails",
        lang3 : "CSS",
        lang4 : "JavaScript",
        button : "See Project"
    }
]

const cards = document.querySelector(".cards");
arr.forEach((element) => {
    `<div class="card flex">
      <img class="card-img" src= ${element.img} alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 class="card-head">${element.h2}</h2>
        <p class="content-p">${element.paragraph}</p>
        <p class="content-sp">${element.p_description}</p>  
        <p class="content-p">${element.paragraph}</p>        
        <div class="languages flex">
          <p class="lang">${lang1}</p>
          <p class="lang">${lang2}</p>
          <p class="lang">${lang3}</p>
        </div>
        <button class="content-btn">${element.button}</button>
      </div>
    </div>
    <div class="card flex">
      <img class="card-img" src=${element.img}alt="CARD_!_IMG">
      <div class="card-content flex">
        <h2 id="photo-head">${element.h2}</h2>
        <p class="content-p">${element.paragraph}<p>
        <p class="content-sp">${element.p_description}</p>
        <p class="content-p">${element.paragraph}</p>        
        <div class="languages flex">
          <p class="lang">${lang1}</p>
          <p class="lang">${lang2}</p>
          <p class="lang">${lang3}</p>
          <p class="lang">${lang4}</p>
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
    </div> `
});




















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