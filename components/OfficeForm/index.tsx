import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Input from "../Input";
import { IOffice } from "../../types";
import * as validator from "../../utils/validator"

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  address: Yup.string().required("Address is required."),
  fullName: Yup.string().required("Fullname is required."),
  job: Yup.string().required("Job Position is required."),
  email: validator.emailSchema,
  phone: Yup.string()
    .required("Phone is required."),
});

const OfficeForm: FC<{
  onClose: () => void;
  onSave: (data: IOffice) => void;
  office?: IOffice;
}> = ({ onClose, onSave, office }) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IOffice>({ 
    defaultValues: {
      title: "",
      address: "",
      fullName: "",
      job: "",
      email: "",
      phone: ""
    },
    resolver: yupResolver(schema),
    mode: "all"
  });

  useEffect(() => {
    if (office) {
      reset(office)
    }
  }, [office, reset]);

  const onSubmit = (data: IOffice) => {
    onSave(data);
    onClose()
  };

  return (
    <div data-testid="office-form" className="flex flex-col bg-white rounded-md p-5 mb-8">
      <div className="flex justify-between items-center mb-12">
        <div className="text-md font-medium text-gray100">
          {office ? "Edit Location" : "New Location"}
        </div>
        <XMarkIcon width={20} color="#313e4f" onClick={onClose} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field }) =>  
            <Input
              data-testid="title-input"
              label="Title"
              {...field}
              error={errors?.title?.message}
            />
          }
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) =>  
            <Input
              data-testid="address-input"
              label="Enter the address"
              {...field}
              error={errors?.address?.message}
            />
          }
        />
        <div className="divide-y divide-gray300 text-sky100 font-light">
          <div className="uppercase text-xs mb-4">Contact Information</div>
          <div className="pt-4">
            <Controller
              name="fullName"
              control={control}
              render={({ field }) =>  
                <Input
                  data-testid="fullname-input"
                  label="Full Name"
                  {...field}
                  error={errors?.fullName?.message}
                />
              }
            />
            <Controller
              name="job"
              control={control}
              render={({ field }) =>  
                <Input
                  data-testid="job-input"
                  label="Job Position"
                  {...field}
                  error={errors?.job?.message}
                />
              }
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) =>  
                <Input
                  data-testid="email-input"
                  label="Email"
                  {...field}
                  error={errors?.email?.message}
                />
              }
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) =>  
                <Input
                  data-testid="phone-input"
                  label="Phone"
                  placeholder="(xxx) xxx-xxxx"
                  {...field}
                  error={errors?.phone?.message}
                />
              }
            />
            <button
              data-testid="submit-form-btn"
              type="submit"
              className="bg-sky100 w-16 rounded-md text-white p-2 disabled:bg-gray300"
              disabled={!isValid}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OfficeForm;
