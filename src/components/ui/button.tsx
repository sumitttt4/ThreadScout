import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline'; asChild?: boolean; children: React.ReactNode };

export function Button({ variant='default', className='', children, ...props }: Props){
  return <button className={`btn ${variant==='outline'?'ghost':''} ${className}`} {...props}>{children}</button>;
}
