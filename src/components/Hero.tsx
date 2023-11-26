import { Button, Image } from "@nextui-org/react";

function Hero() {
  return (
    <section
      id=""
      className="max-w-7xl mx-auto text-black pb-28 gap-2 items-center sm:flex md:flex lg:flex"
    >
      <div className="w-full h-full">
        <p className="text-4xl font-bold pb-4 leading-normal tracking-wide">
          Kini Washtop Laundry Express hadir di Singaraja!
        </p>
        <p className="text-base pb-6 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
          consequat varius nisi quis, posuere magna.
        </p>
        <div className="flex gap-2">
          <Button color="primary" radius="sm">
            <a href="#produk">Order Sekarang</a>
          </Button>
          <Button color="primary" radius="sm" variant="bordered">
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center pt-8 sm:pt-0 md:pt-0 lg:pt-0">
        <Image
          isZoomed
          className="object-cover h-96 w-full z-0"
          src="https://picsum.photos/800/400"
        />
      </div>
    </section>
  );
}

export default Hero;
