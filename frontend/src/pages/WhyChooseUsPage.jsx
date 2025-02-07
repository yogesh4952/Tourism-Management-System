export default function WhyChooseUsPage() {
    const features = [
      {
        title: "Prime Locations",
        description: "Situated in the most sought-after destinations worldwide",
        icon: "📍",
      },
      {
        title: "5-Star Service",
        description: "Exceptional service that exceeds expectations",
        icon: "⭐",
      },
      {
        title: "Expert Staff",
        description: "Dedicated team of hospitality professionals",
        icon: "👥",
      },
      {
        title: "Easy Booking",
        description: "Simple and secure reservation process",
        icon: "📅",
      },
    ];
  
    return (
      <section className="py-16  text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold ">Why Choose Us</h2>
          <p className="mt-2">
            We provide exceptional service and unforgettable experiences
          </p>
  
          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6  rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className=" mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }