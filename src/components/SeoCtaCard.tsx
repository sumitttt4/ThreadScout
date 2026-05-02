import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function SeoCtaCard({title='Build your Reddit campaign in minutes.',description='Get subreddit ideas, post angles, reply templates, risk notes, and a 7-day plan for your SaaS.'}:{title?:string;description?:string}){
  return <Card className='rail'><h3>{title}</h3><p>{description}</p><Link to='/generate'><Button>Generate my campaign</Button></Link></Card>;
}
