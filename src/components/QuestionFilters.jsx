
import React from 'react'

const QuestionFilters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  difficulty,
  onDifficultyChange,
  status,
  onStatusChange
}) => {
  const selectClass =
    'w-full rounded-xl border border-white/10 bg-[#0b0f19] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 lg:w-auto'

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-white">
          Find Questions
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Search and filter your preparation list.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
            ⌕
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl border border-white/10 bg-[#0b0f19] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={selectClass}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          <option value="DSA">DSA</option>
          <option value="Git">Git</option>
          <option value="Technical">Technical</option>
        </select>

        {/* Difficulty */}
        <select
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className={selectClass}
          aria-label="Filter by difficulty"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className={selectClass}
          aria-label="Filter by status"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {(searchTerm || category || difficulty || status) && (
        <button
          onClick={() => {
            onSearchChange('')
            onCategoryChange('')
            onDifficultyChange('')
            onStatusChange('')
          }}
          className="mt-4 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
        >
          Clear all filters ×
        </button>
      )}
    </div>
  )
}

export default QuestionFilters
