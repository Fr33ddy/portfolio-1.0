emailjs.init("ypa-xp9Mfdxkjl5Lh");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const button = form.querySelector("button");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        button.textContent = "Sending...";
        button.disabled = true;

        try {

            await emailjs.sendForm(
                "service_89u3fso",
                "template_9kgxjvv",
                form
            );

            button.textContent = "Message Sent!";
            form.reset();

        } catch (error) {

            console.error(error);

            button.textContent = "Failed";

        }

        setTimeout(() => {

            button.textContent = "Send Message";
            button.disabled = false;

        }, 3000);

    });

});