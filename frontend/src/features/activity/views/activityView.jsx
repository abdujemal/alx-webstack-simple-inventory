import React, { useEffect } from 'react';
import LineChart from './lineChart';
import { useActivity } from '../context/ActivityContext';
import { BsArrowDown } from "react-icons/bs";
import { useAuth } from '../../auth/controllers/AuthProvider';

const ActivityView = () => {

  const { activityChart, activites, loading, loadMoreActivities } = useActivity() 
  const { currentUser } = useAuth()

  const titles = ["Sales ID", "Date", "Product", "Customer", "Total Amount", "Status"]
  const keys = ["_id", "date", "pName", "customerName", "pPrice", "status"]

  const formatDated = () => {
    return new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
    
  return (
    <section className='flex-1 pt-4 flex gap-9 px-4 flex-col h-screen overflow-auto'>
      <div>
        <h1 className='text-4xl ' >Welcome, {currentUser?.name}</h1>
        <h1 className='text-xl text-gray-500 mt-4' >{formatDated()}</h1>
      </div>
      <div className='flex gap-4 relative'>
        <div className='flex-1  shadow-xl px-2 pt-6 rounded-3xl bg-white border border-gray-300'>
          <LineChart activities={activityChart}/>
        </div>
        {/* <div className='flex flex-col w-60 gap-2'>
          <div className='bg-white shadow-xl w-full rounded-3xl flex-1 border border-gray-300'>

          </div>
          <div className='bg-white shadow-xl w-full rounded-3xl flex-1 border border-gray-300'>

          </div>
        </div> */}
      </div>
      <div className='flex flex-col border  border-gray-300 rounded-lg bg-white shadow-xl flex-1 px-5 py-5'>
        <h2 className='text-2xl pb-7 font-bold'>Recent Sales</h2>
        <div className='overflow-x-auto mb-3'>
        <table className="min-w-full divide-y  divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {
                titles.map((key)=><th className="px-4 py-5 text-center" key={key}>{key}</th>)
              }
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
          {
            activites.map((activity)=>
              <tr key={activity._id}>
                {keys.map((key)=>
                  <td className="px-4 py-5 text-center text-ellipsis" >
                    {`${key == "pPrice" ? "ETB " : ""}${activity[key]}`}
                  </td>
                )}
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
        {
        loading ?
          <p className='self-center bg-white p-1 rounded mt-1'>Loading..</p>:
          <p onClick={(e)=>loadMoreActivities()} className='self-center bg-white p-2 rounded my-1 w-fit flex cursor-pointer border border-black border-opacity-15'><BsArrowDown/>Load More</p>                
         }
      </div>
    </section>
  );
}

export default ActivityView;
