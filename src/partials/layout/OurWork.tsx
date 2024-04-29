import Image from "next/image";
import H4 from "@/components/H4";
import ItemSatis from "@/assets/images/itemsatis.png";
import ItemPazar from "@/assets/images/itempazar.png";
import AlfaPms from "@/assets/images/alfapms.png";

const OurWork = () => {
  return (
    <div className="mx-auto flex h-scree items-center justify-center fixed bottom-16 right-10">
      <div className="group relative cursor-pointer py-2">
        <div className="flex items-center justify-between space-x-5 px-4">
          <a className="menu-hover bg-gray-100 dark:bg-gray-800/80 rounded-full w-[50px] h-[50px] text-base font-medium text-black flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              className="dark:text-white text-black mx-auto"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12M128 72c-22.06 0-40 16.15-40 36v4a8 8 0 0 0 16 0v-4c0-11 10.77-20 24-20s24 9 24 20s-10.77 20-24 20a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-.72c18.24-3.35 32-17.9 32-35.28c0-19.85-17.94-36-40-36m104 56A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
              ></path>
            </svg>
          </a>

          <div className="invisible card-container absolute z-50 flex flex-col text-gray-800 shadow-xl group-hover:visible bottom-16 right-0 w-52 h-52 rounded-lg items-center justify-center">
            <div className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center projectCard">
              <a
                href="https://www.itemsatis.com/"
                target="_blank"
                className="flex gap-5 items-center"
              >
                <Image
                  width={50}
                  height={50}
                  src={ItemSatis}
                  alt="İtem Satış"
                  className="w-[30px] h-[30px]"
                />
                <H4 text={"İtemSatış"} />
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center projectCard">
              <a
                href="https://itempazar.com/"
                target="_blank"
                className="flex gap-5 items-center"
              >
                <Image
                  width={40}
                  height={40}
                  src={ItemPazar}
                  alt="İtem Pazar"
                  className=""
                />
                <H4 text={"İtemPazar"} />
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center projectCard">
              <a
                href="https://pms.alfatekyazilim.com.tr/"
                target="_blank"
                className="flex gap-5 items-center"
              >
                <Image
                  src={AlfaPms}
                  alt="Alfa PMS"
                  className="w-[30px] h-[30px]"
                  width={40}
                  height={40}
                />
                <H4 text={"AlfaPMS"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
