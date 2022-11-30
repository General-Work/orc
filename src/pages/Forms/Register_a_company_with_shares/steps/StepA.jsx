
import React from "react";
import FormInputText from "../../../../components/inputs/FormInputText";
import FormHelpInscription from "../../../../components/alerts/FormHelpInscription";

export default function StepA() {
    return (
        <div className="">
            <nav>
                <FormHelpInscription className="my-2">
                    Tick Registered Constitution if the company has its own Constitution.
                    If not, Tick Standard Constitution as in schedule 2 of Act 992
                </FormHelpInscription>
                <nav className="flex items-center gap-10 text-sm">
                    <span className="flex items-center gap-1">
                        <label htmlFor="">Registered Constitution</label>
                        <input type="checkbox" name="constitution" id="" />
                    </span>
                    <span className="flex items-center gap-1">
                        <label htmlFor="">Standard Constitution</label>
                        <input type="checkbox" name="constitution" id="" />
                    </span>
                </nav>
            </nav>
            <nav className="mt-10 flex flex-col gap-5 text-sm">
                <FormHelpInscription className=''>
                    Name should not be duplicated,similiar, misleading or undesirable.
                    <br />
                    The Registrar of Companies shall have
                    the final approval regarding the name
                    which is eventually submitted for
                    registration.Section 21(2) of Act 992
                    <br />
                    A list of names can be found in our Portal <span>www.rgdeservice.com</span>
                </FormHelpInscription>
                <FormInputText
                    label="Company Name"
                    type="text"
                    className="w-full"
                    size="small"
                    sx={{ fontSize: 8 }}
                    required
                />
                <fieldset className="border rounded p-5">
                    <legend className="">Ended with</legend>
                    <FormHelpInscription className='block'>
                        Tick Applicable Ending
                    </FormHelpInscription>
                    <nav className="flex  gap-10 items-center mt-5">
                        <span className="flex items-center gap-1">
                            <label htmlFor="">LTD</label>
                            <input type="checkbox" name="" id="" />
                        </span>
                        <span className="flex items-center gap-1">
                            <label htmlFor="">LIMITED COMPANY</label>
                            <input type="checkbox" name="" id="" />
                        </span>
                    </nav>
                </fieldset>
                <nav className="">
                    <FormHelpInscription className='block'>
                        Full name and TIN of the natural
                        person or legal entity submitting
                        documents to the Registrar of
                        Companies
                    </FormHelpInscription>
                    <nav className="flex flex-col gap-5 md:flex-row items-center md:gap-10 mt-2">
                        <FormInputText
                            label="Presented By"
                            type="text"
                            className="w-full"
                            size="small"
                            sx={{ fontSize: 8 }}
                            required
                        />
                        <FormInputText
                            label="Tin"
                            type="text"
                            className="w-full"
                            size="small"
                            sx={{ fontSize: 8 }}
                            required
                        />
                           <FormInputText
                            label="Ghana Card"
                            type="text"
                            className="w-full"
                            size="small"
                            sx={{ fontSize: 8 }}
                            required
                        />
                    </nav>
                </nav>
            </nav>
        </div>
    );
}
