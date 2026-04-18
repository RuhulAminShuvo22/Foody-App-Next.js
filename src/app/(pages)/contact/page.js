const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-200 px-6 py-12">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Contact Us 📩
        </h1>
        <p className="text-gray-600">
          Have questions, feedback, or just want to say hello? We’d love to hear from you!
        </p>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-600">+880 1234-567890</p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">✉️ Email</h2>
            <p className="text-gray-600">support@foodyapp.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl p-8">
          <form className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write your message..."
                rows="4"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full mt-4">
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          We’ll get back to you ASAP ⚡
        </h2>
        <p className="text-gray-600">
          Our team is always ready to help you with anything you need.
        </p>
      </div>

    </div>
  );
};

export default ContactPage;