import React from "react";
import { Archive, ArchiveRestore, Pencil, Plus, Trash } from "lucide-react";

const GenreTable = ({ isAdd }) => {
  return (
    <div>
      <div
        className={`table_wrapper bg-primary p-4 mt-5 rounded-md ${
          isAdd ? "opacity-40 pointers-events-none" : ""
        }`}
      >
        <table className='w-full'>
          <thead>
            <tr>
              <td>#</td>
              <td>Genre</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td>Tarzan - Ganda Lalake</td>
              <td>Active</td>
              <td>
                <ul className='table-action'>
                  <li>
                    <button data-tooltip='Edit'>
                      <Pencil size={15} />
                    </button>
                  </li>
                  <li>
                    <button data-tooltip='Archive'>
                      <Archive size={15} />
                    </button>
                  </li>
                  <li>
                    <button data-tooltip='Restore'>
                      <ArchiveRestore size={15} />
                    </button>
                  </li>
                  <li>
                    <button data-tooltip='Delete'>
                      <Trash size={15} />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenreTable;