import CloseButton from "../inputs/closeButton"
import Slide from '@mui/material/Slide';



const SideModal = (props) => {
  const {showClose, onClick} = props
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>

      <div aria-live="assertive" className="pointer-events-none absolute right-0 bottom-0 top-[54px] flex items-end place-content-end sm:items-start z-30  ">
          <div className="flex flex-col flex-grow pointer-events-none max-w-md h-full shadow-lg " 
          >
              {/* <div className="h-[63px]" >&nbsp;</div> */}
              <div className="pointer-events-auto flex-grow overflow-y-hidden bg-white flex flex-col shadow-lg ">
                {showClose &&
                  <div className="relative">
                    <div className="absolute p-1 right-0">
                        <CloseButton onClick={onClick}/>
                    </div>

                  </div>
                }
              <div className="flex-grow flex overflow-y-hidden p-1">
                  {props.children}
              </div>
              </div>
          </div>
      </div>
    </Slide>
  )
}

export default SideModal
