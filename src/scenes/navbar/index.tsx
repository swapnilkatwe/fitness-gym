// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage)=> void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex item-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img src={Logo} alt="logo" className="h-6" />
                    {/* right side */}
                    {isAboveMediumScreen ?
                    (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page="Benifits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page="Our Classws"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link page="Contact us"
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
    </nav>
}

export default Navbar;

// Note: shortcut to create code snipet: tsrafc