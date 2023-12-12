import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const initals = {
    logoTitle: "Flowbite",
    btnTitle: "Kayıt Ol",
  };

  const menu = [
    {
      name: "Anasayfa",
      link: "/",
    },
    {
      name: "Hakkımızda",
      link: "/about",
    },
    {
      name: "Biz Kimiz",
      link: "/who-we-are",
    },
    {
      name: "İletişim",
      link: "/contact",
    },
  ];

  return (
    <nav className="px-4 py-10 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/8/84/Money_Flat_Icon.svg"} alt="money" width={30} height={30} />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-red-400">Borç Selası</span>
          </div>
          <div className="space-x-8">
            {menu.map((item, index) => (
              <a href={item.link} key={index} className="text-gray-600 font-semibold hover:text-gray-800">
                {item.name}
              </a>
            ))}
            <Button className="border bg-gradient-to-tr from-green-600 to-yellow-500 to-80%">{initals.btnTitle}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
