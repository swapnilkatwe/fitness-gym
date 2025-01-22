import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Gym Facilities",
        description: "Discover a wide range of premium gym facilities, including state-of-the-art equipment, spacious workout zones, and dedicated areas for strength and cardio training. Enjoy access to group fitness classes, personal training, and recovery lounges."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Classes Structure",
        description: "Explore 100s of diverse classes designed to suit every fitness level and goal. From high-energy cardio and strength sessions to calming yoga and Pilates, there’s something for everyone. Led by expert instructors, our classes will keep you motivated and inspired!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert Trainers",
        description: "Work with expert trainers dedicated to helping you achieve your fitness goals. With personalized guidance, professional expertise, and a focus on your progress, our trainers are here to support every step of your journey. Experience training tailored just for you!"
    }
];

const containter = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

                {/* HEADER SECTION */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        Its your ultimate wellness destination. Experience top-notch equipment, expert-led classes, and personalized training designed for all fitness levels. Our vibrant community and supportive environment will keep you motivated every step of the way. Redefine your fitness journey with us today!
                    </p>
                </motion.div>

                {/* BENEFITS SECTION */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containter}
                >
                    {benefits.map((benefits: BenefitType) => (
                        <Benefit
                            key={benefits.title}
                            title={benefits.title}
                            icon={benefits.icon}
                            description={benefits.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Benefits;