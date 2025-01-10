
// Toggle menu khi nhấn vào biểu tượng menu
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('show'); // Thêm class 'show' để hiện menu
});

// Đóng menu khi nhấn vào close
menuClose.addEventListener('click', () => {
    sideMenu.classList.remove('show');
});


    // Hàm để mở modal khi kiểm tra phiên bản
function checkForUpdate() {
    // Hiển thị modal
    var modal = document.getElementById("updateModal");
    modal.style.display = "flex";  // Sử dụng flex để căn giữa nội dung modal
}

// Hàm để đóng modal
function closeModal() {
    var modal = document.getElementById("updateModal");
    modal.style.display = "none";  // Ẩn modal khi nhấn vào nút X
}

// Đóng modal khi nhấp ra ngoài khu vực modal
window.onclick = function(event) {
    var modal = document.getElementById("updateModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}