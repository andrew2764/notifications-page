const markAllAsRead = document.querySelector(".mark-all-as-read");
markAllAsRead.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".notification.unread").forEach((elem) => {
    elem.querySelector(".notification-mark").remove();
    elem.classList.remove("unread");
  });

  document.querySelector(".notification-count").textContent = "0";
});
