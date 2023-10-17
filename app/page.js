import './page.css'
export default function Home() {
  return (
    <main>
      <div className="banner">
        <div className='bannertagline'>Want to <span className='emphasistagline'>Sell</span> your Property? or Help you <span className='emphasistagline'>Buy</span> the Property of your <span className='emphasistagline'>Dream</span>?</div>
        <div className='bannerimage'><img src='/assests/bannernature.jpg'/></div>
      </div>
      <div className='aboutme'>
        <div className='headshot'><img src='/assests/aboutmevector.png'/></div>
        <div className='aboutmedes'>
          <div className='aboutmeheading'>Hi, I am Alexen Kavalam</div>
          <div className='aboutmecontent'>
            As an experienced Legal Counsel and Real Estate Broker, I specialize in connecting you with the finest properties in Kottayam and Changancherry. Whether you desire a home with a prime location, stunning views, or competitive prices, I'm here to make your real estate dreams come true. Contact me today to embark on your property journey and uncover the best real estate options in Kottayam and Changancherry.
          </div>
        </div>
      </div>
      <div className='communication'>
        <div className='floatingcard'>
          <div className='contacttitle'>Contact Me</div>
          <div>Mobile Number: 9446392308</div>
          <div>Whatsapp Number: 9446392308</div>
        </div>
      </div>
    </main>
  )
}
