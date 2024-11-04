import LoaderTable from "@/components/partials/LoaderTable";
import Pill from "@/components/partials/Pill";
import SpinnerTable from "@/components/partials/spinners/SpinnerTable";
import {
  Archive,
  ArchiveRestore,
  FileVideo,
  Pencil,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import React from "react";
import NoData from "@/components/partials/icons/NoData";
import ServerError from "@/components/partials/icons/ServerError";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ToastSuccess from "@/components/partials/ToastSuccess";
import ModalValidate from "@/components/partials/modals/ModalValidate";
import MoviesModalAdd from "../movies/MoviesModalAdd";
import MoviesModalView from "../movies/MoviesModalView";
import TopMoviesModalAdd from "./TopSeriesModalAdd";
import TopSeriesModalAdd from "./TopSeriesModalAdd";

const TopSeriesTable = () => {
  const [isConfirm, setIsConfirm] = React.useState(false); //Show/Hide nang modalConfirm
  const [isDelete, setIsDelete] = React.useState(false); //Show/Hide nang modalDelete
  const [isSuccess, setIsSuccess] = React.useState(false); //Show/Hide nang toastSuccess
  const [isAdd, setIsAdd] = React.useState(false); //Show/Hide nang ModalAdd
  const [isView, setIsView] = React.useState(false); //Show/Hide nang ModalView
  const [isValidate, setIsValidate] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const [id, setId] = React.useState(null);
  const [itemEdit, setItemEdit] = React.useState(0);
  const [isActive, setIsActive] = React.useState(0);
  let counter = 0;
  const {} = useQueryData();

  const handleAdd = () => {
    setIsAdd(true);
    setItemEdit(null);
  };

  const handleEdit = (item) => {
    setIsAdd(true);
    setItemEdit(item);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/top-series`, // endpoint
    "get", // method
    "top-series"
  );

  const handleArchive = (item) => {
    setIsConfirm(true);
    setIsActive(0);
    setId(item.topseries_aid);
  };
  const handleRestore = (item) => {
    setIsConfirm(true);
    setIsActive(1);
    setId(item.topseries_aid);
  };
  const handleView = (item) => {
    setIsView(true);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setIsDelete(true);
  };

  console.log(result);

  return (
    <>
      <div className='p-4 m-4'>
        <div className='flex justify-between items-center'>
          <form action=''>
            <div className='input-wrap relative'>
              <input
                type='text'
                placeholder='keyword'
                className='bg-primary px-2 py-1 placeholder:opacity-30 outline-none border border-transparent focus:border-accent !pl-8 rounded-md !text-dark'
              />
              <Search
                className='absolute top-2.5 left-1.5 opacity-25 '
                size={20}
              />
            </div>
          </form>
          <button className='btn btn-accent ' onClick={handleAdd}>
            <Plus size={14} />
            Add New
          </button>
        </div>
        <div className='table_wrapper bg-primary p-4 mt-5 rounded-md'>
          {!isLoading || (isFetching && <SpinnerTable />)}
          <table className='w-full'>
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Year</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan='100%'>
                    {isLoading ? (
                      <LoaderTable count={30} cols={6} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan='100%'>
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.data.map((item, key) => {
                counter++;
                return (
                  <tr key={key}>
                    <td>{counter}.</td>
                    <td>{item.topseries_title}</td>
                    <td>{item.topseries_year}</td>
                    <td>
                      <Pill isActive={item.topseries_is_active} />
                    </td>

                    <td>
                      <ul className='table-action'>
                        {item.topseries_is_active ? (
                          <>
                            <li>
                              <button
                                data-tooltip='View'
                                onClick={() => handleView(item)}
                              >
                                <FileVideo size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Edit'
                                onClick={() => handleEdit(item)}
                              >
                                <Pencil size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Archive'
                                onClick={() => handleArchive(item)}
                              >
                                <Archive size={15} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                data-tooltip='Restore'
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Delete'
                                onClick={() => handleDelete(item)}
                              >
                                <Trash size={15} />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isConfirm && (
        <ModalConfirm
          setIsComfirm={setIsConfirm}
          queryKey='top-movies'
          mysqlApiArchive={`/v1/top-movies/active/${id}`}
          active={isActive}
          setIsSuccess={setIsSuccess}
        />
      )}
      {isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v1/top-movies/${id}`}
          queryKey='top-movies'
          setIsSuccess={setIsSuccess}
        />
      )}

      {isAdd && (
        <TopSeriesModalAdd
          setIsAdd={setIsAdd}
          setIsSuccess={setIsSuccess}
          itemEdit={itemEdit}
          setIsValidate={setIsValidate}
        />
      )}

      {isView && <MoviesModalView itemEdit={itemEdit} setIsView={setIsView} />}

      {isSuccess && <ToastSuccess setIsSuccess={setIsSuccess} />}
      {isValidate && (
        <ModalValidate setIsValidate={setIsValidate} message={message} />
      )}

      {/* <MoviesModalView /> */}
      {/* <MoviesModalAdd/> */}
    </>
  );
};
export default TopSeriesTable;