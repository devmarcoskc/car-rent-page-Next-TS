"use client";
import { CarItemType } from '@/types'
import {useState} from 'react';
import Image from 'next/image';
import CustomButton from '../customButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarModelDetails from '../carModelDetails';

type Props = {
    car: CarItemType
}

const CarItem = ({car}: Props) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content"> 
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px]
      font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3
      object-contain">
        <Image 
          src={generateCarImageUrl(car)} 
          alt="image car"
          fill
          priority
          className="object-contain"
        />
      </div>

        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full
          justify-between text-gray">
            <div className="flex flex-col justify-center
            items-center gap-2">
              <Image 
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="volante"
              />
              <p className="text-[14px]">
                {car.transmission === 'a' ? 'Automático' : 'Manual'}
              </p>
            </div>
            <div className="flex flex-col justify-center
            items-center gap-2">
              <Image 
                src="/tire.svg"
                width={20}
                height={20}
                alt="volante"
              />
              <p className="text-[14px]">
                {car.drive.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center
            items-center gap-2">
              <Image 
                src="/gas.svg"
                width={20}
                height={20}
                alt="volante"
              />
              <p className="text-[14px]">
                {car.city_mpg} Km/Por/Galão
              </p>
            </div>
          </div>

          <div className="car-card__btn-container">
            <CustomButton
              title="Saiba Mais"
              containerStyles="w-full py-[16px] rounded-full
              bg-primary-blue"
              textStyles="text-white text-[14px leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <CarModelDetails 
          isOpen={isOpen} 
          closeModal={() => setIsOpen(false)}
          car={car}
        />

    </div>
  )
}

export default CarItem;