
import React from 'react'

const StatsCard = ({title , value , icon , accent , description}) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>
        </div>

        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl text-indigo-600 ${accent}`}>
            {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
          Practice
        </span>

        <p className="text-xs text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}

export default StatsCard
