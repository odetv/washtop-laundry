import React, { Key } from "react";
import { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  ModalFooter,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Chip,
  RadioGroup,
  Radio,
  Pagination,
} from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Picsbantal from "../assets/images/produk/bantal.jpg";
import Picsbedcoverbesar from "../assets/images/produk/bed-cover-besar.jpg";
import Picsbedcoverkecil from "../assets/images/produk/bed-cover-kecil.jpg";
import Picsbedcoversedang from "../assets/images/produk/bed-cover-sedang.jpg";
import Picsbonekabesar from "../assets/images/produk/boneka-besar.jpg";
import Picsbonekakecil from "../assets/images/produk/boneka-kecil.jpg";
import Picsbonekasedang from "../assets/images/produk/boneka-sedang.jpg";
import Picsgordenbesar from "../assets/images/produk/gorden-besar.jpg";
import Picsgordenkecil from "../assets/images/produk/gorden-kecil.jpg";
import Picsgordensedang from "../assets/images/produk/gorden-sedang.jpg";
import Picsguling from "../assets/images/produk/guling.jpg";
import Picskarpetbesar from "../assets/images/produk/karpet-besar.jpg";
import Picskarpetkecil from "../assets/images/produk/karpet-kecil.jpg";
import Picskarpetsedang from "../assets/images/produk/karpet-sedang.jpg";
import Picskeset from "../assets/images/produk/keset.jpg";
import Picsselimutbesar from "../assets/images/produk/selimut-besar.jpg";
import Picsselimutkecil from "../assets/images/produk/selimut-kecil.jpg";
import Picsselimutsedang from "../assets/images/produk/selimut-sedang.jpg";
import Picssepraikecil from "../assets/images/produk/seprai-kecil.jpg";
import Picssepraibesar from "../assets/images/produk/seprai-besar.jpg";
import Picstaskecil from "../assets/images/produk/tas-kecil.jpg";
import Picstassedang from "../assets/images/produk/tas-sedang.jpg";
import Picstasbesar from "../assets/images/produk/tas-besar.jpg";
import Picstopi from "../assets/images/produk/topi.jpg";
import Picssetrika from "../assets/images/produk/setrika.jpg";
import Picscucikering from "../assets/images/produk/cuci-kering.jpg";
import Picsreguler2hari from "../assets/images/produk/reguler-2-hari.jpg";
import Picsexpress from "../assets/images/produk/express.jpg";

export default function App() {
  const [displayAll, setDisplayAll] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const [selected, setSelected] = React.useState("photos");
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = React.useState<{
    title: string;
    img: string;
    price: string;
    desc: string;
  } | null>(null);

  const openModal = (item: {
    title: string;
    img: string;
    price: string;
    desc: string;
  }) => {
    setSelectedItem(item);
    onOpen();
  };

  const listSatuan = [
    // 2 Hari
    {
      title: "Bed Cover Besar",
      badge: "2 Hari",
      img: Picsbedcoverbesar,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Bed Cover Besar",
      filter: "2hari",
    },
    {
      title: "Bed Cover Sedang",
      badge: "2 Hari",
      img: Picsbedcoversedang,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Bed Cover Sedang",
      filter: "2hari",
    },
    {
      title: "Bed Cover Kecil",
      badge: "2 Hari",
      img: Picsbedcoverkecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Bed Cover Kecil",
      filter: "2hari",
    },
    {
      title: "Selimut Besar",
      badge: "2 Hari",
      img: Picsselimutbesar,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Selimut Besar",
      filter: "2hari",
    },
    {
      title: "Selimut Sedang",
      badge: "2 Hari",
      img: Picsselimutsedang,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Selimut Sedang",
      filter: "2hari",
    },
    {
      title: "Selimut Kecil",
      badge: "2 Hari",
      img: Picsselimutkecil,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Selimut Kecil",
      filter: "2hari",
    },
    {
      title: "Boneka Besar",
      badge: "2 Hari",
      img: Picsbonekabesar,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Boneka Besar",
      filter: "2hari",
    },
    {
      title: "Boneka Sedang",
      badge: "2 Hari",
      img: Picsbonekasedang,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Boneka Sedang",
      filter: "2hari",
    },
    {
      title: "Boneka Kecil",
      badge: "2 Hari",
      img: Picsbonekakecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Boneka Kecil",
      filter: "2hari",
    },
    {
      title: "Sprei Besar",
      badge: "2 Hari",
      img: Picssepraibesar,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Sprei Besar",
      filter: "2hari",
    },
    {
      title: "Sprei Kecil",
      badge: "2 Hari",
      img: Picssepraikecil,
      price: "Rp. 8.000",
      desc: "Paket Laundry Satuan Sprei Kecil",
      filter: "2hari",
    },
    {
      title: "Tas Besar",
      badge: "2 Hari",
      img: Picstasbesar,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Tas Besar",
      filter: "2hari",
    },
    {
      title: "Tas Sedang",
      badge: "2 Hari",
      img: Picstassedang,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Tas Sedang",
      filter: "2hari",
    },
    {
      title: "Tas Kecil",
      badge: "2 Hari",
      img: Picstaskecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Tas Kecil",
      filter: "2hari",
    },
    {
      title: "Topi",
      badge: "2 Hari",
      img: Picstopi,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Topi",
      filter: "2hari",
    },
    {
      title: "Keset",
      badge: "2 Hari",
      img: Picskeset,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Keset",
      filter: "2hari",
    },
    {
      title: "Gorden Besar",
      badge: "2 Hari",
      img: Picsgordenbesar,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Gorden Besar",
      filter: "2hari",
    },
    {
      title: "Gorden Sedang",
      badge: "2 Hari",
      img: Picsgordensedang,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Gorden Sedang",
      filter: "2hari",
    },
    {
      title: "Gorden Kecil",
      badge: "2 Hari",
      img: Picsgordenkecil,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Gorden Kecil",
      filter: "2hari",
    },
    {
      title: "Karpet Besar",
      badge: "2 Hari",
      img: Picskarpetbesar,
      price: "Rp. 30.000",
      desc: "Paket Laundry Satuan Karpet Besar",
      filter: "2hari",
    },
    {
      title: "Karpet Sedang",
      badge: "2 Hari",
      img: Picskarpetsedang,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Karpet Sedang",
      filter: "2hari",
    },
    {
      title: "Karpet Kecil",
      badge: "2 Hari",
      img: Picskarpetkecil,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Karpet Kecil",
      filter: "2hari",
    },
    {
      title: "Bantal",
      badge: "2 Hari",
      img: Picsbantal,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Bantal",
      filter: "2hari",
    },
    {
      title: "Guling",
      badge: "2 Hari",
      img: Picsguling,
      price: "Rp. 10.000",
      desc: "Paket Laundry Satuan Guling",
      filter: "2hari",
    },
    // 6 Jam
    {
      title: "Bed Cover Besar",
      badge: "6 Jam",
      img: Picsbedcoverbesar,
      price: "Rp. 30.000",
      desc: "Paket Laundry Satuan Bed Cover Besar",
      filter: "6jam",
    },
    {
      title: "Bed Cover Sedang",
      badge: "6 Jam",
      img: Picsbedcoversedang,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Bed Cover Sedang",
      filter: "6jam",
    },
    {
      title: "Bed Cover Kecil",
      badge: "6 Jam",
      img: Picsbedcoverkecil,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Bed Cover Kecil",
      filter: "6jam",
    },
    {
      title: "Selimut Besar",
      badge: "6 Jam",
      img: Picsselimutbesar,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Selimut Besar",
      filter: "6jam",
    },
    {
      title: "Selimut Sedang",
      badge: "6 Jam",
      img: Picsselimutsedang,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Selimut Sedang",
      filter: "6jam",
    },
    {
      title: "Selimut Kecil",
      badge: "6 Jam",
      img: Picsselimutkecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Selimut Kecil",
      filter: "6jam",
    },
    {
      title: "Boneka Besar",
      badge: "6 Jam",
      img: Picsbonekabesar,
      price: "Rp. 30.000",
      desc: "Paket Laundry Satuan Boneka Besar",
      filter: "6jam",
    },
    {
      title: "Boneka Sedang",
      badge: "6 Jam",
      img: Picsbonekasedang,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Boneka Sedang",
      filter: "6jam",
    },
    {
      title: "Boneka Kecil",
      badge: "6 Jam",
      img: Picsbonekakecil,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Boneka Kecil",
      filter: "6jam",
    },
    {
      title: "Sprei Besar",
      badge: "6 Jam",
      img: Picssepraibesar,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Sprei Besar",
      filter: "6jam",
    },
    {
      title: "Sprei Kecil",
      badge: "6 Jam",
      img: Picssepraikecil,
      price: "Rp. 12.000",
      desc: "Paket Laundry Satuan Sprei Kecil",
      filter: "6jam",
    },
    {
      title: "Tas Besar",
      badge: "6 Jam",
      img: Picstasbesar,
      price: "Rp. 30.000",
      desc: "Paket Laundry Satuan Tas Besar",
      filter: "6jam",
    },
    {
      title: "Tas Sedang",
      badge: "6 Jam",
      img: Picstassedang,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Tas Sedang",
      filter: "6jam",
    },
    {
      title: "Tas Kecil",
      badge: "6 Jam",
      img: Picstaskecil,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Tas Kecil",
      filter: "6jam",
    },
    {
      title: "Topi",
      badge: "6 Jam",
      img: Picstopi,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Topi",
      filter: "6jam",
    },
    {
      title: "Gorden Besar",
      badge: "6 Jam",
      img: Picsgordenbesar,
      price: "Rp. 25.000",
      desc: "Paket Laundry Satuan Gorden Besar",
      filter: "6jam",
    },
    {
      title: "Gorden Sedang",
      badge: "6 Jam",
      img: Picsgordensedang,
      price: "Rp. 20.000",
      desc: "Paket Laundry Satuan Gorden Sedang",
      filter: "6jam",
    },
    {
      title: "Gorden Kecil",
      badge: "6 Jam",
      img: Picsgordenkecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Gorden Kecil",
      filter: "6jam",
    },
    // 3 Jam
    {
      title: "Bed Cover Besar",
      badge: "3 Jam",
      img: Picsbedcoverbesar,
      price: "Rp. 33.000",
      desc: "Paket Laundry Satuan Bed Cover Besar",
      filter: "3jam",
    },
    {
      title: "Bed Cover Sedang",
      badge: "3 Jam",
      img: Picsbedcoversedang,
      price: "Rp. 28.000",
      desc: "Paket Laundry Satuan Bed Cover Sedang",
      filter: "3jam",
    },
    {
      title: "Bed Cover Kecil",
      badge: "3 Jam",
      img: Picsbedcoverkecil,
      price: "Rp. 23.000",
      desc: "Paket Laundry Satuan Bed Cover Kecil",
      filter: "3jam",
    },
    {
      title: "Selimut Besar",
      badge: "3 Jam",
      img: Picsselimutbesar,
      price: "Rp. 28.000",
      desc: "Paket Laundry Satuan Selimut Besar",
      filter: "3jam",
    },
    {
      title: "Selimut Sedang",
      badge: "3 Jam",
      img: Picsselimutsedang,
      price: "Rp. 23.000",
      desc: "Paket Laundry Satuan Selimut Sedang",
      filter: "3jam",
    },
    {
      title: "Selimut Kecil",
      badge: "3 Jam",
      img: Picsselimutkecil,
      price: "Rp. 18.000",
      desc: "Paket Laundry Satuan Selimut Kecil",
      filter: "3jam",
    },
    {
      title: "Sprei Besar",
      badge: "3 Jam",
      img: Picssepraibesar,
      price: "Rp. 18.000",
      desc: "Paket Laundry Satuan Sprei Besar",
      filter: "3jam",
    },
    {
      title: "Sprei Kecil",
      badge: "3 Jam",
      img: Picssepraikecil,
      price: "Rp. 15.000",
      desc: "Paket Laundry Satuan Sprei Kecil",
      filter: "3jam",
    },
    {
      title: "Tas Besar",
      badge: "3 Jam",
      img: Picstasbesar,
      price: "Rp. 33.000",
      desc: "Paket Laundry Satuan Tas Besar",
      filter: "3jam",
    },
    {
      title: "Tas Sedang",
      badge: "3 Jam",
      img: Picstassedang,
      price: "Rp. 28.000",
      desc: "Paket Laundry Satuan Tas Sedang",
      filter: "3jam",
    },
    {
      title: "Tas Kecil",
      badge: "3 Jam",
      img: Picstaskecil,
      price: "Rp. 23.000",
      desc: "Paket Laundry Satuan Tas Kecil",
      filter: "3jam",
    },
    {
      title: "Topi",
      badge: "3 Jam",
      img: Picstopi,
      price: "Rp. 18.000",
      desc: "Paket Laundry Satuan Topi",
      filter: "3jam",
    },
  ];

  const listReguler = [
    {
      title: "Reguler 2 Hari",
      badge: "2 Hari",
      img: Picsreguler2hari,
      price: "Rp. 6.000/Kg",
      desc: "Paket Laundry Reguler 2 Hari (Minimal 2 Kg)",
      filter: "2hari",
    },
    {
      title: "Cuci Kering",
      badge: "2 Hari",
      img: Picscucikering,
      price: "Rp. 4.000/Kg",
      desc: "Paket Laundry Reguler Cuci Kering (Minimal 3 Kg)",
      filter: "2hari",
    },
    {
      title: "Setrika",
      badge: "2 Hari",
      img: Picssetrika,
      price: "Rp. 5.000/Kg",
      desc: "Paket Laundry Reguler Setrika (Minimal 3 Kg)",
      filter: "2hari",
    },
  ];

  const listExpress = [
    {
      title: "Express 1 Hari",
      badge: "1 Hari",
      img: Picsexpress,
      price: "Rp. 8.000/Kg",
      desc: "Paket Laundry Express 1 Hari (Minimal 2 Kg)",
      filter: "1hari",
    },
    {
      title: "Express 6 Jam",
      badge: "6 Jam",
      img: Picsexpress,
      price: "Rp. 10.000/Kg",
      desc: "Paket Laundry Express 6 Jam (Minimal 2 Kg)",
      filter: "6jam",
    },
    {
      title: "Express 3 Jam",
      badge: "3 Jam",
      img: Picsexpress,
      price: "Rp. 12.000/Kg",
      desc: "Paket Laundry Express 3 Jam (Minimal 2 Kg)",
      filter: "3jam",
    },
  ];

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.substring(1);
      setSelected(hash);
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div id="produk" className="flex max-w-7xl mx-auto flex-col pb-28">
      <h1 className="text-center font-bold text-3xl mb-6">
        Paket Washtop Laundry Express
      </h1>
      <Tabs
        className="flex justify-center pb-2"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key: Key) => {
          setSelected(String(key));
          setCurrentPage(1);
          setDisplayAll(false);
        }}
      >
        <Tab key="produksatuan" title="Satuan">
          <div className="flex justify-center">
            <RadioGroup
              orientation="horizontal"
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="pb-4 z-0"
            >
              <Radio value="all">All</Radio>
              <Radio value="2hari">2 Hari</Radio>
              <Radio value="6jam">6 Jam</Radio>
              <Radio value="3jam">3 Jam</Radio>
            </RadioGroup>
          </div>
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listSatuan
              .filter((item) => {
                if (selectedFilter === "all") {
                  return true;
                } else {
                  return item.filter === selectedFilter;
                }
              })
              .slice(
                (displayAll ? 0 : currentPage - 1) * itemsPerPage,
                (displayAll ? listSatuan.length : currentPage) * itemsPerPage
              )
              .map((item, index) => (
                <Card shadow="sm" key={index} isPressable>
                  <CardBody className="overflow-visible relative z-0 p-0">
                    <Image
                      isZoomed
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[248px]"
                      src={item.img}
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <Chip className="text-xs" color="default">
                        {item.badge}
                      </Chip>
                    </div>
                  </CardBody>

                  <CardFooter className="text-sm justify-between">
                    <b className="text-left">{item.title}</b>
                    <div className="flex items-center gap-2">
                      <p className="text-default-500 text-left">{item.price}</p>
                      <Button
                        className="bg-blue-200"
                        onPress={() => openModal(item)}
                        size="sm"
                      >
                        Selengkapnya
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
          <div className="flex items-center justify-center pt-12 pb-6 gap-2">
            <Pagination
              className="z-0"
              isCompact
              showControls
              total={Math.ceil(
                listSatuan.filter((item) => {
                  if (selectedFilter === "all") {
                    return true;
                  } else {
                    return item.filter === selectedFilter;
                  }
                }).length / itemsPerPage
              )}
              page={currentPage}
              onChange={(newPage) => setCurrentPage(newPage)}
            />
            <Button
              onClick={() => setDisplayAll(!displayAll)}
              className={
                displayAll
                  ? "bg-blue-500 rounded-2xl"
                  : "bg-gray-100 rounded-2xl"
              }
              style={{ color: displayAll ? "white" : "black" }}
            >
              {displayAll ? "Collapse" : "Expand"}
            </Button>
          </div>
        </Tab>
        <Tab key="produkreguler" title="Reguler">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listReguler
              .slice(
                (displayAll ? 0 : currentPage - 1) * itemsPerPage,
                (displayAll ? listSatuan.length : currentPage) * itemsPerPage
              )
              .map((item, index) => (
                <Card shadow="sm" key={index} isPressable>
                  <CardBody className="overflow-visible relative z-0 p-0">
                    <Image
                      isZoomed
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[248px]"
                      src={item.img}
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <Chip className="text-xs" color="default">
                        {item.badge}
                      </Chip>
                    </div>
                  </CardBody>
                  <CardFooter className="text-sm justify-between">
                    <b className="text-left">{item.title}</b>
                    <div className="flex items-center gap-2">
                      <p className="text-default-500 text-left">{item.price}</p>
                      <Button
                        className="bg-blue-200"
                        onPress={() => openModal(item)}
                        size="sm"
                      >
                        Selengkapnya
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
          <div className="flex items-center justify-center pt-12 pb-6 gap-2">
            <Pagination
              className="z-0"
              isCompact
              showControls
              total={Math.ceil(listReguler.length / itemsPerPage)}
              page={currentPage}
              onChange={(newPage) => setCurrentPage(newPage)}
            />
            <Button
              onClick={() => setDisplayAll(!displayAll)}
              className={
                displayAll
                  ? "bg-blue-500 rounded-2xl"
                  : "bg-gray-100 rounded-2xl"
              }
              style={{ color: displayAll ? "white" : "black" }}
            >
              {displayAll ? "Collapse" : "Expand"}
            </Button>
          </div>
        </Tab>
        <Tab key="produkexpress" title="Express">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listExpress
              .slice(
                (displayAll ? 0 : currentPage - 1) * itemsPerPage,
                (displayAll ? listSatuan.length : currentPage) * itemsPerPage
              )
              .map((item, index) => (
                <Card shadow="sm" key={index} isPressable>
                  <CardBody className="overflow-visible relative z-0 p-0">
                    <Image
                      isZoomed
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[248px]"
                      src={item.img}
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <Chip className="text-xs" color="default">
                        {item.badge}
                      </Chip>
                    </div>
                  </CardBody>
                  <CardFooter className="text-sm justify-between">
                    <b className="text-left">{item.title}</b>
                    <div className="flex items-center gap-2">
                      <p className="text-default-500 text-left">{item.price}</p>
                      <Button
                        className="bg-blue-200"
                        onPress={() => openModal(item)}
                        size="sm"
                      >
                        Selengkapnya
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
          <div className="flex items-center justify-center pt-12 pb-6 gap-2">
            <Pagination
              className="z-0"
              isCompact
              showControls
              total={Math.ceil(listReguler.length / itemsPerPage)}
              page={currentPage}
              onChange={(newPage) => setCurrentPage(newPage)}
            />
            <Button
              onClick={() => setDisplayAll(!displayAll)}
              className={
                displayAll
                  ? "bg-blue-500 rounded-2xl"
                  : "bg-gray-100 rounded-2xl"
              }
              style={{ color: displayAll ? "white" : "black" }}
            >
              {displayAll ? "Collapse" : "Expand"}
            </Button>
          </div>
        </Tab>
      </Tabs>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        scrollBehavior="inside"
        size="xl"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedItem?.title}
              </ModalHeader>
              <ModalBody>
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={selectedItem?.title}
                  className="w-full object-cover h-[248px]"
                  src={selectedItem?.img}
                />

                <Chip className="mt-4" color="warning" variant="dot">
                  Deskripsi
                </Chip>
                <p>{selectedItem?.desc}</p>
                <Chip className="mt-4" color="warning" variant="dot">
                  Harga
                </Chip>
                <p>{selectedItem?.price}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button color="primary" onPress={onClose}>
                  Order Sekarang
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
