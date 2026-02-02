import useStore from '@/store'
import React from 'react'
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface Props {
    product: Product;
    className?: string;
}

const QuantityButtons = ({product, className}:Props) => {
    const {addItem, removeItem, getItemCount} = useStore();
    const itemCount = getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;

    const handleRemoveProduct = () =>{
        removeItem(product?._id);
        if(itemCount > 1 ){
            toast.success("Quantity Decrease Successfully");
        }else {
            toast.error("Ca not add more than available stock")
        }
    };

    const handleAddToCart = () =>{
       if((product?.stock as number) > itemCount){
        addItem(product);
        toast.success("Quantity increased succesfully!")
    } else{
        toast.error("Can not add more than available stock")
    }
    };




  return (
    <div className={cn("flex items-center gap-1 text-background", className)}>
        <Button
        onClick={handleRemoveProduct}
        variant="outline" size="icon" disabled={itemCount === 0 || isOutOfStock}
        className='w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 text-black hoverEffect'
         >
            <Minus />
        </Button>
        <span className='font-semibold text-sm w-6 text-center text-darkColor'>{itemCount}</span>
        <Button 
        onClick={handleAddToCart}
        variant="outline" size="icon" disabled={isOutOfStock}
        className='w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 text-black hoverEffect'>
            <Plus />
        </Button>

    </div>
  )
}

export default QuantityButtons
