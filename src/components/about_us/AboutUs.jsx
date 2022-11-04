import React, { useState } from 'react'
import './qualification.css'
import { AboutUsCard } from './AboutUsCard'

const AboutUs = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">A Quick Journey to Now</h2>
      <span className="section__subtitle">
        how the heck this whole thing happened
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
          >
            <p style={{ paddingRight: '3px' }}>😎</p>
            His
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
          >
            <p style={{ paddingRight: '3px' }}>💁‍♀️</p>
            Hers
          </div>
        </div>

        <div className="qualification__sections">
          <AboutUsCard
            title="What some call the most chill day in human history"
            msg="The kid exists"
            date="9/4/86"
            isFirst={true}
            isScott={false}
            isJess={false}
          />

          <AboutUsCard
            title="Another pretty chill day"
            msg="Sweet Jessie exists"
            date="7/2/87"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title="A not so chill day"
            msg="Scott develops arachnaphobia, though the memory remains blocked"
            date="unknown..."
            isFirst={false}
            isScott={true}
            isJess={false}
          />

          <AboutUsCard
            title="Perhaps the most unchill day of all"
            msg="Sweet Jessie exits the rink, hangs up the skates, and
								officially retires from hockey; effectively vacating her
								Olympic future, forgoing fame and glory and gold medals and endorsement deals
								with Bauer, CCM, and who knowns, maybe even Origin"
            date="3/96"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title="Some forks, delays, and roundabouts"
            msg={`Scott graduates from Sacred Heart Elementrary and kicks off a pattern of transience in which he'd attend 3 high schools, 3 colleges, and an additinal couple post-grad endeavors (solidifying a respectable
                37.5 percent degree-per-academic-institude-attended success rate; all the while managing to earn spots on multiple winless teams at varying levels of competition)`}
            date="2001-2014"
            isFirst={false}
            isScott={true}
            isJess={false}
          />

          <AboutUsCard
            title="A responsible progression from adolesence into early adulthood"
            msg={`Jess achieves a perfect school-attended to degree ratio (2:2),
                also seamlessly doing so in the expected timeframe that able and
                responsible individuals do; all the while earning the status
                of captain in multiple team sports (at both the seconday and
                collegiate levels), on succesful, winning teams, similarly
                earning awards and forms of recognition, "standout this" and "league
                all star" that. Nothing really to write home about, but
                something had to be written to encapsulate this time in her life`}
            date="2001 - 2009"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title={`The Tom Cruise days > Adulting; because, like, FIDLAR`}
            msg={`Unknowingly, though still the result of a deliberate life decision that, frankly, seemed to make insanely good sense at the time, Scott opts to live out the
						plot of an 80's movie starring Tom Cruise (to be fair, a pretty sweet movie at that), dropping out of law school to bartend and
						galavant about NYC. The next 7 years, or so, wound
						about the country with little to recollect or prize--save some near and dear homies, shout out!—-procuring an impovershed bank of evidence to possibly justifying having done so. Nice.`}
            date="2014 - 2021"
            isFirst={false}
            isScott={true}
            isJess={false}
          />

          <AboutUsCard
            title="Dicipline and dedication and building for tomorrow"
            msg={`Never one to shy from a challenge or avert course due to the
						inevitabiltiy of hard work, long hours, and all that
						accompanies, Jess, wisely, with poise, patience, grace, and
						maturity, embarked on a career that would scale in commensurable
						measure to her talents, aptitude, and hustle, serving uniquely
						as a role model to young, driven women (those like herself), progressing both personally and professionally handling any and
						all duties ranging from trainer, marketing,
						management, operations, liason, and likely a host of other
						things the bozo writing this isn't able to call out. But,
						basically, she kicked butt and handled bizzy.`}
            date="2009 - this is
						ongoing"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title="That time Covid happened and the world stopped for awhile"
            msg={`After some time in the rain in the Pacific Northwest enjoying
						things like donuts, coffee, and coastal trips to see Puffins, now shelving books for a living, Scott moved back to
						Weymouth with a very cool cat and something like 30 extra pounds, conservatively. Gut circumference aside, he would, only a few days upon returning, find himself in Jessica's company thanks to a gang of fools who let him tag along to the beach that day--shout out to those foolios!`}
            date="5/2020"
            isFirst={false}
            isScott={true}
            isJess={false}
          />

          <AboutUsCard
            title="An invite to dinner"
            msg={`Jess is asked to go on a date with a guy who, unfortunately, is
						30lbs over weight, who, worse yet, has too much hair growing on
						his face, who, perhaps dealbreakingly, has tattoos, and, most
						damning of all, never played hockey, doesn't know what icing is,
						and irksomely insits that "power play" would be more
						appropriately termed "power period". But heeding the counsel of
						some perspicacious friends and family, she obliged this poor sap
						with some well founded skeptism, but no less open-minded for it`}
            date="7/2020"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title="The road to victory"
            msg="The details are too many to be enumerated here, but things like
						Mama learning she likes oysters and mussels and scary moves, and
						maybe even cats, seeing grand canyons, a pandemically vacant Times Square still on fire with lights, taking road trips, seeing
						some of the greatest shows on earth, like, for instance, Monday
						Night Raw, and so on and so forth, Scott, feeling like he can't
						lose, bought a ring of a particular ilk to gift to Jess"
            date="5/19/2022"
            isFirst={false}
            isScott={true}
            isJess={false}
          />

          <AboutUsCard
            title="A question is posed"
            msg="On the eve of her birthday, in Maine, she was gifted an empty music box
						playing a song she'd never before heard (the accompanying explanation of which serving as a brief
						diversion for a shakey man to get his wits about him and present
						another gift), a ring bought a couple months prior, with a certain
						promise attached to its acceptance"
            date="7/1/2022"
            isFirst={false}
            isScott={false}
            isJess={true}
          />

          <AboutUsCard
            title="The greatest win ever won"
            msg="She said yes :)"
            date="7/1/2022"
            isFirst={false}
            isScott={true}
            isJess={false}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
