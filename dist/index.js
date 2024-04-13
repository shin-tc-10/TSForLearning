"use strict";
const contentId = document.getElementById("contents");
const h1 = contentId === null || contentId === void 0 ? void 0 : contentId.querySelector("h1");
if (h1) {
    h1.textContent = "Hello World";
}
