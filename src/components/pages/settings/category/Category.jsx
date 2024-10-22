import { Archive, ArchiveRestore, Pencil, Plus, Trash } from 'lucide-react'
import React from 'react'
import CategoryTable from './CategoryTable'
import CategoryAddForm from './CategoryAddForm'

const Category = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  return (
    <section className='p-4'>
      <button className='btn btn-accent' onClick={() => setIsAdd(true)}>
        <Plus />
        Add New
      </button>
      {isAdd ? <CategoryAddForm setIsAdd={setIsAdd} /> : <CategoryTable />}
    </section>
  );
}

export default Category
