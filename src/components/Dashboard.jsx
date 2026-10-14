
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Sidebar from './Sidebar'
import StatsCard from './StatsCard'

const Dashboard = () => {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('question')) || [])
  const [machinecodingstatus, setMachinecodingstatus] = useState(localStorage.getItem("machinecoding")||"Pending")


  useEffect(() => {
    localStorage.setItem('question', JSON.stringify(questions))
  }, [questions])

  useEffect(()=>{
    localStorage.setItem("machinecoding",machinecodingstatus)
  },[machinecodingstatus])

  const totalQuestions = questions.length

  const completedQuestions = questions.filter(
    (item) => item.status === 'Completed'
  ).length

  const completedDSA = questions.filter(
    (item) =>
      item.category === 'DSA' &&
      item.status === 'Completed'
  ).length

  const completedInterview = questions.filter(
    (item) =>
      ['Git', 'Technical'].includes(item.category) &&
      item.status === 'Completed'
  ).length


  const progress = totalQuestions
    ? Math.round((completedQuestions / totalQuestions) * 100)
    : 0

  const recentQuestions = [...questions].slice(-3).reverse()


  return (
    <div className="min-h-screen bg-[#0b0f19] text-white md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-5 sm:p-8">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-indigo-400">
              YOUR WORKSPACE
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Track your progress. Stay consistent. Get interview ready.
            </p>
          </div>

          <Link
            to="/questions"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            <span>+</span>
            Add Question
          </Link>
        </header>

        {/* Progress Section */}
        <section className="mb-8 overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 via-[#111827] to-violet-500/10 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-widest text-indigo-300">
                YOUR PROGRESS
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Every question counts.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Small, consistent efforts build strong interview skills.
                Keep practicing and track your improvement.
              </p>

              <Link
                to="/questions"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
              >
                Continue practicing
                <span>→</span>
              </Link>
            </div>

            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center self-start rounded-full border-4 border-indigo-400/20 bg-indigo-400/10 sm:self-center">
              <span className="text-3xl font-bold text-white">
                {progress}%
              </span>
              <span className="mt-1 text-xs text-slate-400">
                Completed
              </span>
            </div>
          </div>

          <div className="mt-7 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between gap-3 text-xs text-slate-400">
            <span>{completedQuestions} completed</span>
            <span>{totalQuestions} total questions</span>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-white">
              Preparation Overview
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Your interview preparation at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Total Questions"
              value={totalQuestions}
              icon="📚"
              description="Questions in your tracker"
              accent="bg-violet-500/15 text-violet-300"
            />

            <StatsCard
              title="DSA Completed"
              value={completedDSA}
              icon="💻"
              description="DSA problems completed"
              accent="bg-emerald-500/15 text-emerald-300"
            />

            <StatsCard
              title="Interview Completed"
              value={completedInterview}
              icon="🎯"
              description="Git and technical questions"
              accent="bg-blue-500/15 text-blue-300"
            />

            <StatsCard
              value={machinecodingstatus} 
              icon="⚡"
              description="Frontend machine coding task"
              accent="bg-amber-500/15 text-amber-300"
            />
          </div>
        </section>

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
  <h2 className="text-lg font-semibold text-white">
    Machine Coding
  </h2>

  <p className="mt-1 text-sm text-slate-400">
    Track your frontend machine coding task.
  </p>

    <select
        value={machinecodingstatus}
        onChange={(e) => setMachinecodingstatus(e.target.value)}
        className="mt-4 w-full rounded-xl border border-white/10 bg-[#0b0f19] p-3 text-white outline-none focus:border-indigo-500"
    >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
    </select>

    <p className="mt-3 text-sm text-slate-400">
        Current status:{" "}
        <span className="font-medium text-indigo-400">
        {machinecodingstatus}
        </span>
    </p>
    </div>

        {/* Recent Questions */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
          <div className="flex flex-col gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-white">
                Recent Questions
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Your latest additions to the tracker.
              </p>
            </div>

            <Link
              to="/questions"
              className="text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
            >
              View all questions →
            </Link>
          </div>

          {recentQuestions.length > 0 ? (
            <div className="divide-y divide-white/5">
              {recentQuestions.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 p-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="min-w-0">
                    <h3 className="break-words text-sm font-semibold text-slate-100">
                      {item.question}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
                        {item.category}
                      </span>

                      <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {item.difficulty}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${
                      item.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : item.status === 'In Progress'
                        ? 'bg-amber-500/10 text-amber-300'
                        : 'bg-slate-500/10 text-slate-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl">
                📚
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                Start your preparation
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Your recent questions will appear here once you start adding them.
              </p>

              <Link
                to="/questions"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Add your first question
                <span>→</span>
              </Link>
            </div>
          )}
        </section>

        <footer className="mt-8 text-center text-xs text-slate-600">
          Stay consistent. Your next interview starts with today's practice.
        </footer>
      </main>
    </div>
  )
}

export default Dashboard
