const items = document.querySelectorAll(".item");

// click → mark as read
items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.remove("unread");

    const badge = item.querySelector(".badge");
    badge.innerText = "Read";
    badge.classList.add("read");
  });
});