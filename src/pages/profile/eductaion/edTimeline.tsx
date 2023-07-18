import { Text, Timeline } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import { Iprops, ItimeLineProps } from './educationTypes';

export default function TimeLine({ data }: Iprops) {
  return (
    <Timeline active={data.length} bulletSize={20} color="teal" lineWidth={2}>
      {data.map((item: ItimeLineProps) => (
        <Timeline.Item key={item.id} bullet={<IconCircleFilled size={15} />}>
          <Text size="md" weight={700}>
            {item.title}
          </Text>
          <Text color="gray" weight={500} size="md">
            {item.company} | {item.startDate}-{item.endDate}
          </Text>
          <Text color="gray" size="sm">
            {item.description}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
