import {
  createElement,
  createHeader,
  createImgElement,
} from "../../script/layout";

const page = document.querySelector(".page__two");

const header = createHeader();

page.append(header);

const title = createElement("h1", "title", "Коммьюніті");

page.append(title);

const NAV__BUTTON = [
  {
    name: "База знань",
    id: 1,
    active: false,
  },
  {
    name: "Інформація",
    id: 2,
    active: true,
  },
];

const createNavButton = () => {
  const navList = createElement("div", "nav");

  NAV__BUTTON.forEach((postData) => {
    let navButtons = createElement("button", "nav__button", postData.name);

    page.append(navList);

    navList.append(navButtons);
  });
  return navList;
};

const navMenu = createNavButton();
page.append(navMenu);

const INFO__PAGE__CONTENT = [
  {
    img_post_content: "/svg/comuniti__info.svg",
    title: "Що таке база знань?",
    content:
      "База даних знань - це база даних, що містить правила результатів та інформації про людський досвід та знання в певній тематиці. У системах самостійного навчання база знань також містить інформацію, яка є результатом вирішення попередніх проблем.",
  },
];

const createPostInfo = () => {
  let postInfoList = createElement("main", "post__list");

  // ===
  INFO__PAGE__CONTENT.forEach((postData) => {
    let img_list_info = createElement("div", "post button");
    let img_info = createImgElement(postData.img_post_content, "post button");

    page.append(postInfoList);
    postInfoList.append(img_list_info);
    img_list_info.append(img_info);

    // ===
    let textPostList = createElement("div", "post button post--viewed");

    // ===
    let textPost_headerDiv = createElement("div", "post__header");
    let textPost_headerText = createElement("h2", "post__date", postData.title);

    postInfoList.append(textPostList);
    textPostList.append(textPost_headerDiv);
    textPost_headerDiv.append(textPost_headerText);

    // ===
    let textPost_Content = createElement("p", "post__info", postData.content);

    textPostList.append(textPost_Content);

    // =======
    postInfoList.append(postInfoList);
  });

  return postInfoList;
};

const postInfo = createPostInfo();
page.append(postInfo);
