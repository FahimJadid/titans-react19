const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    // console.log(formInputData);
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

    <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
          />

          <textarea className="form-control" rows="10" name="message" placeholder="Enter your Message" required autoComplete="off"></textarea>

          <button type="submit" value="send">Send</button>
        </form>
    </div>
    </section>
  );
};

export default Contact;
