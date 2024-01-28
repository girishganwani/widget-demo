import LoadingScreen from './LoadingScreen'
import { Button } from './Button';
import RecommandedReads from './RecommandedReads';
import PersonalLibModal from './PersonalLibModal';
import { useState } from 'react';

type Props = {
  isLoading: boolean
}

const FullWidget = ({isLoading} : Props ) => {
  const [showPersonalLibModal, setShowPersonalLibModal] = useState<boolean>(false)
  return (
    <div className='w-[432px] bg-[#FBF9FC] px-3 py-3 flex flex-col gap-3 rounded-xl'>
      <LoadingScreen isLoading={isLoading}/>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>ADD TO</h2>
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
        <Button title="Community library"/>
        </div>
      </div>
      <RecommandedReads/>
    </div>
  )
}

export default FullWidget