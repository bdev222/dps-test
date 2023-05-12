import { FC } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import Button from "../Button";
import type { IContact } from "../../types";

const ContactCard: FC<{
  contact: IContact;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ contact, onEdit, onDelete }) => {
  const { fullName, job, email, phone } = contact;

  return (
    <div className="bg-white p-8 divide-y divide-gray300">
      <div className="mb-4">
        <div className="text-lg font-bold text-gray100">{fullName}</div>
        <div className="text-sm font-light text-gray100 mt-2">{job}</div>
        <div className="text-sm font-light text-sky200 mt-2">{email}</div>
        <div className="text-sm font-medium text-gray100 mt-2">{phone}</div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <Button
          className="flex items-center uppercase"
          icon={<PencilIcon color="#313e4f" width={20} />}
          iconPosition="left"
          onClick={onEdit}
        >
          <label className="text-xs ml-2 font-light text-gray100 cursor-pointer">
            Edit
          </label>
        </Button>
        <Button
          className="flex items-center uppercase"
          icon={<TrashIcon color="#fe7b92" width={20} />}
          iconPosition="left"
          onClick={onDelete}
        >
          <label className="text-xs ml-2 font-light text-rose100 cursor-pointer">
            Delete
          </label>
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
