import { ImagePlusIcon, X } from "lucide-react";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import React from "react";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";

const SidesDrinksM = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  return (
    <ModalWrapper>
      <form className=''>
        <div className='modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft'>
          <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center self-start'>
            <h5 className='mb-0'>{itemEdit ? "Edit" : "Add"} Drink</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <div className='modal-body  p-3 px-4 '>
            <div className='input-wrap'>
              <label htmlFor=''>Name</label>
              <input type='text' />
            </div>
            <div className='input-wrap'>
              <label htmlFor=''>Price</label>
              <input type='text' />
            </div>
            <div className='input-wrap relative'>
              <label htmlFor=''>Description</label>
              <textarea name='' id=''></textarea>
            </div>
          </div>
          <div className='modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start'>
            <button
              className='btn btn-accent min-w-[90px] flex justify-center'
              type='submit'
            >
              Save
            </button>
            <button
              className='btn btn-cancel min-w-[90px] flex justify-center'
              type='reset'
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default SidesDrinksM;
