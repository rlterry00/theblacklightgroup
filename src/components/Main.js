import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import pic02 from '../images/pennymock.png'
import pic03 from '../images/tachina-lee--wjk_SSqCE4-unsplash.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            The Blacklight Group can help bring your ideas to life. We
            specialize in small team app development, web development, project
            management, branding and graphic design. We also handle digital
            marketing as well as market anaylitics on your ideas. We are here to
            help guide your clientele through the customer experience tunnel.
            Already have a team? We can easily intergrate with your business to
            be a great addition to a specialized area you need us to focus on.
            We would love to hear from you!{' '}
            <span className="warning">
              To make things easier since we are now acquainted press the last
              light switch on the home screen to contact us!
            </span>
          </p>
          {close}
        </article>

        <article
          id="pennybank"
          className={`${this.props.article === 'pennybank' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Penny Bank Online</h2>
          <span className="image main">
            <img className="pb" src={pic02} alt="" />
          </span>
          <div>
          <span>
            <a href="https://www.facebook.com/pennybankonline">
              <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/pennybankonline/">
              <i class="fa fa-instagram fa-3x social" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/PennyBankOnline">
              <i class="fa fa-twitter fa-3x social" aria-hidden="true"></i>
            </a>
          </span>
          </div>
          <p>
            Visit and Subscribe to be informed of app releases.
            <br />
            <a className="warning" href="https://www.pennybank.online">
              Pennybank.online
            </a>
          </p>
          <p>
            Penny Bank is a mobile application in current development by The
            Blacklight Group. The application is designed to help children learn
            responsibility through finance. We believe at The Blacklight Group
            the future of the debit card will be digital. One of the key
            features of the app will be the mobile wallet and leveraging power
            between parent and child to help with proactive deciscion making.
            For more details please visit the official website for the app and
            follow us on social media.
          </p>
          {close}
        </article>

        <article
          id="thinktank"
          className={`${this.props.article === 'thinktank' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Think Tank</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            What is a Think Tank? A Think Tank is a research institute which performs 
            research and advocacy concerning topics such as social policy, political strategy, 
            economics, military, technology, and culture. There are 7,500 Think Tanks in the world 
           including over 1,900 Think Tanks in the United States. We at The Blacklight Group
            believe at change on a micro level.  Our main concern is how technology can help
            in problem solving.  We are in the works of building a network of Think Tanks 
            to contribute to progression.  If you are interested in being involved contact us on the contact lightswitch
            on the home page. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form action="https://formspree.io/contact@theblacklightgroup.org" method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/GroupBlacklight"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/The-Blacklight-Group-103614764377371/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/theblacklightgroup" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
