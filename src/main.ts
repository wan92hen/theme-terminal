import "./styles/tailwind.css";
import "./styles/style.scss";
import "./styles/theme.scss";
import "./styles/font-hack.scss";

import Alpine from "alpinejs";
import upvote from "./upvote";

window.Alpine = Alpine;

// @ts-ignore
Alpine.data("upvote", upvote);

Alpine.start();
