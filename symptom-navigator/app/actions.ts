'use server'
import { redirect } from 'next/navigation';

export async function saveAlreadyVisited(formData: FormData) {
  const alreadyVisited = formData.get('alreadyVisitedDoctor');
  console.log('test:', alreadyVisited);
  redirect('/assessment');
}