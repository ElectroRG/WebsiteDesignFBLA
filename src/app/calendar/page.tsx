'use client';
import { useState } from "react";
import styles from './page.module.css'
import {
  createCalendar,
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { TypewriterEffectSmoothDemo } from '@/components/Typewriter';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false); // Step 1: State to manage visibility

  const eventsServicePlugin = useState(() => createEventsServicePlugin())[0];

  const calendarApp = createCalendar({
    theme: 'shadcn',
    views: [viewWeek, viewMonthGrid, viewDay, viewMonthAgenda],
    defaultView: viewWeek.name,
    callbacks: {
      onRangeUpdate: (range) => {
        calendarApp.eventsService.set([
          {
            id: '12',
            title: 'LHS vs EHS Basketball Game',
            start: range.start,
            end: range.end,
          },
          {
            id: '13',
            title: 'LHS vs MHS Basketball Game',
            start: range.start,
            end: range.end,
          },
        ]);
      },
      onEventClick(calendarEvent) {
        console.log('onEventClick', calendarEvent);
        setIsVisible(true); // Step 2: Set visibility to true on event click
      },
    },
    events: [
      {
        id: '12',
        title: 'LHS vs EHS Basketball Game',
        start: '2023-12-15 06:00',
        end: '2023-12-15 08:00',
      },
      {
        id: '13',
        title: 'LHS vs MHS Basketball Game',
        start: '2023-12-13 06:00',
        end: '2023-12-13 08:00',
      },
    ],
    selectedDate: '2023-12-15',
  }, [createEventModalPlugin(), eventsServicePlugin]);

  return (
    <div>
      <div
        className={`w-screen h-screen absolute bg-black/50 z-50 backdrop-blur-md ${isVisible ? 'block' : 'hidden'}`} // Step 3: Toggle visibility based on state
      >
        {/* Your content inside this div */}
      </div>

      <div>
        <TypewriterEffectSmoothDemo />
      </div>

      <div
        style={{
          maxWidth: '1500px',
          maxHeight: '750px',
          marginTop: '-100px', // Keep marginTop as is
          marginLeft: '40px', // Replacing shorthand to avoid conflict
          marginRight: 'auto', // Replacing shorthand to avoid conflict
          marginBottom: '0', // Replacing shorthand to avoid conflict
          height: '800px',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          borderRadius: '20px',
        }}
      >
        <ScheduleXCalendar calendarApp={calendarApp} />
      </div>
    </div>
  );
}