import StepA from './steps/StepA'
import StepB from './steps/StepB'
import StepC from './steps/StepC'
import StepD from './steps/StepD'
const steps = [
    {
      label: 'Select Constitution',
      component: StepA
    },
    {
      label: 'Sector(s)',
     
        component: StepB,
    },
    {
      label: 'Principal Business Activities',

      component: StepC
    },
    {
      label: 'Nature of Business of the Company',

      component: StepD
    },
  ];

  export default steps;