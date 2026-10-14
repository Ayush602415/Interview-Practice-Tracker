import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import QuestionForm from './QuestionForm'
import QuestionFilters from './QuestionFilters'
import QuestionList from './QuestionList'
import { toast } from 'react-toastify'

const Questions = () => {
    const [questions, setQuestions] = useState(() => {
  const savedQuestions = localStorage.getItem('question')
  return savedQuestions ? JSON.parse(savedQuestions) : []
})
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [status, setStatus] = useState('')

    const handleQuestion = (newQuestion)=>{
       setQuestions((prevQuestions) => [
        ...prevQuestions,
        newQuestion
])
    }
    useEffect(()=>{
        localStorage.setItem("question",JSON.stringify(questions))
    },[questions])

   const handleUpdateStatus = (id, newStatus) => {
    setQuestions((prevQuestions) =>
        prevQuestions.map((item) =>
        item.id === id
            ? { ...item, status: newStatus }
            : item
        )
    )
    toast.success('Question status updated successfully')
    }

    const handleDeleteQuestion = (id)=>{
        setQuestions((prevQuestion)=> prevQuestion.filter((item)=> item.id !== id))
        toast.success('Question deleted successfully')
    }

    const filteredQuestions = questions.filter((item)=>{
       const matchSearch =  item.question.toLowerCase().includes(searchTerm.toLowerCase())
       const matchCategory = !category || item.category === category
       const matchdifficulty = !difficulty || item.difficulty === difficulty
       const matchStatus = !status || item.status === status

       return matchSearch && matchCategory && matchdifficulty && matchStatus
    })
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-5 sm:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <header>
            <p className="mb-2 text-sm font-medium text-violet-400">
              YOUR PRACTICE SPACE
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions
            </h1>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Organize your DSA problems and interview preparation.
            </p>
          </header>

          <section className="rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-6">
            <QuestionForm onAddQuestion={handleQuestion} />
          </section>

          <section className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold">All Questions</h2>
              <p className="mt-1 text-sm text-gray-400">
                Keep track of what you have learned and what is next.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-6">
              <QuestionFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                category={category}
                onCategoryChange={setCategory}
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
                status={status}
                onStatusChange={setStatus}
              />
              {filteredQuestions.length === 0 && questions.length > 0 ? (
            <p className="rounded-xl border border-white/10 bg-[#111827] p-6 text-center text-slate-400">
                No matching questions found. Try changing your search or filters.
            </p>
            ) : (
            <QuestionList
                questions={filteredQuestions}
                onUpdateStatus={handleUpdateStatus}
                onDeleteQuestion={handleDeleteQuestion}
            />
            )}
        
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Questions
