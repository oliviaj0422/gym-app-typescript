import Logo from "@/assets/Logo.png";

{
  /* THIS FOOTER IS A RECREATION OF GOODLIFE WEBSITE'S FOOTER */
}

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="w-4/6 mx-auto">
        {/* Logo AND HEADER */}
        <div className="px-30 mt-10 flex flex-col items-start justify-center">
          <img className="my-5" alt="logo" src={Logo} />
          <p className="text-base font-bold mb-3">LAND ACKNOWLEDGEMENT</p>
          <p>
            EvoGym Fitness was founded on the traditional lands of the
            Anishinaabek (Ah-nish-in-a-bek), Haudenosaunee (Ho-den-no-show-nee),
            Lūnaapéewak (Len-ahpay- wuk) and Attawandaron (Add-a-won-da-run)
            Peoples, on lands connected with the London Township and Sombra
            Treaties of 1796 and the Dish with One Spoon Covenant Wampum. This
            land, and the land on which all GoodLife Fitness Clubs operate,
            continues to be home to diverse Indigenous Peoples (First Nations,
            Inuit and Métis) whom we recognize as contemporary stewards of the
            land and vital contributors of our society..
          </p>
          {/* CREATE A SECTION DIVIDER */}
          <div className="border-primary-500 border-t-4 w-[150px] my-8 mx-auto" />
        </div>

        {/*  */}
        <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between gap-8 items-center">
          <div className="flex flex-col items-center">
            <button className="font-bold">MEMBERSHIP</button>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>Join EcoGym</p>
              <p>Try GoodLife for free</p>
              <p>Log in to my account</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">CLASSES & TRAINING</p>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>Book a class</p>
              <p>Find a class</p>
              <p>Find training programs</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">CLUBS</p>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>Find a club</p>
              <p>Coming soon</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">WOMEN</p>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>Find classes for women</p>
              <p>Find training for women</p>
              <p>Find clubs for women</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">CAREERS</p>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>Become a Trainer</p>
              <p>Become a Instructor</p>
              <p>Join our team</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">GOODLIFE</p>
            <div className="flex flex-col items-center text-sm gap-2 mt-3">
              <p>About EvoGym</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>

        <div className="border-gray-100 w-full border-t-2 my-5" />
      </div>
    </footer>
  );
};

export default Footer;
