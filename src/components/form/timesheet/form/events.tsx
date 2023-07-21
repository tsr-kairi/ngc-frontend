// import {
//   Box,
//   Button,
//   Flex,
//   Group,
//   Modal,
//   Text,
//   TextInput,
// } from '@mantine/core';
// import { useState } from 'react';

// interface Event {
//   id: number;
//   startTime: string;
//   endTime: string;
//   title: string;
// }

// function DayView() {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [selectedBlock, setSelectedBlock] = useState<{
//     startTime: string;
//     endTime: string;
//   } | null>(null);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [eventTitle, setEventTitle] = useState('');
//   const [selectedStartTime, setSelectedStartTime] = useState('');
//   const [selectedEndTime, setSelectedEndTime] = useState('');

//   const handleBlockClick = (startTime: string, endTime: string) => {
//     setSelectedBlock({ startTime, endTime });
//     setSelectedStartTime(startTime);
//     setSelectedEndTime(endTime);

//     // Check if the block has an event, and if so, set the event title
//     const event = events.find(
//       (event) => event.startTime === startTime && event.endTime === endTime
//     );
//     setEventTitle(event ? event.title : '');

//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setSelectedBlock(null);
//     setSelectedStartTime('');
//     setSelectedEndTime('');
//     setModalOpen(false);
//     setEventTitle('');
//   };

//   const handleAddEvent = () => {
//     if (selectedBlock) {
//       setEvents((prevEvents) => [
//         ...prevEvents,
//         {
//           id: events.length + 1,
//           startTime: selectedStartTime,
//           endTime: selectedEndTime,
//           title: eventTitle,
//         },
//       ]);
//       handleModalClose();
//     }
//   };

//   const isSelectedTime = (startTime: string, endTime: string) =>
//     selectedBlock &&
//     selectedBlock.startTime === startTime &&
//     selectedBlock.endTime === endTime;

//   return (
//     <Box>
//       <Box style={{ display: 'flex', flexDirection: 'column' }}>
//         {Array.from({ length: 18 }).map((_, index) => {
//           const hour = index + 6;
//           const startTime = `${hour.toString().padStart(2, '0')}:00`;
//           const endTime = `${hour.toString().padStart(2, '0')}:59`;
//           const hasEvent = events.some(
//             (event) =>
//               event.startTime === startTime && event.endTime === endTime
//           );
//           const isSelected = isSelectedTime(startTime, endTime);

//           return (
//             <Box
//               key={startTime}
//               style={{ display: 'flex', alignItems: 'start' }}
//             >
//               <Text
//                 size="xs"
//                 style={{
//                   width: '60px',
//                   marginRight: '8px',
//                   textAlign: 'right',
//                 }}
//               >
//                 {startTime}
//               </Text>
//               <Box
//                 onClick={() => handleBlockClick(startTime, endTime)}
//                 sx={{
//                   height: '40px',
//                   flex: 1,
//                   border: '1px solid #ccc',
//                   cursor: 'pointer',
//                   backgroundColor: hasEvent
//                     ? '#f1c40f'
//                     : isSelected
//                     ? '#3498db'
//                     : 'transparent',
//                 }}
//               >
//                 {hasEvent && (
//                   <Text size="xs" style={{ padding: '4px', color: '#fff' }}>
//                     {events.find(
//                       (event) =>
//                         event.startTime === startTime &&
//                         event.endTime === endTime
//                     )?.title || ''}
//                   </Text>
//                 )}
//               </Box>
//             </Box>
//           );
//         })}
//       </Box>
//       <Modal opened={isModalOpen} onClose={handleModalClose} title="Add Event">
//         <TextInput
//           label="Event Title"
//           value={eventTitle}
//           onChange={(event) => setEventTitle(event.currentTarget.value)}
//         />
//         <Group grow sx={{ marginTop: '20px' }}>
//           <TextInput
//             value={selectedStartTime}
//             onChange={(event) =>
//               setSelectedStartTime(event.currentTarget.value)
//             }
//           />
//           <TextInput
//             value={selectedEndTime}
//             onChange={(event) => setSelectedEndTime(event.currentTarget.value)}
//           />
//         </Group>
//         <Flex
//           justify="flex-end"
//           sx={{
//             marginTop: '16px',
//           }}
//         >
//           <Button onClick={handleModalClose} style={{ marginRight: '8px' }}>
//             Cancel
//           </Button>
//           <Button onClick={handleAddEvent} color="blue">
//             Add Event
//           </Button>
//         </Flex>
//       </Modal>
//     </Box>
//   );
// }

// export default DayView;

function events() {
  return <div />;
}

export default events;
