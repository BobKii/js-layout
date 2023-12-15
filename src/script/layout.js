export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag);

  if (className) {
    elem.className = className;
  }

  if (text) {
    elem.innerHTML = text;
  }

  return elem;
};

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: "/svg/header__back.svg",
  },
  {
    width: 24,
    height: 24,
    src: "/svg/header__avatar.svg",
  },
];

export const createHeader = () => {
  const header = createElement("header", "header");

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement("button", "button");

    const img = createElement("img");

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value;
    });

    button.append(img);
    //button.insertAdjacentElement('beforeend', img)
    // як альтернатива append

    header.append(button);
  });

  return header;
};

// ===

export const createImgElement = (src, className) => {
  if (src) {
    const elem = document.createElement("img");
    elem.src = src;
    if (className) {
      elem.className = className;
    }
    return elem;
  } else {
    return null;
  }
};
