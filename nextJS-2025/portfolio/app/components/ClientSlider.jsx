"use client"
import Image from "next/image";
import Slider from "react-slick";


const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const clients = [
    { id: 1, src: "/client1.png", alt: "Client 1" },
    { id: 2, src: "/client2.png", alt: "Client 2" },
    { id: 3, src: "/client3.png", alt: "Client 3" },
    { id: 4, src: "/client4.png", alt: "Client 4" },
    { id: 5, src: "/client5.png", alt: "Client 5" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Our Clients
          </h2>
          <hr className="mt-2 w-16 border-t-4 border-pink-500 mx-auto" />
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="px-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex justify-center items-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
