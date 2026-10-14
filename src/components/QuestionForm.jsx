import React, { useState } from 'react'
import { toast } from 'react-toastify'

const QuestionForm = ({onAddQuestion}) => {

    const [question, setQuestion] = useState('')
    const [category, setCategory] = useState('DSA')
    const [difficulty, setDifficulty] = useState('Easy')
    const [status, setStatus] = useState('Pending')
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!question.trim() || !category || !difficulty) {
        toast.error('Please fill in all required fields')
        return
        }
        const newQuestion = {
            id: Date.now(),
            question: question.trim(),
            category,
            difficulty,
            status
        }
        onAddQuestion(newQuestion)
        setQuestion('')
        setCategory('DSA')
        setDifficulty('Easy')
        setStatus('Pending')
    }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Add New Question
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Keep your interview preparation organized.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Question
          </label>
          <input
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
            type="text"
            placeholder="Enter your question..."
            className="w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option  disabled>Select category</option>
              <option>DSA</option>
              <option>Git</option>
              <option>Technical</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option value="" disabled>Select difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 sm:w-auto"
        >
          + Add Question
        </button>
      </form>
    </div>
  )
}

export default QuestionForm
