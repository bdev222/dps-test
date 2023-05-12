import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

const AddLocationButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement | SVGSVGElement>
) => {
  return (
    <Button data-testid="add-location" icon={<PlusIcon height={20} color="white" />} {...props}>
      <label className="text-sm text-white font-light cursor-pointer">
        Add New Location
      </label>
    </Button>
  );
};

export default AddLocationButton;
