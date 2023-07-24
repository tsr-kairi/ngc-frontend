import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  TextInput,
} from '@mantine/core';
import {
  IconCircleCheckFilled,
  IconSquareRoundedXFilled,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export interface Task {
  id: number;
  description: string;
}

export interface Event {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  start: string;
  end: string;
  accepted: boolean | null; // Updated type to include null for the initial state
  tasks: Task[];
}

interface TimeBlockProps extends Event {
  onEdit: (eventId: number) => void;
  setAccepted: (eventId: number, accepted: boolean) => void;
}

// TimeBlock Component
function TimeBlock({
  id,
  start,
  end,
  tasks,
  onEdit,
  accepted,
  setAccepted,
}: TimeBlockProps) {
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

  const handleTickClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Prevent the click event from propagating to the div
    setAccepted(id, true);
    toast.success('Accepted'); // Set accepted to true when tick is clicked
  };

  const handleCrossClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Prevent the click event from propagating to the div
    setAccepted(id, false); // Set accepted to false when cross is clicked
    toast.error('Not Accepted');
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          // eslint-disable-next-line no-nested-ternary
          accepted === true
            ? `${theme.colors.green[7]}` // Green for accepted
            : accepted === false
            ? `${theme.colors.red[7]}` // Red for not accepted
            : `${theme.colors.brand[6]}`, // Blue for null
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
        overflow: 'scroll',
        cursor: 'pointer', // Make the time block clickable
      })}
      onClick={() => onEdit(id)}
    >
      <span>
        {start} - {end}
      </span>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.description}</span>
        </div>
      ))}
      {accepted === null && (
        <Box
          sx={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            zIndex: 30,
          }}
        >
          <ActionIcon color="green" onClick={handleTickClick}>
            <IconCircleCheckFilled size="1.5rem" />
          </ActionIcon>
          <ActionIcon color="red" onClick={handleCrossClick}>
            <IconSquareRoundedXFilled size="1.5rem" />
          </ActionIcon>
        </Box>
      )}
    </Box>
  );
}

function HourMarker({ hour }: { hour: number }) {
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
      }}
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
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  const handleEdit = (eventId: number) => {
    // Find the event with the given id from the list of events
    const eventToEdit = events.find((event) => event.id === eventId);

    if (eventToEdit) {
      // Set the currentEvent state to the event that needs to be edited
      setCurrentEvent(eventToEdit);
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentEvent(null);
  };

  const handleModalSubmit = () => {
    if (!currentEvent) return;

    // If the current event is a new event (id: 0), add it to the events list
    if (currentEvent.id === 0) {
      // Generate a unique id for the new event
      const newId = Math.max(...events.map((event) => event.id)) + 1;
      const updatedNewEvent = { ...currentEvent, id: newId };

      // Add the new event to the existing events
      const updatedEvents = [...events, updatedNewEvent];
      setEvents(updatedEvents);
      toast.success(`Event has been Updated`);
    } else {
      // If the current event is an existing event, update its details
      const updatedEvents = events.map((event) =>
        event.id === currentEvent.id ? currentEvent : event
      );
      setEvents(updatedEvents);
      toast.success('Event details updated');
    }

    // Close the modal after handling the record
    setShowModal(false);
    setCurrentEvent(null);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '1500px', // Adjust the height of the timeline as needed
        marginRight: '100px', // Adjust the margin as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'flex-end',
      }}
    >
      <Modal
        opened={showModal}
        onClose={handleModalClose}
        title={currentEvent?.id === 0 ? 'Add New Event' : 'Edit Event'}
      >
        {currentEvent && (
          <>
            <TextInput
              value={currentEvent?.start || ''}
              onChange={(event) =>
                setCurrentEvent({
                  ...currentEvent,
                  start: event.currentTarget.value,
                })
              }
              label="Start Time"
              required
            />
            <TextInput
              value={currentEvent?.end || ''}
              onChange={(event) =>
                setCurrentEvent({
                  ...currentEvent,
                  end: event.currentTarget.value,
                })
              }
              label="End Time"
              required
            />
            {/* Render the list of tasks as TextInput elements */}
            {currentEvent?.tasks.map((task) => (
              <TextInput
                key={task.id}
                value={task.description}
                onChange={(event) => {
                  const updatedTasks = currentEvent?.tasks.map((t) =>
                    t.id === task.id
                      ? { ...t, description: event.currentTarget.value }
                      : t
                  );
                  setCurrentEvent({
                    ...currentEvent,
                    tasks: updatedTasks || [],
                  });
                }}
                label="Task"
                required
              />
            ))}
            <Group grow>
              <Button
                onClick={() =>
                  setCurrentEvent({
                    ...currentEvent,
                    tasks: [
                      ...(currentEvent?.tasks || []),
                      { id: Date.now(), description: '' },
                    ],
                  })
                }
              >
                Add New Task
              </Button>
              <Button style={{ marginTop: 10 }} onClick={handleModalSubmit}>
                {currentEvent?.id === 0 ? 'Add Event' : 'Save'}
              </Button>
            </Group>
          </>
        )}
      </Modal>
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Removed onAddEvent prop */}
          <HourMarker hour={hour} />
          {events.map((event) =>
            parseInt(event.start.split(':')[0], 10) === hour ? (
              // Pass onEdit function to TimeBlock component
              <TimeBlock
                key={event.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...event}
                onEdit={() => handleEdit(event.id)}
                setAccepted={(eventId, accepted) =>
                  setEvents((prevEvents) =>
                    prevEvents.map((ev) =>
                      ev.id === eventId ? { ...ev, accepted } : ev
                    )
                  )
                }
              />
            ) : null
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
export default Timeline;
