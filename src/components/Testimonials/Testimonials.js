import React from "react";
import "./testimonials.css";
import pic from "../../assets/pic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
const Testimonials = () => {
  const clients = [
    {
      id: 1,
      img: pic,
      name: "John Doe",
      title: "CEO Abc Company",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia",
    },
    {
      id: 2,
      img: pic,
      name: "John Doe",
      title: "CEO Abc Company",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia",
    },
    {
      id: 3,
      img: pic,
      name: "John Doe",
      title: "CEO Abc Company",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia",
    },
  ];
  return (
    <section className="testimonials">
      <div className="container">
        <div className="heading">
          <h2 className="title">Testimonials</h2>
          <p className="section-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client) => {
            return (
              <SwiperSlide key={client.id}>
                <div className="testt">
                  <img src={client.img} />
                  <h5 className="client-name">{client.name}</h5>
                  <p className="client-job">{client.title}</p>
                  <div className="review">{client.review}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
