// Replace these values with your EmailJS service details
const EMAILJS_USER_ID = "wuq4g3bO2rNO4j7f6";
const EMAILJS_SERVICE_ID = "service_bd7iz57";
const EMAILJS_TEMPLATE_ID = "template_tj14rpo";

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Prepare the email parameters
  const emailParams = {
    first_name: formData.get("firstname"),
    last_name: formData.get("lastname"),
    from_email: formData.get("email"),
    from_mobile: formData.get("mobile"),
    message: formData.get("message"),
    to: "AIMSET Institute"
  };

  // Send the email using EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_USER_ID)
    .then(function(response) {
      console.log("Email sent successfully!", response);
      alert("Thank you for your message!");
      form.reset(); // Reset the form after successful submission
    }, function(error) {
      console.log("Failed to send email!", error);
      alert("Oops! Something went wrong. Please try again later.");
    });
});
