import React, { useState } from 'react'
import './details.css'

const Details = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="details">
      <h2 className="section__title">Details</h2>
      <span className="section__subtitle">you know, some specifics</span>

      <div className="services__container container grid">
        {/**
         *
         * WHERE
         *
         */}
        <div className="services__content">
          <div>
            <i className="uil uil-location-point services__icon"></i>
            <h3 className="services__title">Where?</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                12 Seventh St, Harwich, MA 02645
              </h3>

              <p className="services__modal-description">
                <a
                  href="https://www.google.com/maps/place/12+7th+St,+Harwich,+MA+02645/@41.716446,-70.2162057,11z/data=!4m13!1m7!3m6!1s0x89fb3f8c916d7999:0x4c698d1cc8053267!2s12+7th+St,+Harwich,+MA+02645!3b1!8m2!3d41.716442!4d-70.07613!3m4!1s0x89fb3f8c916d7999:0x4c698d1cc8053267!8m2!3d41.716442!4d-70.07613"
                  target="_blank"
                  style={{ color: 'steelblue' }}
                  onMouseEnter={(e) => (e.target.style.color = 'coral')}
                  onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                >
                  Show me on a map
                </a>
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    This is a private residence, home to some{' '}
                    <span style={{ fontStyle: 'italic' }}>highly</span>{' '}
                    recognizable golden retrievers, so be careful not to share
                    the location 🤫
                  </p>
                </li>
                <li className="services_modal-service">
                  <p className="services__modal-info">
                    Please and thank you 🙏
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**
         *
         * TRANSPO / PARKING
         *
         */}
        <div className="services__content">
          <div>
            <i className="uil uil-car-sideview services__icon"></i>
            <h3 className="services__title">
              Transpo/ <br /> Parking
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">To and from</h3>
              <p className="services__modal-description">
                Since this is all going down at a home, on site parking really
                isn't a viable option for all. But, fret not, it's all good. If
                ambiguity stresses you out, or you have a need for convenience,
                just reach out and we can coordinate
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Car pool, car pool, car pool. Regardless of where you park,
                    let no seat go butt-less
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    There's a{' '}
                    <a
                      href="https://www.google.com/maps/dir/12+7th+Street,+Harwich,+MA/Park+%26+Ride,+Pleasant+Lake+Ave,+Harwich,+MA+02645/@41.7107171,-70.0829232,16z/am=t/data=!4m13!4m12!1m5!1m1!1s0x89fb3f8c916d7999:0x4c698d1cc8053267!2m2!1d-70.07613!2d41.716442!1m5!1m1!1s0x89fb3f9460a57f13:0xbba18133d094c6a5!2m2!1d-70.0768963!2d41.7048871"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      parking lot{' '}
                    </a>
                    near by 🅿️
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    If you are staying over for the night, just Uber or Lyft 🤯
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Also, if you know someone posting up for the night, park
                    where they are staying and make your way from there
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    We are working on setting up some sort of shuttle as well,
                    more to come on that... 🚙
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**
         *
         * WHERE TO STAY
         *
         */}
        <div className="services__content">
          <div>
            <i className="uil uil-home services__icon"></i>
            <h3 className="services__title">Where to stay</h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Some potential options</h3>
              <p className="services__modal-description">
                Word to the wise: it will be summer in the Cape so 1. stuff will
                fill up fast--so sooner than later means more options than not,
                and 2. after the new year, some of the listings below
                instantiate two night minimum stays. Don't sleep 😴 and get beat
                by their swindlings 🤬!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      href="https://www.airbnb.com/a/stays?c=.pi0.pk36239956_25650614176&ghost=true&gclid=Cj0KCQjwk5ibBhDqARIsACzmgLR6wO4xxO1ptqURpZru_V4GI-TK7KrNAQw9ZodwoC8Iu8ebbkazqV0aAiUDEALw_wcB"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      Air BnB
                    </a>
                    , assemble your squad and divy up the space ⭐️
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Chatham Motel{' '}
                    <a
                      href="https://chathammotel.com"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ambassador Inn & Suites{' '}
                    <a
                      href="https://www.guestreservations.com/ambassador-inn-suites-south-yarmouth/booking"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ocean Side Motel{' '}
                    <a
                      href="http://osmotel.com/"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aiden By Best Western at Cape Point{' '}
                    <a
                      href="https://www.bestwestern.com/en_US/book/west-yarmouth/hotel-rooms/aiden-by-best-western-cape-point/propertyCode.22070.html"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    All Seasons Resort, Yarmouth{' '}
                    <a
                      href="https://www.allseasons.com/?gclid=CjwKCAjw8JKbBhBYEiwAs3sxN99oAgV7dH33i2szGVNYbCsGQfiSupwXGVM34PBZB4Za709_c1o4XBoCLK8QAvD_BwE"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Holiday Hill Inn{' '}
                    <a
                      href="http://www.holidayhillinnandsuites.com/"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Jonathan Edwards Motel{' '}
                    <a
                      href="https://www.reservations.com/hotel/jonathan-edwards-motel?rmcid=tophotels4&utm_source=googleads&gclid=CjwKCAjw8JKbBhBYEiwAs3sxN8kMx94UO0g2BySyQ4LA_rt9TNmpN9Bv8Oi4sgaZxJaPqJViztpgvhoCFagQAvD_BwE"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Tide Water Inn{' '}
                    <a
                      href="https://www.tidewatercapecod.com/"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Comfort Inn Hyannis{' '}
                    <a
                      href="https://www.choicehotels.com/massachusetts/hyannis/comfort-inn-hotels/ma217?mc=llgoxxpx"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Travel Lodge, Dennis{' '}
                    <a
                      href="https://www.wyndhamhotels.com/travelodge/west-dennis-massachusetts/travelodge-cape-cod-area/overview?CID=LC:TL::GGL:RIO:National:11835&iata=00093796"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Guest Lodge, Dennis{' '}
                    <a
                      href="https://www.guestlodge.net/"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Hampton Inn and Suites, West Yarmouth{' '}
                    <a
                      href="https://www.hilton.com/en/hotels/hyncchx-hampton-suites-cape-cod-west-yarmouth/?SEO_id=GMB-AMER-XS-HYNCCHX&y_source=1_MjA4NTM2NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                      target="_blank"
                      style={{ color: 'steelblue' }}
                      onMouseEnter={(e) => (e.target.style.color = 'coral')}
                      onMouseLeave={(e) => (e.target.style.color = 'steelblue')}
                    >
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/***
         *
         * POTLUCK
         *
         */}
        <div className="services__content">
          <div>
            <i className="uil uil-pizza-slice services__icon"></i>
            <h3 className="services__title">Potluck dealio</h3>
          </div>

          <span onClick={() => toggleTab(4)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Bring something and try everything 😋
              </h3>
              <p className="services__modal-description">
                Just to reiterate:{' '}
                <span className="bold">
                  no one is expected to bring anything
                </span>
                . <div>For real.</div> BUT, in the spirit of the event (and
                really, the future we are embarking on), we want this to be a
                day where our worlds come together in an authentic, honest, and
                meaningful way. And so, approaching the day communally, bringing
                everyone together, seems like the perfect sort of ceremony. You
                don't need to consult with us, or anyone, about what you are
                thinking of bringing. We just ask that whatever you bring be
                something you enjoy (food, drink, whatever) and would like to
                share with others. So bring what you can, if you can, but bring
                yourself above all else. So many thanks in advance for making
                this possible ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
