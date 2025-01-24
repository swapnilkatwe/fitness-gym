import { SelectedPage, ClassType } from "../../shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "../../shared/HText";
import Class from "./Class.tsx"
const classes: Array<ClassType> = [
    {
        name: "Weight Loss Classes",
        description: "Achieve your weight loss goals with our specialized classes designed to burn calories, build strength, and boost metabolism. Guided by expert trainers, these sessions combine effective workouts with the motivation you need to succeed!",
        image: image1,
    },
    {
        name: "Weight Gain Classes",
        description: "Build strength and achieve your weight gain goals with our targeted classes focused on muscle development and proper nutrition. Led by expert trainers, these sessions help you gain healthy weight and enhance overall fitness.",
        image: image2,
    },
    {
        name: "Training Classes",
        description: "Enhance your fitness journey with our dynamic training classes tailored to all levels. From strength and endurance to flexibility and balance, our expert-led sessions are designed to help you reach your goals effectively and enjoyably.",
        image: image3,
    },
    {
        name: "Fitness Classes",
        description: "Elevate your fitness routine with our diverse range of expert-led classes. From cardio and strength training to flexibility and mindfulness, we have something for every fitness level. Stay motivated, have fun, and achieve your goals with us!",
        image: image4,
    },
    {
        name: "Abs Core Classes",
        description: "Strengthen your core and sculpt your abs with our focused Abs Core Classes. These expert-led sessions target your midsection to build stability, improve posture, and enhance overall strength. Perfect for all fitness levels, it's your ultimate core workout!",
        image: image5,
    },
    {
        name: "Yoga Classes",
        description: "Find balance and inner peace with our rejuvenating Yoga Classes. Whether you’re a beginner or experienced, our sessions focus on flexibility, strength, and mindfulness. Led by skilled instructors, yoga is your path to a healthier body and a calmer mind.",
        image: image6,
    }
];
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-orange-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">Discover a variety of classes designed to energize and inspire! From high-intensity workouts to calming yoga and everything in between, there’s something for everyone. Led by expert instructors, our classes help you stay motivated and achieve your fitness goals</p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item, index) => (
                            <Class
                                key={`${item.name}_${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses;