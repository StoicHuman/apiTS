// npm run lint:fix
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

// TypeScript en este tipo de funciones te marcara errores por solo contemplar un tipo de dato como si siempre fuera el mismo resultado sin embargo puede dar undefined , asi que la definirlo como una laternativa se soluciona

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  // En la configuracion de TS , la propiedad "noImplicitReturns":true , nos obliga a colocar el return undefined
  return undefined
}

// Primer ejemplo de lo que sucede en tiempo de ejecucion , por mas que aqui filtremos los diaries sin la propiedad "commit" typescript no tiene como detectar que se cumpla el formato del type, asi que lo tenemos que hacer manualmente para que llegue como queremos

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
