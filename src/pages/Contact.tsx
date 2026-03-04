function Contact() {
  return (
    <section className="section">
      <h2 className="accent">Contact Me</h2>

      <input placeholder="Name" />
      <input placeholder="Phone" />
      <input placeholder="Email" />
      <textarea rows={5} placeholder="Message" />

      <a
  href="https://wa.me/923124718598?text=Hello%20Shahzaib%2C%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="btn whatsapp-btn"
>
   Connect With Me
</a>

      <iframe
        src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="250"
        style={{ marginTop: "30px", borderRadius: "12px", border: 0 }}
      />
    </section>
  );
}

export default Contact;