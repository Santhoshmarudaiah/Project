function openForm() {
    document.getElementById("registrationForm").style.display = "block";
   }


   document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            redirectToWhatsApp();
            message.textContent = "Registration successful!";
        }
    });
    function validateForm() {
        const companyname = document.getElementById('companyname').value;
        const businessname = document.getElementById('businessname').value;
        const personalemail = document.getElementById('personalemail').value;
        const companyemail = document.getElementById('companyemail').value;
        const district = document.getElementById('district').value;
        const state = document.getElementById('state').value;
        const mobileno = document.getElementById('mobileno').value;
        const industrytype = document.getElementById('industrytype').value;
        if (companyname.trim() === '' || businessname.trim() === '' || personalemail === '' || companyemail === ''
            || district.trim() === '' || state.trim() === '' || mobileno.trim() === '' || industrytype.trim() === '') {
            alert('All fields are required.');
            return false;
        }
        return true;
    }
    function redirectToWhatsApp() {
        // Replace this with the actual WhatsApp URL you want to use
        const whatsappURL = "https://chat.whatsapp.com/FK1dU8VVs71Dvuty8zUMr9";
        window.location.href = whatsappURL;
    }
});