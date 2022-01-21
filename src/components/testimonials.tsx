import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="px-4 py-14 md:py-24 bg-white text-zinc-900">
      <div className=" container px-4 mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl md:text-[40px]  px-10 font-bold ">
            Delicious Experiences Shared by Our Foodies!
          </h2>

          <div className="">
            <p className="text-lg opacity-80">
              Discover what our community of food lovers has to say about their
              unforgettable meals and culinary adventures with Foodie Us!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 lg:p-12 h-full">
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
