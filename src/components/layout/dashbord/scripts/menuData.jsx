import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const Menus = [
    {id: 1, name: 'Search and Name Reservation', icon: <SearchIcon sx={{fontSize: 40}}/>, style: 'bg-blue-100 text-blue-600', 
      desc: 'Conduct a business name search, as well as entity name reservation.',
      subServices: [
        {id: 1, name:'Basic name search'},
        {id: 2, name:'Business entity information search process'}, 
        {id: 3, name:'Basic reservation'}
      ]
    },
  
    {id: 2, style: 'bg-green-100 text-green-600', icon: <BusinessCenterIcon sx={{fontSize: 40}} />, name: "Entity Creation", 
    desc: 'A range of ORC services related to formation of companies, sole proprietorship, partnership, etc.',
      subServices: [
        {id: 1, name: "Incoporation of a private company limited by shares"},
        {id: 2, name: "Incoporation of a pulic company limited by shares"},
        {id: 3, name: 'Incoporation of a private company unlimited by shares'},
        {id: 4, name: 'Incoporation of a private company limited by guarantee'},
        {id: 5, name: 'Incoporation of a pulic company limited by guarantee'},
        {id: 6, name: 'Incoporation of an unlimited public company'},
        {id: 7, name: 'Incoporation of a private partnership'},
        {id: 8, name: 'Incoporation of a professional body'},
        {id: 9, name: 'Registration of an external (foreign comapny)'},
        {id: 10, name: 'Process of registraion of sole proprietor'},
        {id: 11, name: 'Registraion of a subsidiary'},
  
      ]},
      {id: 3, style:'bg-indigo-100 text-indigo-600', icon: <DriveFileRenameOutlineIcon sx={{fontSize: 40}} />, name: "Converion of Business Entities", 
        desc: 'To change a business entity from one form to another.',
          subServices: [
            {id: 1, name: "Conversion of a company limited by shares to a company limited by guarantee"},
            {id: 2, name: "Conversion of an unlimited liability company to a company limited by guarantee"},
            {id: 3, name: "Conversion of a private comapny limited by shares to an unlimited private company"},
            {id: 4, name: "Conversion of a private limited by shares to an public limited company"},
            {id: 5, name: "Conversion of a private limited by shares to unlimited public company"},
            {id: 6, name: "Conversion of a private unlimited by shares to unlimited public company"},
            {id: 7, name: "Conversion of a private unlimited by shares to limited public company"},
            {id: 8, name: "Conversion of a private partnership to a limited liability company"},
            {id: 9, name: "Conversion of a private partnership to a private unlimited liability company"},
            {id: 10, name: "Conversion of a private partnership to a public limited company"},
            {id: 11, name: "Conversion of a sole proprietorship to a private limited company"},
            {id: 12, name: "Conversion of a sole proprietorship to a private unlimited liability company"},
            {id: 13, name: "Conversion of a sole proprietorship to a private partnership"},
            {id: 14, name: "Conversion of a sole proprietorship to a public limited company"},
            {id: 15, name: "Conversion of a sole proprietorship to a public unlimited company"},
            {id: 16, name: "Conversion of a sole proprietorship to a public limited company"},
          ]
      },
      {id: 4, style:'bg-orange-100 text-orange-600', icon: <LayersIcon sx={{fontSize: 40}} />, name: "Arrangement, Compromises, Mergers, and Divisions", 
        desc: 'Arrangement, Compromises, Mergers, and Divisions',
          subServices: [
           {id: 1, name: 'Merger of a company'},
           {id: 2, name: 'Company Divisions'},
           {id: 3, name: 'Arrangements or compromises'},

 
          ]
      },
      {id: 5, style:'bg-cyan-100 text-cyan-600', icon: <AppRegistrationIcon sx={{fontSize: 40}} />, name: "Change of Particulars", 
        desc: 'Make changes to entity details',
          subServices: [
           {id: 1, name: 'Change of name of a company'},
           {id: 2, name: 'Change of name of a sole propietorship'},
           {id: 3, name: 'Change of name of an external (foreign comapny)'},
           {id: 4, name: 'Change of name of a private partnership'},
           {id: 5, name: 'Change of name of a professional body'},
           {id: 6, name: 'Change of name of a subsidiary name'},
          ]
      },
      {id: 6, style:'bg-gray-100 text-gray-600', icon: <SettingsSuggestIcon sx={{fontSize: 40}} />, name: "Other Entity Changes", 
        desc: 'Make changes to any other entities',
          subServices: [
           {id: 1, name: 'Change of name of a company'},
           {id: 2, name: 'Change of name of a sole propietorship'},
           {id: 3, name: 'Change of name of an external (foreign comapny)'},
           {id: 4, name: 'Change of name of a private partnership'},
           {id: 5, name: 'Change of name of a professional body'},
           {id: 6, name: 'Change of name of a subsidiary name'},
          ]
      },
    
  ]

export default Menus