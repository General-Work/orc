import StepA from './steps/StepA'
import StepB from './steps/StepB'
import StepC from './steps/StepC'
import StepD from './steps/StepD'
import StepE from './steps/StepE'
import StepF from './steps/StepF'
import StepG from './steps/StepG'
import StepH from './steps/StepH'
import StepI from './steps/StepI'
import StepJ from './steps/StepJ'
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
    {
      label: 'Address of which Register of Members will be kept and maintained (if elsewhere than at the Registered Office)',

      component: StepH
    },
    {
      label: 'Contact of the Company',

      component: StepI
    },
    {
      label: 'Particulars of Directors of Company',

      component: StepJ
    },
  ];

  export default steps;