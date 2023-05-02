import React from 'react'
// import RestaurantsItem from './RestaurantsItem';

// const RestaurantsList = () => {
//     return (
//       <div className="Restaurants-list">
//         {restaurants.map((restaurant) => (
//           <RestaurantsItem key={restaurant.id} restaurant={restaurant} />
//         ))}
//       </div>
//     );
//   };

function RestaurantsList() {
      return (
        <div className='container'>
            <h1>THE RESTAURANTS IN NAIROBI</h1>
            <div className='cards'>
                <img src="https://static.wixstatic.com/media/4b855c29f0fa4015b5e1adfda7e53fde.jpg/v1/fill/w_636,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4b855c29f0fa4015b5e1adfda7e53fde.jpg" alt="" />
                <h2> Restaurants around town</h2>
            </div>
    
            <div className='text'>
                <p3>
                    Crowne Plaza Nairobi Airport, an IHG Hotel
                    Airport
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/243333654.webp?k=0ef81e94cca84038e6db41038bb5f1942b7c7f529a9449f841322ed139381410&o=&s=1" alt="" />
                    <br />
                    Ibis Styles
                    Westlands
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/201386458.webp?k=e7ff6d70d51eef28f0e9f2387effd79df9756df5c290a0dc29d23d275a79ea9e&o=&s=1" alt="" />
                    <br />
                    The Marvel House
                    National Museum
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/314234863.webp?k=a5c15be264b22e3ed81e04f0cb97cf69989a0d3148e81d2d7f0381a833a38a65&o=&s=1" alt="" />
                    <br />
                    Natural Oak ApartmentsOpens in new window
                    Kilimani
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/33151317.webp?k=c93fd6a1e2c763e280aa321ce67cb244499109bc3dbeee9e1bea5b18f32ab1f9&o=&s=1" alt="" />
                    <br />
                    After 40 Hotel
                    CBD
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/433508212.webp?k=350760ea584d884113a03fad8c2c77ec4f55711ef85616f59deb626589de1c2e&o=&s=1" alt="" />
                    <br />
                    Trademark Hotel
                    Gigiri 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/309263263.webp?k=921ac0329d260cfb82ed6ffcb7a611b6fc3f3c5f4d6bb423da8831d5062433e4&o=&s=1" alt="" />
                    <br />
                    The Panari Hotel
                    Mombasa Road 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/73775602.webp?k=b7428692ae6d05159ff9032648c9f7e9a7391d534b62a7fc2bf0f5af91cd0828&o=&s=1" alt="" />
                    <br />
                    Kandiz Exquisite
                    Lavington 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/143909683.webp?k=773aef6766dcd561d841e9648a3a83e49f4f669df1f56ce181c5f7024b6d387e&o=&s=1" alt="" />
                    <br />
                    Villa Rosa Kempinski
                    Westlands
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/449471904.webp?k=dae42b326f206378fc3030c9c2d17e59b441eb65bc973d9eec26a953773a0f55&o=&s=1" alt="" />
                    <br />
                    Melili HotelOpens in new window
                    Westlands 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/68878671.webp?k=a64e90f752c963384d1a380591a42a882cde7975a08c3bc5917a57920fb031eb&o=&s=1" alt="" />
                    <br />
                    Hilton Garden
                    Airport 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/130653877.webp?k=8d8867fb83f9181fe0d418b548f76f6670e3f2b7e35fd002fad05e54d2684f0f&o=&s=1" alt="" />
                    <br />
                    Kahama Hotel
                    City Center 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/92118133.webp?k=6a12fb048d434490732d732ad9328eba427cce97a17111b0e94c0f1e770e5122&o=&s=1" alt="" />
                    <br />
                    Jatiq Homes
                    KICC 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/449547672.webp?k=cb0e3a610215d06d774a0d26e33ea6762ea6aef011c50f700ed053c44cdd4d08&o=&s=1" alt="" />
                    <br />
                    Lenana Suites
                    Lenana 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/407806039.webp?k=c25ae7152a2ee3e242ceabcc187db6381ebd986594caa0dd5d10a5eb0fffc3e5&o=&s=1" alt="" />
                    <br />
                    Deuts Four Seasons HotelOpens in new window
                    Parklands 
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/268074450.webp?k=31d9e391a0da308ba92d239366023029429928fe8df3e97edd7aa4614126f00e&o=&s=1" alt="" />
                </p3>
            </div>
            <button><a href="RestaurantsItem.js">MORE</a></button>
        </div>
      );
    }  

export default RestaurantsList;