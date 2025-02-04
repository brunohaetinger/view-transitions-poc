if (document.startViewTransition) {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const url = link.href;

            document.startViewTransition(() => {
                window.location.href = url;
            });
        });
    });
} else {
    console.warn("View Transitions API is not supported in this browser.");
}
