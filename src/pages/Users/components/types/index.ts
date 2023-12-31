import { SvgIconProps } from '@mui/material';

export interface inputVar{
    placeholder:string,
    inputKey:string,
    type:string,
    icon: React.ComponentType<SvgIconProps>,
    callback:(event: React.ChangeEvent<HTMLInputElement>, key: string) => void
}