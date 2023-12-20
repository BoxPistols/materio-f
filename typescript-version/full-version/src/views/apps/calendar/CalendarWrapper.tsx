'use client'

// React Imports
import { useReducer, useState } from 'react'

// MUI Imports
import { useMediaQuery } from '@mui/material'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type {
  AddEventType,
  CalendarColors,
  CalendarFiltersType,
  CalendarType,
  EventType
} from '@/types/apps/calendarTypes'
import type { Direction } from '@core/types'

// Reducer Imports
import calendarReducer from '@reducers/calendarReducer'

// View Imports
import Calendar from '@views/apps/calendar/Calendar'
import SidebarLeft from '@views/apps/calendar/SidebarLeft'
import AddEventSidebar from '@views/apps/calendar/AddEventSidebar'

// CalendarColors Object
const calendarsColor: CalendarColors = {
  Personal: 'error',
  Business: 'primary',
  Family: 'warning',
  Holiday: 'success',
  ETC: 'info'
}

const AppCalendar = ({ events, direction }: { events: EventType[]; direction: Direction }) => {
  // States
  const [calendarApi, setCalendarApi] = useState<null | any>(null)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)
  const [addEventSidebarOpen, setAddEventSidebarOpen] = useState<boolean>(false)

  const initialState: CalendarType = {
    events: events,
    selectedEvent: null,
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
  }

  // Hooks
  const [calendars, dispatch] = useReducer(calendarReducer, initialState)

  // Vars
  // const { skin, direction } = settings
  const mdAbove = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)

  const handleAddEventSidebarToggle = () => setAddEventSidebarOpen(!addEventSidebarOpen)

  // Add event handler
  const handleAddEvent = (event: AddEventType) => {
    // Add event API
    fetch('/api/apps/calendar-events', {
      method: 'POST',
      body: JSON.stringify(event)
    })
      .then(res => res.json())
      .then(data => {
        // Dispatch Add Event Action
        dispatch({ type: 'added', event: data.event })
      })
  }

  // Update event handler
  const handleUpdateEvent = (event: EventType) => {
    // Update event API
    fetch('/api/apps/calendar-events/', {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        // Dispatch Update Event Action
        dispatch({ type: 'updated', event })
      })
  }

  // Delete event handler
  const handleDeleteEvent = async (eventId: EventType['id']) => {
    // Delete event API
    fetch('/api/apps/calendar-events/', {
      method: 'DELETE',
      body: JSON.stringify({ id: eventId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        // Dispatch Delete Event Action
        dispatch({ type: 'deleted', eventId })
      })
  }

  // Dispatch Select Event Action
  const handleSelectEvent = (event: EventType | null) => {
    dispatch({ type: 'selected_event', event: event as EventType })
  }

  // Dispatch Select Calendar Action
  const handleCalendarsUpdate = (calendar: CalendarFiltersType) => {
    dispatch({ type: 'selected_calendars', calendar })
  }

  const handleAllCalendars = (view_all: boolean) => {
    dispatch({ type: 'selected_all_calendars', view_all })
  }

  return (
    <>
      <SidebarLeft
        mdAbove={mdAbove}
        leftSidebarOpen={leftSidebarOpen}
        calendars={calendars}
        calendarApi={calendarApi}
        calendarsColor={calendarsColor}
        handleSelectEvent={handleSelectEvent}
        handleAllCalendars={handleAllCalendars}
        handleCalendarsUpdate={handleCalendarsUpdate}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
        handleAddEventSidebarToggle={handleAddEventSidebarToggle}
      />
      <div
        className='p-5 pbe-0 flex-grow overflow-x-auto bg-backgroundPaper'

        // ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {})
      >
        <Calendar
          mdAbove={mdAbove}
          direction={direction}
          calendars={calendars}
          calendarApi={calendarApi}
          setCalendarApi={setCalendarApi}
          calendarsColor={calendarsColor}
          handleUpdateEvent={handleUpdateEvent}
          handleSelectEvent={handleSelectEvent}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        />
      </div>
      <AddEventSidebar
        calendars={calendars}
        calendarApi={calendarApi}
        handleAddEvent={handleAddEvent}
        handleUpdateEvent={handleUpdateEvent}
        handleDeleteEvent={handleDeleteEvent}
        addEventSidebarOpen={addEventSidebarOpen}
        handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        handleSelectEvent={handleSelectEvent}
      />
    </>
  )
}

export default AppCalendar
