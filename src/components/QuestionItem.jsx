import React from 'react'

const QuestionItem = ({ question, onUpdateStatus , onDeleteQuestion }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-indigo-200 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-600">
            Q
          </div>

          <div>
            <h3 className="font-semibold leading-6 text-slate-900 transition group-hover:text-indigo-600">
              {question.question}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Practice question
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                {question.category}
              </span>

              <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
                {question.difficulty}
              </span>

              <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                {question.status}
              </span>
            </div>
          </div>
        </div>

        <select
          value={question.status}
          onChange={(e) =>
            onUpdateStatus(question.id, e.target.value)
          }
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
        onClick={() => {
            if (window.confirm('Delete this question?')) {
            onDeleteQuestion(question.id)
            }
        }}
        className="rounded-lg cursor-pointer border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
        >
        Delete
        </button>
      </div>
    </div>
  )
}

export default QuestionItem
