import React, { useState } from "react";
import info1 from "../Images/info1.svg";
import info2 from "../Images/info2.svg";
import info3 from "../Images/info3.svg";
import "./Recommend.css";

const Recommend = () => {
    const data = [
    {
        "open": "Open Monday - Saturday",
        "title": "Nairobi Railway Museum",
        "subTitle": "opened in 1971 it contains exhibits from the defunct East African Railways and also houses a local art centre for gifted youth to showcase their talent.",
        "image": "https://lh3.googleusercontent.com/p/AF1QipPaba65hw-rMg4iRPsuqgZ845U6FVTaTJiwAPGE=s1360-w1360-h1020"
    },
    {
        "open": "Open everyday of the week",
        "title": "Nairobi Butterfly Sanctuary",
        "subTitle": "It is the largest center after the British Museum of Natural History. It boasts more than 1000 species of butterflies.",
        "image": "https://live.staticflickr.com/3199/3073306497_dc60143b24_z.jpg"
    },
    {
        "open": "Open everyday of the week",
        "title": "Bomas of Kenya",
        "subTitle": "Experience the rich diversity of Kenya's culture  via daily cultural performances and a variety of traditional artifacts and structures.",
        "image": "https://i.pinimg.com/564x/a0/45/66/a04566962f2f3f1858eb59f34e83a05b.jpg"
    },
    {
        "open": "Open everyday of the week",
        "title": "Nairobi Art Gallery",
        "subTitle": "A fantastic little museum located at the heart of Nairobi that is dedicated to showcasing African art in its full beauty.",
        "image": "https://i.pinimg.com/564x/58/37/e7/5837e7b78183c837cb37b9bbca27653f.jpg"
    },
    {
        "open": "Open Monday - Saturday",
        "title": "Ngong Hills",
        "subTitle": "They are peaks in a ropenge along the Great Rift Valley. Very openeal place for enjoying the outdoors and hiking either alone or with a group of friends. Enjoy birdwatching, picnicking, hiking and ziplining among other fun activities.",
        "image": "https://i.pinimg.com/564x/66/83/96/668396de82b6d07898e034d8af32b862.jpg"
    },
    {
        "open": "Open everyday of the week",
        "title": "The Lord Erroll",
        "subTitle": "Fine dining experiences in Nairobi do not come any better than this with a theme of the early 1900s, there is nothing not to love.",
        "image": "https://i.pinimg.com/564x/9b/ad/b7/9badb72d67a8910649dfb5a890a61141.jpg"
    }
]

const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
  ];

const [active, setActive] = useState(1);
return (
  <section id="recommend">
    <div className="title">
      <h2>Recommended Destinations</h2>
    </div>
    <div className="packages">
      <ul>
        {packages.map((pkg, index) => {
          return (
            <li
              className={active === index + 1 ? "active" : ""}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          );
        })}
      </ul>
    </div>
    <div className="destinations">
      {data.map((destination) => {
        return (
          <div className="destination">
            <img src={destination.image} className="destinationImage" alt="" />
            <h3>{destination.title}</h3>
            <p>{destination.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="" />
                <img src={info2} alt="" />
                <img src={info3} alt="" />
              </div>
              <h4>{destination.open}</h4>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
}

export default Recommend;