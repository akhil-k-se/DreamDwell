import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ExploreCards from "./ExploreCards";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const [selected, setSelected] = useState(0);

  const apartmentImages = [
    { id: 1, src: "https://images.pexels.com/photos/14002093/pexels-photo-14002093.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Azure Heights Luxury Residence" },
    { id: 2, src: "https://images.pexels.com/photos/27023868/pexels-photo-27023868/free-photo-of-a-living-room-with-red-chairs-and-a-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Serenity Gardens Apartments" },
    { id: 3, src: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Harmony Tower Suites" },
    { id: 4, src: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Sunset View Residences" },
    { id: 5, src: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Urban Oasis Lofts" },
    { id: 6, src: "https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Vista Grande Estates" },
    { id: 7, src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Eclipse Ridge Apartments" },
    { id: 8, src: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Celestial Heights Living" },
    { id: 9, src: "https://images.pexels.com/photos/5490389/pexels-photo-5490389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: " Starlight Haven Apartments" },
  ];

  const villaImages = [
    { id: 1, src: "https://images.pexels.com/photos/8859821/pexels-photo-8859821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Serenity Grove Villa" },
    { id: 2, src: "https://images.pexels.com/photos/2964163/pexels-photo-2964163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Golden Sands Villa" },
    { id: 3, src: "https://images.pexels.com/photos/903282/pexels-photo-903282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Whispering Pines Retreat" },
    { id: 4, src: "https://images.pexels.com/photos/3205909/pexels-photo-3205909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Crystal Bay Villa" },
    { id: 5, src: "https://images.pexels.com/photos/8085338/pexels-photo-8085338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Amberwood Estate" },
    { id: 6, src: "https://images.pexels.com/photos/23932604/pexels-photo-23932604/free-photo-of-villas-surrounded-by-the-forest.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Tranquil Oasis Villa" },
    { id: 7, src: "https://images.pexels.com/photos/8159777/pexels-photo-8159777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Sunset Ridge Villa" },
    { id: 8, src: "https://images.pexels.com/photos/10761018/pexels-photo-10761018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Silverleaf Manor" },
    { id: 9, src: "https://images.pexels.com/photos/13716070/pexels-photo-13716070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Majestic Horizon Villa" },
  ];

  const forRentImages = [
    { id: 1, src: "https://images.pexels.com/photos/5748730/pexels-photo-5748730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Harbor View Apartments" },
    { id: 2, src: "https://images.pexels.com/photos/5490389/pexels-photo-5490389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Maplewood Residences" },
    { id: 3, src: "https://images.pexels.com/photos/6373480/pexels-photo-6373480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Sunrise Terrace" },
    { id: 4, src: "https://images.pexels.com/photos/6045329/pexels-photo-6045329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Lakeside Haven" },
    { id: 5, src: "https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Cedar Ridge Rentals" },
    { id: 6, src: "https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Willow Creek Flats" },
    { id: 7, src: "https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Aspen Heights" },
    { id: 8, src: "https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Pineview Estates" },
    { id: 9, src: "https://images.pexels.com/photos/6538932/pexels-photo-6538932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Riverbend Lofts" },
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
            Explore Our Properties
          </h1>
        </div>
        <div id="explorert-id" className="explorertdiv flex items-center justify-between gap-2">
          {["Apartments", "Villas", "For Rent"].map((text, index) => (
            <h1
              key={index}
              className={`explorert text-[20px] rounded-lg font-tajawal p-3 cursor-pointer transition-transform transform duration-300 ${
                selected === index
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
