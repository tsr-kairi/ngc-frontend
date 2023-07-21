function HourMarker({ hour, top }: { hour: number; top: number }) {
  const timelineWidth = 100;
  const positionPercentage = (hour / 24) * timelineWidth;
  return (
    <div
      style={{
        position: 'absolute',
        left: `${positionPercentage}%`,
        top: `${top}%`,
        width: '1px',
        backgroundColor: '#ccc',
        textAlign: 'center',
      }}
    >
      {hour % 1 === 0 && (
        <span
          style={{
            display: 'block',
            width: '0.3px',
            height: '10px',
          }}
        />
      )}
    </div>
  );
}

export default HourMarker;
