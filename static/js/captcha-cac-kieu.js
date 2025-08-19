function onHCaptchaSuccess(token) {
  console.log('hCaptcha success! Token:', token);

  const btn = document.querySelector('button#submit-button');
  if (btn) btn.disabled = false;
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('button#submit-button');
  if (btn) btn.disabled = true;
});

function submitForm(event) {
  event.preventDefault();

  Swal.fire({
    icon: "success",
    title: "Ayyyyyyyyyyyy, congrats :33",
    text: "Bạn đã giải được Captcha, bạn vjp vãi ò!",
    showCancelButton: true,
    confirmButtonText: "Eeeeee t muốn nghịch tiếp",
    cancelButtonText: "Thui nghịch thí đủ ùi"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
}