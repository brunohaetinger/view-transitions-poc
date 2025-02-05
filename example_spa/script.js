let pageState = 1;
document.getElementById("change-page").addEventListener("click", () => {
    if (!document.startViewTransition) {
        console.warn("View Transitions API is not supported.");
        return;
    }


    document.startViewTransition(() => {
        if(pageState === 1){
            document.getElementById("title").textContent = "Welcome to Page 2";
            document.getElementById("main-image").src = "../assets/image2.jpg";
            pageState = 2;
        } else {
            document.getElementById("title").textContent = "Welcome to Page 1";
            document.getElementById("main-image").src = "../assets/image1.jpg";
            pageState = 1;
        }
    });
});
