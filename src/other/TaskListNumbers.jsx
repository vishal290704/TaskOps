import React from 'react'

const TaskListNumbers = ({data}) => {
    const stats = data?.taskNumbers;
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 mt-5 gap-4'>
        {/* <div className='rounded-xl px-9 py-6 bg-red-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.newTask}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-blue-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.active}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Active Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-green-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.completed}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Completed Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 bg-yellow-400'>
            <h2 className='flex text-2xl font-semibold items-center justify-center left-50%'>{data.taskNumbers.failed}</h2>
            <h3 className='flex text-xl font-medium items-center justify-center left-50%'>Failed Task</h3>
        </div> */}
         {/* for new task card  */}
      <div className="bg-red-500/10 border border-red-500/20
                      rounded-xl p-6
                      hover:shadow-lg transition">
        <h2 className="text-3xl font-semibold text-red-400 text-center">
          {stats?.newTask ?? 0}
        </h2>
        <p className="text-sm text-gray-300 text-center mt-1">
          New Tasks
        </p>
      </div>

      {/* for active task card  */}
      <div className="bg-blue-500/10 border border-blue-500/20
                      rounded-xl p-6
                      hover:shadow-lg transition">
        <h2 className="text-3xl font-semibold text-blue-400 text-center">
          {stats?.active ?? 0}
        </h2>
        <p className="text-sm text-gray-300 text-center mt-1">
          Active Tasks
        </p>
      </div>

      {/* for completed task card  */}
      <div className="bg-emerald-500/10 border border-emerald-500/20
                      rounded-xl p-6
                      hover:shadow-lg transition">
        <h2 className="text-3xl font-semibold text-emerald-400 text-center">
          {stats?.completed ?? 0}
        </h2>
        <p className="text-sm text-gray-300 text-center mt-1">
          Completed
        </p>
      </div>

      {/* for failed task card  */}
      <div className="bg-yellow-500/10 border border-yellow-500/20
                      rounded-xl p-6
                      hover:shadow-lg transition">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center">
          {stats?.failed ?? 0}
        </h2>
        <p className="text-sm text-gray-300 text-center mt-1">
          Failed
        </p>
      </div>

    </div>
  )
}

export default TaskListNumbers