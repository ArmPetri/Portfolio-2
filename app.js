// Burger menu 
const links = document.querySelectorAll('#links > li');

for(let link of links) {
  link.addEventListener("click", () => {
    location.href = (link.firstChild.getAttribute("href"));
  })
}

// Scroll Up 
document.addEventListener("scroll", scrolling);

let scrollUpButton = document.querySelector("#scrollUpButton");

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// Mobile menu 
let mobileMenuButton = document.querySelector('#mobile_menu_button')
mobileMenuButton.addEventListener('click', () => {
  
  let navlinks = document.querySelector("#links");
    if(navlinks.className === "links") {
      navlinks.classList.add("active")
    } else {
      navlinks.classList.remove("active")
    }
})

const projectData = [
  {
    "title" : "Coincase",
    "image" : "./images/coincase.png",
    "subtitle" : "Crypto Portfolio Tracker",
    "description" : {"s" : "Crypto Portfolio tracker inspired by coingecko.com and using it’s API", "m" : "Crypto Portfolio tracker inspired by coingecko.com and using it’s API.  After learning React Js, I decided to make my own project and I thought it would be really interesting to challange myself and re-create some of Coingecko pages, features and functionality", "l" : "Crypto Portfolio tracker inspired by coingecko.com and using it’s API.  After learning React Js decided to make my own project and I thought it would be really interesting to challenge myself and re-create some of Coingecko pages, features and functionality.  It was fun trying to figure out how the site was set up. Figuring out calculations behind portfolio section was probably the most challenging part but improved my problem solving approach and of course how to implement React"},
    "technologies" : ["HTML", "CSS", "React Js", "Styled Components"],
    "links" : ["https://github.com/ArmPetri/Coin-Case", "https://coin-case.netlify.app/"],
  },
  {
    "title" : "Sparkle Heart",
    "image" : "./images/sparkleheart.png",
    "subtitle" : "Sparkle Heart Project",
    "description" : {"s" : "Multi-page Frontend Website created from a design and turned into a Wordpress theme as part of my Internship Project", "m" : "During my internship at piere.lv project my first task was to first create a pixel-perfect front end part of the website from a provided design and second part was to use that website and turn it into a unique wordpress theme", "l" : "During my internship at piere.lv project my first task was to first create a pixel-perfect front end part of the website from a provided design and second part was to use that website and turn it into a unique wordpress theme.  During the development I also had to collaborate with others who were doing internship in testing as well as project management.  Overall had a great experience and learned a lot about the process, most common website features and also Wordpress theme development to which I was completely new coming in"},
    "technologies" : ["HTML", "CSS", "Javascript", "Sass", "Wordpress"],
    "links" : ["https://github.com/ArmPetri/Task_2_Armands_Petrikas", "https://armandsp.demolive.space/"],
  },
  {
    "title" : "Drumbell CR-07",
    "image" : "./images/rhythm_composer.png",
    "subtitle" : "Rhythm Composer",
    "description" : {"s" : "A Web based Drum Machine inspired by 80’s Roland 808 Rhythm Composer", "m" : "After getting familiar with core web technologies I wanted to test myself. As a fan of analog synths and sound engineering I found Web Audio API and came up with a idea of creating a web based drum machine.  I had a lot of fun creating this project as I was improving my development skills, making something from the ground up and something related to my other interests", "l" : "After getting familiar with core web technologies I wanted to test myself. As a fan of analog synths and sound engineering I found Web Audio API and came up with a idea of creating a web based drum machine.  I had a lot of fun creating this project as I was improving my development skills, making something from the ground up and something related to my other interests.  This was my first biggest challenge, some functionality took me a long time but I am happy I stuck to it because once I was done with the project I knew I wanted to be a developer"},
    "technologies" : ["HTML", "CSS", "Javascript", "Web Audio API"],
    "links" : ["https://github.com/ArmPetri/Rhythm-Composer", "https://rhythm-composer.netlify.app/"],
  },
  {
    "title" : "Apple Trapping",
    "image" : "./images/abols_gusteknis.png",
    "subtitle" : "An event site for a local brewery",
    "description" : {"s" : "A Brochure Website I did for a client for a local brewery", "m" : "I was approached to create a brochure site for a local brewery.  Client already had an existing site and design built on one of the page builders but since it is just informational page they wanted it simple just with basic web technologies", "l" : "I was apporached to create a brochure site for a local brewery.  They already had an existing site and design built on one of the page builders but since it is just informational page they wanted it simple just with basic web technologies.  By the suggestion for styling I used Bootstrap, which was my first experience with it but I realised that I will need to learn how to adapt depending on the project at hand"},
    "technologies" : ["HTML", "CSS", "Bootstrap"],
    "links" : [ "",  "https://abolsgusteknis.lv/"],
  }
]

// Projects Section Functionality 
const projectSection = document.querySelector('#work')

projectData.map((each) => {
  // Each Project Row
  const workRow = document.createElement('div')
  workRow.setAttribute('class', 'work_row')

  // Image & Controls Wrapper 
  const imageControlsWrapper = document.createElement('div')
  imageControlsWrapper.setAttribute('class', 'image_controls_wrapper')
  
  // Image 
  const imageWrapper = document.createElement('div')
  imageWrapper.setAttribute('class', 'image_wrapper')

  // Work Image 
  const workImage = document.createElement('img')
  workImage.setAttribute('class', 'work_image')
  workImage.src= each.image

  // Image Overlay 
  const imgOverlay = document.createElement('div')
  imgOverlay.setAttribute('class', 'img_overlay')
  imageWrapper.append(workImage)
  imageWrapper.append(imgOverlay)

  // Work 
  const workWrapper = document.createElement('div')
  workWrapper.setAttribute('class', 'work_wrapper')

  const workInfo = document.createElement('div')
  workInfo.setAttribute('class', 'work_info')

  const titleWrapper = document.createElement('div')
  titleWrapper.setAttribute('class', 'title_wrapper')


  const title = document.createElement('h3')
  title.innerText = each.title
  titleWrapper.append(title)

  const subTitle = document.createElement('p')
  subTitle.setAttribute('class', 'subtitle')
  subTitle.innerText = each.subtitle

  const workDescription = document.createElement('div')
  workDescription.setAttribute('class', 'work_description')


  const workTechnologies = document.createElement('div')
  workTechnologies.setAttribute('class', 'work_technologies')

  each.technologies.map((tech) => {
    const technology = document.createElement('p')
    technology.innerText = tech
    workTechnologies.append(technology)
    technology.style.transition = "all 1s ease-in-out";
  })

  // Controls 
  const controls = document.createElement('div')
  controls.setAttribute('class', 'controls')

  const workLinkWrapper = document.createElement('div')
  workLinkWrapper.setAttribute('class', 'work_link_wrapper')
  controls.append(workLinkWrapper)

  for(let i=0; i < each.links.length; i++){
    if(each.links[0] === ''){
      i++;
    }

    const link = document.createElement('a')
    link.setAttribute('class', 'work_link')
    link.setAttribute('target', '_blank')
    link.href = each.links[i]

    let linkName = document.createElement('h4')

    if(i === 0){
      linkName.innerText = "See Code"
      link.append(linkName)
    } else {
      linkName.innerText = "Live Site"
      link.append(linkName)
    }
    let arrRight = document.createElement('img')
    arrRight.src = './icons/here.svg'
    link.append(arrRight)

    workLinkWrapper.append(link)  

  }
  
  const sizes = document.createElement('div')
  sizes.setAttribute('class', 'sizes')
  controls.append(sizes)

  let sizesArray = ['short', 'medium', 'long']


  for(let i=0; i < sizesArray.length; i++){
    let button = document.createElement('button')
    button.setAttribute('class', 'btn')

    if(sizesArray[i] === 'short') {
      button.setAttribute('class', 'btn btn-active')
      button.setAttribute('id', 'btn-short')
      button.innerText = sizesArray[i].slice(0,1).toUpperCase()
      sizes.append(button)
    } else if((sizesArray[i] === 'medium')) {
      button.setAttribute('id', 'btn-medium')
      button.innerText = sizesArray[i].slice(0,1).toUpperCase()
      sizes.append(button)
    } else {
      button.setAttribute('id', 'btn-long')
      button.innerText = sizesArray[i].slice(0,1).toUpperCase()
      sizes.append(button)
    }
  }

  workInfo.append(titleWrapper)
  workInfo.append(subTitle)
  workInfo.append(workDescription)
  
  workRow.append(imageControlsWrapper)
  workRow.append(workWrapper)

  imageControlsWrapper.append(imageWrapper)
  workWrapper.append(workInfo)
  
  function generate(a){
    if(a === "s"){
      imageControlsWrapper.style.transition = "all 0.5s ease-in-out";
      workWrapper.style.transition = "all 0.5s ease-in-out";
      workInfo.style.transition = "all 0.5s ease-in-out";
      controls.style.transition = "all 0.5s ease-in-out";
      workLinkWrapper.style.transition = "all 0.5s ease-in-out";
      sizes.style.transition = "all 0.5s ease-in-out";
      imageWrapper.style.transition = "all 0.2s ease-in-out";
      workImage.style.transition = "all 0.2s ease-in-out";
      imgOverlay.style.transition = "all 0.2s ease-in-out";
      title.style.transition = "all 0.2s ease-in-out";
      workDescription.style.transition = "all 0.2s ease-in-out";
      workTechnologies.style.transition = "all 1s ease-in-out";

      workInfo.style.justifyContent = 'space-around';
      subTitle.style.marginTop = '-1rem';
      workDescription.style.marginTop = 'initial';

      imageControlsWrapper.classList.remove('medium_image_controls_wrapper')
      imageWrapper.classList.remove('medium_image_wrapper')
      workInfo.classList.remove('mediumInfo')
      workImage.classList.remove('medium_image')
      imgOverlay.classList.remove('medium_overlay')
      
      imageControlsWrapper.classList.remove('long_image_controls_wrapper')
      imageWrapper.classList.remove('long_image_wrapper')
      workImage.classList.remove('long_image')
      imgOverlay.classList.remove('long_overlay')
      controls.classList.remove('long_controls')
      workLinkWrapper.classList.remove('long_work_link_wrapper')
      Array.from(workLinkWrapper.querySelectorAll('.work_link')).map((eachLink) => {
        eachLink.classList.remove('long_work_link')
      })
      sizes.classList.remove('long_sizes')
      Array.from(sizes.querySelectorAll('.btn')).map((size) => {
        size.classList.remove('long_btn');
        size.innerText = size.id.split("-")[1].charAt(0).toUpperCase()
      })
      workWrapper.classList.remove('long_work_wrapper')
      workInfo.classList.remove('longInfo')
      
      workWrapper.append(controls) 

        workDescription.innerHTML = ''
       let descriptionParagraph = document.createElement('p')
       descriptionParagraph.style.transition = "all 1s ease-in-out";
       descriptionParagraph.style.fontSize = "1rem";
       descriptionParagraph.innerText = each.description.s
       workDescription.append(descriptionParagraph)

      workInfo.append(workTechnologies)
      
    } else if (a === "m"){
      imageControlsWrapper.style.transition = "all 0.5s ease-in-out";
      workWrapper.style.transition = "all 0.5s ease-in-out";
      workInfo.style.transition = "all 0.5s ease-in-out";
      controls.style.transition = "all 0.5s ease-in-out";
      workLinkWrapper.style.transition = "all 0.5s ease-in-out";
      sizes.style.transition = "all 0.5s ease-in-out";
      imageWrapper.style.transition = "all 0.2s ease-in-out";
      workImage.style.transition = "all 0.2s ease-in-out";
      imgOverlay.style.transition = "all 0.2s ease-in-out";
      title.style.transition = "all 0.2s ease-in-out";
      workDescription.style.transition = "all 0.2s ease-in-out";
      workTechnologies.style.transition = "all 1s ease-in-out";

      workInfo.style.justifyContent = 'space-around';
      subTitle.style.marginTop = '-1rem';
      workDescription.style.marginTop = 'initial';

      imageControlsWrapper.classList.remove('long_image_controls_wrapper')
      imageWrapper.classList.remove('long_image_wrapper')
      workImage.classList.remove('long_image')
      imgOverlay.classList.remove('long_overlay')
      controls.classList.remove('long_controls')
      workLinkWrapper.classList.remove('long_work_link_wrapper')
      Array.from(workLinkWrapper.querySelectorAll('.work_link')).map((eachLink) => {
        eachLink.classList.remove('long_work_link')
      })
      sizes.classList.remove('long_sizes')
      Array.from(sizes.querySelectorAll('.btn')).map((size) => {
        size.classList.remove('long_btn');
        size.innerText = size.id.split("-")[1].charAt(0).toUpperCase()
      })
      workWrapper.classList.remove('long_work_wrapper')
      workInfo.classList.remove('longInfo')

      imageControlsWrapper.append(controls) 

      workDescription.innerHTML = ''

      let paragraphs = (each.description.m).split('  ')

      paragraphs.map((eachParagraph) => {
        let descriptionParagraph = document.createElement('p')
        descriptionParagraph.style.fontSize = "0.1rem";
        descriptionParagraph.style.transition = "all 1s ease-in-out";
        descriptionParagraph.innerText = eachParagraph
        workDescription.append(descriptionParagraph)
        descriptionParagraph.style.transition = "all 0.2s ease-in-out"
       descriptionParagraph.style.fontSize = "1rem";

      })
      workInfo.append(workTechnologies)

      imageControlsWrapper.classList.add('medium_image_controls_wrapper')
      imageWrapper.classList.add('medium_image_wrapper')
      workInfo.classList.add('mediumInfo')
      workImage.classList.add('medium_image')
      imgOverlay.classList.add('medium_overlay')
      controls.classList.add('medium_controls')

    } else if (a === "l"){
      workDescription.style.fontSize = '0.1rem'

      imageControlsWrapper.style.transition = "all 0.5s ease-in-out";
      workWrapper.style.transition = "all 0.5s ease-in-out";
      workInfo.style.transition = "all 0.5s ease-in-out";
      controls.style.transition = "all 0.5s ease-in-out";
      workLinkWrapper.style.transition = "all 0.5s ease-in-out";
      sizes.style.transition = "all 0.5s ease-in-out";
      imageWrapper.style.transition = "all 0.2s ease-in-out";
      workImage.style.transition = "all 0.2s ease-in-out";
      imgOverlay.style.transition = "all 0.2s ease-in-out";
      title.style.transition = "all 0.2s ease-in-out";
      workDescription.style.transition = "all 0.2s ease-in-out";
      workTechnologies.style.transition = "all 1s ease-in-out";

      workDescription.style.fontSize = 'initial'

      imageControlsWrapper.classList.remove('medium_image_controls_wrapper')
      imageWrapper.classList.remove('medium_image_wrapper')
      workInfo.classList.remove('mediumInfo')
      workImage.classList.remove('medium_image')
      imgOverlay.classList.remove('medium_overlay')

      workInfo.style.justifyContent = 'initial';
      subTitle.style.marginTop = '1rem';
      workDescription.style.marginTop = '2rem';

      imageControlsWrapper.append(controls) 

      titleWrapper.append(workTechnologies)

      imageControlsWrapper.classList.add('long_image_controls_wrapper')
      imageWrapper.classList.add('long_image_wrapper')
      workImage.classList.add('long_image')
      imgOverlay.classList.add('long_overlay')
      
      controls.classList.add('long_controls')
      workLinkWrapper.classList.add('long_work_link_wrapper')
      Array.from(workLinkWrapper.querySelectorAll('.work_link')).map((eachLink) => {
        eachLink.classList.add('long_work_link')
      })
      sizes.classList.add('long_sizes')
      Array.from(sizes.querySelectorAll('.btn')).map((size) => {
        size.classList.add('long_btn');
        size.innerText = size.id.split("-")[1].charAt(0).toUpperCase()
       + size.id.split("-")[1].slice(1)
      })
      
      workWrapper.classList.add('long_work_wrapper')
      workInfo.classList.add('longInfo')

      workDescription.innerHTML = ''

      let paragraphs = (each.description.l).split('  ')

      paragraphs.map((eachParagraph) => {
        let descriptionParagraph = document.createElement('p')
        descriptionParagraph.style.fontSize = "0.1rem";
        descriptionParagraph.style.transition = "all 1s ease-in-out"
        descriptionParagraph.innerText = eachParagraph
        workDescription.append(descriptionParagraph)
        descriptionParagraph.style.fontSize = "1rem";

      })
    }
  }

  generate('s')

  projectSection.append(workRow)
  
  let btnShort = workRow.querySelector("#btn-short")
  let btnMedium = workRow.querySelector("#btn-medium")
  let btnLong = workRow.querySelector("#btn-long")

  btnShort.addEventListener('click', () => {
      btnMedium.classList.remove("btn-active")
      btnLong.classList.remove("btn-active")
      btnShort.classList.add("btn-active")
      generate('s')
  })
  btnMedium.addEventListener('click', () => {
      btnShort.classList.remove("btn-active")    
      btnLong.classList.remove("btn-active")
      btnMedium.classList.add("btn-active")
      generate('m')
  })
  btnLong.addEventListener('click', () => {
      btnShort.classList.remove("btn-active")    
      btnMedium.classList.remove("btn-active")
      btnLong.classList.add("btn-active")
      generate('l')
  })

})
