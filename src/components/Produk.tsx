import React, { Key } from "react";
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
} from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = React.useState("photos");
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
    {
      title: "Satuan Satu",
      img: "https://picsum.photos/411",
      price: "Rp. 6.000",
      desc: "Deskripsi Satuan 1",
    },
    {
      title: "Satuan Dua",
      img: "https://picsum.photos/412",
      price: "Rp. 8.000",
      desc: "Deskripsi Satuan 2",
    },
    {
      title: "Satuan Tiga",
      img: "https://picsum.photos/413",
      price: "Rp. 10.000",
      desc: "Deskripsi Satuan 3",
    },
    {
      title: "Satuan Empat",
      img: "https://picsum.photos/414",
      price: "Rp. 6.000",
      desc: "Deskripsi Satuan 4",
    },
    {
      title: "Satuan Lima",
      img: "https://picsum.photos/415",
      price: "Rp. 8.000",
      desc: "Deskripsi Satuan 5",
    },
    {
      title: "Satuan Enam",
      img: "https://picsum.photos/416",
      price: "Rp. 10.000",
      desc: "Deskripsi Satuan 6",
    },
  ];

  const listReguler = [
    {
      title: "Reguler Satu",
      img: "https://picsum.photos/421",
      price: "Rp. 6.000",
      desc: "Deskripsi Reguler 1",
    },
    {
      title: "Reguler Dua",
      img: "https://picsum.photos/422",
      price: "Rp. 8.000",
      desc: "Deskripsi Reguler 2",
    },
    {
      title: "Reguler Tiga",
      img: "https://picsum.photos/423",
      price: "Rp. 10.000",
      desc: "Deskripsi Reguler 3",
    },
    {
      title: "Reguler Empat",
      img: "https://picsum.photos/424",
      price: "Rp. 6.000",
      desc: "Deskripsi Reguler 4",
    },
    {
      title: "Reguler Lima",
      img: "https://picsum.photos/425",
      price: "Rp. 8.000",
      desc: "Deskripsi Reguler 5",
    },
    {
      title: "Reguler Enam",
      img: "https://picsum.photos/426",
      price: "Rp. 10.000",
      desc: "Deskripsi Reguler 6",
    },
  ];

  const listExpress = [
    {
      title: "Express Satu",
      img: "https://picsum.photos/431",
      price: "Rp. 6.000",
      desc: "Deskripsi Express 1",
    },
    {
      title: "Express Dua",
      img: "https://picsum.photos/432",
      price: "Rp. 8.000",
      desc: "Deskripsi Express 2",
    },
    {
      title: "Express Tiga",
      img: "https://picsum.photos/433",
      price: "Rp. 10.000",
      desc: "Deskripsi Express 3",
    },
    {
      title: "Express Empat",
      img: "https://picsum.photos/434",
      price: "Rp. 6.000",
      desc: "Deskripsi Express 4",
    },
    {
      title: "Express Lima",
      img: "https://picsum.photos/435",
      price: "Rp. 8.000",
      desc: "Deskripsi Express 5",
    },
    {
      title: "Express Enam",
      img: "https://picsum.photos/436",
      price: "Rp. 10.000",
      desc: "Deskripsi Express 6",
    },
  ];

  return (
    <div className="flex max-w-7xl mx-auto flex-col pb-4">
      <h1 className="text-center font-bold text-3xl mb-6 mt-28">
        Paket Washtop Laundry Express
      </h1>
      <Tabs
        className="flex justify-center"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key: Key) => setSelected(String(key))}
      >
        <Tab key="satuan" title="Satuan">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listSatuan.map((item, index) => (
              <Card shadow="sm" key={index} isPressable>
                <CardBody className="overflow-visible z-0 p-0">
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[248px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <div className="flex items-center gap-2">
                    <p className="text-default-500">{item.price}</p>
                    <Button
                      className="bg-blue-200"
                      onPress={() => openModal(item)}
                    >
                      Order
                    </Button>
                    <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      backdrop="opaque"
                      placement="center"
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
                              Layanan {selectedItem?.title}
                            </ModalHeader>
                            <ModalBody>
                              <p>{selectedItem?.desc}</p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
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
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tab>
        <Tab key="reguler" title="Reguler">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listReguler.map((item, index) => (
              <Card shadow="sm" key={index} isPressable>
                <CardBody className="overflow-visible z-0 p-0">
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[248px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <div className="flex items-center gap-2">
                    <p className="text-default-500">{item.price}</p>
                    <Button
                      className="bg-blue-200"
                      onPress={() => openModal(item)}
                    >
                      Order
                    </Button>
                    <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      backdrop="opaque"
                      placement="center"
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
                              Layanan {selectedItem?.title}
                            </ModalHeader>
                            <ModalBody>
                              <p>{selectedItem?.desc}</p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
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
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tab>
        <Tab key="express" title="Express">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {listExpress.map((item, index) => (
              <Card shadow="sm" key={index} isPressable>
                <CardBody className="overflow-visible z-0 p-0">
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[248px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <div className="flex items-center gap-2">
                    <p className="text-default-500">{item.price}</p>
                    <Button
                      className="bg-blue-200"
                      onPress={() => openModal(item)}
                    >
                      Order
                    </Button>
                    <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      backdrop="opaque"
                      placement="center"
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
                              Layanan {selectedItem?.title}
                            </ModalHeader>
                            <ModalBody>
                              <p>{selectedItem?.desc}</p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
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
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
