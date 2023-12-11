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
    <nav className="bg-white p-4 shadow">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/8/84/Money_Flat_Icon.svg"} alt="money" width={30} height={30} />
            <span className="text-xl font-semibold text-gray-800">Borç Selası</span>
          </div>
          <div className="space-x-8">
            {menu.map((item, index) => (
              <a href={item.link} key={index} className="text-gray-600 hover:text-gray-800">
                {item.name}
              </a>
            ))}
            <Button>{initals.btnTitle}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
