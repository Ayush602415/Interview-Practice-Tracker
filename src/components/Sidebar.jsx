import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? 'bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/20'
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`

  return (
    <aside className="flex md:min-h-screen w-full flex-col border-b border-white/10 bg-[#0f1523] p-5 md:w-64 md:shrink-0 md:border-b-0 md:border-r">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">
          I
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">InterviewTrack</h2>
          <p className="text-xs text-gray-500">Practice. Improve. Repeat.</p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
        Workspace
      </p>

      <nav className="space-y-2">
        <NavLink to="/" end className={linkStyle}>
          <span>▦</span>
          Dashboard
        </NavLink>

        <NavLink to="/questions" className={linkStyle}>
          <span>☷</span>
          Questions
        </NavLink>
      </nav>

      <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
        <p className="text-sm font-semibold text-white">Keep going!</p>
        <p className="mt-2 text-xs leading-5 text-gray-400">
          Every question you solve brings you one step closer to your goal.
        </p>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-violet-500" />
        </div>

        <p className="mt-2 text-xs text-gray-500">Keep building your streak</p>
      </div>

      <div className="mt-auto flex items-center gap-3 pt-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 font-semibold text-white">
          S
        </div>

        <div>
          <p className="text-sm font-medium text-white">Student</p>
          <p className="text-xs text-gray-500">Interview Prep</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
