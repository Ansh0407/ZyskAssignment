import React from 'react';
import inboxIcon from '../assets/images/inbox.png';
import lightningIcon from '../assets/images/instant.png';
import reportIcon from '../assets/images/report.png';
import chatIcon from '../assets/images/customer.png';
import toolsIcon from '../assets/images/connect.png';
import teamIcon from '../assets/images/people.png';

const Features = () => {
  const featureData = [
    {
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      icon: inboxIcon,
    },
    {
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      icon: lightningIcon,
    },
    {
      title: "Manage your team with reports",
      description:
        "Measure what matters with unlimited easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
      icon: reportIcon,
    },
    {
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
      icon: chatIcon,
    },
    {
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
      icon: toolsIcon,
    },
    {
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
      icon: teamIcon,
    },
  ];

  return (
    <section className="p-6 md:p-10 font-inter text-center">
      {/* Heading */}
      <h2 className="text-sm md:text-base font-semibold text-red-500 mb-2">
        Features
      </h2>
      <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
        Analytics that feels like it’s from the future
      </h3>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
