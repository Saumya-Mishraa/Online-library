window.onload = function() {
    // Typing effect
    const text = "Welcome to our Online Library! Here you can find books you like, read them easily, and explore new things every day. It's simple, fast, and made for everyone who loves to read.";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    // Create cursor
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    typingText.appendChild(cursor);

    function type() {
        if (index < text.length) {
            cursor.insertAdjacentText("beforebegin", text.charAt(index));
            index++;
            setTimeout(type, 50);
        }
    }
    type();

    // Search functionality
    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", function() {
            const query = searchInput.value.trim();
            if (query === "") {
                alert("Please enter a book name to search!");
                return;
            }
            // ✅ Correct redirect using backticks
            window.location.href = "catalog.html?search="+ encodeURIComponent(query);
        });
    } else {
        console.error("Search input or button not found!");
    }
};