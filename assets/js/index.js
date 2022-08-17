const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector(".is-inview#color")) {
    document.body.style.animation = "backBlack 1s ease-in-out forwards";
  } else {
    document.body.style.animation = "backWhite 1s ease-in-out forwards";
  }
});
