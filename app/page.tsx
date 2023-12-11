import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="bg-white text-white h-[500px] max-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Optimize Edilmiş</span> Borç Yönetimi!.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Finansal hedeflerinize daha hızlı ve etkili bir şekilde ulaşmanız için tasarlanmış olan Optimize Edilmiş Borç Yönetimi
          </p>
        </div>
      </header>
      {/* 
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
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
      </section> */}

      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
}
