import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-14 md:py-24 bg-white  text-zinc-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Delicious Experiences Shared by Our Foodies!
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pl-12">
            <p className="text-lg opacity-80">
              Discover what our community of food lovers has to say about their
              unforgettable meals and culinary adventures with Foodie Us!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 lg:p-12 h-full"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="max-w-full h-auto rounded-full mb-6 border"
                width="100"
              />
              <h4 className="text-xl font-medium mb-1">{testimonial.name}</h4>
              {/* <p className="mb-6">{renderStars(testimonial.rating)}</p> */}
              <p className="opacity-80">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
