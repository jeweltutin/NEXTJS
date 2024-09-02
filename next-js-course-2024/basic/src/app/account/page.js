

import { redirect } from 'next/navigation';

export default function Account() {

  // assume that profile info is null
  const userProfileInfo = null;
  if(userProfileInfo === null) redirect('profile');
  return (
    <div>
      Thsi is account page
    </div>
  )
}
