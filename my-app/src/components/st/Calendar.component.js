import React from 'react'
import {
  Calendar as Cal,
  momentLocalizer,
} from 'react-big-calendar'
import moment from '../../components/st/moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const DragAndDropCalendar = withDragAndDrop(Cal)

const Calendar = ({
  events = [],
  date = new Date(),
  onNavigate,
  view = 'week',
  onView,
  views = {
    day: true,
    month: true,
    week: true,
  },
  getNow = () => new Date(),
  accessors,
  selectable = false,
  ...props
}) => {
  const localizer = momentLocalizer(moment)

  return (
    <DragAndDropCalendar
      {...{
        localizer,
        events,
        date,
        onNavigate,
        view,
        onView,
        views,
        getNow,
        accessors,
        selectable,
      }}
      resizable
      {...props}
    />
  )
}

export default Calendar
