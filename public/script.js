// --------- BODY ----------------
window.addEventListener("scroll", (e) => {
  const titleAbout = document.querySelector(".title-about");
  const barAbout = document.querySelector(".bar-about");
  const leftSide = document.querySelector(".left-side");
  const rightSide = document.querySelector(".right-side");
  const titleProjects = document.querySelector(".title-projects");
  const barProjects = document.querySelector(".bar-projects");
  const projectsContainer = document.querySelector(".projects-container");

  // ABOUT = scrollY === 541
  if (window.scrollY > 540) {
    titleAbout.classList.add("title-about-animated");
    barAbout.classList.add("bar-about-animated");
    leftSide.classList.add("left-side-animated");
    rightSide.classList.add("right-side-animated");
  }

  // PROJECTS = scrollY === 1361
  if (window.scrollY > 1360) {
    titleProjects.classList.add("title-projects-animated");
    barProjects.classList.add("bar-projects-animated");
    console.log(projectsContainer);
    projectsContainer.classList.add("projects-container-animated");
  }

  console.log(window.scrollY);
});
// --------- BODY ----------------

// --------- HEADER ----------------

const header = document.querySelector("header");

const randomNumber1 = Math.floor(Math.random() * 256);
const randomNumber2 = Math.floor(Math.random() * 256);
const randomNumber3 = Math.floor(Math.random() * 256);

// First background color
header.style.background = `rgba(${randomNumber1},${randomNumber2},${randomNumber3})`;

// Generate a new background color
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", () => {
  const newRandomNumber1 = Math.floor(Math.random() * 256);
  const newRandomNumber2 = Math.floor(Math.random() * 256);
  const newRandomNumber3 = Math.floor(Math.random() * 256);
  header.style.background = `rgba(${newRandomNumber1},${newRandomNumber2},${newRandomNumber3})`;
});

const headerBtn = document.getElementById("headerBtn");
headerBtn.addEventListener("click", () => portfolioSection.scrollIntoView());

// --------- HEADER ----------------

// --------- NAV ----------------

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const portfolioBtn = document.getElementById("portfolioBtn");
const contactBtn = document.getElementById("contactBtn");
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const portfolioSection = document.getElementById("portfolio");
// const contactSection = document.getElementById("contact");

homeBtn.addEventListener("click", () => homeSection.scrollIntoView());
aboutBtn.addEventListener("click", () => aboutSection.scrollIntoView());
portfolioBtn.addEventListener("click", () => portfolioSection.scrollIntoView());

// --------- NAV ----------------

// --------- ABOUT ----------------

// const containerImage = document.querySelector(".container-img");
// const frontImage = document.querySelector(".about-img-front");
// const retroImage = document.querySelector(".about-img-retro");
// containerImage.addEventListener("mousemove", (e) => {
//   const newY = e.offsetY / 10;
//   const newX = e.offsetX / 10;

//   if (e.offsetX > 350 && e.offsetX < 569) {
//     frontImage.style.left = `${newX}%`;
//   }
//   if (e.offsetY > 150 && e.offsetY < 349) {
//     frontImage.style.bottom = `${newY}px`;
//   }

//   // console.log(e.offsetX);
//   console.log(e.offsetY);
// });

// Changing style to the folder name on hovering
const folders = document.querySelectorAll(".folder");

folders.forEach((folder) => {
  folder.addEventListener("mouseover", () => {
    folder.parentElement.children[1].classList.add("folder-name-hover");
  });
});

folders.forEach((folder) => {
  folder.addEventListener("mouseout", () => {
    folder.parentElement.children[1].classList.remove("folder-name-hover");
  });
});

// Changing the style of the right side of the About section by OPENING one folder
const openFolder = (e) => {
  const folderClicked = e.target.closest(".folder");

  if (folderClicked) {
    const siblings = getSiblings(folderClicked.parentElement);
    const folder = folderClicked.parentElement.children[0];
    const folderName = folderClicked.parentElement.children[1];
    const elementName = document.querySelectorAll(".element-name");

    // Hiding all other folders
    siblings.forEach((sibling) => {
      sibling.classList.add("other-folders-open-folder");
    });

    // Making wider the folder container section
    e.target
      .closest(".folder")
      .parentElement.parentElement.classList.remove("folders-container");
    e.target
      .closest(".folder")
      .parentElement.parentElement.classList.add(
        "folders-container-open-folder"
      );

    // Making full screen the folder wrapper selected
    folderClicked.parentElement.classList.remove("folder-wrap");
    folderClicked.parentElement.classList.add("folder-wrap-open-folder");

    // Rendering full screen the folder selected
    folder.classList.remove("folder");
    folder.classList.add("folder-open-folder");

    // Fixing folder name
    folderName.classList.remove("folder-name");
    folderName.classList.add("folder-name-open-folder");

    // Displaying elements name inside the folder
    elementName.forEach((element) => {
      element.classList.remove("element-name");
      element.classList.add("element-name-open-folder");
    });
  }
};

// Changing the style of the right side of the About section by CLOSING the folder
const closeFolder = (e) => {
  const foldersContainerTarget = e.target.closest(
    ".folders-container-open-folder"
  );
  const folderTarget = e.target.closest(".folder-open-folder");
  const folderNameTarget = e.target.closest(".folder-name-open-folder");

  if (folderTarget || folderNameTarget) {
    return true;
  } else if (foldersContainerTarget) {
    // Closing folder and returning to classic style

    const elementName = document.querySelectorAll(".element-name-open-folder");
    const otherFolders = document.querySelectorAll(
      ".other-folders-open-folder"
    );

    // Removing single names of the elements inside the folder
    elementName.forEach((element) => {
      element.classList.remove("element-name-open-folder");
      element.classList.add("element-name");
    });

    // Fixing folder names
    document
      .querySelector(".folder-name-open-folder")
      .classList.add("folder-name");
    document
      .querySelector(".folder-name-open-folder")
      .classList.remove("folder-name-open-folder");

    // Fixing folder position
    document.querySelector(".folder-open-folder").classList.add("folder");
    document
      .querySelector(".folder-open-folder")
      .classList.remove("folder-open-folder");

    // Displaying other folders
    otherFolders.forEach((folder) => {
      folder.classList.remove("other-folders-open-folder");
    });

    // Fixing every folder position
    document
      .querySelector(".folder-wrap-open-folder")
      .classList.add("folder-wrap");
    document
      .querySelector(".folder-wrap-open-folder")
      .classList.remove("folder-wrap-open-folder");

    // Fixing folders container
    document
      .querySelector(".folders-container-open-folder")
      .classList.add("folders-container");
    document
      .querySelector(".folders-container-open-folder")
      .classList.remove("folders-container-open-folder");
  } else {
    return true;
  }
};

// Getting siblings of every element
const getSiblings = (elem) => {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

document.addEventListener("click", (e) => {
  openFolder(e);
  closeFolder(e);
});

// --------- ABOUT ----------------
