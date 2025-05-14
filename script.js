function loginUser(event) {
    event.preventDefault();
  
    // Ambil username dan password (tidak dicek)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "admin.html";
    } else {
      alert("Nama pengguna dan kata sandi tidak boleh kosong.");
    }
  }
  