import Image from "next/image";

export default function FinanceSection() {
  return (
    <div className="bg-gradient-radial w-full from-green-200 to-transparent to-80%">
      <div className="container mx-auto flex flex-wrap items-center pt-12 px-4 h-[800px]">
        {/* Finance-related content on the right */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center p-4 bg-gradient-radial from-red-300 to-transparent to-70%">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-l to-red-600 from-yellow-400">Yeni Finansal</span>
            <span className="text-blue-500 lg:text-3xl xl:text-5xl font-extrabold pl-4 pt-2">Partneriniz!</span>
          </h1>
          <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pt-5 max-w-sm">
            Borçlarınızı yönetin, gelir gider hesabınız olsun, kolayca ödeyin!
          </p>
        </div>

        {/* Illustration on the left */}
        <div className="w-full md:w-7/12">
          <Image src="/landing.png" alt="Financial Illustration" width={1500} height={1500} />
        </div>
      </div>
    </div>
  );
}
