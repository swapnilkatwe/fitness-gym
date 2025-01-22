import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";

import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <div className="md:-mt-20">
                        {/*  */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:content-evolvetext before:z-[-1]">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Achieve your fitness goals! Our state-of-the-art facility offers cutting-edge equipment, expert trainers, and diverse classes tailored for all levels. Enjoy a welcoming environment designed to inspire and motivate. Join us today and start your journey to a healthier, stronger you!
                        </p>
                    </div>
                    {/* ACTIONS */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-orange-500 underline hover:text-secondary-400"
                            onClick={() => { setSelectedPage(SelectedPage.ContactUs) }}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </div>
            {/* SPONSERS */}
            {isAboveMediumScreen && (
                <div className="h-[150] w-full bg-orange-100 py-10">
                    <div className="mx-auto w-5/6 items-center">
                        <div className="flex w-3/5 justify-between">
                            <img alt="forbs-sponser" src={SponsorForbes}></img>
                            <img alt="redbull-sponser" src={SponsorRedBull}></img>
                            <img alt="fortune-sponser" src={SponsorFortune}></img>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home;