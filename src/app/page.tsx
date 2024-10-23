"use client"

import { useState } from 'react'
import { MoreHorizontal, } from 'lucide-react'

export default function Component() {
  const [time, setTime] = useState('7:00 PM')
  const [date, setDate] = useState('Oct 23, 2024')
  const [team, setTeam] = useState('Golden State Warriors')
  const [section, setSection] = useState('317')
  const [row, setRow] = useState('J')
  const [seat, setSeat] = useState('7')
  const [entryInfo, setEntryInfo] = useState('C18')

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4">
        <button className="text-white font-bold">
          Done
        </button>
        <button className="text-white border-[1px] border-white rounded-full">
          <MoreHorizontal size={18} />
        </button>
      </div>

    {/* Ticket Content */}
    <div className="flex-1 flex justify-center items-center p-4">
      <div className="relative w-full max-w-md border-[1px] border-[#6c6c6c] p-4">
        <div className="flex justify-between mb-6">
          <img src="/blazers-logo.jpg" alt="Blazers" className="w-8 h-auto aspect-[73/88] object-contain" />

          <div className="flex flex-col">
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="block bg-transparent text-white text-xs"
            />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block bg-transparent text-white text-sm" 
            />
          </div>
        </div>

        <div className="overflow-hidden -mx-4">
          <img src="/blazers-court.jpg" alt="Basketball court" className="w-full h-48 object-contain" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-gray-400 text-xs">MODA CENTER</div>
            <input
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="bg-transparent text-white text-2xl font-bold w-full"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-gray-400 text-xs">SEC</div>
              <input
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="bg-transparent text-white text-2xl font-bold w-16"
              />
            </div>
            <div>
              <div className="text-gray-400 text-xs">ROW</div>
              <input
                type="text"
                value={row}
                onChange={(e) => setRow(e.target.value)}
                className="bg-transparent text-white text-2xl font-bold w-16"
              />
            </div>
            <div>
              <div className="text-gray-400 text-xs">SEAT</div>
              <input
                type="text"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                className="bg-transparent text-white text-2xl font-bold w-16"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">ENTRY INFO</div>
            <input
              type="text"
              value={entryInfo}
              onChange={(e) => setEntryInfo(e.target.value)}
              className="bg-transparent text-white text-2xl font-bold w-full"
            />
          </div>
        </div>
      </div>
    </div>


      {/* Bottom Bar */}
      <div className="flex flex-col items-center p-4 space-y-2">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V14H11L14.5 17.5L12.08 19.92L4.16 12L12.08 4.08L14.5 6.5L11 10H20Z" fill="white"/>
          </svg>
        </div>
        <div className="text-gray-400 text-sm">Hold Near Reader</div>
      </div>
    </div>
  )
}