import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Layout from '@theme/Layout';


const HPCEventsCalendar = () => {
  const [events] = useState([
    { title: 'HPC Kickoff', date: '2024-04-10' },
    { title: 'HPC Workshop', date: '2024-05-15' },
    { title: 'HPC Gathering', date: '2024-06-20' },
  ]);

  return (
    <Layout
      title="HPC Events Calendar"
      description="Calendar of upcoming HPC events"
    >
      <main className="container margin-vert--lg">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            selectMirror
            dayMaxEvents
            // Use aspectRatio instead of fixed height
            aspectRatio={1.5}
          />
        </div>
      </main>
    </Layout>
  );
};

export default HPCEventsCalendar;