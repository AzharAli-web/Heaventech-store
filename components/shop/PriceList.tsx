import React from 'react'
import { Title } from '../ui/text';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

const priceArray = [
  { title: "Under 2k", value: "0-2,000"},
  { title: "Rs 2k-4k", value: "2,000-4,000"},
  { title: "Rs 4k-6k", value: "4,000-6,000"},
  { title: "Rs 6k-8k", value: "6,000-8,000"},
  { title: "Rs 8k-10k", value: "8,000-10,000"},
  { title: "Over 10k", value: "10,000"},
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice?:  React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Price</Title>
      <RadioGroup className="mt-2 space-y-1" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
          <div
            key={index}
            onClick={() => setSelectedPrice(price?.value)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded-sm"
            />
            <Label
              htmlFor={price.value}
              className={`${selectedPrice === price?.value ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
        >
          Reset selection
        </button>
      )}
    </div>
  );
};

export default PriceList;