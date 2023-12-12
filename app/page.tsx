import FinanceSection from "@/components/FinanceSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-radial from-yellow-400 to-transparent to-80%">
        <Navbar />
        <FinanceSection />
      </div>

      {/* Shape Divider */}
      {/* <div className="custom-shape-divider-bottom-1638196874">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto text-yellow-400"
          style={{ transform: "rotate(180deg)", fill: "currentColor" }}
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39 107.41 22.65 190.3 63.65 269.29 84.48 70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
            className="fill-current"
          ></path>
        </svg>
      </div> */}

      {/* Sonraki Bölüm */}
      <div className="bg-white">{/* İçerik */}</div>

      {/* <header className="bg-white text-white h-[500px] max-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Optimize Edilmiş</span> Borç Yönetimi!.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Finansal hedeflerinize daha hızlı ve etkili bir şekilde ulaşmanız için tasarlanmış olan Optimize Edilmiş Borç Yönetimi
          </p>
        </div>
      </header> */}
      <section className="relative -top-16">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                <p className="text-gray-700">Description of Feature 1.</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                <p className="text-gray-700">Description of Feature 2.</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                <p className="text-gray-700">Description of Feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
}
