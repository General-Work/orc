import StepA from './steps/StepA'
import StepB from './steps/StepB'
import StepC from './steps/StepC'
import StepD from './steps/StepD'
import StepE from './steps/StepE'
import StepF from './steps/StepF'
import StepG from './steps/StepG'
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
    {
      label: 'Registered Office Address',

      component: StepE
    },
    {
      label: 'Principal Place of Business',

      component: StepF
    },
    {
      label: 'Other Place of Business',

      component: StepG
    },
  ];

  export default steps;