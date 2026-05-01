import React from 'react';
export const Badge=({children,className=''}:{children:React.ReactNode;className?:string})=><span className={`pill ${className}`}>{children}</span>;
