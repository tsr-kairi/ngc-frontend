import Address from '@/pages/profile/address';
import Password from '@/pages/profile/password';
import Banking from './banking';
import Education from './eductaion';
import ProfileInfo from './personal';

function Proflayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Password />
      <Address />
      <ProfileInfo />
      <Banking />
      <Education />
    </div>
  );
}

export default Proflayout;
