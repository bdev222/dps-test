import { FC, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import ContactCard from "../ContactCard";
import { IOffice } from "../../types";

const OfficeCard: FC<{
  office: IOffice;
  onEdit: () => void;
  onDelete: () => void;
}> = ({
  office,
  onEdit,
  onDelete,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { title, address, ...contactInfo } = office

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="rounded-md mb-8 shadow-xl overflow-hidden"
    >
      <div
        className={`flex justify-between items-center px-[30px] py-[25px] cursor-pointer ${
          expanded ? "bg-gray200" : "bg-white"
        } `}
      >
        <div className="flex flex-col">
          <div
            className={`text-xl font-bold ${
              expanded ? "text-white" : "text-gray100"
            }`}
          >
            {title}
          </div>
          <div
            className={`text-sm font-light ${
              expanded ? "text-white" : "text-gray200"
            }`}
          >
            {address}
          </div>
        </div>
        {expanded ? (
          <ChevronUpIcon height={24} color="white" />
        ) : (
          <ChevronDownIcon height={24} color="#4cb1c3" />
        )}
      </div>
      {expanded && contactInfo && (
        <ContactCard contact={contactInfo} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  );
};

export default OfficeCard;
