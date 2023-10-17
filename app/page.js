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
          <div className='aboutmecontent'>I am an Advocate and Real Estate Broker who will find you the ideal property in and around Kottayam and Changancherry.</div>
        </div>
      </div>
    </main>
  )
}
