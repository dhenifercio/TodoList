import {SendHorizontal} from "lucide-react"

export function Footer() {
  return(
    <footer className=" border-t mb-6 border-gray-300 flex justify-between gap-4 py-4  w-[485px] mx-auto px-4">
        <div className="bg-gray-50 p-6 flex-1">
          <span className="opacity-50">Nova Tarefa ...</span>
        </div>
        <button className="bg-green-200 p-5">
              <SendHorizontal className="text-green-800" size={32} />
            </button>
      </footer>
  )
}