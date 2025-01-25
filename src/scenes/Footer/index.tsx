import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-orange-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Ready to transform your fitness journey? Join our gym today and unlock access to state-of-the-art facilities, expert trainers, and a supportive community. Take the first step toward a healthier, stronger, and happier you!
                    </p>
                    <p>© All Right Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">this is what we share</p>
                    <p className="my-5">we are here to get you know</p>
                    <p>Meet you soon</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact US</h4>
                    <p className="my-5">Contact us this year</p>
                    <p>+47 00000000</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;