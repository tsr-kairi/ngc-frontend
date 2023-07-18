import { Container } from '@mantine/core';
import Category from './category';

function ProfileSkills() {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { title: 'JavaScript', logo: '/skills/js.jpeg', certified: true },
        { title: 'Python', logo: '/skills/py.jpeg', certified: false },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { title: 'React', logo: '/skills/rct.jpeg', certified: true },
        { title: 'Angular', logo: '/skills/ang.jpeg', certified: false },
      ],
    },
  ];

  return (
    <Container my="lg" sx={{ paddingLeft: '0px' }}>
      {categories.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </Container>
  );
}

export default ProfileSkills;
