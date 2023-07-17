import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

// set typescript types
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	// create 'inputStyles' variable for this specific styling:
	// w-full = full width of container/div
	// rounded-lg = large border radius rounding
	// placeholder-white = placeholder text in white
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,  // allows us to validate our form
    formState: { errors },  // destructure 'errors' from form state
  } = useForm();

  // using 'any' type because we can't be sure what 'e'/error type will be:
  // async, because 'trigger' is an async function
  const onSubmit = async (e: any) => {
    const isValid = await trigger();  // trigger comes from useForm
    if (!isValid) {
      e.preventDefault(); // don't refresh the page or go to new page (to show errors)
    }
  };

  return (
    // 'section id ="contactus" = used by anchor link smooth scroll
    // mx-auto w-5/6 = use 5/6th of page width, centered
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
			// Make 'Contact Us' in navbar a different color:
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER = header title and text */}
        <motion.div
          className="md:w-3/5"	// use 3/5 width for screens medium and larger
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}	// trigger once 50% of container/div is visible
          transition={{ duration: 0.5 }}	// = 0.5 seconds
          variants={{
            hidden: { opacity: 0, x: -50 },	// start invisible and to the left
            visible: { opacity: 1, x: 0 },	// end visible and in final postion
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        {/* justify between = equal space between items */}
        {/* md:flex = use flex on medium screens and larger */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/* form enters from bottom and moves up: */}
					<motion.div
            className="mt-10 basis-3/5 md:mt-0"	// use 3/5 of container width; 0 top margin for medium size and larger
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },	// start invisible and below
              visible: { opacity: 1, y: 0 },	// end visible and in final position
            }}
          >
            <form
              target="_blank" // when someone hits 'submit', we don't go to a new page
              onSubmit={onSubmit}
              // action="https://formsubmit.com/your@email.com"
              // formsubmit will then send 'anonymizer' to replace actual address:
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                className={inputStyles}	// defined, above
                type="text"
                placeholder="NAME"
                {...register("name", {  // react-hook-form is 'registering' input, by passing in "name"
                  required: true,
                  maxLength: 100,
                })}
              />
              {/* Error conditions: */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char"}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,	// regex for email formatting
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required"}
                    {/* checks against regex pattern: */}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              {/* 'textarea' instead of 'input' = allows multiple rows: */}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}

              <button
                type="submit"	// triggers 'onSubmit' function
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

					{/* image enters from bottom and moves up */}
          <motion.div
						// relative = positon: relative; parent for child before: element, below
						// basis-2/5 = use 2/5 of container width
						// md:mt-0 = 0 top margin on screens medium and larger
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}	// trigger once 50% of container/div is visible
            transition={{ delay: 0.2, duration: 0.5 }}	// 0.5 sec duration after 0.2 sec delay
            variants={{
              hidden: { opacity: 0, y: 50 },	// start invisible and below
              visible: { opacity: 1, y: 0 },	// end visible and in final position
            }}
          >
						{/* 'EVOLVE' image: */}
						{/* before:absolute = child container */}
						{/* before:-bottom-20 before:-right-10 = below and to the left of main image*/}
						{/* before:z-[-1] = send to back */}
						{/* md:before:content-evolvetext = on medium screens and larger use assets/EvolveText.png (defined in tailwind.config.ts) */}
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;