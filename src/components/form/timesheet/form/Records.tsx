import { Box, Button, Group, Modal, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export interface Event {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  start: string;
  end: string;
  title: string;
}

// TimeBlock Component
function TimeBlock({ start, end, title }: Event) {
  const timelineHeight = 800; // Adjust the height of the timeline as needed
  const startPercentage =
    (parseInt(start.split(':')[0], 10) +
      parseInt(start.split(':')[1], 10) / 60) /
    24;
  const endPercentage =
    (parseInt(end.split(':')[0], 10) + parseInt(end.split(':')[1], 10) / 60) /
    24;

  const top = startPercentage * timelineHeight;
  const height = (endPercentage - startPercentage) * timelineHeight;

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? `${theme.colors.brand[7]}`
            : `${theme.colors.brand[7]}`,
        color:
          theme.colorScheme === 'dark'
            ? `${theme.colors.gray[3]}`
            : `${theme.colors.gray[1]}`,
        position: 'absolute',
        top: `${top}px`,
        right: '1px',
        height: `${height}px`,
        width: '84.75%',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      })}
    >
      <span>
        {start} - {end}
      </span>
      <span>{title}</span>
    </Box>
  );
}

function HourMarker({
  hour,
  onAddEvent,
}: {
  hour: number;
  onAddEvent: (hour: number) => void;
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '85%',
        height: `${100 / 24}%`,
        // backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
          boxShadow:
            '2px 2px 4px rgba(0, 57, 78, 0.2), -1px -1px 4px rgba(0, 57, 78, 0.3)',
          cursor: 'pointer',
        },
      }}
      onClick={() => onAddEvent(hour)} // Pass the hour here
    >
      <span
        style={{
          position: 'absolute',
          left: '-50px',
          top: '40%',
          transform: 'translateY(-80%)',
        }}
      >
        {hour}:00
      </span>
    </Box>
  );
}

// Timeline Component
function Timeline({ events: initialEvents }: { events: Event[] }) {
  const hours = Array.from({ length: 24 }, (_, i) => i); // [0, 1, 2, ... 23]

  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [newEvent, setNewEvent] = useState<Event>({
    id: 0,
    start: '',
    end: '',
    title: '',
  });

  const handleAddEvent = (hour: number) => {
    const endHour = (hour + 1) % 24;
    const endTime = `${endHour.toString().padStart(2, '0')}:30`;

    // Set the new event with the calculated start and end times
    setNewEvent({
      id: 0,
      start: `${hour.toString().padStart(2, '0')}:00`,
      end: endTime,
      title: '',
    });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = () => {
    // Generate a unique id for the new event
    const newId = Math.max(...events.map((event) => event.id)) + 1;
    const updatedNewEvent = { ...newEvent, id: newId };

    // Add the new event to the existing events
    setEvents([...events, updatedNewEvent]);
    // console.log('New Event:', updatedNewEvent);
    // console.log('All Events:', events);

    // Close the modal after handling the record
    setShowModal(false);
    // Reset newEvent state for the next entry
    toast.success(`${newEvent.title} has been Added`);
    setNewEvent({ id: 0, start: '', end: '', title: '' });
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '1500px', // Adjust the height of the timeline as needed
        marginRight: '100px', // Adjust the margin as needed
        // border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        // overflow: 'hidden',
        justifyContent: 'end',
        alignItems: 'flex-end', // Ensure the time blocks don't overflow horizontally
      }}
    >
      <Modal
        opened={showModal}
        onClose={handleModalClose}
        title="Add New Event"
      >
        <TextInput
          value={newEvent.title}
          onChange={(event) =>
            setNewEvent({ ...newEvent, title: event.currentTarget.value })
          }
          label="Event Title"
          required
        />
        <Group grow>
          <TextInput
            value={newEvent.start}
            onChange={(event) =>
              setNewEvent({ ...newEvent, start: event.currentTarget.value })
            }
            label="Start Time"
            required
          />
          <TextInput
            value={newEvent.end}
            onChange={(event) =>
              setNewEvent({ ...newEvent, end: event.currentTarget.value })
            }
            label="End Time"
            required
          />
        </Group>
        <Button style={{ marginTop: 10 }} onClick={handleModalSubmit}>
          Add Event
        </Button>
      </Modal>
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <HourMarker hour={hour} onAddEvent={handleAddEvent} />
          {events.map((event) =>
            parseInt(event.start.split(':')[0], 10) === hour ? (
              // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
              <TimeBlock key={event.id} {...event} />
            ) : null
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
export default Timeline;
