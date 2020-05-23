import login from "../../resources/login.jpg";

const setImage = (imageName = "login") => {
  switch (imageName) {
    case "login":
      document.body.style.backgroundImage = `url(${login})`;
      break;
  }
};

export default setImage;
