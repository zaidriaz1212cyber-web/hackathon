document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault(); // 🔥 page reload rokta hai

  // data save karna ho to karo
  localStorage.setItem("user", "Demo User");

  // redirect
  window.location.href = "../auth/leader/explore/ai-center/messages/dashboard/dashboard.html";
});