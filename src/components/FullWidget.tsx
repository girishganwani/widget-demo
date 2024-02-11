import { useState } from 'react';
import CurrentArticle from './CurrentArticle'
import { Button } from './Button';
import RecommandedReads from './RecommandedReads';
import PersonalLibModal from './PersonalLibModal';
import { signOut } from 'aws-amplify/auth';

const FullWidget = () => {
  const [showPersonalLibModal, setShowPersonalLibModal] = useState<boolean>(false);

  return (
    <div className='w-[432px] bg-[#FBF9FC] px-3 py-3 flex flex-col gap-3 rounded-xl relative z-0'>
      <CurrentArticle />
      <h2 className='text-[17px] font-medium text-[#343334B5] w-full flex justify-between'>
        ADD TO
        <span className="cursor-pointer" onClick={() => signOut()}>SignOut</span>
      </h2>
      <div className='flex justify-between'>
        <div>
        <Button 
        title= "Personal library" 
        setShowPersonalLibModal= {setShowPersonalLibModal}
        showPersonalLibModal= {showPersonalLibModal}
        />
        {showPersonalLibModal && <PersonalLibModal/>}
        </div>
        <div>
        <Button style={{ backgroundColor: 'rgb(243 244 246 / var(--tw-bg-opacity))', cursor: 'default', color: 'grey' }} title="Community library"/>
        </div>
      </div>
      <RecommandedReads showPersonalLibModal={showPersonalLibModal} />
    </div>
  )
}

export default FullWidget