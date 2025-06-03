import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ExploreCards from "./ExploreCards";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const [selected, setSelected] = useState(0);

  const apartmentImages = [
    { id: 1, src: "/room1.jpg", title: "Hostel ABC" },
    { id: 2, src: "/room2.jpg", title: "Hostel XYZ" },
    { id: 3, src: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Hostel 123" },
    { id: 4, src: "/room3.jpg", title: "Hostel ABC" },
    { id: 5, src: "/room4.jpg", title: "Hostel XYZ" },
    { id: 6, src: "/room5.jpg", title: "Hostel 123" },
    { id: 7, src: "/room6.jpg", title: "Hostel ABC" },
    { id: 8, src: "/room7.jpg", title: "Hostel XYZ" },
    { id: 9, src: "/room8.jpg", title: "Hostel 123" },
  ];

  const villaImages = [
    { id: 1, src: "/uni1.jpg", title: "Art Block" },
    { id: 2, src: "/uni2.jpg", title: "Business Block" },
    { id: 3, src: "/uni4.jpg", title: "Architecture Block" },
    { id: 4, src: "/uni3.jpg", title: "Enterance" },
    { id: 5, src: "/uni5.jpg", title: "Library" },
    { id: 6, src: "/uni6.jpg", title: "Gym" },
    { id: 7, src: "/uni7.jpg", title: "Sportorium" },
    { id: 8, src: "/uni8.jpg", title: "Auditorium" },
    { id: 9, src: "/uni9.jpg", title: "Sports Facilities" },
  ];

  const forRentImages = [
    { id: 1, src: "https://www.sharda.ac.in/attachments/infrastructure_images/mess1.png", title: "Harbor View Apartments" },
    { id: 2, src: "https://jkkn.ac.in/wp-content/uploads/2023/07/boys-hostel-mess-300x300.png", title: "Maplewood Residences" },
    { id: 3, src: "https://c7.alamy.com/comp/2WJ0XBG/diverse-couple-having-lunch-at-a-restaurant-their-faces-lit-up-with-joy-as-they-enjoying-tasty-food-2WJ0XBG.jpg", title: "Sunrise Terrace" },
    { id: 4, src: "https://c7.alamy.com/comp/2EP7D4Y/rich-breakfast-assortment-with-selection-of-healthy-food-coffee-and-juice-2EP7D4Y.jpg", title: "Lakeside Haven" },
    { id: 5, src: "https://www.vandanish.webflowindia.com/projects/5.jpg", title: "Cedar Ridge Rentals" },
    { id: 6, src: "https://cutmap.ac.in/wp-content/uploads/mess.jpg", title: "Willow Creek Flats" },
    { id: 7, src: "https://mealpe.app/wp-content/uploads/2024/04/MealPe-Best-Hostel-Management-Software-for-Mess-Canteen.jpg", title: "Aspen Heights" },
    { id: 8, src: "https://www.hostel.mitindia.edu/assets/images/Mega%20Mess%20at%20MIT%20Main%20Hostel/mess-facility-5.jpg", title: "Pineview Estates" },
    { id: 9, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJrvDwOOPonaAYHEIFw_-pR-NMyaMFyUl7A&s", title: "Riverbend Lofts" },
  ];

  const getCards = () => {
    if (selected === 0) return apartmentImages;
    if (selected === 1) return villaImages;
    if (selected === 2) return forRentImages;
    return [];
  };

  useEffect(() => {
    gsap.set([".exploreltdiv #explorelt", ".explorertdiv .explorert"], {
      opacity: 0,
      x: 0,
    });

    gsap.fromTo(
      ".exploreltdiv #explorelt",
      { x: -200, y: 200, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".exploreltdiv",
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      ".explorertdiv .explorert",
      { x: 200, opacity: 0 },
      {
        x: 0,
        duration: 0,
        opacity: 1,
        stagger: -1,
        scrollTrigger: {
          trigger: ".explorertdiv",
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".explorepage",
      { scale: 1 },
      {
        scale: 0.6,
        scrollTrigger: {
          trigger: ".explorepage",
          start: "bottom 200px",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }
    );

    gsap.utils.toArray(".card-row").forEach((row, i) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const rows = [];
  const cards = getCards();
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(cards.slice(i, i + 3));
  }

  return (
    <div id="explore" className="explorepage w-full h-auto z-10 relative flex flex-col">
      <div className="flex justify-between items-center mx-24">
        <div className="exploreltdiv">
          <h1
            id="explorelt"
            className="text-[70px] text-white font-montserrat my-14"
          >
            Explore Our Hostels
          </h1>
        </div>
        <div id="explorert-id" className="explorertdiv flex items-center justify-between gap-2">
          {["Hostels", "Campus", "Mess"].map((text, index) => (
            <h1
              key={index}
              className={`explorert text-[20px] rounded-lg font-tajawal p-3 cursor-pointer transition-transform transform duration-300 ${selected === index
                ? "bg-white text-gray-800 scale-110"
                : "bg-gray-800 text-white hover:scale-105"
                }`}
              onClick={() => setSelected(index)}
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="card-row flex flex-wrap w-full justify-center gap-8 items-center mb-8">
          {row.map((card) => (
            <ExploreCards key={card.id} title={card.title} images={card.src} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Explore;
