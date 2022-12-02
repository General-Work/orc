import React, { useState } from 'react'
import FormHelpInscription from '../../../../components/alerts/FormHelpInscription'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FormInputSelect from '../../../../components/inputs/FormInputSelect';
import FormInputText from '../../../../components/inputs/FormInputText';
import FormInputDate from '../../../../components/inputs/FormInputDate';
import FormInformativeInscriptions from '../../../../components/alerts/FormInformativeInscriptions';
import { useLocationForm } from './StepE';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
export default function StepJ() {
        const [directors,setDirectors] = useState([{}])
      
        let addNewDirector = () => {
            setDirectors((data)=>[...data,{}]) 
        }
        let removeDirector = (i) =>{  
            setDirectors((data)=>data = data.filter((item,index)=>index != i) )
        }
        
       
    function ListNamesofCompanies() {
        const [companies, setCompanies] = useState([0,])
        let addNewCompany = () => {
            setCompanies((data) => [...data, data.length + 1])
        }
        let removeCompany = (i) => {
            setCompanies((data) => data = data.filter((item) => item != i))
        }
        return <div>
            <ul className='flex flex-col  gap-5'> 
            {companies.map((company, i) => <li className='flex items-center' key={i}>
                    <FormInputText className='w-full' size='small' label='Company Name' />
                    <button onClick={()=>removeCompany(i)}>
                    <DeleteIcon className='text-red-300' />
                    </button>
                </li>)}
            </ul>
            <nav className='grid place-items-center mt-5'>
            <Tooltip disableFocusListener title="click to add more location data">
                <button onClick={() => addNewCompany()}>
                    <AddCircleIcon className='text-gray-500 cursor-pointer hover:text-gray-600' />
                </button>
            </Tooltip>
            </nav>
        </div>
    }

    function TickWithDetailsandDoc(props) {
        const [selected, setSelected] = useState('no')
        let handleSelect = (e) => {
            setSelected(e.target.value)
        }
        return <div className='flex flex-col gap-2'>
            <nav className='flex items-center gap-2'>
                <nav className=' basis-[80%]'>
                    {props.children}
                </nav>
                <nav className='flex justify-center  grow gap-4 text-sm'>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">Yes</label>
                        <input type="radio" onChange={handleSelect} value='yes' checked={selected === 'yes'} name={props.name} id="" />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <label htmlFor="">No</label>
                        <input type="radio" onChange={handleSelect} value='no' checked={selected === 'no'} name={props.name} id="" />
                    </span>
                </nav>
            </nav>
            {
                selected === 'yes' && <section>
                    <TextareaAutosize maxRows={5} placeholder='provide details if yes' className='border border-gray-300 rounded-md w-full p-2 focus:outline-blue-500 ' />
                    <div className="overflow-hidden relative w-full mt-1 rounded-md ">
                        <button className="bg-blue-400 hover:bg-blue-light text-white font-bold py-2 px-4 w-full inline-flex items-center">
                            <FileUploadIcon />
                            <span className="ml-2 text-sm font-normal">Upload Document supporing documents</span>
                        </button>
                        <input
                            className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                            type="file"
                            name="documents[]"
                            accept="image/*"
                        />
                    </div>
                </section>
            }
        </div>
    }

    function DirectorsForm () {
        let locationform = useLocationForm()
        return <div className='flex flex-col gap-7'>
        <FormHelpInscription>
            <ul>
                <li className=' list-disc ml-5 '> Directors should be at least 18 years
                    and above.</li>
                <li className=' list-disc ml-5 '> Directors are to attach a statutory
                    declaration and consent letter as
                    stated in section 172 (2) of Act 992.</li>
                <li className=' list-disc ml-5 '>If you tick "yes" to any of the
                    Statutory Declarations, provide details
                    that qualifies you to be a director.
                    Attach supporting documents
                </li>
                <li className=' list-disc ml-5 '>A Company shall have at least two
                    directors of which one should be
                    resident in Ghana. </li>
            </ul>
        </FormHelpInscription>
        <nav className=''>
            <nav className='w-full flex items-center justify-between mb-3'>
                <span className='basis-[80%] text-gray-600 text-sm font-semibold'>A person shall not be appointed a director if</span>
                <span className='grow   text-center text-gray-600 text-sm font-semibold'>Tick Applicable</span>
            </nav>
            <ul className='flex flex-col gap-3'>
                <li className='text-sm bg-gray-100 rounded-md p-2 py-3 liwithleftsdieline'>
                    <TickWithDetailsandDoc name='experience'>
                        That person within the preceding five years of the application for incorporation has been a director or
                        senior manager of a Company that has become insolvent
                    </TickWithDetailsandDoc>
                </li>
                <li className='text-sm bg-gray-50 p-2 py-3 rounded-md liwithleftsdieline'>
                    <TickWithDetailsandDoc name='criminaloffence1'>
                        Charged with or convicted of a criminal offence involving fraud or dishonesty
                    </TickWithDetailsandDoc>
                </li>
                <li className='text-sm bg-gray-100 p-2 py-3 rounded-md liwithleftsdieline'>
                    <TickWithDetailsandDoc name='criminaloffence2'>
                        Charged with or convicted of a criminal offence relating to the promotion, incorporation or
                        management of a company that has become insolvent.
                    </TickWithDetailsandDoc>
                </li>
            </ul>

        </nav>
        <nav className='flex items-center gap-10'>
            <span className='flex gap-3 items-center text-sm'>
                <label htmlFor="">Statutory Declaration Form</label>
                <input type="checkbox" name="" id="" />
            </span>
            <span className='flex gap-3 items-center text-sm'>
                <label htmlFor="">Consent Letter</label>
                <input type="checkbox" name="" id="" />
            </span>
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputSelect size='small' label='Title' name='title' value='Mr' options={[{ name: 'Mr', value: 'Mr' }, { name: 'Mrs', value: 'Mrs' }, { name: 'Miss', value: 'Miss' }, { name: 'Ms', value: 'Ms' }, { name: 'Dr', value: 'Dr' }]} />
            <FormInputText className='w-full' label='First Name' size='small' />
            <FormInputText className='w-full' label='Middle Name' size='small' />
            <FormInputText className='w-full' label='Last Name' size='small' />
        </nav>
        <FormInputText className='w-full' label='Any Former Name' size='small' />
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputSelect size='small' label='Gender' name='Gender' value='Male' options={[{ name: 'Male', value: 'Male' }, { name: 'Female', value: 'Female' }]} />
            <FormInputText className='w-full' label='Nationality' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputDate size='small' className='w-full' label='Date of Birth' onChange={() => null} />
            <FormInputText className='w-full' label='Place of Birth' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='number' required label='Mobile No 1' size='small' />
            <FormInputText className='w-full' type='number' label='Mobile No 2' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='text' required label='Fax' size='small' />
            <FormInputText className='w-full' type='text' label='email' required size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='text' label='Tin' size='small' />
            <FormInputText className='w-full' type='text' label='Ghana Card' size='small' />
        </nav>
        <FormInformativeInscriptions>
            Without Tin fill GRA attached forms
        </FormInformativeInscriptions>
        <nav className=' border-b'>
            <label className='text-gray-500'>Residential Address</label>
        </nav>
        <FormHelpInscription>
            <ul>
                <li className='list-disc ml-5 '>
                    This address when provided will not
                    appear on public record, unlike that of
                    the Company.
                </li>
                <li className='list-disc ml-5 '>
                    Applicants are to ensure that the
                    digital address provided matches with
                    the residential address provided.
                </li>
            </ul>
        </FormHelpInscription>
        <nav>
            {locationform}
            <span className='mt-5 inline-block w-full md:w-auto'>
                <FormInputText className='w-full ' type='text' label='Country' required size='small' />
            </span>
        </nav>
        <nav className=' border-b'>
            <label className='text-gray-500'>Occupational Address</label>
        </nav>
        <FormHelpInscription>
            Provide your current workplace
            address.
        </FormHelpInscription>
        <nav>

            {locationform}
            <span className='mt-5 inline-block w-full md:w-auto'>
                <FormInputText className='w-full ' type='text' label='Country' required size='small' />
            </span>
        </nav>
        <nav className=' border-b'>
            <label className='text-gray-500'>Particulars of other directorships</label>
        </nav>
        <FormHelpInscription>
            List the names of other Companies for
            which you serve as director
        </FormHelpInscription>
        <ListNamesofCompanies />

    </div>

    }


    return (
            <div>
                {directors.map((director,i)=><section key={i} className='bg-blue-50/30 p-5 shadow-md mb-5'>
                    <nav className='flex items-center justify-between mb-5'>
                        <span className='bg-blue-50 p-2 text-sm flex items-center gap-1 shadow-sm px-3'><span className='text-sky-600'>Director</span> <span className='h-5 w-5 rounded-full grid place-items-center bg-blue-500 text-white'>{i+1}</span> </span> 
                        {directors.length !== 1 && <button onClick={()=>removeDirector(i)} className='text-sm flex items-center gap-2 p-2 bg-red-50 text-red-300 rounded-md'>Delete this data <DeleteIcon size='smal' /></button>}
                     </nav>
                     <nav className='text-left my-2 font-semibold text-gray-500'>Statutory Declaration & Consent Letter  </nav>
                        <DirectorsForm />
                    <nav className='flex items-center justify-end'>
                        <button onClick={()=>addNewDirector()} className='bg-sky-600 text-white rounded-md py-1 px-3 shadow-sm flex items-center gap-1 '><Add size='small'/> <span>new Director</span></button>
                    </nav>
                </section>)}
            </div>
           )
}
