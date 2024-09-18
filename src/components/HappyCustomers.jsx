import React from 'react'
import './HappyCustomers.css'
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
const persons = [
    { img: person1, name: "Clare Gupta" },
    { img: person2, name: "Rogie Slater" },
    { img: person3, name: "John Doe" },
  ];
const HappyCustomers = () => {
  return (
    <div className="home-customers">
    <div className="home-customers-heading abril-fatface-regular">
      Happy Customers
    </div>
    <div className="home-customers-reviews">
      {persons.map((item) => (
        <div className="customer-review">
          <img className="customer-img" src={item.img} />
          <p className="customer-review-text mukta-mahee-regular">
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics,
            a large language ocean.”
          </p>
          <p className="customer-name">__{item.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HappyCustomers