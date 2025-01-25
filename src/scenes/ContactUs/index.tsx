import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-orange-300 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section
      id="conatactus"
      className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>
            <span className="text-orange-500 ">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Ready to transform your fitness journey? Join our gym today and unlock access to state-of-the-art facilities, expert trainers, and a supportive community. Take the first step toward a healthier, stronger, and happier you!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/3631f779245818b74e794be71b494e70"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-orange-500">
                  {errors.name.type == "required" && "This field is required."}
                  {errors.name.type == "maxLength" && "Max length is 100 characters"}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-orange-500">
                  {errors.email.type == "required" && "This field is required."}
                  {errors.email.type == "pattern" && "Invalid Email address"}
                </p>

              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 250,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-orange-500">
                  {errors.message.type == "required" && "This field is required."}
                  {errors.message.type == "maxLength" && "Max length is 250 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-white">Submit</button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}>
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full" alt="contact-us-page-graphic" src={ContactUsPageGraphic} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs;