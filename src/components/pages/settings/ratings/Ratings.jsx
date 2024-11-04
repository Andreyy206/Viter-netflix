import { Plus } from "lucide-react";
import React from "react";
import RatingsAddForm from "./RatingsAddForm";
import RatingsTable from "./RatingsTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";

const Ratings = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <section className='p-4'>
      <button className='btn btn-accent' onClick={handleAdd}>
        <Plus /> Add New
      </button>

      {store.isAdd && <RatingsAddForm />}
      <RatingsTable setItemEdit={setItemEdit} />
    </section>
  );
};

export default Ratings;
