import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render(){
    return(
      <div className="homepage-container">
        <div>
            <img className="hero-image" src={"http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495783765/vintage-mug-tea-photos-wood-texture_ynuvb5.jpg"} alt/>
        </div>
        <div className="homepage-content">
          <div className="homepage-info-container">
            <div className="homepage-info">
              <div className="homepage-info-1">
                <h2>Show up for tea time</h2>
                <p>You and a few others join a host at a cafe</p>
              </div>
              <div className="homepage-info-1">
                <h2>See what happens</h2>
                <p>That's it. No strings attached.</p>
              </div>
              <div className="homepage-info-1">
                <h2>Have a real conversation</h2>
                <p>You talk for two hours about anything.</p>
              </div>
            </div>
          </div>
          <div className="homepage-body">
            <h3 className="homepage-why">SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
            <div className="homepage-entry">
              <img className="homepage-image" src={"http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495783182/2_ypgkbm.png"} alt="cartoon-figures" />
              <div className="homepage-blurb">
                <h2>It's weird.</h2>
                <p>
                  Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.
                </p>
              </div>
            </div>
            <div className="homepage-entry">
              <div className="homepage-blurb">
                <h2>We won't meet otherwise</h2>
                <p>
                  In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity. 
                </p>
              </div>
              <img className="homepage-image" src={"http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495783169/5_juwqyv.png"} alt="cartoon-figures" />
            </div>
            <div className="homepage-entry">
              <img className="homepage-image" src={"http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495783175/4_s59fp1.png"} alt="cartoon-figures" />
              <div className="homepage-blurb">
                <h2>Your hands are made for high fiving!</h2>
                <p>
                  And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Tea time has real humans! #nofilter!
                </p>
              </div>
            </div>
            <div className="host-button-container">
              { this.props.session.currentUser ? <Link className='host-button' to={'/cities'}>LET'S GET TEA!</Link> : <Link className='host-button' to={'/signUp'}>LET'S GET TEA!</Link>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
