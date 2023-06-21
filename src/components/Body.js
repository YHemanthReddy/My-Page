import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {DATA} from '../utils/constants';
import {CiFilter} from "react-icons/ci";
import { BsPlus } from "react-icons/bs"
const Body = () => {
    const [data, setData] = useState(DATA);
    const [filterText, setFilterText] = useState("");
    const [filteredData, setFilterData] = useState(DATA);
    const columns = [
        {
          name : 'Receipt',
          selector : row => row.receipt
        },
        {
          name : 'Status',
          selector : row => row.status,
          conditionalCellStyles : [
            {
              when: row => row.status === 'Unposted',
              style: {
                  backgroundColor: 'rgba(204, 204, 0, 0.5)',
                  color: 'black',
                  '&:hover': {
                    cursor: 'pointer',
                  },
              },
            },
            {
              when: row => row.status === 'Posted',
              style: {
                  backgroundColor: 'rgba(51, 204, 51, 0.5)',
                  color: 'black',
                  '&:hover': {
                    cursor: 'pointer',
                  },
              },
            }
          ]
        },
        {
          name : 'Date Paid',
          selector : row => row.datePaid,
          sortable : true
        },
        {
          name : 'Grave Site',
          selector : row => row.graveSite
        },
        {
          name : 'Paid By',
          selector : row => row.paidBy
        },
        {
          name : 'No. of Payment',
          selector : row => row.noOfPayment
        },
        {
          name : 'Total',
          selector : row => row.total
        }
      ];

      function handleClickEvent() {
        if(filterText){
          setFilterText("");
        }
        const newData = data.filter(row => {
            return row.paidBy.toLowerCase().includes(filterText.toLowerCase());
        })
        setData(newData);
        setFilterData(newData);
      }
      
  return (
    <div className='my-4'> 
        <div>
            <div className='flex justify-between'>
                <h1 className='text-2xl'>Payments</h1>
                <div className='flex justify-between mr-6'>
                    <input type="text" className='w-80 broder broder-solid border-black-100 mr-6'
                       placeholder='search for Paid By'
                       value={filterText}
                       onChange={(e) => setFilterText(e.target.value)}
                    ></input>
                    <div className='flex align-middle text-center mr-6 w-20 bg-slate-500 rounded-2xl'>
                        <h1 className='py-2'><CiFilter /></h1>
                        <button type="button"  onClick={handleClickEvent}>Filter</button>
                    </div>
                    <div className='flex  align-middle  mr-6  w-20 bg-green-700 rounded-2xl'>
                        <h1 className='py-2'><BsPlus /></h1>
                        <button type="button">Payment</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <DataTable 
          columns={columns}
          data = {filteredData}
          selectableRows
          fixedHeader
          pagination
      ></DataTable>
    </div>
  )
}

export default Body