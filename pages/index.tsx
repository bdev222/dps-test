import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useCallback, useState } from "react";
import AddLocationButton from "../components/AddLocationButton";
import OfficeCard from "../components/OfficeCard";
import OfficeForm from "../components/OfficeForm";
import { IOffice } from "../types";
import { v4 as uuid } from "uuid"

const mockLocation: IOffice = {
  title: "Headquarters",
  address: "3763 W. Dallas St.",
  fullName: "Hellena John",
  job: "Software Tester",
  email: "georgia.young@example.com",
  phone: "8085550111",
};

const Home: NextPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [offices, setOffices] = useState<IOffice[]>([]);
  const [currentOffice, setCurrentOffice] = useState<IOffice>();

  const handleAddOfficeBtnClick = () => {
    setOpenForm(true);
    setCurrentOffice(undefined)
  };

  const onLocationFormSave = useCallback(
    (data: IOffice) => {
      setOffices((offices) => {
        if (data.id) {
          const index = offices.findIndex(loc => loc.id === data.id)
          return [...offices.slice(0, index), data, ...offices.slice(index + 1, offices.length)]
        } else {
          return [...offices, { id: uuid(), ...data }]
        }
      })
      setCurrentOffice(undefined)
    },
    []
  );

  const handleEditOffice = (office: IOffice) => {
    setCurrentOffice(office);
    setOpenForm(true);
  };

  const handleDeleteOffice = (officeId: string) => {
    setOffices((offices) => {
      return offices.filter(office => office.id !== officeId)
    })
  };

  return (
    <div className="bg-layout100 overflow-y-scroll h-screen">
      <Head>
        <title>Dog and Pony</title>
      </Head>
      <div className="flex justify-center">
        <div className="flex flex-col w-[320px]">
          <h1 className="text-7xl text-center pt-24 pb-12 text-sky100 font-light">
            Offices
          </h1>
          {openForm && !currentOffice ? (
            <OfficeForm
              onClose={() => setOpenForm(false)}
              onSave={(data) => onLocationFormSave(data)}
              office={currentOffice}
            />
          ) : (
            <div className="mb-8">
              <AddLocationButton onClick={handleAddOfficeBtnClick} />
            </div>
          )}
          <div className="mb-5">
            {offices.map((office) => (
              <Fragment key={office.id}>
                {
                  currentOffice?.id === office.id && openForm ? (
                    <OfficeForm
                      onClose={() => setOpenForm(false)}
                      onSave={(data) => onLocationFormSave(data)}
                      office={currentOffice}
                    />
                  ) : (
                    <OfficeCard
                      office={office}
                      onEdit={() => handleEditOffice(office)}
                      onDelete={() => handleDeleteOffice(office.id!)}
                    />
                  )
                }
              
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
