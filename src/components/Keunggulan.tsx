import {Card, CardHeader, Image} from "@nextui-org/react";
import Picsnyaman from "../assets/images/keunggulan/nyaman.png";
import Picscepat from "../assets/images/keunggulan/cepat.png";
import Picsberkualitas from "../assets/images/keunggulan/berkualitas.png";

function Keunggulan() {
    return (
      <section id="keunggulan" className="max-w-7xl pb-28 mx-auto">
        <h1 className="text-center font-bold text-3xl mb-3">
          Keunggulan Laundry Kami
        </h1>
        <p className="text-center mb-6">
          Melayani kebutuhan laundry Anda dengan cepat, nyaman, dan berkualitas.
        </p>
        <div className="flex flex-col justify-center items-center gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
            <Card className="max-w-[368px] p-3 z-0">
                <CardHeader className="flex flex-col gap-4 justify-center text-center">
                    <Image
                    alt=""
                    height={60}
                    radius="sm"
                    src={Picsnyaman}
                    width={60}
                    />
                    <div className="flex flex-col">
                    <p className="text-lg font-bold pb-2">Nyaman</p>
                    <p>Dapatkan layanan laundry yang nyaman.</p>
                    </div>
                </CardHeader>
            </Card>
            <Card className="max-w-[368px] p-3 z-0">
                <CardHeader className="flex flex-col gap-4 justify-center text-center">
                    <Image
                    alt=""
                    height={60}
                    radius="sm"
                    src={Picscepat}
                    width={60}
                    />
                    <div className="flex flex-col">
                    <p className="text-lg font-bold pb-2">Cepat</p>
                    <p>Proses laundry cepat mengutamakan ketepatan waktu.</p>
                    </div>
                </CardHeader>
            </Card>
            <Card className="max-w-[368px] p-3 z-0">
                <CardHeader className="flex flex-col gap-4 justify-center text-center">
                    <Image
                    alt=""
                    height={60}
                    radius="sm"
                    src={Picsberkualitas}
                    width={60}
                    />
                    <div className="flex flex-col">
                    <p className="text-lg font-bold pb-2">Berkualitas</p>
                    <p>Alat dan Bahan yang berkualitas untuk kepuasan pelanggan.</p>
                    </div>
                </CardHeader>
            </Card>
        </div>
        
    </section>
    );
  }
  
  export default Keunggulan;