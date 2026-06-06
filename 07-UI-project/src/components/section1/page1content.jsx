import RightContent from './rightContent'
import LeftContent from './leftContent'

const page1content = (props) => {
    return (
        <div className=' py-10 px-18 h-[90vh] flex justify-center gap-10'>
            <LeftContent />
            <RightContent users={props.users}/>
        </div>
    )
}

export default page1content