import React, { useState } from 'react';
import './qualification.css';
import { AboutUsCard } from './AboutUsCard';

const AboutUs = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">About Us</h2>
			<span className="section__subtitle">a quick journey to now</span>

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
						Him
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
					>
						<p style={{ paddingRight: '3px' }}>💁‍♀️</p>
						Her
					</div>
				</div>

				<div className="qualification__sections">

					{/* <div className="qualification__data">
						<div>
							<h3 className="qualification__title">
								What some argue to be the most chill day in human history
								</h3>
							<span className="qualification__subtitle">The kid exists</span>
							<div className="qualification__calender">
								<i className="uil uil-calendar-alt"></i> 9/4/86
								</div>
						</div>

						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
					</div> */}

					<AboutUsCard title='What some call the most chill day in human history' msg='The kid exists' date='9/4/86' isFirst={true} isScott={false} isJess={false} />

					<AboutUsCard title='Another pretty chill day' msg='Sweet Jessie exists' date='7/2/87' isFirst={false} isScott={false} isJess={true} />
					{/* <div className="qualification__data">
						<div></div>

						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>

						<div>
							<h3 className="qualification__title">
								Another pretty chill day
								</h3>
							<span className="qualification__subtitle">Mama exists</span>
							<div className="qualification__calender">
								<i className="uil uil-calendar-alt"></i> 7/3/87
								</div>
						</div>
					</div> */}
					<AboutUsCard title='A not so chill day' msg='Scott develops arachnaphobia, though the memory remains blocked' date='unknown...' isFirst={false} isScott={true} isJess={false} />
					{/* <div className="qualification__data">
						<div>
							<h3 className="qualification__title">Scott develops arachnaphobia, though the memory remains
								blocked</h3>
							<span className="qualification__subtitle">
								Scott develops arachnaphobia, though the memory remains
								blocked
								</span>
							<div className="qualification__calender">
								<i className="uil uil-calendar-alt"></i> unknown...
								</div>
						</div>

						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
					</div> */}

					<div className="qualification__data">
						<div></div>

						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>

						<div>
							<h3 className="qualification__title">
								Perhaps the most unchill day of all
								</h3>
							<span className="qualification__subtitle">
								Sweet Jessie exits the rink, hangs up the skates, and
								officially retires from hockey; effectively vacating her
								Olmpic future of fame and gold medals and endorsement deals
								with Bauer, CCM, and who knowns, maybe even Origin
								</span>
							<div className="qualification__calender">
								<i className="uil uil-calendar-alt"></i> 11/1/95
								</div>
						</div>
					</div>
				</div>

				<div className="qualification__data">
					<div>
						<h3 className="qualification__title">
							Some forks, delays, and roundabouts
							</h3>
						<span className="qualification__subtitle">
							Scott graduates Sacred Heart Elementrary and begins a pattern of
							transience in which he'd attend 3 high schools, 3 colleges, and
							an additinal couple post-grad forays (solidifying a respectable
							37.5% degree-per-academic-institude-attended rate; all the while
							managing to earn spots on multiple winless teams at some highly,
							highly esteemed athletic programs)
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 2001-2014
							</div>
					</div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>
				</div>

				<div className="qualification__data">
					<div></div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>

					<div>
						<h3 className="qualification__title">
							A responsible progression from adolesence into early adulthood
							</h3>
						<span className="qualification__subtitle">
							Jess achieves a perfect school-attended to degree ratio (2:2),
							also seamlessly doing so in the expected timeframe that able and
							responsible individuals do so; all the while earning the status
							of captain in multiple team sports (at both the seconday and
							collegiate levels), on succesful, winning team, similarly
							earning awards and recognition, like "standout this" and "league
							all star" that. Nothing really to write home about, but
							something had to be written to encapsulate this time in her life
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 2001 - 2009
							</div>
					</div>
				</div>

				<div className="qualification__data">
					<div>
						<h3 className="qualification__title">{`The Tom Cruise days > Adulting; because, like, FIDLAR`}</h3>
						<span className="qualification__subtitle">
							Unknowingly in such a precise sense, but a deliberate and
							meaningful life decision nonetheless, Scott opts to live out the
							plot of an 80's movie starring Tom Cruise (a pretty sweet movie,
							though, which should be noted), dropping out school to pursue
							the ultimate, "well, if all else fails" option of bartending and
							galavanting about, NYC. The next 7 years, or so, would be wound
							about the country with little to recollect or reason of possibly
							justifying doing so. Nice.
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 2014 - 2021
							</div>
					</div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>
				</div>

				<div className="qualification__data">
					<div></div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>

					<div>
						<h3 className="qualification__title">
							Dicipline and dedication and building for tomorrow
							</h3>
						<span className="qualification__subtitle">
							Never one to shy from a challenge or avert course due to the
							inevitabiltiy of hard work and long hours, Jess, wisely,
							consistently, with poise, grace, and maturity, embarked on a
							career that would scale in commensurable measure to her talents,
							training athletes—ranging all levels and ages——and serving
							uniquely as a role model to young, driven women (those like
							herself), she progressed both personally and professionally
							handling any and all duties ranging from an on the floor
							trainer, marketing, management, operations, liason, and likely a
							host of other things the bozo writing this isn't able to call
							out. But, basically, she kicked butt and handled her bizzy.
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 2009 - this is still
								ongoing
							</div>
					</div>
				</div>

				<div className="qualification__data">
					<div>
						<h3 className="qualification__title">
							That time Covid happened and the world stopped for awhile
							</h3>
						<span className="qualification__subtitle">
							After some time in the rain in the Pacific Northwest enjoying
							things like donuts and coffee and brief, Scott moved back to
							Weymouth with a cat, some extra facial hair, some extra tattoos,
							and something like 30 extra pounds from the last time he'd seen
							Jess. Which he would, only a few days upon returning, when
							meeting a gang of fools who happened to be in her company
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 5/2020
							</div>
					</div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>
				</div>

				<div className="qualification__data">
					<div></div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>

					<div>
						<h3 className="qualification__title">An invite to dinner</h3>
						<span className="qualification__subtitle">
							Jess is asked to go on a date with a guy who, unfortunately, is
							30lbs over weight, who, worse yet, has too much hair growing on
							his face, who, perhaps dealbreakingly, has tattoos, and, most
							damning of all, never played hockey, doesn't know what icing is,
							and irksomely insits that "power play" would be more
							appropriately termed "power period". But heeding the counsel of
							some perspicacious friends and family, she obliged this poor sap
							with some well founded reservation
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 7/2020
							</div>
					</div>
				</div>

				<div className="qualification__data">
					<div>
						<h3 className="qualification__title">
							The unexplicable winning streak
							</h3>
						<span className="qualification__subtitle">
							The details are too many to be enumerated here, but things like
							Mama learning she likes oysters and mussels and scary moves, and
							maybe even cats, seeing grand canyons, taking road trips, seeing
							some of the greatest shows on earth, like, for instance, Monday
							Night Raw, and so on and so forth, Scott, feeling like he can't
							lose, bought a ring of a particular ilk to gift to Jess
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 5/19/2022
							</div>
					</div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>
				</div>

				<div className="qualification__data">
					<div></div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>

					<div>
						<h3 className="qualification__title">A question is a</h3>
						<span className="qualification__subtitle">
							On her birthday, in Maine, she was gifted an empty music box
							playing a song she'd never before heard which served as a brief
							diversion for a shakey man to get his wits about him and present
							another gift, ring bought a couple months prior, with a certain
							promise attached to its acceptance.
							</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 7/2/2022
							</div>
					</div>
				</div>

				<div className="qualification__data">
					<div>
						<h3 className="qualification__title">
							Not bad for a guy like him
							</h3>
						<span className="qualification__subtitle">She said yes :)</span>
						<div className="qualification__calender">
							<i className="uil uil-calendar-alt"></i> 7/2/2022
							</div>
					</div>

					<div>
						<span className="qualification__rounder"></span>
						<span className="qualification__line"></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
