import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    icon: "/images/aviation/promotional-emailers.png",
    text: "Promotional Emailers",
    data: "Gain direct access to the Airline consumer database with our Emailers service, allowing you to deliver customized messages from advertisers straight to customers' inboxes. This effective email marketing platform covers media on Spice Jet, Indigo, and Go Air, providing a targeted approach to reach your audience.",
  },
  {
    id: 2,
    icon: "/images/aviation/boarding-pass.png",
    text: "Boarding Pass",
    data: "A brand presence on boarding passes ensures repeated exposure. Passengers frequently refer to these documents for essential travel information, making it an ideal way to keep a brand top-of-mind throughout their journey.",
  },
  {
    id: 3,
    icon: "/images/aviation/aircraft-wrap.png",
    text: "Tarmac Coach",
    data: "Airport tarmac coaches serve as a means of transporting passengers between the airport terminal and the aircraft, providing a closed environment where passengers can engage with your brand through panel and hand grab branding opportunities.",
  },
  {
    id: 4,
    icon: "/images/aviation/step-ladder.png",
    text: "Step Ladder",
    data: "Upon a passenger's ascent up the ramp, the head-on and side panels come into clear view and present valuable branding opportunities.",
  },
  {
    id: 5,
    icon: "/images/aviation/aircraft-wrap.png",
    text: "Aircraft Wrap",
    data: "Passengers often gaze outside during take-off and landing, taking in the sights of other aircraft. Aircraft wraps, with their eye-catching designs and branding, effectively capture the attention of travelers during these exciting moments. They create a lasting impression that lingers in passengers' minds.",
  },
  {
    id: 6,
    icon: "/images/aviation/product-sampling.png",
    text: "Product Sampling",
    data: "Advertisers have the opportunity to showcase their products, including items like sachets, coupons, brochures, and vouchers, with the assistance of cabin crew during a flight. A direct handover not only enhances the overall impact but also ensures a strong brand recall and a boost in sales. Product sampling and flyer distribution on board lead to a remarkable 99% brand remembrance among passengers.",
  },
  {
    id: 7,
    icon: "/images/aviation/announcement.png",
    text: "Announcement",
    data: "Passengers are highly attentive during in-flight announcements, making this a strategic moment to target the audience when they are most receptive. Advertisers can leverage this captive audience to deliver their message effectively.",
  },
  {
    id: 8,
    icon: "/images/aviation/menu-cards.png",
    text: "Menu Cards",
    data: "Menu cards are conveniently placed inside the back pocket of every passenger seat, offering a valuable opportunity to engage with travelers as they explore their dining choices.",
  },
  {
    id: 9,
    icon: "/images/aviation/headrest-cover.png",
    text: "Headrest Cover",
    data: "Our headrest covers are thoughtfully positioned on every seat, ensuring that as soon as passengers take their seats, the advertisement is front and center. This strategic placement guarantees high visibility and remarkable recall.",
  },
  {
    id: 10,
    icon: "/images/aviation/bulk-head.png",
    text: "Bulkhead",
    data: "Our aircraft features two bulkheads at the front and two at the rear, offering the option to display different creatives on each bulkhead. With no clutter, a spacious format, and extended dwell time, this advertising space guarantees exceptionally high visibility and recall.",
  },
  {
    id: 11,
    icon: "/images/aviation/seatback-devices.png",
    text: "Seatback Devices",
    data: "Our flagship product is strategically placed directly in front of each passenger, right on the meal tray tables. The placement ensures that every seatback within a row is visible to all three passengers seated there, providing extensive exposure.",
  },
  {
    id: 12,
    icon: "/images/aviation/beverage-cups.png",
    text: "Beverage Cups",
    data: "Our beverage cups offer excellent visibility, not only to the user but also to neighboring passengers, creating a broader impact.",
  },
  {
    id: 13,
    icon: "/images/aviation/cable-car.png",
    text: "Inflight Magazine",
    data: "Magazines are a welcome distraction for passengers looking to pass the time during their flights. Placed conveniently in seatback pockets or available upon request from flight attendants, inflight magazines enjoy high readership. This format provides a cost-effective option for brands seeking broad visibility and engagement with travelers.",
  },
  {
    id: 14,
    icon: "/images/aviation/food-tray.png",
    text: "Overhead Cabins",
    data: "The overhead cabins inside the aircraft present the largest available space for inflight advertising. With their sheer size and prominence, these areas offer ample room for impactful branding. Large images and bold fonts are often used to create a memorable impression on passengers.",
  },
  {
    id: 15,
    icon: "/images/aviation/seat.png",
    text: "Meal-Tray Branding",
    data: "During meal services, passengers are a captive audience as they dine or work. Meal-tray branding leverages this moment of heightened attention, effectively conveying messages to passengers in a relaxed and receptive state. It's an ideal way to interact with travelers while they enjoy their in-flight meals.",
  },
  {
    id: 16,
    icon: "/images/aviation/car.png",
    text: "Seat Covers",
    data: "Seat covers provide continuous advertising exposure throughout a passenger's journey. As passengers settle into their seats, they are greeted with branded seat covers, ensuring repeated visibility and brand reinforcement. This format offers a subtle yet effective way to engage travelers.",
  },
  {
    id: 17,
    icon: "/images/aviation/car-1.png",
    text: "Seat Back Inserts",
    data: "Placed strategically on the backs of seats, these inserts guarantee high visibility and impact. Passengers spend the majority of their travel time in an upright position, looking forward. Thus, these inserts are perfectly positioned to capture their attention, offering ample space for creative messaging and branding.",
  },
  {
    id: 18,
    icon: "/images/aviation/car-1.png",
    text: "Headrest Covers",
    data: "Our headrest covers are thoughtfully positioned on every seat, ensuring that as soon as passengers take their seats, the advertisement is front and center. This strategic placement guarantees high visibility and remarkable recall.",
  },
  {
    id: 19,
    icon: "/images/aviation/menu.png",
    text: "Inflight Menu Cards",
    data: "Menu cards are conveniently placed inside the back pocket of every passenger seat, offering a valuable opportunity to engage with travelers as they explore their dining choices.",
  },
  {
    id: 20,
    icon: "/images/aviation/video.png",
    text: "Inflight Video",
    data: "Positioned as premium advertising spots, inflight videos have the power to captivate passengers during two crucial moments: take-off and landing. Passengers are required to be seated and attentive during these phases, creating a captive audience eagerly awaiting entertainment or information. This prime advertising real estate ensures that brand messages leave a lasting impact.",
  },
  {
    id: 21,
    icon: "/images/aviation/suitcase.png",
    text: "Baggage Tags",
    data: "Advertising on baggage tags is a clever strategy to stay with travelers even after they disembark from the flight. These branded tags accompany passengers on their entire journey, extending the reach of the advertising message.",
  },
];

const BannerAviation = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state variable
  const [selectedCard, setSelectedCard] = useState(null); // Store the selected card
  const bannerRef = useRef(null);
  const modalRef = useRef(null); // Ref for the modal element

  useEffect(() => {
    const bannerElement = bannerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The BannerAviation component is in the viewport
          if (currentIndex < items.length) {
            setCards((prevCards) => [...prevCards, items[currentIndex]]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        }
      },
      {
        root: document.getElementById("containerElement"), // Use the viewport as the root
        rootMargin: "0px", // No offset
        threshold: 0.2, // Trigger when 10% of the component is visible
      }
    );

    // Start observing the BannerAviation component
    if (bannerElement) {
      observer.observe(bannerElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (bannerElement) {
        observer.unobserve(bannerElement);
      }
    };
  }, [currentIndex]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < items.length) {
        setCards((prevCards) => [...prevCards, items[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, items]);

  // Function to handle card click and open the modal
  // Function to handle card click and open the modal
  const handleCardClick = (card) => {
    console.log("Card clicked:", card); // Debugging statement
    setSelectedCard(card); // Set the selected card
    setIsModalOpen(true); // Open the modal
  };

  console.log("isModalOpen:", isModalOpen); // Debugging statement
    // Function to handle clicks outside the modal
    const handleModalClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // Click occurred outside the modal, close it
      setIsModalOpen(false);
    }
  };
  return (
    <div className={`banner-aviation ${currentIndex < items.length ? 'visible' : ''}`} ref={bannerRef} id='containerElement'>
          <div className="container">
          <h6 className="banner-av-title">Types of Inflight Advertising in Bangalore</h6>
          <p className="banner-av-desc">Our advertising agency in Bangalore offers a diverse range of inflight advertising formats, allowing brands to choose the one that best suits their objectives</p>
        <div className="grid-container">
          {cards.map((item) => (
            <div
              className="grid-item animate"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              {" "}
              {/* Add onClick event */}
              <img src={item.icon} loading="lazy" alt={item.text} className="item-icon" />
              <p className="item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Render the modal conditionally */}
      {/* Render the modal conditionally */}
    {isModalOpen && selectedCard && (
      <div className="modal" ref={modalRef} onClick={handleModalClickOutside}>
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
         <div className="modal-text">
         <img src={selectedCard.icon} loading="lazy" alt={selectedCard.text} className="modal-icon item-icon" />
          <p className="modal-text item-text">{selectedCard.text}</p>
          <p className="modal-text ">{selectedCard.data}</p>
         </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default BannerAviation;
