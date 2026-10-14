
import React from 'react'
import QuestionItem from './QuestionItem'

const QuestionList = ({ questions = [], onUpdateStatus , onDeleteQuestion }) => {
  const questionList = Array.isArray(questions) ? questions : []

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Your Questions
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of your interview preparation.
          </p>
        </div>

        <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
          {questionList.length} {questionList.length === 1 ? 'Question' : 'Questions'}
        </span>
      </div>

      {questionList.length > 0 ? (
        <div className="space-y-4">
          {questionList.map((item) => (
            <QuestionItem
              key={item.id}
              question={item}
              onUpdateStatus={onUpdateStatus}
              onDeleteQuestion={onDeleteQuestion}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-500">
            ☷
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            No questions yet
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Start building your interview preparation list by adding your first question.
          </p>
        </div>
      )}
    </div>
  )
}

export default QuestionList
