import { useState } from 'react'

let logs: string[] = []
let setLogsFunction: React.Dispatch<React.SetStateAction<string[]>> | null = null

export const useLogState = () => {
  const [localLogs, setLocalLogs] = useState<string[]>(logs)
  setLogsFunction = setLocalLogs
  return localLogs
}

export const addLog = (log: string) => {
  logs.push(log)
  if (setLogsFunction) {
    setLogsFunction([...logs])
  }
}