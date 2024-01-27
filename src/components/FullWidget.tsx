import LoadingScreen from './LoadingScreen'
import { Button } from './Button';
import RecommandedReads from './RecommandedReads';

type Props = {
  isLoading: boolean
}

const FullWidget = ({isLoading} : Props ) => {
  return (
    <div className='w-[432px] bg-[#FBF9FC] px-3 py-3 flex flex-col gap-3 rounded-xl'>
      <LoadingScreen isLoading={isLoading}/>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>ADD TO</h2>
      <div className='flex justify-between'>
        <Button title= "Personal library"/>
        <Button title="Community library"/>
      </div>
      <RecommandedReads/>
    </div>
  )
}

export default FullWidget