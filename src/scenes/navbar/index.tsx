// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { getTitleForSelectedPage, SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const flexBetween = "flex item-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-orange-200 drop-shadow";
    return <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img src={Logo} alt="logo" className="h-6" />
                    {/* right side */}
                    {isAboveMediumScreen ?
                        (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page={getTitleForSelectedPage(SelectedPage.Home)}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page={getTitleForSelectedPage(SelectedPage.Benefits)}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page={getTitleForSelectedPage(SelectedPage.OurClasses)}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page={getTitleForSelectedPage(SelectedPage.ContactUs)}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>) : (
                            <button className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-orange-200 drop-shadow-xl">

                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page={getTitleForSelectedPage(SelectedPage.Home)}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page={getTitleForSelectedPage(SelectedPage.Benefits)}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page={getTitleForSelectedPage(SelectedPage.OurClasses)}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page={getTitleForSelectedPage(SelectedPage.ContactUs)}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                </div>
            </div>

        )}
    </nav>
}

export default Navbar;

// Note: shortcut to create code snipet: tsrafc