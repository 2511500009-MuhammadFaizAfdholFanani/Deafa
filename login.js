document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.querySelector('input[name="username"]').value.trim().toLowerCase();
    const password = document.querySelector('input[name="password"]').value.trim();
    
    
    const allowedUsers = ["Dea Arzetti Hapsari"]; 
    const tanggalJadian = "30082024"; 
    
    if (!allowedUsers.includes(username)) {
        alert("Selamat Datang Cantikkkkkkkkku 💕");
        return;
    }

    if (password === tanggalJadian) {
        alert("Login berhasil! Selamat datang, sayang! ❤️");
        window.location.href = "welcome.html"; 
    } else {
        alert("Password salah! Coba ingat tanggal jadian kita ya. 😘");
    }
});