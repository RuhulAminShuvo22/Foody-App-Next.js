const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-200 px-6 py-12">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About Foody App 🍽️
        </h1>
        <p className="text-lg text-gray-600">
          Discover delicious foods, explore global cuisines, and find your next favorite meal with ease.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://i.ibb.co.com/h1mpfd71/food.jpg"
            alt="Food"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Who We Are 👨‍🍳
          </h2>
          <p className="text-gray-600 mb-4">
            Foody App is a modern food discovery platform where users can browse, explore, and learn about different dishes from around the world.
          </p>

          <p className="text-gray-600">
            Whether you are a foodie, a home cook, or just hungry 😋 — we’ve got something for everyone!
          </p>

          <button className="btn btn-primary mt-6">
            Explore Foods
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us 🚀
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="card bg-base-100 shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🍔 Variety</h3>
            <p className="text-gray-600">
              Explore hundreds of dishes from different cuisines worldwide.
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
            <p className="text-gray-600">
              Lightning-fast performance with Next.js for smooth browsing.
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">❤️ User Friendly</h3>
            <p className="text-gray-600">
              Clean UI and easy navigation for the best experience.
            </p>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Ready to explore? 😍
        </h2>
        <button className="btn btn-secondary">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default AboutPage;