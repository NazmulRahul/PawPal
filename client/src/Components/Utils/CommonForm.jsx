import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const types = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea'
}

const CommonForm = ({formControls, formData, setFormData, onSubmit, buttonText, isBtnDisabled, styles, onAction}) => {
  const renderInputsByComponentType = (getControlItem,styles, onSubmit) => {
    let element = null;
    const value = formData[getControlItem.name] || ''
    const onValueChange = (event) => setFormData({
      ...formData,
      [getControlItem.name]: event.target.value
    })
    switch(getControlItem.componentType) {
      case types.INPUT:
        element = <Input
        name = {getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        value = {onSubmit? value: undefined}
        onChange = {onSubmit? onValueChange: undefined}
        className={`${styles.input}`}
        />
        break;
      case types.SELECT:
        element = <Select
        onValueChange={onSubmit? (value) => setFormData({
          ...formData,
          [getControlItem.name]: value,
        }): undefined} 
        value={onSubmit? value: undefined}
        id={getControlItem.name}
        name={getControlItem.name}
        >
          <SelectTrigger className={`${styles.selectTrigger? styles.selectTrigger : 'w-full'}`}>
            <SelectValue placeholder={getControlItem.placeholder}/>
          </SelectTrigger>
          <SelectContent className={`${styles.selectContent? styles.selectContent: null}`}>
            {
              getControlItem.options && getControlItem.options.length>0 ? getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id} className={`${styles.selectItem}`}>{optionItem.label}</SelectItem>): null
            }
          </SelectContent>
        </Select>
        break;
      case types.TEXTAREA:
        element = <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={onSubmit?value:undefined}
            onChange={onSubmit?onValueChange:undefined}
        />
        break;
      default:
        element = <Input
        name = {getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        onChange={onSubmit?onValueChange: undefined}
        className={`${styles.input}`}
        />
        break;
    }
    return element;
  }
  return (
    <form action={onAction} onSubmit={onSubmit}>
      <div className='flex flex-col gap-1.5'>
        {
          formControls.map(controlItem => <div className='grid w-full gap-1' key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            {
              renderInputsByComponentType(controlItem, styles, onSubmit)
            }
          </div>)
        }
      </div>
      <Button disabled={isBtnDisabled} className="mt-4 w-full">{buttonText|| 'Submit'}</Button>
    </form>
  )
}

export default CommonForm