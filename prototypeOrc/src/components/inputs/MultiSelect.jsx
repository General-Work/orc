import React, {useState, useRef} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useOutsideClick } from '../../action/useOutsideClick'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '@mui/material';
import '../../app.css'


const MultiSelect = (props) => {

    const {label, options} = props
    const ref = useRef()
    const divRef = useRef()
    const [focus, setFocus] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    
    const [selected, setSelected] = useState([])
    const [inputValue, setInputValue] = useState('')


    // useOutsideClick(ref, () => value.length > 0 ? setFocus(true) : setFocus(false))
    useOutsideClick(ref, () => setFocus(false))
    useOutsideClick(divRef, () => setShowMenu(false))

    const filteredData = inputValue ? options.filter(d => {
        return d.name.toLowerCase().includes(inputValue.toLowerCase()) ;
    }) : options;


    const deleteFromSelectected = (val) => {
        setSelected((current) => current.filter((x) => val !== x.id))
    }
    
  return (
    <FormControl fullWidth>
      <div className={`rounded-sm border  border-gray-400 p-3 flex justify-between cursor-pointer active:border-blue-500 hover:border-gray-600 ${showMenu && 'border-blue-500'}`} onClick={_ => setShowMenu(true)}>
        <div className='flex flex-col'>
            <div className='relative'>
                <label className={`absolute ${focus || selected.length > 0  ? 'bottom-1 rounded-md bg-white px-1 text-sm ': 'text-gray-500'} ${showMenu && 'text-blue-500'}`}>{label}</label>
            </div>
            <div className='flex gap-1 '>
                {selected.length > 0 && 
                    <div className=' '>
                        <ul className='grid grid-cols-3 gap-1 w-72'>
                            {selected.map((item, i) => {
                                return(
                                    <li
                                        key={i}
                                        className='bg-gray-300 rounded-sm px-1 flex justify-between text-black text-sm py-0.5'
                                    >
                                        
                                        {item.name}
                                        <button onClick={_ => deleteFromSelectected(item.id)}className='-mt-1 '>
                                            <CloseIcon  sx={{fontSize: 16}}/>
                                        </button>
                                    </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                }
                <div className='flex-grow flex'>
                    <input value={inputValue} name='inputValue' onChange={(e) => setInputValue(e.target.value)} ref={ref} type='text' className={` ${showMenu && 'bg-gray-100'}  w-full h-8 outline-transparent border-transparent focus:outline-transparent focus:border-transparent`} onFocus={_ => setFocus(true)} />
                </div>
            </div>

        </div>
        <div className='flex gap-1'>
            {selected.length > 0 && 
                <button onClick={_ => setSelected([])}>
                    <CloseIcon className='text-gray-400 hover:text-gray-600' sx={{fontSize: 19}}/>
                </button>
            }
            <button>
                <ArrowDropDownIcon/>
            </button>
        </div>
      </div>

      {showMenu && 
        <div ref={divRef} className='relative'>
            <ul className='bg-white shadow-md rounded-md border absolute w-full mt-2 overflow-y-auto max-h-72 scroll z-20'>
                {filteredData.map((option, i) => {
                    return (
                        <MenuItem 
                            key={i} 
                            value={option.value}
                            onClick={_ => {
                                let data = {id: 0, name: ''}
                                data = {id:i, name:option.value}
                                if(!selected.find(x => x.id === data.id)) {
                                
                                    setSelected([...selected, data])
                                }else{
                                    setSelected((current) => current.filter((x) => data.id !== x.id))
                                }
                            
                            }}
                        >
                            {option.name}
                        </MenuItem>
                    )
                })}

            </ul>
        </div>
      }

    </FormControl>

  )
}

export default MultiSelect
