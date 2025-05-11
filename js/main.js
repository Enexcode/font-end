document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("mobileAccount");
    const menu = wrapper.querySelector(".account_hover_manu");

    wrapper.querySelector(".nav-icon").addEventListener("click", function (e) {
      e.preventDefault(); // prevent default anchor behavior
      menu.classList.toggle("show");
    });

    // Optional: Click outside to close
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });

// ========== Banner / Hero Slider Js 
$('.banner_slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    // pauseOnHover: false,
  });