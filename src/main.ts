import "./styles/style.scss";
import "./styles/font-hack.scss";
import "./styles/font-pixel.scss";
import Alpine from "alpinejs";
import upvote from "./upvote";
// @ts-ignore
import tocbot from "tocbot";

window.Alpine = Alpine;

// @ts-ignore
Alpine.data("upvote", upvote);

Alpine.start();

export function generateToc() {
  const content = document.getElementById("content");
  const titles = content?.querySelectorAll("h1, h2, h3, h4");
  if (!titles || titles.length === 0) {
    const tocContainer = document.querySelector(".toc-container");
    tocContainer?.remove();
    return;
  }
  // @ts-ignore
  tocbot.init({
    tocSelector: ".toc",
    contentSelector: "#content",
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "toc-list",
    extraLinkClasses: "toc-link",
    headingsOffset: 96,
    scrollSmoothOffset: -96,
    scrollSmooth: true,
    // @ts-ignore
    // tocScrollOffset: 50,
  });
}

export function locateToc() {
  const content = document.getElementById("content");
  const toc = document.querySelector(".toc") as HTMLElement;
  const contentRight = content?.getBoundingClientRect().right;
  if (toc && contentRight) {
    toc.style.left = `${contentRight}px`;
  }
}
