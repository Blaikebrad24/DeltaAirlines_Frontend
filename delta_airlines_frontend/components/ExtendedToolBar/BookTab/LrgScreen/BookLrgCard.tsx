'use client'

import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { red } from '@mui/material/colors';
import BasicSelect from '@/components/UIProviders/DropDwnMenu/DropdwnMenu';
import Checkbox from '@mui/material/Checkbox';
import HelpIcon from '@mui/icons-material/Help';
import DatePicker from '@/components/UIProviders/DatePicker';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const tripArray: string[] = ['Round Trip', 'One-Way', 'Mult-City'];
const passengersArray: string[] = ['1 Passenger','2 Passengers','3 Passengers','4 Passengers','5 Passengers','6 Passengers','7 Passengers','8 Passengers','9 Passengers'];

function BookLrgCard() {
  return (
    <div className=' bg-toothWhite w-full h-full flex flex-col'>
    <div className=' w-full h-3/4 flex items-center justify-around p-1'>
        <div className='  flex h-full  p-1 items-center justify-between'>
          <div className=' flex flex-col space-y-3 '>
              <button className='  h-full text-nowrap text-deltaBlue text-5xl' onClick={() =>console.log("DepartButton Pressed")}>
                DFW
              </button>
              <p className=' text-deltaBlue text-xs '>Dallas-Fort Worth, Tx</p>
          </div>
            <SyncAltIcon sx={{color: red[500]}}/>
          <div className=' text-deltaBlue flex flex-col space-y-3'>
            <button className='  h-full text-nowrap text-deltaBlue text-5xl' onClick={() =>console.log("ToBtn Pressed")}>
              To
            </button>
            <p className=' text-deltaBlue text-xs text-nowrap'>Your Destination</p>

          </div>
        </div>
        <div className='   flex items-center space-x-6 px-3 text-deltaBlue'>
            <BasicSelect tripChoice={'Round Trip'} dropDownSelections={tripArray}/>
            <DatePicker/> 
            <BasicSelect tripChoice={'1 Passenger'} dropDownSelections={passengersArray} />

        </div>
        <div className='  '>
          <button className=' items-center font-bold bg-deltaRed px-5 p-2 text-sm' onClick={()=>console.log('SIGN UP BTN PRESSED')}>
            SEARCH
          </button>
        </div>
    </div>
    <div className=' text-deltaBlue  w-full h-1/4 flex items-center text-sm space-x-3 p-1 ml-4'>
        <div className=' text-xs'>SEARCH OPTIONS</div>
        <div className=' flex items-center'>
          <Checkbox {...label} />
          <p>Shop with Miles</p>
          <HelpIcon/>
        </div>
        <div className=' flex items-center'>
          <Checkbox {...label} />
          <p>Refundable Fares</p>
          <HelpIcon/>
        </div>
        <div className=' flex items-center'>
          <Checkbox {...label} />
          <p>My dates are flexible</p>
       
        </div>
    </div>
</div>
  )
}

export default BookLrgCard