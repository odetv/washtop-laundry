function Informasi() {
    return (
      <section id="informasi" className="flex max-w-7xl mx-auto flex-col pb-28">
        <h1 className="text-center font-bold text-3xl mb-3">
           Informasi
        </h1>
        <p className="text-center mb-3">
          Dapatkan informasi seputar Washtop Laundry Express
        </p>
        <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.865768967395!2d115.08732110000001!3d-8.1151472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19b73c1ae2f6d%3A0xc50b17347a33b1e7!2sWashtop%20Laundry%201!5e0!3m2!1sid!2sid!4v1702894963328!5m2!1sid!2sid"
                ></iframe>
            <div className="bg-white relative text-sm flex flex-wrap py-3 rounded shadow-2xl items-center mt-80">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest">ALAMAT</h2>
                    <p className="mt-1">Washtop Laundry Express Singaraja Bali</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest">WHATSAPP</h2>
                    <a href="https://wa.me/6282145555566/" target="_blank" className="leading-relaxed">082145555566</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest mt-4">INSTAGRAM</h2>
                    <a href="https://instagram.com/washtoplaundryexpress/" target="_blank" className="leading-relaxed">@washtoplaundryexpress</a>
                </div>
            </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-xl mb-2 font-bold">Punya Pertanyaan?</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Kirim pertanyaan Anda melalui form di bawah ini.
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nama</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Pesan</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg transition-all ease-in-out font-medium">Kirim</button>
        </div>
    </div>
</section>
      </section>
    );
  }
  
  export default Informasi;