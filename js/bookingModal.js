

    var registerBtn = document.getElementById("registerBtn");
    var homeBooking = document.getElementById("homeBooking");
    var bookingBtnClose = document.getElementById("bookingBtnClose");
    registerBtn.addEventListener("click",()=>{
        homeBooking.style.display="block";
        registerBtn.style.display="none";
    });
    bookingBtnClose.addEventListener("click",()=>{
        homeBooking.style.display="none";
        registerBtn.style.display="block";
    });

    $(document).ready(function() {
        $('.chat_icon').click(function() {
            $('.chat_box').toggleClass('active');
        });
    
        $('#chat').convform({selectInputStyle: 'disable'})
    });
    