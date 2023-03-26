// Change avatar
    function changeImgTablet() {
        var imgTab = document.querySelector(".home-avatar");
        imgTab.src = "./assets/images/image-profile-tablet.webp";
    }
    function changeImgDesk() {
        var imgDesk = document.querySelector(".home-avatar");
        imgDesk.src = "./assets/images/image-profile-desktop.webp";
    }

    window.addEventListener("resize", function() {
        if (this.window.innerWidth >= 992) {
            changeImgDesk();
        } else if (this.window.innerWidth >= 768) {
            changeImgTablet();
        }
    })