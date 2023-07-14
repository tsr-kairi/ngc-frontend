import Password from '@/pages/profile/password';
import ProfileSidebar from '@/components/ui/ProfileLayout/ProfileSidebar';

function Proflayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ProfileSidebar />
      <Password />
    </div>
  );
}

export default Proflayout;
