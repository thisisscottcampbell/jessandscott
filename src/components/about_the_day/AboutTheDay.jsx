import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About The Day</h2>
      <span className="section__subtitle">overview and what not</span>

      <div className="about__container container grid">
        {/* <img src={AboutImg} alt="" className="about__img" /> */}
        {/* <div className="about__img"></div> */}

        <div>
          <h5 className="about__description_overview">
            First and foremost, if you are reading this, we{' '}
            <span style={{ fontStyle: 'italicize' }}>really really </span> hope
            you can come celebrate with us because we love you and think you
            totally rock
          </h5>
          <h6 className="about__description_overview">
            So what are we doing? Well, we aren't getting married on this exact
            day, we are absconding to Scotland a week later and eloping in the
            Highlands (sorry, I guess). And so, for this day, we are celebrating
            our marriage-to-be with a "pre-ception" (i.e., a pre-wedding
            reception, a term coined by us for this day 😜)
          </h6>
        </div>

        <div>
          <p className="about__description_description">
            <span className="bold">Pre-ception</span>: it should be noted that
            no two pre-ceptions are the same. Some are all ages and open to the
            public with tickets available at the gate; others are invite only
            with strictly enforced amusement park standards ("you must be as
            tall as this line to ride this ride"); alternatively, some align
            standards with legally-allowed-to-act-a-fool age requirements, it
            really depends. Our attendance guidelines will fall under the third
            category and the vibe will go something like this: if Thanksgiving
            were celebrated on the 4th of July at a far out, boho-swanky joint
            in Venice Beach, in the 60s, that admits chillers only and offers
            your favorite libations, outdoor seating, and sweet music
          </p>
          <p className="about__description_description">
            Despite it being a summer backyard bbq and all{' '}
            <span className="bold">no one is expected to bring anything</span>.
            But if you have some beer you particularly like, or wine, an elixir,
            or maybe 10,000 pH water, bring some and share. If you have a small
            dish or party snack you like to make, go on and whip up a batch.
            More than anything, we want this to be a day where all the people we
            love get to meet each other, come together, share stories and laughs
            and, of course, enjoy themselves.
          </p>
          <p className="about__description_description">
            <span className="bold">
              Attire{' '}
              <span style={{ textDecoration: 'line-through' }}>
                requirements
              </span>
            </span>
            : What exactly does one wear to a pre-ception, you ask? A suit? A
            dress? Fancy shoes that give you blisters? Nothing at all? Well, you
            should for sure wear something but, truthfully, wear whatever you
            want. <br />
            <p
              style={{
                fontStyle: 'italic',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              ** Dress as yourself **
            </p>
            We want you to be you. Not an overheated, uncomfortably festooned
            version of you (remember, we are talking a cookout in mid-August).
            If you need inspo, imagine you are going on a first date with
            someone way cooler than you but your relative lameness mustn't be
            exposed, at least not just yet, so you use the only move avaible to
            you and go for that nonchallant-cool vibe, like, "I sorta, kinda
            care, but not really," keeping it light, casual, and breezy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
