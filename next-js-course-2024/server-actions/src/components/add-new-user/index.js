"use client";
import { addNewUserActions } from '@/actions';
//rfce

import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from '@/utils';
import { use, useState } from 'react';


function AddNewUser() {
    const [openDialog, setDialog] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormControls);

    //console.log(addNewUserFormData);

    function checkFormValidation() {
        return Object.keys(addNewUserFormData).every(
            (key) => addNewUserFormData[key] !== ""
        )
    }

    async function handleAddNewUserAction() {
        const result = await addNewUserActions(addNewUserFormData, "/user-management");
        console.log(result);
        setDialog(false);
        setAddNewUserFormData(addNewUserFormInitialState);
    }

    return (
        <div>
            <Button onClick={() => setDialog(true)}>Add New User</Button>

            <Dialog open={openDialog} onOpenChange={() => {
                setDialog(false)
                setAddNewUserFormData(addNewUserFormInitialState)
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                            Fillup the form for new user for manging user. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">
                        {addNewUserFormControls.map((controlItem) =>
                            <div key={controlItem.name} className="mb-5">
                                <Label htmlFor={controlItem.name} className="text-right">{controlItem.label}</Label>
                                <Input
                                    type={controlItem.type}
                                    id={controlItem.name}
                                    name={controlItem.name}
                                    placeholder={controlItem.placeholder}
                                    className="col-span-3"
                                    value={addNewUserFormData[controlItem.name]}
                                    onChange={(event) =>
                                        setAddNewUserFormData({
                                            ...addNewUserFormData,
                                            [controlItem.name]: event.target.value
                                        })}

                                />
                            </div>
                        )}
                        <DialogFooter>
                            <div className="text-left">
                                {
                                    checkFormValidation() ? "" : <p className="text-red-700 text-sm text-left">Fillup the form correctly!</p>
                                }
                            </div>
                            <Button disabled={!checkFormValidation()} type="submit">Save</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewUser;
